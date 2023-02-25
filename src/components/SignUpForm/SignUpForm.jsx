import { async } from "@firebase/util";
import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { createAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignUpForm.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const { setCurrentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return alert("Password and confirm password are not match!");

    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email is already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label=' Display Name'
          type='text'
          name='displayName'
          id='name'
          required
          onChange={handleChange}
          value={displayName}
        />

        <FormInput label='Email' type='email' name='email' id='email' required onChange={handleChange} value={email} />

        <FormInput
          label='Password'
          type='password'
          name='password'
          id='password'
          required
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          required
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button buttonType={"defaultBtn"}>Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
