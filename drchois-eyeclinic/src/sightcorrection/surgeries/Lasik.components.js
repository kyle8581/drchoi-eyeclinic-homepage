import styled from 'styled-components/macro'
import { Element } from 'react-scroll'
import lasik_sec1_img from './lasik_sec1_img1.png'
import lasik_sec3_img from './lasik_sec3_img1.png'
export const LasikContainer = styled(Element)`
    /* margin: auto; */
    width: 100vw;
    display: flex;
    flex-direction: column;
`
export const LasikWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Lasik_sec1 = styled.div`
    background: url(${lasik_sec1_img}) no-repeat;
    background-size: contain;
    width: 100vw;
    height: calc(100vw / 1920 * 1144);
`
export const Lasik_sec1_content = styled.div`
    width: 30vw;
    font-family: NanumSquare_acEB;
    color: #707070;
    margin-left: 15vw;
    margin-top: 15vw;
    h1 {
        font-size: 4vw;
        font-weight: bold;
    }
    h5 {
        margin-top: 0.5vw;
        font-family: NanumSquare_acR;
        font-size: 1.5vw;
        color: #3c92c7;
        span {
            font-weight: bold;
        }
    }
    h3 {
        font-family: NanumSquare_acR;
        margin-top: 1.4vw;
        font-size: 1.4vw;
        line-height: 1.8vw;
        margin-bottom: 1.5vw;
    }
    h4 {
        font-size: 1.5vw;
        color: #3c92c7;
    }
    @media screen and (max-width: 750px) {
        h3 {
            line-height: 2.5vw;
        }
        h5{
            font-size:3vw;
        }
        div{
            font-size: 2vw;
        }
        width: 50vw;
        margin-left: 10vw;
    }
`
export const Lasik_sec2 = styled.div`
    margin-top: 4rem;
    width: 70vw;
    @media screen and (max-width:750px){
        width:90vw;
    }
`
export const Lasik_sec2_row1 = styled.div`
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
export const Lasik_sec2_row1_col1 = styled.img`
    width: 15vw;
`
export const Lasik_sec2_row1_col2 = styled.div`
    /* transform: translate(2vw, -1vw); */
    width: 24vw;
    /* @media screen and (max-width: 500px) {
        transform: translate(0, 0);
    } */
    @media screen and (max-width: 711px) {
        width: 31vw;
    }
    /* @media screen and (max-width: 570px) {
        width: 40vw;
        justify-content: center;
    } */
`
export const Lasik_sec2_row1_col2_title = styled.div`
    color: #63c3c4;
    font-family: NanumSquare_acEB;
    font-size: 1.5vw;
    @media screen and (max-width: 711px) {
        font-size: 2vw;
    }
    /* @media screen and (min-width: 1500px) {
        font-size: 3vw;
    }  */
`
export const Lasik_sec2_row1_col2_Ul = styled.ul`
    margin-top: 2vw;
    list-style-type: none;
`

export const Lasik_sec2_row1_col2_li = styled.li`
    color: #707070;
    font-family: NanumSquare_acR;
    line-height: 2.5vw;
    font-size: 1.4vw;
    @media screen and (max-width: 750px) {
        font-size: 1.5vw;
        line-height: auto;
    }
`

export const Lasik_sec2_row1_col3 = styled.img`
    width: 20vw;
    /* @media screen and (max-width: 500px) {
        width: 23vw;
    } */
`

export const Lasik_sec2_row2 = styled.div`
    margin-top: 5rem;
    color: #707070;
`
export const Lasik_sec2_row2_title = styled.div`
    font-family: NanumSquare_acEB;
    font-size: 2vw;
    span {
        color: #63c3c4;
    }
    @media screen and (max-width: 1120px) {
        font-size: 2.3vw;
    }
    @media screen and (max-width: 750px) {
        font-size: 4vw;
        margin-bottom: 3vw;
    }
`
export const Lasik_sec2_row2_content = styled.div`
    margin-top: 1vw;
    font-size: 1.5vw;
    width: 100%;
    color: #707070;
    font-family: NanumSquare_acR;
    span {
        font-weight: bold;
    }
    @media screen and (max-width: 1120px) {
        font-size: 1.7vw;
    }
    @media screen and (max-width:750px){
        font-size: 2.5vw;
        margin-bottom: 3vw;
    }
`
export const Lasik_sec2_row2_img = styled.img`
    width: 100%;
    margin-top: 1.5vw;
`
export const Lasik_sec2_row3 = styled.div`
    h1 {
        font-size: 2.3vw;
        color: #707070;
        font-family: NanumSquare_acEB;
    }
    margin-top: 5vw;
    @media screen and (max-width: 1120px) {
        h1 {
            font-size: 2.5vw;
        }
    }
    @media screen and (max-width: 800px) {
        h1 {
            font-size: 3vw;
        }
    }
