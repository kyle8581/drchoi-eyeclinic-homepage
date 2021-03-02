import styled from 'styled-components/macro'
import yj1 from './images/yj1.png'
import background1 from './images/background1.png'
import background2 from './images/background2.png'

const EB = 'NanumSquare_acEB'
const B = 'NanumSquare_acB'
const R = 'NanumSquare_acR'
export const Section1 = styled.div`
    display: grid;
    margin-top: 10rem;
    grid-template-columns: 3fr 2fr;
    width: 70vw;
    justify-content: center;
    align-items: center;
    /* border: 1px solid; */
`
export const ExplainLeft = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    /* border: 1px solid; */
    .title {
        font-size: 3rem;
        color: #4d4d4d;
        font-family: ${EB};
    }
    .middle {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        color: #3bb2b9;
        font-family: ${R};
    }
    .par {
        font-size: 1.2rem;
        color: #4d4d4d;
        font-family: ${R};
        display: flex;
        line-height: 1.8rem;
        flex-direction: column;
    }
    @media screen and (min-width: 1300px) {
        .title {
            font-size: calc(3rem * 1.2);
        }
        .middle,
        .par {
            font-size: calc(1.2rem * 1.2);
        }
        .par {
            line-height: 2rem;
        }
    }
`
export const ExplainRight = styled.div`
    background: url(${yj1}) no-repeat;
    background-size: contain;
    width: calc(70vw * 0.4);
    height: calc(70vw * 0.4 / 578 * 872);
`
export const Section2 = styled.div`
    display: flex;
    margin-top: 7rem;
    flex-direction: column;
    width: 70vw;
    position: relative;
`
export const EffectParagraph = styled.div`
    display: flex;
    flex-direction: column;
    color: #707070;
    width: 70vw;
    /* border: 1px solid; */
    .title {
        font-family: ${EB};
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
    .row {
        display: flex;
        flex-direction: row;
        white-space: pre-wrap;
        font-family: ${R};
        line-height: 1.8rem;
        font-size: 1.2rem;
        width: 70vw;
        /* border: 1px solid; */
        .bold {
            font-family: ${B};
        }
    }
`
export const EffectProcess = styled.div`
    display: grid;
    width: 100%;
    height: 20vw;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 3fr 0.5fr;
    grid-gap: 0.5rem;
    position: relative;
    margin-top: 5rem;
    div {
        /* border: 1px solid; */
        position: relative;
    }
    img {
        width: 100%;
    }
    .description {
        display: flex;
        flex-direction: row;
    }
    .text {
        margin-left: 0.5rem;
        font-family: ${R};
        font-size: 1rem;
        white-space: pre-wrap;
        color: #707070;
        width: 80%;
    }
`
export const BeforeAndAfter = styled.img`
    width: 100%;
    margin-top: 5rem;
`
export const Section3 = styled.div`
    width: 100vw;
    height: calc(100vw / 1920 * 1130);
    background: url(${background1}) no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
        font-family: ${EB};
        color: #4d4d4d;
        font-size: 1.7rem;
        text-align: left;
        /* border: 1px solid; */
        width: 70%;
        transform: translateY(-10vw);
    }
    position: relative;
`
export const PositiveRow = styled.div`
    font-size: 1.2rem;
    color: #4d4d4d;
    font-family: ${B};
    width: 70%;
    display: flex;
    flex-direction: row;
    text-align: left;
    /* height: 2rem; */
    transform: translateY(-7vw);
    line-height: 2rem;
    p {
        transform: translateY(-0.5rem);
        margin-left: 0.6rem;
    }
`
export const HowToWear = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    position: relative;
    color: #6d6d6d;
    margin-top: 10rem;
    .title {
        font-family: ${EB};
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    .process {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto 1fr;
        grid-gap: 0.5rem;
        div {
            position: relative;
            /* border: 1px solid; */
        }
        img {
            width: 100%;
        }
    }
    .text {
        font-size: 1rem;
        font-family: ${R};
        /* border: 1px solid; */
        text-align: center;
    }
`
export const Section4 = styled.div`
    width: 100vw;
    height: calc(100vw / 1920 * 1299);
    background: url(${background2}) no-repeat;
    background-size: contain;
    display: flex;
    position: relative;
    margin-top: 10rem;
    .text {
        font-family: ${EB};
        color: #343a46;
        white-space: pre-wrap;
        font-size: 2rem;
        right: 15vw;
        /* border: 1px solid; */
        height: 5rem;
        position: absolute;
        top: calc(100vw / 1920 * 1299 * 0.4);
    }
`
