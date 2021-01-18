import React,{useState} from "react";
import * as GiIcons from "react-icons/gi";
// import {SidebarData} from "./SidebarData";
import {Nav, NavbarContainer,NavLogo, NavMenu, NavItem, NavLinks} from "./NavbarElements";
function SideNav(){
    const [sidebar, setSidebar]=useState(false)

    const showSidebar=()=>setSidebar(!sidebar)
    return(
        // <>
        // <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        //     <ul className="nav-menu-items">
        //         {SidebarData.map((index,item)=>{
        //             return(
        //                 <li key={index} className={item.cName}>
        //                      {/* 페이지 넘어가는 코드 들어갈 자리 */}
        //                      <GiIcons.GiPlainCircle/>
        //                      <span>{item.title}</span>
        //                 </li>
        //             )
        //         }  )}
        //     </ul>
        // </nav>
        // </>
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    hi
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="lasik">
                            Lasik
                            <GiIcons.GiPlainCircle/>
                            </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="lasek">
                            Lasik
                            <GiIcons.GiPlainCircle/>
                            </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="smile">
                            Lasik
                            <GiIcons.GiPlainCircle/>
                            </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default SideNav;