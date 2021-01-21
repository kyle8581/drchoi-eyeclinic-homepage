import React from 'react'
import styled from 'styled-components'

const containerWidth = "21.5rem";
const font = "NanumBarunGothic";
export const TextContainer = styled.div`
    position :absolute;
    font-family: ${font};
    display : flex;
    flex-direction: column;
    border : ${({testBorder}) => (testBorder?'1px solid yellow':'none')};
    @media screen and (max-width:2400px){
        top : 40vh;
        left : 6rem;
        width:${containerWidth};
        height: calc(${containerWidth}/7 * 2);
        transform:scale(1.5,1.5) translateX(20%);

    }
    @media screen and (max-width:1400px){
        top : 40vh;
        left : 6rem;
        width:${containerWidth};
        height: calc(${containerWidth}/7 * 2);
        transform : none;

    }
`;

export const TopLetter = styled.div`
    flex : 3;
    display: flex;
    flex-direction: column;
  
    border : ${({testBorder}) => (testBorder?'1px solid red':'none')};

`;
export const QuotationMark = styled.div`
    color : #b2b2b2;
    @media screen and (max-width:5300px){
        font-size:3rem;
        transform: ${({order})=>(order===0?"translate(-0.3rem,-0.5rem)":"translate(0,-0.5rem)")};
        /* margin-bottom:100%; */
    }

`;
export const Row = styled.div`
    height: 2rem;
    border : ${({testBorder}) => (testBorder?'2px solid green':'none')};
    text-align:${({first}) => (first?'left':'right')};
    font-size: 1.4rem;
    font-family: ${font};
    display: flex;
    color : #747373;
    padding-left: ${({secondrow})=>(secondrow?"3rem":"none")};

`;
export const MintLetter = styled.div`
    color : #63c3c4;
    

`;

export const BottomLetter = styled.div`
    flex : 2;
    border : ${({testBorder}) => (testBorder?'1px solid blue':'none')};
    display:flex;
    font-weight:100;
    color : #5c5c5c;
    @media screen and (max-width:5300px){
        font-size : 0.9rem;
        text-align: left;
        padding-left: 1.5rem;
        align-items:center;
    }


`;

export const DoctorImg = styled.img`
    width: 35rem;
    position:absolute;
    bottom: 0;
    right : 3rem;
`;