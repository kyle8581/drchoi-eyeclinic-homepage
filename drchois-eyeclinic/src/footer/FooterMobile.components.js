import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`

export const GrayContainer = styled.div`
    width: 100vw;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    @media screen and (min-width: 501px) {
        height: 35vh;
    }

    @media screen and (max-width: 500px) {
        height: 38vh;
        top: 0;
        /* min-height: 350px; */
    }
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    .title {
        color: #34988a;
        font-size: 1rem;
        font-family: NanumSquare_acB;
    }
    @media screen and (max-height: 700px) {
        transform: scale(0.9, 0.9) translateY(-1rem);
    }
    @media screen and (max-height: 630px) {
        transform: scale(0.8, 0.8) translateY(-2rem);
    }
    @media screen and (max-height: 570px) {
        transform: scale(0.8, 0.8) translateY(-30px);
    }
    @media screen and (max-height: 530px) {
        transform: scale(0.75, 0.75) translateY(-40px);
    }
`
export const Point = styled.div`
    width: 7px;
    height: 1px;
    background-color: #34988a;
    margin: 0.8rem 0;
`
export const Phone = styled.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    .phone_num {
        font-family: NanumSquare_acEB;
        font-size: 1.1rem;
        color: #707070;
    }
`
export const OpenClose = styled.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    .day {
        font-family: NanumSquare_acB;
        font-size: 0.8rem;
        color: #707070;
        letter-spacing: 0.2rem;
        width: 70px;
        text-align: justify;
    }
    .day.spacing {
        letter-spacing: 0.45rem;
    }
    .launch {
        font-family: NanumSquare_acB;
        color: #707070;
        width: 70px;
        font-size: 0.8rem;
    }
    .time {
        font-family: NanumSquare_acR;
        font-size: 0.8rem;
        color: #707070;
    }
    p {
        display: flex;
        height: 1.3rem;
        flex-direction: row;
    }
    .weekdays {
        height: 2.5rem;
    }
    .weekdays_col {
        display: flex;
        flex-direction: column;
    }
    .weekdays_column > .time {
        line-height: 1rem;
    }
`
export const WhiteContainer = styled.div`
    width: 100vw;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    font-family: NanumSquare_acR;

    @media screen and (min-width: 501px) {
        height: 55vh;
    }
    @media screen and (max-width: 500px) {
        height: 50vh;
    }
    @media screen and (max-height: 700px) {
        transform: scale(0.9, 0.9);
    }
    @media screen and (max-height: 570px) {
        transform: scale(0.8, 0.8);
    }
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 260px;
    margin-top: 70px;
    justify-content: space-between;
    @media screen and (max-height: 570px) {
        transform: scale(0.8, 0.8) translateY(-40px);
    }
`
export const IconLink = styled.a`
    img {
        width: 2.7rem;
    }
    @media screen and (max-height: 570px) {
        transform: scale(0.9, 0.9) translateY(-40px);
    }
`
export const BottomLetterContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 0.4rem;
    line-height: 1rem;
    margin-top: 40px;
    color: #888888;
    @media screen and (max-height: 570px) {
        transform: translateY(-70px);
    }
`
export const DividedRow = styled.div`
    display: flex;
    flex-direction: row;
    color: #888888;
    align-items: center;
    justify-content: center;
    font-size: 0.4rem;
    margin-bottom: 0.9rem;
    a {
        text-decoration: none;
        color: #888888;
    }
    .divider {
        width: 1px;
        height: 0.6rem;
        margin-left: 1rem;
        margin-right: 1rem;
        background-color: #888888;
    }
    @media screen and (max-height: 570px) {
        transform: scale(0.8, 0.8);
    }
`
