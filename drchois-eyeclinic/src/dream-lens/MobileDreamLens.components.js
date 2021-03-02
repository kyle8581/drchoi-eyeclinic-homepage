import styled from 'styled-components/macro'
import yj1 from './images/yj1.png'
import background1 from './mobile-images/background1.png'
import background2 from './mobile-images/yj.png'

const EB = 'NanumSquare_acEB'
const B = 'NanumSquare_acB'
const R = 'NanumSquare_acR'
export const Section1 = styled.div`
    display: grid;
    margin-top: 10rem;
    grid-template-rows: auto auto;
    width: 70vw;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 350px) {
        width: 90vw;
    }
    /* border: 1px solid; */
`
export const ExplainLeft = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    /* border: 1px solid; */
    .title {
        font-size: 2rem;
        color: #4d4d4d;
        font-family: ${EB};
    }
    .middle {
        margin-top: 0.7rem;
        margin-bottom: 0.7rem;
        font-size: 1rem;
        color: #3bb2b9;
        font-family: ${R};
    }
    .par {
        font-size: 0.9rem;
        color: #4d4d4d;
        font-family: ${R};
        display: flex;
        line-height: 1.3rem;
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
    margin-top: 5rem;
    width: calc(70vw);
    height: calc(70vw / 578 * 872);
`
export const Section2 = styled.div`
    display: flex;
    margin-top: 7rem;
    flex-direction: column;
    width: 70vw;
    position: relative;
    align-items: center;
`
export const EffectParagraph = styled.div`
    display: flex;
    flex-direction: column;
    color: #707070;
    width: 70vw;
    /* border: 1px solid; */
    .title {
        font-family: ${EB};
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
    }
    .row {
        /* display: flex;
        flex-direction: row; */
        white-space: pre-wrap;
        font-family: ${R};
        line-height: 1.5rem;
        font-size: 1rem;
        width: 70vw;
        /* border: 1px solid; */
        .bold {
            display: inline;
            margin-left: 0.3rem;
            font-family: ${B};
        }
    }
    @media screen and (max-width: 350px) {
        .title {
            font-size: 1.2rem;
        }
        .row {
            line-height: 1.3rem;
            font-size: 0.8rem;
            .bold {
                margin-left: 0.3rem;
            }
        }
    }
`
export const EffectProcess = styled.div`
    display: grid;
    width: 100%;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 3fr 0.5fr 3fr 0.5fr;
    grid-gap: 1rem;
    position: relative;
    margin-top: 5rem;
    margin-bottom: 2rem;
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
        font-size: 0.9rem;
        white-space: pre-wrap;
        color: #707070;
        width: 80%;
    }
    .green_circle_with_number {
        transform: scale(0.8);
    }
    @media screen and (max-width: 350px) {
        width: 90vw;
        .text {
            font-size: 0.8rem;
        }
        .green_circle_with_number {
            transform: scale(0.8);
        }
    }
`
export const BeforeAndAfter = styled.img`
    width: 100%;
    margin-top: 5rem;
`
export const Section3 = styled.div`
    width: 100vw;
    margin-top: 10rem;
    height: calc(100vw / 750 * 618);
    background: url(${background1}) no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
        font-family: ${EB};
        color: #4d4d4d;
        font-size: 1.3rem;
        text-align: left;
        /* border: 1px solid; */
        width: 70%;
        transform: translateY(-35vw);
        @media screen and (max-width: 350px) {
            width: 90vw;
        }
    }
    position: relative;
`
export const PositiveRow = styled.div`
    font-size: 0.8rem;
    color: #4d4d4d;
    font-family: ${B};
    width: 70%;
    display: flex;
    flex-direction: row;
    text-align: left;
    /* height: 2rem; */
    transform: translateY(-25vw);
    line-height: 1.5rem;
    p {
        transform: translateY(-0.5rem);
        margin-left: 0.6rem;
    }
    .circle {
        width: 1rem;
    }
    .green_circle_with_check {
        transform: scale(0.8) translateY(-0.2rem);
    }
    @media screen and (max-width: 350px) {
        width: 90vw;
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
        font-size: 1.2rem;
        margin-bottom: 0rem;
    }
    .process {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto 1fr auto 1fr;
        grid-gap: 0.5rem;
        div {
            position: relative;
            /* border: 1px solid; */
        }
        img {
            width: 100%;
            margin-top: 2rem;
        }
    }
    .text {
        font-size: 0.8rem;
        font-family: ${R};
        /* border: 1px solid; */
        text-align: center;
    }
`
export const Section4 = styled.div`
    width: 100vw;
    height: calc(100vw / 750 * 863);
    background: url(${background2}) no-repeat;
    background-size: contain;
    display: flex;
    position: relative;
    margin-top: 10rem;
    justify-content: center;
    .text {
        font-family: ${EB};
        color: #343a46;
        white-space: pre-wrap;
        font-size: 1.5rem;
        right: 15vw;
        /* border: 1px solid; */
        height: 5rem;
        transform: translateY(-2rem);
        /* position: absolute; */
        /* top: calc(-100vw / 750 * 863 * 0.2); */
    }
`
