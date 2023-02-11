import React from "react";
import Button from "../../components/Button/Button";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <Button buttonType={"defaultBtn"} onClick={logGoogleUser}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignIn;
