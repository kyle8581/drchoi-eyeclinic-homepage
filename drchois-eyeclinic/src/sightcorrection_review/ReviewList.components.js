import styled from 'styled-components/macro'
import { NanumSquare_acB } from '../font'
export const ReviewPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
`
export const ReviewPage = styled.div`
    width: 100vw;
    margin-top: 50px;
    display: flex;
    justify-content: center;
`
export const ReviewPageWrapper = styled.div`
    width: 1000px;
    font-family: NanumSquare_acEB;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1020px) {
        width: 750px;
        margin-top: 10px;
        font-family: NanumSquare_acB;
    }
`
export const ReviewPage_sec1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1020px) {
        height: 210px;
    }
`
export const ReviewPage_sec1_text = styled.div`
    /* width: 600px; */
    font-size: 35px;
    font-family: NanumSquare_acB;
    color: #707070;
    line-height: 45px;
    span {
        color: #63c3c4;
    }
    h3 {
        font-size: 20px;
    }
    @media screen and (max-width: 1020px) {
        width: 100%;
        line-height: 40px;
        font-size: 20px;
        font-family: NanumSquare_acB;
        font-size: 30px;
        div {
            margin-top: 15px;
        }
        h3 {
            line-height: 25px;
        }
    }
`
export const ReviewPage_sec1_img = styled.img`
    width: 250px;
    @media screen and (max-width: 1020px) {
        height: 210px;
        width: auto;
    }
`
export const ReviewPage_sec2 = styled.div`
    font-size: 25px;
    color: #707070;
    line-height: 30px;
    span {
        color: #fc8a3f;
    }
    .information {
        display: flex;
        flex-direction: row;
        .green_circle_with_check {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            p {
                font-size: 18px;
            }
        }
        p {
            font-size: 20px;
        }
    }
    .writeIcon {
    }
    @media screen and (max-width: 1020px) {
        font-size: 30px;
        margin-top: 20px;
        line-height: 30px;
        .information {
            margin-top: 5px;
            line-height: 20px;
            .sec2_law {
                font-size: 20px;
                margin-left: 0px;
            }
            .green_circle_with_check {
                p {
                    font-size: 7px;
                }
            }
        }
    }
`
export const ListContainer = styled.div`
    margin-top: 50px;
    border-top: 4px solid #63c3c4;
    border-bottom: 4px solid #63c3c4;
    align-self: center;
    .true {
        border-top: 2px solid #707070;
    }
    @media screen and (max-width: 1020px) {
        width: 800px;
        border-top: 2.5px solid #63c3c4;
        border-bottom: 2.5px solid #63c3c4;
    }
    @media screen and (max-width: 750px) {
        width: 600px;
        border-top: 2.5px solid #63c3c4;
        border-bottom: 2.5px solid #63c3c4;
    }
    @media screen and (max-width: 650px) {
        width: 500px;
        border-top: 2.5px solid #63c3c4;
        border-bottom: 2.5px solid #63c3c4;
    }
    @media screen and (max-width: 650px) {
        width: 100vw;
    }
`
export const PageNumberIndex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: ${NanumSquare_acB};
    font-size: 1rem;
    color: #707070;
    margin-bottom: 5rem;
    margin-top: 2rem;
    align-items: center;
    .pageIndex {
        margin: 0 1rem;
        cursor: pointer;
    }
    .true {
        color: #63c3c4;
    }
    svg {
        cursor: pointer;
    }
`
export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;

    font-family: NanumSquare_acR;
    .select_container {
        width: 150px;
        border-radius: 0;
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
    @media screen and (max-width: 1020px) {
        font-size: 15px;
        .select_container {
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
            height: 30px;
            width: 146px;
            min-height: 30px;
            :hover {
                border: none !important;
            }
            :focus {
                border: none;
            }
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
    }
    @media screen and (max-width: 400px){
        font-size: 10px;
        height: 30px;
        .select_container{
            width: 100px;
            height: 32px;
        }
        .true__container{
            height: 26px;
        }
        .true__control {
            width: 90px;
            height: 26px;
        }
    }
`
export const DonwArrowBox = styled.div`
    width: 37.76px;
    height: 37.76px;
    background-color: #efefef;
    color: #707070;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        transform: scale(1.2, 1);
    }
    border-top: 1px solid #707070;
    border-right: 1px solid #707070;
    border-bottom: 1px solid #707070;
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
