import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContainerBox1 = styled.div`
  display: flex;
`;

export const SidebarCoponent = styled.div`
  // height: 100vh;
  display: flex;
  // flex: 0 0 12%;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #373b53;
`;

export const SidebarLogo = styled.div`
  background: linear-gradient(to bottom, #7c5dfa 50%, #9277ff 50%);
  height: 15%;
  width: 100%;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
`;

export const LogoIcon = styled.img`
  height: 3.8rem;
  width: 4rem;
  margin: 5rem 3rem 4rem 3rem;
`;

export const SidebarIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MoonIcon = styled.img`
  height: 2rem;
  width: 2rem;
  margin: 3rem;
`;

export const LinkSignIn = styled(Link)`
  font-family: inherit;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  margin: 3rem;
`;

export const HrLine = styled.hr`
  width: 10rem;
  height: 1px;
  border: none;
  background-color: #979797;
`;
