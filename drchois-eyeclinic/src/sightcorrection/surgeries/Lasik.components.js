import styled from 'styled-components/macro'
import { Element } from 'react-scroll'
import lasik_sec1_img from './lasik_sec1_img1.png'

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
    }
    h4 {
        margin-top: 1.5vw;
        font-size: 1.5vw;
        color: #3c92c7;
    }
`
export const Lasik_sec2 = styled.div`
    margin-top: 4rem;
    width: 70vw;
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
`
export const Lasik_sec2_row1_col2_title = styled.div`
    color: #63c3c4;
    font-family: NanumSquare_acEB;
    font-size: 1.5vw;
    /* @media screen and (max-width: 500px) {
        font-size: 4.5vw;
    }
    @media screen and (min-width: 1500px) {
        font-size: 3vw;
    } */
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
    /* @media screen and (max-width: 500px) {
        font-size: 10px;
        line-height: 12px;
    } */
`

export const Lasik_sec2_row1_col3 = styled.img`
    width: 20vw;
    /* @media screen and (max-width: 500px) {
        width: 23vw;
    } */
`

export const Lasik_sec2_row2 = styled.div`
    margin-top: 3rem;
    color: #707070;
`
export const Lasik_sec2_row2_title = styled.div`
    font-family: NanumSquare_acEB;
    font-size: 2vw;
    span {
        color: #63c3c4;
    }
`
export const Lasik_sec2_row2_content = styled.div`
    margin-top: 1vw;
    font-size: 1.5vw;
    width: 100%;
    color: #707070;
    span {
        font-weight: bold;
    }
`
export const Lasik_sec2_row2_img = styled.img`
    width: 100%;
    margin-top: 1vw;
`
export const Lasik_sec2_row3 = styled.div`
    h1 {
        font-size: 2vw;
        color: #707070;
        font-family: NanumSquare_acEB;
    }
    margin-top: 5vw;
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
    @media screen and (max-width: 500px) {
        margin-top: 0.5vw;
        font-size: 9px;
        .green_circle_with_number {
            width: 2.1vw;
            height: 2.2vw;
            border-radius: 2.1vw;
            p {
                font-size: 8px;
            }
        }
    }
`
export const Lasik_sec2_row3_imgTag = styled.div`
    margin-left: 3pt;
    color: #707070;
    font-family: NanumSquare_acR;
`
