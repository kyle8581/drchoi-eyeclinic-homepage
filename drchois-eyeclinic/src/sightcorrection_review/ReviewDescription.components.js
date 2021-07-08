import styled from 'styled-components/macro'
import {Link} from "react-router-dom"
import {NanumSquare_acB, NanumSquare_acR, NanumSquare_acEB, NanumSquare_acL} from "../font"
export const ReviewContainer = styled.div`
    height: 900px;
    border-top: 4px solid #63c3c4;
    border-bottom: 4px solid #63c3c4;
    display: flex;
    flex-direction: column;
`
export const InfoGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 31fr 46fr 31fr 46fr;
    height: 250px;
    font-size: 1.2rem;
    color: #707070;
`
export const TitleLabel = styled.div`
    grid-area: 1/1/2/2;
    border-bottom: 1px solid #707070;
    font-family : ${NanumSquare_acEB};
    align-items: center;
    display: flex;
    justify-content: center;
`
export const Title = styled.div`
    grid-area: 1/2/2/4;
    border-bottom: 1px solid #707070;
    border-left: 1px solid #707070;
    align-items: center;
    display: flex;
    font-family: ${NanumSquare_acR};
    justify-content: left;
    padding-left: 2rem;
`
export const SurgeryLabel = styled.div`
    grid-area: 2/1/3/2;
    border-bottom: 1px solid #707070;
    font-family : ${NanumSquare_acEB};
    align-items: center;
    display: flex;
    justify-content: center;

`
export const Surgery = styled.div`
    grid-area: 2/2/3/4;
    border-bottom: 1px solid #707070;
    border-left : 1px solid  #707070;
    align-items: center;
    display: flex;
    justify-content: left;
    padding-left: 2rem;
    
    font-family: ${NanumSquare_acB};
`

export const NameLabel = styled.div`
    grid-area: 3/1/4/2;
    font-family : ${NanumSquare_acEB};
    align-items: center;
    display: flex;
    justify-content: center;

`
export const Name = styled.div`
    grid-area: 3/2/4/4;
    border-left : 1px solid #707070;
    align-items: center;
    display: flex;
    justify-content: left;
    padding-left: 2rem;
    font-family: ${NanumSquare_acB};

`
export const AgeLabel = styled.div`
    grid-area: 4/1/5/2;
    border-top: 2px solid #707070;

    font-family : ${NanumSquare_acEB};
    align-items: center;
    display: flex;
    justify-content: center;

`
export const Age = styled.div`
    grid-area: 4/2/5/3;
    border-top: 2px solid #707070;
    border-left: 1px solid #707070;

    align-items: center;
    display: flex;
    justify-content: left;
    padding-left: 2rem;
    font-family: ${NanumSquare_acB};

`

export const SexLabel = styled.div`
    grid-area: 4/3/5/4;
    border-top: 2px solid #707070;
    border-left: 1px solid #707070;

    align-items: center;
    display: flex;
    justify-content: center;
    font-family : ${NanumSquare_acEB};

`
export const Sex = styled.div`
    grid-area: 4/4/5/5;
    border-top: 2px solid #707070;
    border-left: 1px solid #707070;

    align-items: center;
    display: flex;
    justify-content: left;
    padding-left: 2rem;
    font-family: ${NanumSquare_acB};

`

export const LeftSightLabel = styled.div`
    grid-area: 5/1/6/2;
    border-top: 2px solid #707070;
    border-bottom: 2px solid #707070;
    align-items: center;
    display: flex;
    justify-content: center;
    font-family : ${NanumSquare_acEB};

`
export const LeftSight = styled.div`
    grid-area: 5/2/6/3;
    border-top: 2px solid #707070;
    border-left: 1px solid #707070;
    border-bottom: 2px solid #707070;

    align-items: center;
    display: flex;
    justify-content: left;
    padding-left: 2rem;
    font-family: ${NanumSquare_acB};

`
export const RightSightLabel = styled.div`
    grid-area : 5/3/6/4;
    border-top: 2px solid #707070;
    border-left: 1px solid #707070;
    border-bottom: 2px solid #707070;

    align-items: center;
    display: flex;
    justify-content: center;
    font-family : ${NanumSquare_acEB};


`
export const RightSight = styled.div`
    grid-area : 5/4/6/5;
    border-top: 2px solid #707070;
    border-left: 1px solid #707070;
    border-bottom: 2px solid #707070;

    align-items: center;
    display: flex;
    justify-content: left;
    padding-left: 2rem;
    font-family: ${NanumSquare_acB};


`
export const ContentBox = styled.div`
    font-family: ${NanumSquare_acR};
    font-size: 1.2rem;
    padding: 3rem 1.5rem;
    white-space: pre-line;
    color : #707070;
    line-height: 1.4rem;

`
export const ButtonBar = styled.div`
    display: grid;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid #707070;
    border-top : 2px solid #707070;
    margin-top: 2rem;

`
export const ReviewNavigateButton = styled(Link)`
    border : 1px solid #707070;
    color : #707070;
    font-family: ${NanumSquare_acEB};
    font-size: 0.7rem;
    height: 1.5rem;
    align-items: center;
    display: flex;
    text-decoration: none;
    padding: 0.1rem 0.5rem;
    flex-direction: row;
    .leftArrow{
        margin-right: 2.5rem;
    }
    .rightArrow{
        margin-left : 2.5rem;
    }
    :hover{
        background-color:#D6D2C4;
    }


`
export const NavButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`
export const LinkButton = styled(Link)`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${NanumSquare_acB};
    font-size : 1.2rem;
    text-decoration: none;
`
export const ToListButton = styled(LinkButton)`
    color : #707070;
    border : 1px solid #707070;
    width: 100px;
`
export const WriteReviewButton = styled(LinkButton)`
    background-color : #6EC7C8;
    width: 120px;
    color:#FFFFFF;
    border:1px solid #6EC7C8;
    margin-left:1rem;
`
