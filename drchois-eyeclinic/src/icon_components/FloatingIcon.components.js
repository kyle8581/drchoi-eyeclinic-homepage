import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: fixed;
    background-color: transparent;
    z-index: 15;
    visibility: ${({ toshow }) => (toshow ? 'visible' : 'collapse')};
    @media screen and (min-width: 501px) {
        top: 9rem;
        left: 2rem;
        height: 500px;
        flex-direction: column;
        align-items: center;
        transition: 0.2s;

        ${({ toggled }) =>
            toggled
                ? '.kakao{transform:translateY(0px);}.youtube {transform: translateY(0);}.instagram {transform: translateY(0);} .blog{transform: translateY(0);}.facebook {transform: translateY(0);}'
                : '.kakao{transform:translateY(-120px);}.youtube {transform: translateY(-170px);}.instagram {transform: translateY(-220px);}.blog{transform: translateY(-270px);}.facebook {transform: translateY(-320px);}'}
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        right: 1rem;
        top: 5rem;
        ${({ toggled }) =>
            toggled
                ? '.kakao{transform:translateY(0px)translateX(13px);}.youtube {transform: translateY(0)translateX(13px);}.instagram {transform: translateY(0)translateX(13px);} .blog{transform: translateY(0)translateX(13px);}.facebook {transform: translateY(0)translateX(13px);}'
                : '.kakao{transform:translateY(-75px) translateX(13px);}.youtube {transform: translateY(-120px) translateX(13px);}.instagram {transform: translateY(-170px) translateX(13px);}.blog{transform: translateY(-220px) translateX(13px);}.facebook {transform: translateY(-270px) translateX(13px);}'}
    }
`
export const ChatBubble = styled.img`
    z-index: 21;
    @media screen and (min-width: 501px) {
        width: 60px;
        transform: translate(15px, -105px);
    }
    @media screen and (max-width: 500px) {
        width: 40px;
        transform: translate(15px, -75px);
    }
`
export const Dotconatiner = styled.div`
    position: absolute;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 23;
    .dot1 {
        animation: blink1 2s infinite;
    }
    .dot2 {
        animation: blink2 2s infinite;
    }
    .dot3 {
        animation: blink3 2s infinite;
    }
    @media screen and (min-width: 501px) {
        top: -12px;
        left: 30px;
        width: 50px;
    }
    @media screen and (max-width: 500px) {
        width: 30px;
        left: 20px;
        top: -6px;
    }

    @keyframes blink1 {
        0%,
        100% {
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
    @keyframes blink2 {
        0%,
        70%,
        100%,
        20% {
            opacity: 0;
        }

        45% {
            opacity: 1;
        }
    }
    @keyframes blink3 {
        0%,
        40%,
        85%,
        100% {
            opacity: 0;
        }

        65% {
            opacity: 1;
        }
    }
`
export const Dot = styled.div`
    background-color: white;
    z-index: 22;
    @media screen and (min-width: 501px) {
        width: 5px;
        height: 5px;
        border-radius: 5px;
    }
    @media screen and (max-width: 501px) {
        width: 3px;
        height: 3px;
        border-radius: 3px;
    }
`
export const DoctorCircle = styled.img`
    cursor: pointer;
    z-index: 20;
    @media screen and (min-width: 501px) {
        width: 80px;
    }
    @media screen and (max-width: 500px) {
        width: 60px;
    }
`

export const SmallCircle = styled.a`
    z-index: 18;
    @media screen and (min-width: 501px) {
        width: 35px;
        height: 35px;
        /* overflow: hidden; */
        margin-bottom: 15px;
        transition: 0.2s;
        ${({ toggled }) =>
            toggled
                ? 'visibility: visible; opacity:1; '
                : 'visibility: hidden; opacity:0;'}
    }
    @media screen and (max-width: 500px) {
        width: 35px;
        height: 35px;
        /* overflow: hidden; */
        margin-bottom: 15px;
        transition: 0.2s;
        ${({ toggled }) =>
            toggled
                ? 'visibility: visible; opacity:1; '
                : 'visibility: hidden; opacity:0;'}
    }
`

export const GrayCircle = styled.img`
    position: absolute;
    ${SmallCircle}:hover & {
        visibility: hidden;
    }
`
export const ColoredCircle = styled.img`
    position: absolute;
    visibility: hidden;
    ${SmallCircle}:hover & {
        visibility: visible;
    }
`
