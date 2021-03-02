import styled from 'styled-components/macro'
import background1 from './mobile-images/background1.png'
import background2 from './desktop-images/background2.png'
import background3 from './desktop-images/background3.png'
import leftimg from './mobile-images/badsight.png'
import rightimg from './mobile-images/goodsight.png'
// import mpl from './desktop-images/mpl.png'
import aqua from './mobile-images/aqua.png'
import mpl from './mobile-images/mpl.png'
const B = 'NanumSquare_acB'
const EB = 'NanumSquare_acEB'
const R = 'NanumSquare_acR'
export const View = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Section1 = styled.div`
    background: url(${background1}) no-repeat;
    background-size: cover;
    width: 100vw;
    height: calc(100vw / 750 * 1333);
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* justify-content: center; */
`
export const Explain = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-left: 15vw; */
    width: 70vw;
    height: 300px;

    margin-top: calc(100vw / 750 * 1333 * 0.1);
    /* border: 1px solid; */
    .title {
        font-family: ${EB};
        font-size: 2rem;
        color: #4d4d4d;
    }
    .icl_word {
        color: #595959;
        display: flex;
        flex-direction: row;
        font-size: 1rem;
        font-family: ${R};
        margin-top: 0.7rem;
        margin-bottom: 0.7rem;
        .highlight {
            color: #3bb2b9;
            font-family: ${B};
        }
    }
    .icl_word div:nth-child(2n) {
        margin-right: 0.3rem;
    }
    .par {
        display: flex;
        flex-direction: column;
        font-family: ${R};
        color: #595959;
        div {
            line-height: 1.5rem;
            display: flex;
            flex-direction: row;
        }
        .bold1 {
            font-family: ${B};
            margin-left: 0.3rem;
        }
        .bold2 {
            font-family: ${B};
        }
    }
    @media screen and (max-width: 500px) {
        transform: scale(0.8);
    }
    @media screen and (max-width: 400px) {
        width: 90vw;
    }
`
export const ProcessWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    .title {
        font-family: ${EB};
        color: #707070;
        font-size: 1.5rem;
    }
    margin-bottom: 5rem;
`

export const ProcessContainer = styled.div`
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Process = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 5rem;
    .process_with_image {
        margin-top: 2rem;
        display: grid;
        grid-template-rows: repeat(3, calc(70vw / 423 * 291) 6rem);
        /* grid-template-columns: repeat(3, 300px); */
        grid-column-gap: 5px;
    }
    .process_text {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        padding-left: 1.5rem;
        .row {
            display: flex;
            flex-direction: row;
        }
        .text {
            margin-left: 0.4rem;
            font-family: ${R};
            font-size: 1rem;
            color: #707070;
            margin-bottom: 0.2rem;
        }
        .text2 {
            margin-left: 1.3rem;
            font-family: ${R};
            font-size: 1rem;
            color: #707070;
        }
    }
    img {
        width: 100%;
    }
    @media screen and (max-width: 350px) {
        .process_text {
            /* transform: scale(0.8); */
            padding-left: 0.5rem;
            .text,
            .text2 {
                font-size: 0.9rem;
            }
        }
        .green_circle_with_number {
            transform: scale(0.8);
        }
    }
`
export const Advantage = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid; */
    position: relative;
    .title {
        margin-bottom: 2rem;
        margin-top: 4rem;
    }
    .row {
        display: flex;
        line-height: 1.5rem;
        align-items: center;
        width: 100%;
        margin-bottom: 0.5rem;
    }
    .text {
        font-size: 0.9rem;
        font-family: ${B};
        margin-left: 0.5rem;
        color: #707070;
    }
    .green_circle {
        width: 1rem;
        display: flex;
        position: relative;
        /* border: 1px solid; */
        height: 100%;
    }
    .green_circle_with_check {
        transform: scale(0.8) translate(0, 0.2rem);
        /* top: 1rem; */
    }
    @media screen and (max-width: 350px) {
        .title {
            font-size: 1.2rem;
        }
    }
`
export const Section3 = styled.div`
    width: 100vw;
    height: calc(100vw / 1920 * 1134);
    background: url(${background2}) no-repeat;
    background-size: cover;
    align-self: center;
    display: flex;
    flex-direction: column;
