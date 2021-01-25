import React from 'react';
import styled from 'styled-components'
import SwiperCore, {
    
    Autoplay
  } from "swiper";


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    font-family: NanumBarunGothic;
`;
export const Shelf = styled.img`
    z-index: 1;
    width:100vw;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
`;
export const Lamp = styled.img`
    width:100vw;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    z-index: 0;
`;
export const Blur = styled.img`
    width:100vw;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    z-index: 2;
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 52vw;
    z-index: 2;
    position : absolute;
    transform: translate(24vw, 24vh);
    align-items:center;

`; 
export const Title = styled.div`
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 1.7rem;
    color : #636363;
    width: 60vw;
    transform-origin: center;
`;
export const Par = styled.div`
    color : #636363;
    font-size : 0.8rem;
    line-height: 1.1rem;

`;

export const Atropy = styled.img`
    width:
    ${({id, cur}) => (id === cur?"150px; transform: translate(-0.7rem, -1rem);":"120px")};
    transition : 0.5s;
`;