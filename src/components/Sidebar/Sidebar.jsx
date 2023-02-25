import logo from "../../assets/logo.svg";
import moon from "../../assets/icon-moon.svg";
import avatar from "../../assets/image-avatar.jpg";
import { Link, Outlet } from "react-router-dom";
import CreateInvoice from "../CreateInvoice/CreateInvoice";
import { useContext } from "react";
import { FormContext } from "../../context/formContext";
import {
  AvatarIcon,
  Container,
  ContainerBox1,
  HrLine,
  LogoIcon,
  MoonIcon,
  SidebarCoponent,
  SidebarIcons,
  SidebarLogo,
  LinkSignIn,
  SignOutSpan,
} from "./Sidebar.styles";
import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Sidebar = () => {
  const { isFormOpen } = useContext(FormContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Container>
      <ContainerBox1>
        <SidebarCoponent>
          <SidebarLogo>
            <LogoIcon src={logo} alt='' />
          </SidebarLogo>

          <SidebarIcons>
            <MoonIcon src={moon} alt='' />
            <HrLine />

            {currentUser ? (
              <SignOutSpan onClick={signOutHandler}>Sign Out</SignOutSpan>
            ) : (
              <LinkSignIn to='/auth'>Sign In</LinkSignIn>
            )}
          </SidebarIcons>
        </SidebarCoponent>
        {isFormOpen && <CreateInvoice />}
      </ContainerBox1>
      <Outlet />
    </Container>
  );
};

export default Sidebar;