`
export const AquaBackground = styled.div`
    background: url(${aqua}) no-repeat;
    width: 100vw;
    background-size: contain;
    height: calc(100vw / 750 * 1334);
`
export const AquaTitle = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
    /* justify-content: center; */
    .title1 {
        font-family: ${R};
        margin-top: 8vw;
        color: #005294;
        font-size: 2rem;
    }
    .title2 {
        font-family: ${EB};
        color: #fff;
        font-size: 5rem;
        margin-top: 1rem;
        text-shadow: 6px 3px 12px rgba(100, 100, 100, 0.5);
    }
`
export const AquaDescription = styled.div`
    margin-top: 2rem;
    width: 100vw;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media screen and (min-width: 1340px) {
        margin-top: 6rem;
    }
`
export const AquaLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    height: 300px;
    justify-content: space-between;
    .text {
        font-family: ${B};
        font-size: 1.5rem;
        line-height: 2rem;
        display: flex;
        flex-direction: column;
        color: #fff;
    }
    .image {
        width: 100%;
    }
    @media screen and (min-width: 1340px) {
        transform: scale(1.2);
    }
`
export const AquaRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 300px;
    justify-content: space-between;
    @media screen and (min-width: 1340px) {
        transform: scale(1.2);
    }
`
export const AquaRow = styled.div`
    display: flex;
    flex-direction: row;
    .number {
        border-bottom: 1px solid #fff;
        font-family: ${B};
        font-size: 1.2rem;
        color: #fff;
        height: 1.4rem;
        margin-right: 1rem;
    }
    .advantages {
        display: flex;
        flex-direction: column;
        color: white;
        .row {
            display: flex;
            flex-direction: row;
            font-family: ${R};
            font-size: 1.2rem;
            line-height: 1.6rem;
            .bold {
                font-family: ${B};
            }
            div {
                margin-right: 0.3rem;
            }
        }
    }
`
export const Sight = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 5rem;
    align-items: center;
    .title {
        font-family: ${B};
        color: #707070;
        font-size: 1.5rem;
        margin-top: 1rem;
        white-space: pre-wrap;
    }
    @media screen and (max-width: 500px) {
        .title {
            font-size: 1.2rem;
        }
    }
`
export const SightComparison = styled.div`
    width: 80vw;
    /* grid-template-columns: ; */
    grid-template-rows: calc(80vw / 597 * 391) 4rem calc(80vw / 597 * 391) 4rem;
    /* border: 1px solid; */
    height: auto;
    align-content: stretch;
    display: grid;
    grid-column-gap: 5px;
    margin-top: 2rem;
    justify-content: center;
    .title {
        font-size: 1rem;
    }
    .left_img {
        background: url(${leftimg}) no-repeat;
        background-size: cover;
        width: 82vw;
    }
    .right_img {
        background: url(${rightimg}) no-repeat;
        background-size: cover;
        width: 80vw;
    }
`
export const MplBackground = styled.div`
    background: url(${mpl}) no-repeat;
    width: 100vw;
    background-size: contain;
    height: calc(100vw / 750 * 1338);
`
export const Mpl = styled(Section3)`
    background: url(${background3}) no-repeat;
    width: 100vw;
    background-size: cover;
    margin-top: 5rem;
    height: calc(100vw / 1920 * 1134);
`
export const MplTitle = styled(AquaTitle)`
    .title2 {
        color: #327a9b;
        text-shadow: none;
        margin-top: calc(100vw / 1920 * 1134 * 0.2);
    }
`
export const MplDescription = styled(AquaDescription)``
export const MplRight = styled(AquaRight)``
export const MplRow = styled(AquaRow)`
    .number,
    .advantages {
        color: #327a9b;
    }
    .number {
        border-bottom: 1px solid #327a9b;
    }
`
export const MplLeft = styled.div`
    width: 40vw;
    margin-left: 10vw;
    background: url(${mpl}) no-repeat;
    background-size: cover;
    height: calc(40vw / 906 * 557);
    /* height: 400px; */
`
