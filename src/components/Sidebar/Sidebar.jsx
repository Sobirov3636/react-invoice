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
} from "./Sidebar.styles";

const Sidebar = () => {
  const { isFormOpen } = useContext(FormContext);
  console.log({ isFormOpen });
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

            {/* <AvatarIcon src={avatar} alt='' /> */}
            <LinkSignIn to='/sign-in'>Sign in</LinkSignIn>
          </SidebarIcons>
        </SidebarCoponent>
        {isFormOpen && <CreateInvoice />}
      </ContainerBox1>
      <Outlet />
    </Container>
  );
};

export default Sidebar;
