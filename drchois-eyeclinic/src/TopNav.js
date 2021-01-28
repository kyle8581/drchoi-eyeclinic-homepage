import React, {useState} from 'react';
import {Squash as Hamburger } from 'hamburger-react';
import {Link} from 'react-router-dom'
import {ReactComponent as NavLogo} from './images/nav__logo.svg'
import './TopNav.css';
import {BlackBackGround, SideMenuContainer} from './SideMenu.components';


function TopNav(){
    const [isOpen, setOpen] = useState(false);
    function clickHamberger(){
        setOpen(!isOpen);
        console.log(isOpen);
    }
    return(
        <div className="nav__container">
            <div className="navbar__logo">
                <Link to="/">
                    <NavLogo className="logo__svg"/>
                </Link>
                
                
            </div>
       
                <ul className="navbar__pagelink">
                    <li>
                        <Link to="/dr-choi">최승일 대표원장</Link>
                    </li>
                    <li>
                        <Link to="/sight-correction">시력교정술</Link>


                    </li>
                    <li>
                        노안수술
                    </li>
                    <li>후기/이벤트</li>
                </ul>
            <div className="hamburger__icon">
                <Hamburger toggled={isOpen} toggle={setOpen}  onToggle={clickHamberger} color="#707070" />
                    
            </div>
            {/* {(isOpen)=>(isOpen?(
                        <div>
                        <BlackBackGround cliked={isOpen}/>
                        <SideMenuContainer cliked={isOpen}>
                            <div><Link>Dr.choi의 신념과 철학</Link></div>
                            <div><Link>시력교정술</Link></div>
                            <div><Link>노안수술</Link></div>
                        </SideMenuContainer>
                        </div>
                    ):
                    (null)
                    )} */}
            {/* {isOpen &&   <div>
                        <BlackBackGround cliked={!isOpen}/>
                        <SideMenuContainer cliked={isOpen}>
                            <div><Link>Dr.choi의 신념과 철학</Link></div>
                            <div><Link>시력교정술</Link></div>
                            <div><Link>노안수술</Link></div>
                        </SideMenuContainer>
                        </div>} */}
                        <BlackBackGround clicked={isOpen}/>
                        <SideMenuContainer clicked={isOpen}>
                            <div><Link>Dr.choi의 신념과 철학</Link></div>
                            <div><Link>시력교정술</Link></div>
                            <div><Link>노안수술</Link></div>
                        </SideMenuContainer>
            
        </div>
    );
}
export default TopNav;