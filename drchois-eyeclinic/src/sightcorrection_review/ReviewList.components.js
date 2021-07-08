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
    align-items: center;
`
export const ReviewPageWrapper = styled.div`
    width:1000px;
`
export const ReviewPage_sec1 = styled.div`
    /* width: 80%; */
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
`
export const ReviewPage_sec1_text = styled.div`
    /* width: 600px; */
    font-size: 35px;
    font-family: NanumSquare_acEB;
    color: #707070;
    line-height: 45px;
    span{
        color: #63c3c4;
    }
    h3{
        font-size: 20px;
    }
`
export const ReviewPage_sec1_img = styled.img`
    width: 250px;
`
export const ReviewPage_sec2 = styled.div`
    font-size: 25px;
    color: #707070;
    line-height: 30px;
    font-family: NanumSquare_acEB;
    span{
        color: #fc8a3f;
    }
    .information{
        display:flex;
        flex-direction: row;
        .green_circle_with_check {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            p {
                font-size: 18px;
            }
        }
        p{
            font-size: 20px;
        }
    }
`
export const ListContainer = styled.div`
    border-top: 4px solid #63c3c4;
    border-bottom: 4px solid #63c3c4;
    .true{
        border-top: 2px solid #707070;
    }
`
export const PageNumberIndex = styled.div`
    display: flex;



    flex-direction:row ;
    justify-content: center;
    font-family: ${NanumSquare_acB};
    font-size: 1rem;
    color : #707070;
    margin-bottom: 5rem;
    margin-top: 2rem;
    align-items: center;
    .pageIndex{
        margin: 0 1rem;
        cursor: pointer;
    }
    .true{
        color:#63c3c4
    }


`
export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
`