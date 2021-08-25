import styled from 'styled-components/macro'

export const ReviewPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`
export const ReviewPage = styled.div`
    width: 100vw;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    max-height: 90%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`
export const ReviewPageWrapper = styled.div`
    width: 600px;
    font-family: NanumSquare_acB;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    @media screen and (min-width: 1001px) {
        width: 1000px;
    }
    @media screen and (max-width: 650px) {
        width: 500px;
        margin-top: 10px;
        font-family: NanumSquare_acB;
    }
    @media screen and (max-width: 500px) {
        width: 350px;
        margin-top: 10px;
        font-family: NanumSquare_acB;
    }
    @media screen and (max-width: 400px){
        width: 300px;
    }
`
export const ReviewPageSec1 = styled.div`
    height: 210px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* @media screen and (max-width: 400px){
        width: 
    } */
`
export const ReviewPageSec1Text = styled.div`
    width: 100%;
    font-size: 15px;
    font-family: NanumSquare_acB;
    color: #707070;
    line-height: 40px;
    span {
        color: #63c3c4;
    }
    h3 {
        font-size: 20px;
        line-height: 25px;
    }
    div {
        margin-top: 15px;
    }
    @media screen and (min-width: 1001px){
        font-size: 20px;
    }
    @media screen and (max-width: 500px) {
        font-size: 12px;
        line-height: 10px;
        p {
            margin: 0 0 0;
        }
        h3 {
            font-size: 12px;
            line-height: 15px;
            margin: 0 0 0;
        }
        div {
            margin-top: 7px;
        }
    }
`
export const ReviewPageSec1Img = styled.img`
    height: 210px;
    width: auto;
    @media screen and (min-width: 1001px){
        height: 250px;
    }
    @media screen and (max-width: 500px) {
        height: 130px;
    }
`
export const ReviewPageSec2 = styled.div`
    font-size: 30px;
    margin-top: 20px;
    color: #707070;
    line-height: 30px;
    span {
        color: #fc8a3f;
    }
    .information {
        margin-top: 5px;
        line-height: 20px;
        display: flex;
        flex-direction: row;
        .sec2_law {
            font-size: 20px;
            margin-left: 0px;
        }
        .green_circle_with_check {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            p {
                font-size: 7px;
            }
        }
        p {
            font-size: 20px;
        }
    }
    @media screen and (max-width: 500px) {
        font-size: 22px;
        .information {
            margin-top: 8px;
            margin-bottom: 8px;
            .green_circle_with_check {
                width: 12px;
                height: 12px;
                border-radius: 12px;
                p {
                    font-size: 5px;
                }
            }
            .sec2_law {
                font-size: 12px;
                margin-left: 5px;
            }
        }
    }
`
export const ListContainer = styled.div`
    margin-top: 50px;
    width: 600px;
    border-top: 2.5px solid #63c3c4;
    border-bottom: 2.5px solid #63c3c4;
    .true {
        border-top: 2px solid #707070;
    }
    @media screen and (max-width: 500px) {
        width: 300px;
    }
`
export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;

    font-family: NanumSquare_acR;
    .select_container {
        border: 1px solid #707070;
        width: auto;
        height: 32px;
        border-radius: 0;
    }
    .true__container {
        width: 146px;
        height: 30px;
        border: 1px solid #707070;
    }
    .true__control {
        border-radius: 0;
        border: none;
        :hover {
            border: none !important;
        }
        :focus {
            border: none;
        }
        height: 30px;
        width: 146px;
        min-height: 30px;
        .true__indicators,
        .true__indicator {
            width: 30px;
            height: 30px;
            svg {
                width: 15px;
                height: 15px;
            }
        }
    }
    .true__control--is-focused {
        border: none;
    }
    .true__indicator-separator {
        display: none;
    }
    .true__indicator {
        background-color: #efefef;
        svg {
            color: #707070;
        }
        border-left: 1px solid #707070;
    }

    .search {
        color: #707070;
        margin-left: 30px;
    }
    .searchContent {
        color: #707070;
        width: 342px;
        border: 1px solid #707070;
    }

    font-size: 15px;
    /* @media screen and (max-width: 500px) {
        .select_container {
            width: 30px;
        }
    } */
`

export const SearchContainer = styled.div`
    width: 80px;
    background-color: #63c3c4;
    cursor: grab;
    display: flex;
    justify-content: center;
    border-top: 1px solid #707070;
    border-right: 1px solid #707070;
    border-bottom: 1px solid #707070;
    :active {
    }
    .searchIcon {
        color: white;
        align-self: center;
    }
`
