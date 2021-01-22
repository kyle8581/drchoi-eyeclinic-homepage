import {BackGrounText} from './BackGroundText'

import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    margin-top: 20vh;
    margin-bottom : 10vh;
    /* border : 1px solid black; */
    align-items:center;
    justify-content:center;
`;
export const Grid = styled.div`
    display : grid;
    margin : auto;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows : 1fr  1fr 1fr;
    @media screen and (max-width : 1920px){
        height:70vh;
        width: 90vw;
        grid-column-gap: 5rem;
        grid-row-gap: 1rem;
    }
    /* div{
        border: 1px solid red;
    } */
`;
export const TitleContainer = styled.div`
    font-size: 2rem;
    color: #63c3c4;
    text-align: left;
    margin-top: 1.5rem;
    font-weight : 600;
`;
// ----------------의사 인터뷰 컴포넌트 ------------
export const QnaContentContianer = styled.div`
    display : grid;
    grid-template-columns : 9.5rem 7fr;
    /* border : 1px solid blue; */
    font-family: NanumBarunGothic;
    color : #747373;
    /* background-color:rgba(10,0,10, 0.5); */
    grid-gap: 2rem;
`; 
export const DoctorIdentity = styled.div`
    grid-column: 1 / 2;
    align-items : center;
    justify-content : center;
    display : flex;
    flex-direction: column;
    
`

export const DoctorCircleImg = styled.img`
    width : 9.5rem;
`;
export const DoctorName = styled.div`
    text-align : center ; 
    font-size: 0.9rem;
    margin-top:1rem;
    
`;
export const Comment = styled.div`
    grid-column: 2/2;
    text-align : left;
    justify-content: center;
    vertical-align: middle;
    margin:auto;
    font-weight:200;
    @media screen and (max-width:1920px){
    font-size:1.3rem;

    }
    @media screen and (max-width:1550px){
        font-size:1rem;
    }
    @media screen and (max-width:1300px){
        font-size:0.7rem;
        line-height:1rem;
    }

`;
// -------------------------------------------
export const QnaBackGroundText = styled(BackGrounText)`
    margin-left: 3vw;
    margin-top : 0.5vh;
    text-align: left;
    left:0;
    top:4vh;
    z-index: -1;
`;

export const QnaGreenBox = styled.div`
    width: 2rem;
    height : 0.3rem;
    transform : translate(-0.2rem,-0.6rem);
    background-color : #63c3c4;
`;