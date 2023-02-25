import { async } from "@firebase/util";
import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignInForm.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const { setCurrentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);

  const navigate = useNavigate();

  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      setFormFields(defaultFormFields);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Cannot find user, pleace check your email and password");
      } else if (error.code === "auth/wrong-password") {
        alert("incorrect password for email");
      } else {
        console.log(error);
      }
    }
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          id='signInEmail'
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          id='signInPassword'
          required
          onChange={handleChange}
          value={password}
        />
        <div className='button-box'>
          <Button buttonType={"defaultBtn"}>Sign In</Button>
          <Button buttonType={"deleteBtn"} onClick={logGoogleUser}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
