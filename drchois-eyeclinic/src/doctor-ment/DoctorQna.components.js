import {BackGrounText} from './BackGroundText'

import styled from 'styled-components';
export const Border = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color:#fff;
`;
export const Wrapper = styled.div`
    display: flex;
    /* border : 1px solid black; */
    align-items:center;
    justify-content:center;
    @media screen and (min-width:501px){
        
        margin-top: 20vh;
        margin-bottom : 10vh;
    }
    @media screen and (max-width :500px){
        margin-top: 8vh;
    }
`;
export const Grid = styled.div`
    display : grid;
    margin : auto;
    @media screen and (min-width:501px){
        grid-template-columns: 1fr 1fr ;
        grid-template-rows : 1fr 1fr 1fr;
    }
    
    @media screen and (max-width : 1920px){
        height:70vh;
        width: 90vw;
        grid-column-gap: 5rem;
        grid-row-gap: 1rem;
    } 
    @media screen and (max-width :500px){
        height:70vh;
        width: 90vw;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        grid-template-columns: 1fr  ;
        grid-template-rows : 1fr 1fr 1fr 1fr 1fr;
    }
    /* div{
        border: 1px solid red;
    } */
`;
export const TitleContainer = styled.div`
    color: #63c3c4;
    text-align: left;
    margin-top: 1.5rem;
    font-weight : 600;
    @media screen and (min-width:501px){
        
        font-size: 2rem;
    }
    @media screen and (max-width:500px){
        font-size: 1.4rem;
    }
`;
// ----------------의사 인터뷰 컴포넌트 ------------
export const QnaContentContianer = styled.div`
    display : grid;
    
    /* border : 1px solid blue; */
    font-family: NanumBarunGothic;
    color : #747373;
    /* background-color:rgba(10,0,10, 0.5); */
    @media screen and (min-width:501px){
        grid-template-columns : 9.5rem 7fr;
        grid-gap: 2rem;
    }
    @media screen and (max-width:500px){
        grid-gap: 1rem;
        grid-template-columns: 1fr 5fr;
    }
`; 
export const DoctorIdentity = styled.div`
    grid-column: 1 / 2;
    align-items : center;
    justify-content : center;
    display : flex;
    flex-direction: column;
    
`

export const DoctorCircleImg = styled.img`
    @media screen and (min-width:501px){
        
        width : 9.5rem;
    }
    @media screen and (max-width:500px){
        width: 4rem;
    }
`;
export const DoctorName = styled.div`
    text-align : center ; 
    
    @media screen and (min-width:501px){
        font-size: 0.9rem;
        margin-top:1rem;
    }
    @media screen and (max-width:500px){
        font-size: 0.2rem;
        margin-top:0.5rem;
    }
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
    @media screen and (max-width:500px){
        font-size: 0.5rem;
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
    @media screen and (max-width:500px){
        transform: scale(0.7,0.7) translate(-0.5rem, -0.5rem);
    }
`;