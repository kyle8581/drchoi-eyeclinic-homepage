import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo,
} from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link, useHistory } from 'react-router-dom'
import { ReactComponent as NavLogo } from './images/nav__logo.svg'
import './TopNav.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import styled from 'styled-components/macro'
import { Menu, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {
    BlackBackGround,
    MenuContainer1,
    MenuContainer2,
    SideMenuContainer,
    InfoContainer,
    NavBar,
} from './SideMenu.components'
import { LanguageSelectContainer, Country } from './Language.components'
import { UserContext } from './UserContext'
import { SlideContext } from './SlideContext'
import { SightCorrectionSlideContext } from './SightCorrectionSlideContext'
import translate from './translations'
import LoginButton from './login/LoginButton'
import EventReviewDropdown from './menu/EventReviewDropdown'
import { Fragment } from 'react'
// import { LoginButton } from './firebase'
const LoginButtonStyled = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 40px;
    background-color: #63c3c4;
    border: none;
    color: #fff;
    font-family: NanumSquare_acR;
    font-size: 15px;
    position: absolute;
    bottom: 170px;
    left: 70px;
    cursor: pointer;
`
const NavMenu = styled(Menu)`
border: none !important;
background-color: transparent !important;
box-shadow: none !important;
    height: 58px;
    margin-top: 0 !important;
    margin-left: 20px !important;
    .navbar_component{
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .navbar_component:hover{
        box-shadow: none !important;
        border: none !important;
    }
    .navbar_component::before{
        display: none;
    }
    .dropdown::before{
        display: none;
    }
    .dropdown.icon{
        display: none;
    }
`
function TopNav({ changefloatshow, swiper }) {
    const [isOpen, setOpen] = useState(false)
    const pathname = window.location.pathname
    const { pageState, setPageState } = useContext(SightCorrectionSlideContext)
    const { curSlide, setCurslide } = useContext(SlideContext)
    const [needFetch, setNeedFetch] = useState(false)
    const [needCheck, setNeedCheck] = useState(false)
    // 이벤트/후기 dropdown list menu를 위한 state
    // showList : true => 드롭다운 메뉴 display
    // showList : false => 드롭다운 메뉴 hide
    const [showList, setShowList] = useState(false)

    const Rus = translate[2]
    const Chi = translate[1]
    const Eng = translate[0]
    function clickHamberger() {
        setOpen(!isOpen)
    }
    const { userInfo, setUserInfo } = useContext(UserContext)
    // console.log(userInfo)
    const [userList, setUserList] = useState([])
    const history = useHistory()

    console.log('top nav load')

    return (
        <NavBar>
            {/* <div
                className={'nav__container ' + isOpen}
                style={{
                    overflow: (isOpen) => (isOpen ? 'visible' : 'hidden'),
                }}
            > */}
            <div className="navbar__logo">
                <Link to="/">
                    <NavLogo className="logo__svg" />
                </Link>
            </div>

            {/* </div> */}
            <NavMenu>
                <NavMenu.Item className="navbar_component">
                    <Dropdown simple item text="최승일대표원장" onClick={()=>{alert("click")}}>
                        <Dropdown.Menu/>
                    </Dropdown>
                </NavMenu.Item>
                <NavMenu.Item className="navbar_component">
                    <Dropdown simple item text="시력교정술">
                        <Dropdown.Menu>
                            <Dropdown.Item >라식</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </NavMenu.Item>
                <NavMenu.Item className="navbar_component">
                <Dropdown simple item text="노안수술" onClick={()=>{alert("click")}}>
                        <Dropdown.Menu/>
                    </Dropdown>
                </NavMenu.Item>
                <NavMenu.Item className="navbar_component">
                <Dropdown simple item text="정밀검사과정"  onClick={()=>{history.push('/test-process')}} >
                        <Dropdown.Menu />
                    </Dropdown>
                </NavMenu.Item>
                <NavMenu.Item className="navbar_component">
                    <EventReviewDropdown
                        showList={showList}
                        setShowList={setShowList}
                    />
                </NavMenu.Item>
            </NavMenu>

            <div className="hamburger__icon">
                <Hamburger
                    style={{ 'z-index': '40' }}
                    toggled={isOpen}
                    toggle={setOpen}
                    onToggle={clickHamberger}
                    color="#707070"
                />
            </div>
            {isOpen?( <BlackBackGround
                clicked={isOpen}
                onClick={() => {
                    clickHamberger()
                }}
            />):(<Fragment/>)}
           
            <SideMenuContainer clicked={isOpen}>
                <MenuContainer1>
                    <h1>압구정최안과 소개</h1>
                    <div>
                        <p
                            onClick={() => {
                                clickHamberger()
                                if (pathname === './') setCurslide(1)
                                else {
                                    setCurslide(0)
                                    history.push('./')
                                }
                            }}
                        >
                            Dr.Choi의 신념과 철학
                        </p>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/channel/UCfhlcQAfLiY_uhpigIIRfFA">
                            닥터최의 eye튜브
                        </a>
                    </div>
                    <div>
                        <Link to="/test-process">검사과정 체험하기</Link>
                    </div>
                    <div>
                        <p
                            onClick={() => {
                                clickHamberger()
                                if (pathname === '/') {
                                    console.log('same page')
                                    swiper.slideTo(2)
                                } else {
                                    console.log('different page')
                                    history.push('./')
                                    localStorage.setItem('slide', 2)
                                }
                            }}
                        >
                            압구정최안과 둘러보기
                        </p>
                    </div>
                    <div>
                        <p
                            onClick={() => {
                                clickHamberger()
                                swiper.slideTo(5)
                            }}
                        >
                            오시는 길
                        </p>
                    </div>
                    <div>
                        <p
                            onClick={() => {
                                clickHamberger()
                                swiper.slideTo(6)
                            }}
                        >
                            진료시간
                        </p>
                    </div>
                </MenuContainer1>
                <MenuContainer2>
                    <h1>진료과목</h1>
                    <div className="row">
                        <div className="center">백내장센터</div>
                        <div className="divider"></div>
                        <Link to="./cataract">백내장</Link>
                    </div>
                    <div className="row">
                        <div className="center">시력교정센터</div>
                        <div className="divider"></div>
                        <Link
                            onClick={() => {
                                clickHamberger()
                                setPageState('lasik')
                                console.log(pageState)
                            }}
                            to={{
                                pathname: `/sight-correction`,
                                state: { pageState: pageState },
                            }}
                        >
                            라식
                        </Link>
                        <Link
                            onClick={() => {
                                clickHamberger()
                                setPageState('lasek')
                                console.log(pageState)
                            }}
                            to="/sight-correction"
                        >
                            라섹
                        </Link>
                        <Link
                            onClick={() => {
                                clickHamberger()
                                setPageState('smile')
                                console.log(pageState)
                            }}
                            to="/sight-correction"
                        >
                            스마일
                        </Link>

                        <Link to="./icl">ICL</Link>
                    </div>
                    <div className="row">
                        <div className="center">렌즈센터</div>
                        <div className="divider"></div>
                        <Link to="/dream-lens">드림렌즈</Link>
                        <p>RGP렌즈</p>
                    </div>
                </MenuContainer2>
                <LoginButton />

                <div>{JSON.stringify(userInfo)}</div>
                <div>{userInfo.authority}</div>
                <InfoContainer>
                    <div className="row">
                        서울특별시 강남구 논현로 848, 8층 압구정최안과의원
                    </div>
                    <div className="row">
                        8F, 848, Nonhyeon-ro, Gangnam-gu, Seoul
                    </div>
                    <div className="phone">02 6956 8711</div>
                </InfoContainer>
            </SideMenuContainer>
        </NavBar>
    )
}
export default TopNav
