import React from 'react'
import {
    Wrapper,
    GrayContainer,
    WhiteContainer,
    Point,
    Phone,
    InfoContainer,
    OpenClose,
    IconContainer,
    IconLink,
    BottomLetterContainer,
    DividedRow,
} from './FooterMobile.components'
function FooterMobile() {
    return (
        <Wrapper>
            <GrayContainer>
                <InfoContainer>
                    <Phone>
                        <div className="title">상담 및 문의</div>
                        <Point />
                        <div className="phone_num">02 6956 8711</div>
                    </Phone>
                    <OpenClose>
                        <div className="title">진료시간</div>
                        <Point />
                        <p className="weekdays">
                            <div className="day spacing">평 일</div>
                            <div className="weekdays_column">
                                <div className="time">오전 10시 ~ 오후 6시</div>
                                <div className="time">
                                    (점심시간 오후1시 ~ 2시)
                                </div>
                            </div>
                        </p>
                        <p>
                            <div className="day">금요일</div>
                            <div className="time">야간진료 오후 8시까지</div>
                        </p>
                        <p>
                            <div className="day">토요일</div>
                            <div className="time">오전 10시 ~ 오후 4시</div>
                        </p>
                        <p>
                            <div className="day spacing">휴 무</div>
                            <div className="time">수요일, 법정공휴일</div>
                        </p>
                    </OpenClose>
                </InfoContainer>
            </GrayContainer>
            <WhiteContainer>
                <IconContainer>
                    <IconLink href="https://blog.naver.com/polarbearsaver">
                        <img src="/footer-icon/blog_icon.png" alt="icon" />
                    </IconLink>
                    <IconLink href="https://www.youtube.com/channel/UCfhlcQAfLiY_uhpigIIRfFA">
                        <img src="/footer-icon/yt_icon.png" alt="icon" />
                    </IconLink>
                    <IconLink href="https://www.instagram.com/dr.choi_eyeclinic/">
                        <img src="/footer-icon/instagram_icon.png" alt="icon" />
                    </IconLink>
                    <IconLink href="https://www.facebook.com/eyelovedrchoi/">
                        <img src="/footer-icon/facebook_icon.png" alt="icon" />
                    </IconLink>

                    <IconLink href="http://pf.kakao.com/_xaxbwWK">
                        <img src="/footer-icon/kakao_icon.png" alt="icon" />
                    </IconLink>
                </IconContainer>
                <BottomLetterContainer>
                    <DividedRow>
                        <div>개인정보 취급방침</div>
                        <div className="divider"></div>
                        <div>이용약관</div>
                        <div className="divider"></div>
                        <div>비급여항목</div>
                    </DividedRow>
                    <div>압구정최안과 서울특별시 강남구 논현로 848 8층</div>
                    <div>대표자: 최승일</div>
                    <div>대표전화: 02 6956 8711</div>
                    <div>사업자등록번호: 446-91-01523</div>
                    <div>
                        COPYRIGHT ⓒ 2021 DR.CHOI EYE CLINIC, ALL RIGHTS
                        RESERVED.
                    </div>
                    <div>Developed by. CHAE HYUNG JOO & CHOI YEON WOO</div>
                </BottomLetterContainer>
            </WhiteContainer>
        </Wrapper>
    )
}

export default FooterMobile
