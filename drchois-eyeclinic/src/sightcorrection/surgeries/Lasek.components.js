import styled from 'styled-components/macro'
import { Element } from 'react-scroll'
export const LasekContainer = styled(Element)`
    /* width: 1500px; */
    width: 100vw;
    /* height: 800px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    /* margin: auto; */
`
export const FirstBox = styled.div`
    width: 100vw;
    position: relative;
`
export const FirstImage = styled.img`
    width: 100vw;
`
export const FirstTextContainer = styled.div`
    font-family: NanumSquare_acEB;
    position: absolute;
    margin-left: 10vw;
    margin-top: 12vw;

    color: white;
    width: 50vw;
    h4,
    h3 {
        font-family: NanumSquare_acB;
    }
    h1 {
        font-size: 4vw;
    }
    h5 {
        /* margin-top: 20px; */
        /* font-size: 15pt; */
        margin-top: 1.5vw;
        font-size: 1.5vw;
    }
    h4 {
        /* margin-top: 30px;
        font-size: 18pt;
        line-height: 22pt; */
        margin-top: 1.8vw;
        font-size: 1.6vw;
        line-height: 1.9vw;
    }
    h3 {
        /* margin-top: 40px;
        font-size: 18pt;
        line-height: 22pt; */
        margin-top: 2vw;
        font-size: 1.6vw;
        line-height: 2vw;
    }
    @media screen and (max-width: 750px) {
        margin-top: 15vw;
        font-family: NanumSquare_acR;
        width: 58vw;
        margin-left: 6vw;
        h1 {
            font-family: NanumSquare_acEB;
            font-size: 4vw;
        }
        h5 {
            visibility: hidden;
            height: 0;
        }
        h4 {
            margin-top: -1vw;
            font-size: 7px;
            line-height: 3.5vw;
        }
        h3 {
            margin-top: 3px;
            font-size: 7px;
            line-height: 3.5vw;
        }
    }
`
export const SecondBox = styled.div`
    width: 90vw;
    /* height: 800px; */
    height: 70vw;
    z-index: -10;
    margin-top: 20vh;
    @media screen and (max-width: 750px) {
        margin-top: 10vh;
        height: auto;
    }
`
export const SecondFirstRow = styled.div`
    height: 23vw;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-bottom: 3px solid #63c3c4;
    border-top: 3px solid #63c3c4;
    @media screen and (max-width: 500px) {
        height: 30vw;
    }
`
export const SecondFirstRow_image1 = styled.img`
    width: 18vw;
`
export const SecondFirstRow_box2 = styled.div`
    transform: translate(2vw, -1vw);
    width: 30vw;
    @media screen and (max-width: 500px) {
        transform: translate(0, 0);
    }
`
export const Box2Title = styled.div`
    color: #63c3c4;
    font-family: NanumSquare_acEB;
    font-size: 2.5vw;
    @media screen and (max-width: 750px) {
        font-size: 3vw;
    }
    @media screen and (min-width: 1500px) {
        font-size: 3vw;
    }
`
export const Box2Ul = styled.ul`
    margin-top: 2vw;
    list-style-type: none;
`

export const Box2li = styled.li`
    color: #707070;
    font-family: NanumSquare_acR;
    line-height: 20pt;
    font-size: 1.2vw;
    @media screen and (max-width: 750px) {
        font-size: 2vw;
        line-height: 3vw;
    }
`

export const SecondFirstRow_image3 = styled.img`
    width: 25vw;
    @media screen and (max-width: 500px) {
        width: 23vw;
    }
`

export const SecondSecondRow = styled.div`
    margin-top: 40px;
    @media screen and (max-width:750px){
        margin-top: 10vw;
        margin-bottom:10vw;
    }
`
export const SecondSecondTitle = styled.div`
    color: #707070;
    font-size: 2.5vw;
    font-family: NanumSquare_acEB;
    @media screen and (max-width: 750px) {
        font-size: 3vw;
    }
`
export const SecondSecondImgBox = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    width: 90vw;
    font-family: NanumSquare_acR;
    color: #707070;
    @media screen and (max-width: 750px) {
        margin-top: 5vw;
    }
