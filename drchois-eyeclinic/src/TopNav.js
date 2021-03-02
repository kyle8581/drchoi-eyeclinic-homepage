import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import { ReactComponent as NavLogo } from './images/nav__logo.svg'
import './TopNav.css'
import {
    BlackBackGround,
    MenuContainer1,
    MenuContainer2,
    SideMenuContainer,
    InfoContainer,
} from './SideMenu.components'

function TopNav({ changefloatshow, swiper }) {
    const [isOpen, setOpen] = useState(false)
    function clickHamberger() {
        setOpen(!isOpen)
        console.log(isOpen)
        // changefloatshow()
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
                    <li>후기/이벤트</li>
                </ul>
                <div className="hamburger__icon">
                    <Hamburger
                        style={{ 'z-index': '40' }}
                        toggled={isOpen}
                        toggle={setOpen}
                        onToggle={clickHamberger}
                        color="#707070"
                    />
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
                                swiper.slideTo(1)
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
                                swiper.slideTo(2)
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
                                // swipergoto(3)
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
                        {/* <p>노안교정</p> */}
                    </div>
                    <div className="row">
                        <div className="center">시력교정센터</div>
                        <div className="divider"></div>
                        <Link
                            to={{
                                pathname: `/sight-correction`,
                                state: { initialPage: 'smile' },
                            }}
                        >
                            스마일
                        </Link>
                        {/* <p>라식</p> */}
                        <Link
                            to={{
                                pathname: `/sight-correction`,
                                state: { initialPage: 'lasek' },
                            }}
                        >
                            라섹
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
                <InfoContainer>
                    <div className="row">
                        서울특별시 강남구 논현로 848, 8층 압구정최안과
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
