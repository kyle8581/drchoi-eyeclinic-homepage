import styled from 'styled-components/macro'
import background1 from './background1.png'
import processimg from './image1.png'
import background2 from './background2.png'
export const View = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
`
export const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Section1 = styled.div`
    background: url(${background1}) no-repeat;
    background-size: contain;
    width: 100vw;
    height: calc(100vw / 1919 * 1076);
    display: flex;
    flex-direction: column;
    padding-top: 10%;
    padding-left: 10%;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export const BeforeSurgery = styled.div`
    font-family: NanumSquare_acR;
    font-size: 4vw;
    color: #fff;
    margin-right: 0.5vw;
`
export const Fifty = styled.div`
    font-family: NanumSquare_acB;
    color:#6CE2FF;
    font-size:5vw;
    margin-top: 2%;
    margin-bottom: 2%;
`
export const EyeIcon = styled.img`
    width: calc(100vw * 158 / 1910);
    height: calc(100vw * 86 / 1910);
`
export const Section1WhitePar = styled.div`
    font-family: NanumSquare_acR;
    font-size: 2vw;
    color: white;
    line-height: 4vw;
`
export const Section1BluePar = styled.div`
    font-family: NanumSquare_acR;
    font-size: 2vw;
    color: #D2FAFF;
    line-height: 4vw;

`
export const Section2 = styled.div`
    /* @media screen and (max-width: 5000px) and (min-width: 2001px) {
        width: 2000px;
    }
    @media screen and (max-width: 2000px) and (min-width: 1001px) {
        width: 1000px;
    }
    @media screen and (max-width: 1000px) {
        width: 800px;
    } */
    margin-top: 5rem;
    width: 70vw;
    display: flex;
    flex-direction: column;
    text-align: left;
    white-space: pre;
    margin-top: 10rem;
    .title {
        display: flex;
        margin-bottom: 2rem;
        flex-direction: row;
        font-family: NanumSquare_acEB;
        .gray {
            color: #707070;
        }
        .orange {
            color: #f58e4e;
        }
    }
    .processimg {
        background: url(${processimg}) no-repeat;
        background-size: contain;
        width: 100%;
        height: calc(70vw / 1361 * 441);
    }
    @media screen and (max-width: 5000px) and (min-width: 2001px) {
        .title {
            font-size: 3rem;
        }
    }
    @media screen and (max-width: 2000px) and (min-width: 1001px) {
        .title {
            font-size: 2rem;
        }
    }
    @media screen and (max-width: 1000px) {
        .title {
            font-size: 1.5rem;
        }
    }
`
export const Section3 = styled.div`
    margin-top: 10rem;
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid red; */
    .swiper-container {
        width: 70vw;
        height: auto;
        /* border: 1px solid; */
    }
    position: relative;
`
export const Process = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: auto;
    /* border: 1px solid red; */
    img {
        width: 100%;
    }
    margin-bottom: 50px;
`

export const ProcessDescription = styled.div`
    padding: 4vw;
    color: white;
    background-color: #707070;
    white-space: break-spaces;
    text-align: left;
    min-height: 180px;
    .title {
        font-family: NanumSquare_acB;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    .par > div {
        font-family: NanumSquare_acR;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        line-height: 1.5rem;
    }

    @media screen and (max-width: 950px) {
        .title {
            font-size: 1.2rem;
        }
        .par {
            font-size: 1rem;
        }
    }
`
export const SlideButton = styled.div`
    /* content: '<'; */
    font-family: NanumSquare_acR;
    color: white;
    text-shadow: 2px 2px 3px rgba(10, 10, 10, 0.5);
    /* position: absolute; */
    /* border: 1px solid; */
    position: absolute;
    /* margin-left: 5rem; */
    font-size: 3.5rem;
    top: 17vw;
    z-index: 2;
    cursor: pointer;
    ${({ dir }) => (dir === 'left' ? 'left:16vw;' : 'right:16vw;')};
`
export const Section4 = styled.div`
    /* margin-top: 10rem; */
    background: url(${background2}) no-repeat;
    background-size: contain;
    width: 100vw;
    height: calc(100vw / 1920 * 1135);
`