`
export const ImgElement = styled.div`
    width: 30vw;
    @media screen and (max-width: 500px) {
        width: 90vw;
    }
`
export const SecondSecondImg = styled.img`
    width: 29vw;
`
export const SecondSecondImgTagBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-left: 5px;
    /* .green_circle_with_number {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.8rem;
    } */
    @media screen and (max-width: 500px) {
        margin-top: 0.5vw;
        font-size: 2.1vw;
        .green_circle_with_number {
            width: 2.1vw;
            height: 2.2vw;
            border-radius: 2.1vw;
            p {
                font-size: 2vw;
            }
        }
    }
`
export const ImgTag = styled.div`
    margin-left: 3pt;
    color: #707070;
    font-family: NanumSquare_acR;
`

export const ThirdImage = styled.img`
    width: 100vw;
`

export const FourthBox = styled.div`
    width: 90vw;
    margin-top: 60px;
`

export const FourthElement = styled.div`
    width: 1000px;
    @media screen and (max-width: 500px) {
        width: 90vw;
    }
`

export const FourthTitle1 = styled.div`
    font-family: NanumSquare_acEB;
    font-size: 2vw;
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    @media screen and (max-width: 750px) {
        font-size: 4vw;
        line-height: 2vw;
        margin-bottom: 7vw;
    }
`

export const FourthTitle1_Black = styled.div`
    color: #707070;
`

export const FourthTitle1_Orange = styled.div`
    color: #fc9a59;
    margin-left: 8pt;
`

export const FourthTitle2 = styled.div`
    font-family: NanumSquare_acEB;
    font-size: 2vw;
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    color: #707070;
    margin-top: 50px;
    @media screen and (max-width: 750px) {
        font-size: 4vw;
        line-height: 2vw;
        margin-bottom: 7vw;
    }
`

export const FourthInformation = styled.div`
    color: #63c3c4;
    display: flex;
    flex-direction: row;
    height: 3.5vw;
    .green_circle_with_check {
        width: 1.2vw;
        border-radius: 1.2vw;
        height: 1.2vw;
        font-size: 1.1vw;
    }
    @media screen and (max-width: 750px) {
        height: 4vw;
        .green_circle_with_check {
            width: 2.5vw;
            border-radius: 2.5vw;
            height: 2.5vw;
            font-size: 0.8rem;
        }
    }
`

export const FourthText = styled.div`
    color: #707070;
    font-family: NanumSquare_acB;
    font-size: 1.2vw;
    margin-left: 10px;
    @media screen and (max-width: 750px) {
        font-size: 2.5vw;
        margin-left:1vw;
    }
`

export const FifthBox = styled.div`
    background-color: #f7f9fd;
    width: 100vw;
    margin-top: 100px;
    height: 40vw;
    z-index: -10;
    @media screen and (max-width: 500px) {
        margin-top: 10vw;
        height: 80vw;
    }
`
export const FifthContainer = styled.div`
    width: 1000px;
    transform: translateY(60px);
    margin: auto;
    font-family: NanumSquare_acEB;
    color: #707070;
    @media screen and (max-width: 1000px) {
        width: 90vw;
    }
`

export const FifthTitle = styled.div`
    font-size: 2.2vw;
    @media screen and (max-width: 750px) {
        font-size: 4vw;
    }
`

export const FifthContentBox = styled.div`
    margin-top: 5vw;
`

export const DateBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 800px;
    align-items: center;
    transform: translateX(200px);
    margin-top: 20px;
    @media screen and (max-width: 1000px) {
        width: 70vw;
        transform: translateX(21vw);
    }
`

export const Date = styled.div`
    color: #114a72;
    width: 200px;
    font-size: 13pt;
    margin-bottom: 10px;
    @media screen and (max-width: 500px) {
        font-size: 2vw;
    }
`

export const SurgeryBox = styled.div`
    height: 75px;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    margin-bottom: 10px;
    @media screen and (max-width: 1000px) {
        height: 7vw;
    }
`
export const SurgeryTitle = styled.div`
    font-size: 1.7vw;
    width: 150px;
    @media screen and (max-width: 500px) {
        font-size: 3vw;
        width: 15vw;
        margin-left: 2vw;
    }
`

export const SurgeryDateImg = styled.img`
    height: 100%;
`
