import illustrationEmpty from "../../assets/illustration-empty.svg";
import Button from "../../components/Button/Button";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { ContainerBox2 } from "../Home.styles";
import { SignInComponent } from "./SignIn.styles";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    createUserDocumentFromAuth(user);
  };
  return (
    <ContainerBox2>
      <SignInComponent>
        <img src={illustrationEmpty} alt='' />
        <Button buttonType={"defaultBtn"} onClick={logGoogleUser}>
          Sign in with Google
        </Button>
        <SignUpForm />
      </SignInComponent>
    </ContainerBox2>
  );
};

export default SignIn;
