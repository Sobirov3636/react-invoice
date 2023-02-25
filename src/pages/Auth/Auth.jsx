import illustrationEmpty from "../../assets/illustration-empty.svg";

import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

import { ContainerBox2 } from "../Home.styles";
import { SignInComponent } from "./Auth.styles";

const Auth = () => {
  return (
    <ContainerBox2>
      <SignInComponent>
        <SignInForm />
        {/* <img src={illustrationEmpty} alt='' /> */}

        <SignUpForm />
      </SignInComponent>
    </ContainerBox2>
  );
};

export default Auth;
