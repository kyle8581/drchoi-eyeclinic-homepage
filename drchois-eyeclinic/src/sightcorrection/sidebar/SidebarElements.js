import styled from "styled-components";
import { Link } from "react-scroll";

export const SidebarContainer = styled.aside`
  height: 200px;
  font-size: 1rem;
  position: fixed;
  top: 40%;
  right: 10px;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavWrapper = styled.div`
  cursor: pointer;
  outline: none;
  color: #747373;
  height: 50px;
`;
export const NavIcon = styled(Link)`
  width: 15px;
  hight: 15px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #63c3c4;
  }
`;
export const NavLinks = styled.div`
// position: absolute;
// top: 40;
// right: 1rem;
// background-color: yellow;
list-style:none;
display:flex;
flex-direction:row-reverse;
align-items:center;
text-decoration:none;
padding 0 1rem;
height: 100%;
cursor: pointer;
z-index:500;
`;
