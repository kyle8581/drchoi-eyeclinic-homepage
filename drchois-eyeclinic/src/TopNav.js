import React, {useState} from 'react';
import {Squash as Hamburger } from 'hamburger-react';
import {Link} from 'react-router-dom'
import {ReactComponent as NavLogo} from './images/nav__logo.svg'
import './TopNav.css';


function TopNav(){
    const [isOpen, setOpen] = useState(false);
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
            <div className="hamburger__icon"><Hamburger toggled={isOpen} toggle={setOpen} color="#707070" /></div>
            
        </div>
    );
}
export default TopNav;