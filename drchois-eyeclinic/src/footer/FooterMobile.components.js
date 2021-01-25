import styled from 'styled-components'
import React from 'react'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`;

export const GrayContainer = styled.div`
    width: 100vw;
    height: 35vh;
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
    padding-top: 80px;
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    .title{
        color: #34988a;
        font-size: 1rem;
        font-family: NanumSquare_acB;
    }

`; 
export const Point = styled.div`
    width: 7px;
    height: 1px;
    background-color: #34988a;
    margin: 0.8rem 0;
`;
export const Phone = styled.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    .phone_num{
        font-family: NanumSquare_acEB;
        font-size: 1.1rem;
        color: #707070;
    }
`;
export const OpenClose = styled.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    .day{
        font-family: NanumSquare_acB;
        font-size: 0.8rem;
        color: #707070;
        letter-spacing: 0.4rem;
        width: 70px;

    }

    .launch{
        font-family: NanumSquare_acB;
        color: #707070;
        width: 70px;
        font-size: 0.8rem;
    }
    .time{
        font-family: NanumSquare_acR;
        font-size: 0.8rem;
        color: #707070;
    }
    p{
        display: flex;
        height: 1.3rem;
        flex-direction: row;
    }
`;
export const WhiteContainer = styled.div`
    width: 100vw;
    height: 55vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 260px;
    margin-top: 70px;
    justify-content: space-between;
`;
export const IconLink = styled.a`
    img{
        width: 2.7rem;
    }
`;
export const BottomLetterContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 0.4rem;
    line-height: 1rem;
    margin-top: 80px;
    color: #888888;
`;