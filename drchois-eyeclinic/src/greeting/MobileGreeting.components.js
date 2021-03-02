import styled from 'styled-components/macro'
import { ReactComponent as LocationIcon } from '../svg-icons/location_icon.svg'

const NSBold = 'NanumSquare_acB'
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 60px;
`

export const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    font-family: ${NSBold};
    padding-left: 20px;
    justify-content: baseline;
    .phone_number {
        font-size: 1rem;
        color: #043677;
        margin-left: 5px;
        text-decoration: none;
    }
`
export const MobileLocationIcon = styled(LocationIcon)`
    width: 0.6rem;
    transform: translateY(-4px);
`

export const MobileGreetingVideo = styled.video``
export const LocationText = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${NSBold};
    text-align: left;
    transform: translateX(-0.5rem);
    p {
        color: #5b5b5b;
        font-size: 0.2rem;
        transform: scale(0.7);
        line-height: 0.6rem;
    }
`
export const MentRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 10vw;
    @media screen and (max-width: 350px) {
        margin-bottom: 3vw;
        margin-top: 1vw;
    }
`
export const FirstRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    font-family: NanumSquare_acEB;
    justify-content: center;
`
export const Blanck = styled.div`
    border-bottom: 1px solid #707070;
    width: 20vw;
`

export const Since = styled.div`
    color: #63c3c4;
    font-size: 4.5vw;
    margin-left: 5vw;
    margin-right: 5vw;
    @media screen and (max-width: 350px) {
        font-size: 3vw;
    }
`
export const FirstRowSub = styled.div`
    color: #707070;
    font-family: NanumSquare_acEB;
    font-size: 3.5vw;
    margin-top: 1vw;
    @media screen and (max-width: 350px) {
        font-size: 1.5vw;
        margin-top: 0.2vw;
    }
`
export const SecondRow = styled.div`
    color: #707070;
    font-family: NanumSquare_acR;
    font-size: 2vw;
    width: 70vw;
    margin-top: 2vw;
    text-align: center;
    margin-bottom: 8vw;
    @media screen and (max-width: 350px) {
        font-size: 0.1vw;
        margin-bottom: 3vw;
        margin-top: 0.5vw;
        margin-bottom: 1vw;
    }
`
