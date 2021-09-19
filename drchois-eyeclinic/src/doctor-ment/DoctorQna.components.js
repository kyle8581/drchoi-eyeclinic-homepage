import { BackGrounText } from './BackGroundText'
import styled from 'styled-components/macro'
export const Border = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #fff;
`
export const Wrapper = styled.div`
    display: flex;
    /* border : 1px solid black; */
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 751px) {
        margin-top: 20vh;
        margin-bottom: 10vh;
    }
    @media screen and (max-width: 750px) {
        margin-top: 8vh;
        /* overflow-y: scroll; */
    }
`
export const Grid = styled.div`
    display: grid;
    margin: auto;
    grid-column-gap: 5rem;
    grid-row-gap: 1rem;
    @media screen and (min-width: 751px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1920px) {
        height: 70vh;
        width: 90vw;
    }
    @media screen and (max-width: 1300px) and (min-width: 751px) {
        height: 50vh;
        width: 90vw;
        grid-column-gap: 2rem;
        grid-row-gap: 0rem;
        .kim,
        .jung,
        .cho {
            transform: translateY(7rem);
        }
        .park {
            transform: translate(-2rem, -0.5rem);
        }
        .choi {
            transform: translate(-2rem, 7rem);
        }
    }
    @media screen and (max-width: 750px) {
        height: 70vh;
        width: 90vw;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    }
    @media screen and (max-height: 740px) {
        transform: scale(0.9, 0.9);
    }
    @media screen and (max-height: 690px) {
        transform: scale(0.8, 0.8) translateY(-2rem);
        
    }
    /* @media screen and (max-height: 670px) {
        width: 120vw;
        transform: scale(0.7, 0.7) translate(-2rem, -2rem);
    } */
    /* @media screen and (max-height: 580px) {
        width: 160vw;
        transform: scale(0.65, 0.65) translate(-2rem, -2rem);
    } */
    /* @media screen and (max-height: 550px) {
        width: 160vw;
        transform: scale(0.7, 0.7) translate(-2rem, -2rem);
    } */
    /* div{
        border: 1px solid red;
    } */
`
export const TitleContainer = styled.div`
    color: #63c3c4;
    text-align: left;
    margin-top: 1.5rem;
    font-weight: 600;
    z-index: 1;
    font-family: NanumSquare_acR;
    @media screen and (min-width: 751px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 750px) {
        font-size: 1.4rem;
    }
`
// ----------------의사 인터뷰 컴포넌트 ------------
export const QnaContentContianer = styled.div`
    display: grid;
    z-index: 1;
    /* border : 1px solid blue; */
    font-family: NanumSquare_acR;
    color: #747373;
    /* background-color:rgba(10,0,10, 0.5); */
    padding: 15px;
    :hover{
        /* background-color: #C3D2D1; */
        box-shadow: 0 0 5px 3px #EDEEF2;
    }
    @media screen and (min-width: 1301px) {
        grid-template-columns: 9.5rem 7fr;
        grid-gap: 2rem;
    }
    @media screen and (max-width: 1300px) and (min-width: 751px) {
        grid-template-columns: 9.5rem 7fr;
        grid-gap: 0.5rem;
    }
    @media screen and (max-width: 750px) {
        grid-gap: 1rem;
        grid-template-columns: 1fr 5fr;
        padding:2vw;
    }
`
export const DoctorIdentity = styled.div`
    grid-column: 1 / 2;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1300px){
        justify-self: flex-start;
    }
`

export const DoctorCircleImg = styled.img`
    @media screen and (min-width: 1301px) {
        width: 9.5rem;
    }
    @media screen and (max-width: 1300px) and (min-width: 751px) {
        width: 6rem;
    }
    @media screen and (max-width: 750px) {
        width: 4rem;
    }
`
export const DoctorName = styled.div`
    text-align: center;

    @media screen and (min-width: 1301px) {
        font-size: 0.9rem;
        margin-top: 1rem;
    }
    @media screen and (max-width: 1300px) and (min-width: 751px) {
        font-size: 0.6rem;
        margin-top: 0.8rem;
    }
    @media screen and (max-width: 750px) {
        font-size: 0.6rem;
        margin-top: 0.5rem;
    }
`
export const Comment = styled.div`
    grid-column: 2/2;
    text-align: left;
    justify-content: center;
    vertical-align: middle;
    margin: auto;
    font-weight: 200;
    line-height: 1.4rem;
    letter-spacing : 1px;
    @media screen and (max-width: 1920px) {
        font-size: 1.2rem;
        line-height: 1.8rem;
    }
    @media screen and (max-width: 1550px) {
        font-size: 1rem;
    }
    @media screen and (max-width: 1300px) and (min-width: 751px) {
        font-size: 0.8rem;
        line-height: 1.3rem;
        /* border:1px solid; */

    }
    @media screen and (max-width: 750px) {
        font-size: 0.6rem;
        line-height: 1rem;
        letter-spacing: normal;
    }
`
// -------------------------------------------
export const QnaBackGroundText = styled(BackGrounText)`
    margin-left: 3vw;
    margin-top: 0.5vh;
    text-align: left;
    left: 0;
    top: 4vh;
    z-index: 0;
    font-family: NanumSquare_acEB;
    @media screen and (max-width: 1300px) and (min-width: 751px) {
        font-size: 8rem;
        transform: translate(-2rem, 2rem);
    }
    @media screen and (max-width: 750px) {
        z-index: 0;
        font-size: 7rem;
    }
`

export const QnaGreenBox = styled.div`
    width: 2rem;
    height: 0.3rem;
    transform: translate(-0.2rem, -0.6rem);
    background-color: #63c3c4;
    @media screen and (max-width: 1300px) and (min-width: 501px) {
        width: 1.5rem;
        height: 0.35rem;
        transform: translate(0.1rem, -0.3rem);
    }
    @media screen and (max-width: 750px) {
        transform: scale(0.7, 0.7) translate(-0.5rem, -0.5rem);
    }
`
