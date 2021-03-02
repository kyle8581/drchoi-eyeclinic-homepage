import React from 'react'
import {
    Wrapper,
    Container,
    MobileGreetingVideo,
    MentRow,
    FirstRow,
    Blanck,
    Since,
    FirstRowSub,
    SecondRow,
    MobileLocationIcon,
    InfoRow,
    LocationText,
} from './MobileGreeting.components'
import MobileGreetingVideoFile from '../videos/mobile_greeting_video.mp4'
import MobileDepartment from './MobileDepartment'
function MobileGreeting() {
    return (
        <Wrapper>
            <Container>
                <InfoRow>
                    <a href="https://m.place.naver.com/hospital/1874745458/location?entry=ple&subtab=location">
                        <MobileLocationIcon />
                    </a>
                    <a className="phone_number" href="tel:0269568711">
                        02 6956 8711
                    </a>
                    <LocationText>
                        <p>서울시 강남구 논현로 848</p>
                        <p>압구정역 3번 출구 CGV 8층 압구정최안과</p>
                    </LocationText>
                </InfoRow>
                <MobileGreetingVideo autoPlay muted>
                    <source src={MobileGreetingVideoFile} type="video/mp4" />
                </MobileGreetingVideo>
                <MentRow>
                    <FirstRow>
                        <Blanck />
                        <Since>"SINCE 1999"</Since>
                        <Blanck />
                    </FirstRow>
                    <FirstRowSub>타협없는 안전지향</FirstRowSub>
                    <SecondRow>
                        최신의료시스템을 갖추고 있는 본원에서는 정밀진단 후 꼭
                        필요한 치료, 최적화된 수술만을 권해드리며 의료진과
                        충분한 상담 후 투명한 진료, 안전한 수술, 숙련된 스텝들의
                        사후관리를 원칙으로 하고 있습니다.
                    </SecondRow>
                </MentRow>
                <MobileDepartment />
            </Container>
        </Wrapper>
    )
}

export default MobileGreeting
