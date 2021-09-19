import styled from 'styled-components/macro'

export const ReviewPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`
export const ReviewPage = styled.div`
    /* width: 100vw; */
    margin-top: 50px;
    display: flex;
    justify-content: center;
    ::-webkit-scrollbar {
        display: none;
    }
    @media screen and (max-width:750px){
        margin-top:70px;
        width:750px;
    }
`
export const ReviewPageWrapper = styled.div`
    width: 600px;

    font-family: NanumSquare_acB;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    @media screen and (min-width: 1001px) {
        width: 1000px;
    }
    @media screen and (max-width: 750px) {
        width: 600px;
        margin-top: 10px;
        font-family: NanumSquare_acB;
    }
 
`
export const ReviewPageSec1 = styled.div`
    width:600px;
    height: 210px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 751px){
        width: 1000px;
    }
`
export const ReviewPageSec1Text = styled.div`
    width: 100%;
    font-size: 15px;
    font-family: NanumSquare_acB;
    color: #707070;
    /* line-height: 40px; */
    p{
        font-size: 2rem;
    }
    span {
        color: #63c3c4;
    }
    h3 {
        font-size: 1.25rem;
        line-height: 25px;
        margin-top:0.5rem;
    }
    div {
        margin-top: 15px;
    }
    
    @media screen and (max-width: 750px) {
        font-size: 2.5rem;
        p {
            margin: 0 0 0;
        font-size:2rem;

        }
        h3 {
            font-size: 1.2rem;
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
    @media screen and (max-width: 750px) {
        height: 200px;
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
        margin-top:10px;
        .sec2_law {
            font-size: 20px;
            margin-left: 0px;
            margin-top: 10px;
            margin-bottom:10px;
        }
        .green_circle_with_check {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            margin-right:5px;
            p {
                font-size: 7px;
            }
        }
        p {
            font-size: 20px;
        }
    }
    @media screen and (max-width: 750px) {
        font-size: 1.5rem;
        .information {
            margin-top:0;
            .green_circle_with_check {
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 12px;
                p {
                    font-size: 5px;
                }
            }
            .sec2_law {
                font-size: 1.25rem;
                margin-left: 5px;
                margin-top: 0.5rem;
                margin-bottom:0.3rem;
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
    /* @media screen and (max-width: 500px) {
        width: 300px;
    } */
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
