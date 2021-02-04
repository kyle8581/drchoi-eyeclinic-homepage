import React, { useState } from 'react'
import {
    Container,
    ChatBubble,
    DoctorCircle,
    SmallCircle,
    ColoredCircle,
    GrayCircle,
    Dotconatiner,
    Dot,
} from './FloatingIcon.components'

function FloatingIcon({ toshow }) {
    const [isIconToggled, toggleIcon] = useState(false)
    function Toggle() {
        toggleIcon(!isIconToggled)
    }
    return (
        <Container toggled={isIconToggled} toshow={toshow}>
            <DoctorCircle
                src="/floating-icon/doctor_circle.png"
                alt="circle"
                onClick={Toggle}
            />
            <Dotconatiner>
                <Dot className="dot1" />
                <Dot className="dot2" />
                <Dot className="dot3" />
            </Dotconatiner>
            <ChatBubble
                src="/floating-icon/speech_bubble.png"
                alt="chat bubble"
            />
            <SmallCircle
                className="kakao"
                toggled={isIconToggled}
                href="http://pf.kakao.com/_xaxbwWK"
            >
                <ColoredCircle
                    src="/floating-icon/kakao_colored.png"
                    alt="kakao icon"
                />
                <GrayCircle
                    src="/floating-icon/kakao_gray.png"
                    alt="kakao icon"
                />
            </SmallCircle>
            <SmallCircle
                className="youtube"
                toggled={isIconToggled}
                href="https://www.youtube.com/channel/UCfhlcQAfLiY_uhpigIIRfFA"
            >
                <ColoredCircle
                    src="/floating-icon/youtube_colored.png"
                    alt="youtube icon"
                />
                <GrayCircle
                    className="gray_circle"
                    src="/floating-icon/youtube_gray.png"
                    alt="youtube icon"
                />
            </SmallCircle>
            <SmallCircle
                className="instagram"
                toggled={isIconToggled}
                href="https://www.instagram.com/dr.choi_eyeclinic/"
            >
                <ColoredCircle
                    src="/floating-icon/instagram_colored.png"
                    alt="instagram icon"
                />
                <GrayCircle
                    className="gray_circle"
                    src="/floating-icon/instagram_gray.png"
                    alt="instagram icon"
                />
            </SmallCircle>
            <SmallCircle
                className="blog"
                toggled={isIconToggled}
                href="https://blog.naver.com/polarbearsaver"
            >
                <ColoredCircle
                    src="/floating-icon/blog_colored.png"
                    alt="blog icon"
                />
                <GrayCircle
                    className="gray_circle"
                    src="/floating-icon/blog_gray.png"
                    alt="blog icon"
                />
            </SmallCircle>
            <SmallCircle
                className="facebook"
                toggled={isIconToggled}
                href="https://www.facebook.com/eyelovedrchoi/"
            >
                <ColoredCircle
                    src="/floating-icon/facebook_colored.png"
                    alt="facebook icon"
                />
                <GrayCircle
                    className="gray_circle"
                    src="/floating-icon/facebook_gray.png"
                    alt="facebook icon"
                />
            </SmallCircle>
        </Container>
    )
}
export default FloatingIcon
