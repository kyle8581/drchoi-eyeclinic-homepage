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
`
export const ReviewPageSec1 = styled.div`
    height: 210px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
`
export const ReviewPageSec1Img = styled.img`
    height: 210px;
    width: auto;
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
`
export const ListContainer = styled.div`
    margin-top: 50px;
    width: 600px;
    border-top: 2.5px solid #63c3c4;
    border-bottom: 2.5px solid #63c3c4;
    .true {
        border-top: 2px solid #707070;
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
