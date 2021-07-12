import React, { useState, useContext, useEffect } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link, useHistory } from 'react-router-dom'
import { ReactComponent as NavLogo } from './images/nav__logo.svg'
import './TopNav.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import {
    BlackBackGround,
    MenuContainer1,
    MenuContainer2,
    SideMenuContainer,
    InfoContainer,
} from './SideMenu.components'
import { LanguageSelectContainer, Country } from './Language.components'
import { UserContext } from './UserContext'
import { SlideContext } from './SlideContext'
import { SightCorrectionSlideContext } from './SightCorrectionSlideContext'
import translate from './translations'
// import { LoginButton } from './firebase'
function TopNav({ changefloatshow, swiper }) {
    const [isOpen, setOpen] = useState(false)
    const pathname = window.location.pathname
    const { pageState, setPageState } = useContext(SightCorrectionSlideContext)
    const { curSlide, setCurslide } = useContext(SlideContext)
    const [needFetch, setNeedFetch] = useState(false)
    const [needCheck, setNeedCheck] = useState(false)
    const Rus = translate[2]
    const Chi = translate[1]
    const Eng = translate[0]
    function clickHamberger() {
        setOpen(!isOpen)
        // console.log(isOpen)
        // changefloatshow()
    }

    const { userInfo, setUserInfo } = useContext(UserContext)
    // console.log(userInfo)
    const [userList, setUserList] = useState([])
    const history = useHistory()
    const ref = firebase.firestore().collection('userinfo')

    const checkUserRegistered = () => {
        // console.log('check user ', JSON.stringify(userInfo))
        // console.log("user list : "+userList)
        if (userInfo.login) {
            let found = false
            userList.forEach((u) => {
                // console.log('email : ' + u.email)
                if (u.email === userInfo.email) {
                    // console.log('matched')
                    setUserInfo({
                        login: true,
                        email: u.email,
                        phone_number: u.phone_number,
                        authority: u.authority,
                    })
                    found = true
                }
            })
            // console.log('updated user info')
            // console.log(userInfo)
            if (!found && localStorage.getItem('signup') == undefined) {
                // console.log('redirect to 회원가입')
                history.push('/signup')
            }
        }
    }
    const getUserList = () => {
        ref.onSnapshot((querySnapshot) => {
            const userlist = []
            querySnapshot.forEach((d) => {
                userlist.push(d.data())
                // console.log('user it : ', d.data())
            })
            setUserList(userlist)
        })
    }
    const Login = (setUserInfo) => {
        var provider = new firebase.auth.GoogleAuthProvider()
        console.log(setUserInfo)
        console.log(ref)
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                // console.log(result.user)
                // console.log()
                setUserInfo({
                    login: true,
                    email: result.user.email,
                    phone_number: 'default',
                    authority: 'default',
                })
            })

        setNeedFetch(true)
    }
    useEffect(() => {
        if (needFetch) {
            console.log(userList)

            getUserList()
            setNeedFetch(false)
            setNeedCheck(true)
        }
    }, [needFetch])
    useEffect(() => {
        if (needCheck && userList.length !== 0 && userInfo.login) {
            console.log('------')
            console.log(userList)
            checkUserRegistered()
            setNeedCheck(false)
        }
    }, [needCheck, userList, userInfo])
    const Logout = () => {
        firebase.auth().signOut()
        const tmp_usr = { ...userInfo, login: false }
        setUserInfo(tmp_usr)
    }
    const LoginButton = (isLogined) => {
        const { userInfo, setUserInfo } = useContext(UserContext)
        return (
            <FirebaseAuthConsumer>
                {(authState) => {
                    if (userInfo.login) {
                        console.log(authState)
                        return (
                            <button
                                onClick={() => {
                                    Logout(setUserInfo)
                                }}
                            >
                                logout
                            </button>
                        )
                    } else {
                        console.log(authState)

                        return (
                            <button
                                onClick={() => {
                                    Login(setUserInfo)
                                }}
                            >
                                login
                            </button>
                        )
                    }
                }}
            </FirebaseAuthConsumer>
        )
    }

    return (
        <div className="nav_side_wrapper">
            <div
                className={'nav__container ' + isOpen}
                style={{
                    overflow: (isOpen) => (isOpen ? 'visible' : 'hidden'),
                }}
            >
                <div className="navbar__logo">
                    <Link to="/">
                        <NavLogo className="logo__svg" />
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
                        <Link to="/cataract">노안수술</Link>
                    </li>
                    <li>
                        <Link to="/test-process">정밀검사과정</Link>
                    </li>
                    <li>
                        <Link to="/event-list">이벤트</Link>
                    </li>
                    <li>
                        <Link to="/sight-correction-review">후기</Link>
                    </li>
                </ul>
                <LanguageSelectContainer className="LanguageSelectContainer">
                    <Country to={{ pathname: '/' }} className="Kor">
                        <img src="https://pics.freeicons.io/uploads/icons/png/5481736961536065003-512.png" />
                    </Country>
                    <Country to={{ pathname: '/foreign', state: Eng }}>
                        <img src="https://pics.freeicons.io/uploads/icons/png/13394302041536065017-512.png" />
                    </Country>
                    <Country to={{ pathname: '/foreign', state: Rus }}>
                        <img src="https://pics.freeicons.io/uploads/icons/png/37161591536064993-512.png" />
                    </Country>
                    <Country to={{ pathname: '/foreign', state: Chi }}>
                        <img src="https://pics.freeicons.io/uploads/icons/png/14523702201536064854-512.png" />
                    </Country>
                </LanguageSelectContainer>
                {/*    <div>
                    {/* link 다른 언어 페이지 , state 로 pass   */}
                {/* {"title":"dfkdjfkdfj", "content1":"fkdfjdk"} */}
                {/*  <ReviewBlockWrapper  to={{ pathname: description_link, state: { e: e, next:next, prev:prev} }}> */}
                {/*<Link to={{pathname:'/'}} className="Kor">한국</Link>
                    <Link to={{pathname:'/foreign',state: Eng}}>미국</Link>
                    <Link to={{pathname:'/foreign',state: Rus}} className="Rus">러시아</Link>
                    <Link to={{pathname:'/foreign',state: Chi}} className="Chi">중국</Link>
                </div>*/}
                <div className="hamburger__icon">
                    <Hamburger
                        style={{ 'z-index': '40' }}
                        toggled={isOpen}
                        toggle={setOpen}
                        onToggle={clickHamberger}
                        color="#707070"
                    />
                </div>
            </div>
            <BlackBackGround
                clicked={isOpen}
                onClick={() => {
                    clickHamberger()
                }}
            />
            <SideMenuContainer clicked={isOpen}>
                <MenuContainer1>
                    <h1>압구정최안과 소개</h1>
                    <div>
                        <p
                            onClick={() => {
                                clickHamberger()
                                if (pathname === './') setCurslide(1)
                                else {
                                    setCurslide(1)
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
                <div>{JSON.stringify(userInfo)}</div>
                <InfoContainer>
                    <LoginButton />
                    <div className="row">
                        서울특별시 강남구 논현로 848, 8층 압구정최안과의원
                    </div>
                    <div className="row">
                        8F, 848, Nonhyeon-ro, Gangnam-gu, Seoul
                    </div>
                    <div className="phone">02 6956 8711</div>
                </InfoContainer>
            </SideMenuContainer>
        </div>
    )
}
export default TopNav
