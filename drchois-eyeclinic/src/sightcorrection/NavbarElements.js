import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
export const Nav=styled.nav`
    background: #000;
    height: 80px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position:sticky;
    top:0;
    z-index:10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer=styled.div`
display:flex;
justify-content: space-between;
height:80px;
z-index: 1;
width:100%;
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    fonts-size: 1.5rem;
    disply:flex;
    align-items: center;
    margin-left:24px;
    text-decoration:none;
`;

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;

@media screeen and (max-width: 768px){
    display:none;
}
`
export const NavItem = styled.li`
height:80px;
`
export const NavLinks = styled(LinkS)`
color: #fff;
display:flex;
align-items:center;
text-decoration:none;
padding 0 1rem;
height: 100%;
cursor: pointer;

&.active{
    // border-bottom: 3px solid #01bf71;
    //커서를 위에 뒀을 때 강조
}
`