`
export const Lasik_sec2_row3_imgBox = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    font-family: NanumSquare_acR;
    color: #707070;
    /* @media screen and (max-width: 500px) {
        margin-top: 5vw;
    } */
`
export const Lasik_sec2_row3_imgEle = styled.div`
    width: 33%;
    /* @media screen and (max-width: 500px) {
        width: 90vw;
    } */
`
export const Lasik_sec2_row3_img = styled.img`
    width: 98%;
`
export const Lasik_sec2_row3_imgTagBox = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-left: 5px;
    /* .green_circle_with_number {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.8rem;
    } */
    @media screen and (max-width: 1410px) {
        .green_circle_with_number {
            width: 15px;
            height: 15px;
            border-radius: 15px;
            p {
                font-size: 15px;
            }
        }
    }
    @media screen and (max-width: 1000px) {
        .green_circle_with_number {
            width: 12px;
            height: 12px;
            border-radius: 12px;
            p {
                font-size: 12px;
            }
        }
    }
    @media screen and (max-width: 700px) {
        margin-top: 3px;
        margin-left: 0px;
        .green_circle_with_number {
            width: 10px;
            height: 10px;
            border-radius: 10px;
            p {
                font-size: 10px;
            }
        }
    }
`
export const Lasik_sec2_row3_imgTag = styled.div`
    margin-left: 3pt;
    color: #707070;
    font-family: NanumSquare_acR;
    @media screen and (max-width: 1410px) {
        font-size: 15px;
    }
    @media screen and (max-width: 1000px) {
        font-size: 12px;
    }
    @media screen and (max-width: 750px) {
        font-size: 2vw;
    }
`
export const Lasik_sec2_row4 = styled.div`
    margin-top: 60px;
    font-family: NanumSquare_acEB;
    display: flex;
    flex-direction: column;
    p {
        font-size: 25px;
        color: #707070;
    }
    @media screen and (max-width: 1000px) {
        width: 80vw;
    }
    @media screen and (max-width: 750px) {
        width: 90vw;
        p {
            font-size: 4vw;
        }
    }
`
export const Lasik_sec2_row4_contextWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1.3fr;
    }
    @media screen and (max-width: 600px) {
        margin-top: 10vw;
        display: flex;
        flex-direction: column;
    }
`
export const Lasik_sec2_row4_context = styled.div`
    width: 100%;
    font-size: 15px;
    color: #707070;
    line-height: 20px;
    h2 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    span {
        color: #63c3c4;
    }
    @media screen and (max-width: 900px) {
        font-size: 13px;
        h2 {
            font-size: 18px;
        }
    }
    
    @media screen and (max-width: 750px) {
        font-size: 2.5vw;
        line-height: 3vw;
        font-family:NanumSquare_acR;
        h2 {
            font-size: 3.5vw;
            margin-bottom: 4vw;
        }
        :first-child{
            margin-bottom: 3vw;
        }
    }
`
export const Lasik_sec3 = styled.div`
    background: url(${lasik_sec3_img}) no-repeat;
    background-size: contain;
    width: 100vw;
    height: calc(100vw / 1920 * 1144);
    margin-top: 30px;
`
export const Lasik_sec3_textContainer = styled.div`
    width: 30vw;
    margin-left: 60vw;
    margin-top: 8vw;
    display: flex;
    flex-direction: column;
    color: white;
    h4 {
        font-family: NanumSquare_acB;
        font-size: 2.5vw;
        line-height: 4vw;
    }
    h1 {
        font-family: NanumSquare_acEB;
        font-size: 5.5vw;
    }
`
export const Lasik_sec3_circleContainer = styled.div`
    margin-top: 2vw;
    width: 30vw;
    height: 30vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-content: center;
    justify-content: center;
`
export const Circle = styled.div`
    width: 14vw;
    height: 14vw;
    border-radius: 14vw;
    background-color: #0c5aae;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        font-family: NanumSquare_acEB;
        font-size: 2vw;
        margin-bottom: 1vw;
    }
    span {
        font-family: NanumSquare_acR;
        font-size: 1.4vw;
        line-height: 1.8vw;
    }
`
export const Lasik_sec4 = styled.div`
    width: 70vw;
    font-family: NanumSquare_acEB;
    @media screen and (max-width:750px){
        width:90vw;
    }
`
export const Lasik_sec4_container = styled.div`
    margin-top: 30px;
`
export const Lasik_sec4_title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #707070;
    margin-bottom: 10px;
    h1 {
        font-size: 20px;
    }
    h2 {
        font-size: 20px;
        color: #fc9a59;
    }
    @media screen and (max-width:750px){
        h1{
            font-size: 4vw;
        }
        h2{
            font-size: 4vw;
        }
    }
`
export const Lasik_sec4_ele = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    .green_circle_with_check {
        width: 15px;
        border-radius: 15px;
        height: 15px;
        font-size: 15px;
    }
    span {
        margin-left: 10px;
        font-size: 15px;
        color: #707070;
    }
    @media screen and (max-width: 750px) {
        height: auto;
        margin-top: 2.5vw;
        .green_circle_with_check {
            width: 2.5vw;
            border-radius: 2.5vw;
            height: 2.5vw;
            font-size: 2.5vw;

        }
        span{
            font-size: 2.5vw;
            margin-left:1vw;
        }
    }
`
