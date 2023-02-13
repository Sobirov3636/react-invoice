import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import { createAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return alert("Password and confirm password are not match!");

    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email is already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Display Name</label>
        <input type='text' name='displayName' id='name' required onChange={handleChange} />

        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' required onChange={handleChange} />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' required onChange={handleChange} />

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input type='password' name='confirmPassword' id='confirmPassword' required onChange={handleChange} />
        <Button buttonType={"editCancelBtn"}>Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
