import styled from 'styled-components/macro'
import background1 from './desktop-images/background1.png'
import background2 from './desktop-images/background2.png'
import background3 from './desktop-images/background3.png'
import leftimg from './desktop-images/poorsight.png'
import rightimg from './desktop-images/goodsight.png'
import mpl from './desktop-images/mpl.png'

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
    height: calc(100vw / 1920 * 1000);
    display: flex;
    align-items: center;
    /* justify-content: center; */
`
export const Explain = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15vw;
    width: 400px;
    height: 300px;
    margin-top: calc(100vw / 1920 * 1000 * 0.2);

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
    @media screen and (min-width: 1250px) {
        transform: scale(1.2);
    }
`
export const ProcessWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    .title {
        font-family: ${EB};
        color: #707070;
        font-size: 2.5rem;
    }
    margin-bottom: 5rem;
`

export const ProcessContainer = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
`
export const Process = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 5rem;
    .process_with_image {
        margin-top: 2rem;
        display: grid;
        grid-template-rows: 230px 50px;
        grid-template-columns: repeat(3, 300px);
        grid-column-gap: 5px;
    }
    .process_text {
        display: flex;
        flex-direction: column;
        padding-left: 1.5rem;
        .row {
            display: flex;
            flex-direction: row;
        }
        .text {
            margin-left: 0.4rem;
            font-family: ${R};
            font-size: 1.2rem;
            color: #707070;
            margin-bottom: 0.2rem;
        }
        .text2 {
            margin-left: 1.3rem;
            font-family: ${R};
            font-size: 1.2rem;
            color: #707070;
        }
    }
    img {
        width: 300px;
    }
`
export const Advantage = styled.div`
    display: flex;
    flex-direction: column;
    .title {
        margin-bottom: 2rem;
        margin-top: 4rem;
    }
    .row {
        display: flex;
        line-height: 2.5rem;
        align-items: center;
    }
    .text {
        font-size: 1.2rem;
        font-family: ${B};
        margin-left: 0.5rem;
        color: #707070;
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
        line-height: 5rem;
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
    .title {
        font-family: ${B};
        color: #707070;
        font-size: 1.5rem;
        margin-top: 1rem;
    }
`
export const SightComparison = styled.div`
    width: 100vw;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: calc(100vw / 880 * 300) 2rem;
    align-content: stretch;
    display: grid;
    grid-column-gap: 5px;
    margin-top: 2rem;
    .left_img {
        background: url(${leftimg}) no-repeat;
        background-size: cover;
    }
    .right_img {
        background: url(${rightimg}) no-repeat;
        background-size: cover;
    }
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
