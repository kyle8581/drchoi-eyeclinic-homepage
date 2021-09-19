import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo,
    Fragment,
} from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link, useHistory } from 'react-router-dom'
import { ReactComponent as NavLogo } from './images/nav__logo.svg'
import './TopNav.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import styled from 'styled-components/macro'
import { Menu, Dropdown, Button } from 'semantic-ui-react'
import LanguageIcon from '@material-ui/icons/Language'
import 'semantic-ui-css/semantic.min.css'
import classnames from 'classnames'
import {
    BlackBackGround,
    MenuContainer1,
    MenuContainer2,
    MenuContainer3,
    SideMenuContainer,
    InfoContainer,
    NavBar,
} from './SideMenu.components'
import {
    LanguageSelectContainer,
    Country,
} from './translation/Language.components'
import { UserContext } from './UserContext'
import { SlideContext } from './SlideContext'
import { SightCorrectionSlideContext } from './SightCorrectionSlideContext'
import { NoanSlideContext } from './NoanSlideContext'
import translate from './translation/translations'
import LoginButton from './login/LoginButton'
import LanguageSelect from './translation/LanguageSelect'
import useWindowDimensions from './useWindowDimensions'
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
    font-family: NanumSquare_acR !important;

    .navbar_component {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .navbar_component:hover {
        box-shadow: none !important;
        border: none !important;
    }
    .navbar_component::before {
        display: none;
    }
    .dropdown::before {
        display: none;
    }
    .dropdown.icon {
        display: none;
    }
`
const LoginRow = styled.div`
    width: 300px;
    position: absolute;
    bottom: 170px;
    left: 70px;
    display: flex;
    flex-direction: row;
    .language_button {
        margin-left: auto;
    }
    @media screen and (max-height: 710px) {
        bottom: 50px;
    }
    @media screen and (max-width: 450px) {
        width: 250px;
        left: 50px;
    }
    @media screen and (max-width: 320px) {
        width: 230px;
    }
`
const LanguageButton = styled(Button)`
    height: 40px;
    width: 110px;
    display: flex !important;
    flex-direction: row;
    border-radius: 2rem !important;
    background-color: #575656 !important;
    color: #fff !important;
    justify-content: center;
    align-items: center;
    div {
        margin-left: 0.25rem;
    }
    @media screen and (max-height: 710px) {
        transform: scale(0.8);
    }
`
function TopNav({ changefloatshow, swiper, language, removeBlur }) {
    // useWindowDimension : width, height state저장
    const { width, height } = useWindowDimensions()
    const [isOpen, setOpen] = useState(false)
    const pathname = window.location.pathname
    const { pageState, setPageState } = useContext(SightCorrectionSlideContext)
    const { NoanPageState, setNoanPageState } = useContext(NoanSlideContext)
    const { curSlide, setCurslide } = useContext(SlideContext)
    const {userInfo, setUserInfo} = useContext(UserContext)
    const [languageModalOpen, setLanguageModalOpen] = useState(false)
    const [visible, setVisible] = useState(true)
    // 이벤트/후기 dropdown list menu를 위한 state
    // showList : true => 드롭다운 메뉴 display
    // showList : false => 드롭다운 메뉴 hide
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset)
 
    function clickHamberger() {
        setOpen(!isOpen)
    }
    const history = useHistory()

    useEffect(() => {
        function handleScroll() {
            const currentScrollpos = window.pageYOffset
            const visibility = prevScrollpos > currentScrollpos || currentScrollpos < 100
            setPrevScrollpos(currentScrollpos)
            setVisible(visibility)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <NavBar
            className={classnames('navbar', { 'navbar--hidden': !visible })}
            removeBlur={removeBlur}
        >
            <div className="navbar__logo">
                <Link to="/">
                    <NavLogo className="logo__svg" />
                </Link>
            </div>

            {/* </div> */}
            {width > 780 ? (
                <NavMenu>
                    <NavMenu.Item className="navbar_component">
                        <Dropdown
                            simple
                            item
                            text="최승일대표원장"
                            onClick={() => {
                                if (pathname === '/') setCurslide(1)
                                else {
                                    setCurslide(0)
                                    history.push('/')
                                }
                            }}
                        >
                            <Dropdown.Menu />
                        </Dropdown>
                    </NavMenu.Item>
                    <NavMenu.Item className="navbar_component">
                        <Dropdown simple item text="시력교정술">
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() => {
                                        setPageState('lasik')
                                        history.push({
                                            pathname: '/sight-correction',
                                            state: { pageState: pageState },
                                        })
                                    }}
                                >
                                    라식
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        setPageState('lasek')
                                        history.push({
                                            pathname: '/sight-correction',
                                            state: { pageState: pageState },
                                        })
                                    }}
                                >
                                    라섹
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        history.push({
                                            pathname: '/icl',
                                        })
                                    }}
                                >
                                    ICL
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </NavMenu.Item>
                    <NavMenu.Item className="navbar_component">
                        <Dropdown simple item text="노안수술">
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() => {
                                        setNoanPageState('cataract')
                                        history.push({
                                            pathname: '/cataract',
                                            state: { pageState: pageState },
                                        })
                                    }}
                                >
                                    백내장
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        setNoanPageState('presbyopia')
                                        history.push({
                                            pathname: '/cataract',
                                            state: { pageState: pageState },
                                        })
                                    }}
                                >
                                    노안수술
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </NavMenu.Item>

                    <NavMenu.Item className="navbar_component">
                        <Dropdown
                            simple
                            item
                            text="정밀검사과정"
                            onClick={() => {
                                history.push('/test-process')
                            }}
                        >
                            <Dropdown.Menu />
                        </Dropdown>
                    </NavMenu.Item>
                    <NavMenu.Item className="navbar_component">
                        <Dropdown simple item text="후기/이벤트">
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    className="dropdown_item"
                                    onClick={() => {
                                        history.push('/review/presbyopia')
                                    }}
                                >
                                    {'백내장 수술후기'}
                                </Dropdown.Item>
                                <Dropdown.Item
                                    className="dropdown_item"
                                    onClick={() => {
                                        history.push('/review/sight-correction')
                                    }}
                                >
                                    {'시력교정 수술후기'}
                                </Dropdown.Item>
                                <Dropdown.Item
                                    className="dropdown_item"
                                    onClick={() => {
                                        history.push('/event-list')
                                    }}
                                >
                                    {'진행중인 이벤트'}
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </NavMenu.Item>
                </NavMenu>
            ) : (
                <Fragment />
            )}

            <div className="hamburger__icon">
                <Hamburger
                    style={{ 'z-index': '40' }}
                    toggled={isOpen}
                    toggle={setOpen}
                    onToggle={clickHamberger}
                    color="#707070"
                />
            </div>
            {isOpen ? (
                <BlackBackGround
                    clicked={isOpen}
                    onClick={() => {
                        clickHamberger()
                    }}
                />
            ) : (
                <Fragment />
            )}

            <SideMenuContainer clicked={isOpen}>
                <MenuContainer1
                    style={
                        height < 790
                            ? {
                                  transform: 'scale(0.8)',
                                  transformOrigin: 'top left',
                              }
                            : {}
                    }
                >
                    <h1>압구정최안과 소개</h1>
                    <div>
                        <p
                            onClick={() => {
                                clickHamberger()
                                setCurslide(0)
                                if (pathname != '/') history.push('/')
                            }}
                        >
                            Dr.Choi의 신념과 철학
                        </p>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/channel/UCXIsvIjcR8uICOeUnpY4Hcg">
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
                                setCurslide(1)
                                if (pathname != '/') history.push('/')
                            }}
                        >
                            압구정최안과 둘러보기
                        </p>
                    </div>
                    <div>
                        <p
                            onClick={() => {
                                clickHamberger()
                                setCurslide(3)
                                if (pathname != '/') history.push('/')
                            }}
                        >
                            오시는 길
                        </p>
                    </div>
                    <div>
                        <p
                            onClick={() => {
                                clickHamberger()
                                setCurslide(4)
                                if (pathname != '/') history.push('/')
                            }}
                        >
                            진료시간
                        </p>
                    </div>
                </MenuContainer1>
                <MenuContainer2
                    style={
                        height < 790
                            ? {
                                  transform: 'scale(0.8) translateY(-40px)',
                                  transformOrigin: 'top left',
                              }
                            : {}
                    }
                >
                    <h1>진료과목</h1>
                    <div className="row">
                        <div className="center">백내장센터</div>
                        <div className="divider"></div>
                        <Link
                            onClick={() => {
                                clickHamberger()
                                setNoanPageState('cataract')
                                history.push({
                                    pathname: '/cataract',
                                    state: { pageState: pageState },
                                })
                            }}
                            to="/cataract"
                        >
                            백내장
                        </Link>
                        <Link
                            onClick={() => {
                                clickHamberger()
                                setNoanPageState('presbyopia')
                                history.push({
                                    pathname: '/cataract',
                                    state: { pageState: pageState },
                                })
                            }}
                            to="/cataract"
                        >
                            노안
                        </Link>
                    </div>
                    <div className="row">
                        <div className="center">시력교정센터</div>
                        <div className="divider"></div>
                        <Link
                            onClick={() => {
                                clickHamberger()
                                setPageState('lasik')
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
                            }}
                            to="/sight-correction"
                        >
                            라섹
                        </Link>

                        <Link to="/icl">ICL</Link>
                    </div>
                    <div className="row">
                        <div className="center">렌즈센터</div>
                        <div className="divider"></div>
                        <Link to="/dream-lens">드림렌즈</Link>
                        <Link to="/rgp">RGP렌즈</Link>
                    </div>
                </MenuContainer2>
                <MenuContainer3
                    style={
                        height < 790
                            ? {
                                  transform: 'scale(0.8) translateY(-70px)',
                                  transformOrigin: 'top left',
                              }
                            : {}
                    }
                >
                    <h1>{'이벤트/후기'}</h1>
                    <div className="row">
                        <div className="center">수술후기</div>
                        <div className="divider"></div>
                        <Link
                            onClick={() => {
                                clickHamberger()
                            }}
                            to="/review/presbyopia"
                        >
                            백내장
                        </Link>
                        <Link
                            onClick={() => {
                                clickHamberger()
                            }}
                            to="/review/sight-correction"
                        >
                            시력교정
                        </Link>
                    </div>
                    <div className="row">
                        <Link className="center" to="/event-list">
                            {'진행중인 이벤트'}
                        </Link>
                    </div>
                </MenuContainer3>
                <LoginRow>
                    <LoginButton />
                    <LanguageButton
                        className="language_button"
                        onClick={() => {
                            setLanguageModalOpen(true)
                        }}
                    >
                        <LanguageIcon />

                        <div>
                            {language === undefined ? 'Korean' : language}
                        </div>
                    </LanguageButton>
                </LoginRow>
                <LanguageSelect
                    open={languageModalOpen}
                    setOpen={setLanguageModalOpen}
                />

                {/* <div>{JSON.stringify(userInfo)}</div> */}
                {/* <div>{userInfo.authority}</div> */}
                {height > 710 ? (
                    <InfoContainer>
                        <div className="row">
                            서울특별시 강남구 논현로 848, 8층 압구정최안과의원
                        </div>
                        <div className="row">
                            8F, 848, Nonhyeon-ro, Gangnam-gu, Seoul
                        </div>
                        <div className="phone">02 6956 8711</div>
                    </InfoContainer>
                ) : (
                    <Fragment />
                )}
            </SideMenuContainer>
            {/* </div> */}
        </NavBar>
    )
}
export default TopNav
