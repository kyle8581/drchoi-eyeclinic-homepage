// import React from 'react'
import styled from 'styled-components/macro'

export const BlackBackGround = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(10, 10, 10, 0.8);
    visibility: ${({ clicked }) => (clicked ? 'visible' : 'collapse')};
    z-index: 9;
    top: 0;
    left: 0;
    position: absolute;
`
export const SideMenuContainer = styled.div`
    @media screen and (min-width: 501px) {
        width: ${({ clicked }) => (clicked ? '50vw' : '0')};
        min-height: 700px;
        overflow-y: hidden;
    }
    @media screen and (max-width: 500px) {
        visibility: ${({ clicked }) => (clicked ? 'visible' : 'collapse')};
        /* display: ${({ clicked }) => (clicked ? 'block' : 'none')}; */
        width: ${({ clicked }) => (clicked ? '90vw' : '0')};
    }
    height: 100vh;
    top: 0;
    right: 0;
    display: flex;
    position: absolute;
    flex-direction: column;
    /* box-shadow: inset 0 0 0 10px rgba(10,10,10, 0.8) inset 0 0 0 5px rgba(100, 100, 100, 0.5); */
    z-index: 10;
    visibility: ${({ clicked }) => (clicked ? 'visible' : 'collapse')};
    /*transform: ${({ clicked }) =>
        clicked ? 'translateX(0)' : 'translateX(70vw)'};*/
    transition: 0.2s;
    background-color: #fff;
    color: #000;
    /* padding-top: 10rem; */

    a {
        color: #fff;
        font-size: ${({ clicked }) => (clicked ? '1.5rem' : '0px')};
        text-align: left;

        text-decoration: none;
        font-family: NanumSquare_acB;
        line-height: 4rem;
        width: ${({ clicked }) => (clicked ? '100%' : '0px')};
        visibility: ${({ clicked }) => (clicked ? 'visible' : 'collapse')};
    }
    a:hover {
        color: rgba(30, 30, 30, 0.5);
    }
    p:hover {
        color: rgba(30, 30, 30, 0.5);
    }
`
export const MenuContainer1 = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    font-family: NanumSquare_acB;
    position: absolute;

    h1 {
        font-size: 1rem;
        color: #61b8b9;
        margin-bottom: 10px;
    }
    p,
    a {
        font-size: 1.2rem;
        color: #6d6d6d;
        line-height: 2rem;
        cursor: pointer;
    }
    @media screen and (min-width: 501px) {
        left: 70px;
        top: 70px;
    }
    @media screen and (max-width: 500px) {
        left: 50px;
        top: 50px;
    }
`
export const MenuContainer2 = styled.div`
    position: absolute;
    width: 300px;
    display: flex;
    flex-direction: column;
    font-family: NanumSquare_acB;

    .row {
        display: flex;
        flex-direction: row;
        line-height: 2rem;
    }
    h1 {
        font-size: 1rem;
        color: #61b8b9;
        margin-bottom: 20px;
    }
    .center {
        font-family: NanumSquare_acEB;
        font-size: 1.2rem;
        color: #6d6d6d;
    }
    .divider {
        background-color: #6d6d6d;
        width: 2px;
        height: 1rem;
        margin-left: 10px;
        margin-right: 10px;
        transform: translateY(7px);
    }
    p,
    a {
        font-size: 1rem;
        color: #6d6d6d;
        margin-right: 8px;
        width: auto;
        height: 1.2rem;
        line-height: 1.9rem;
    }
    @media screen and (min-width: 501px) {
        left: 70px;
        top: 300px;
    }
    @media screen and (max-width: 500px) {
        left: 50px;
        top: 280px;
    }
`
export const InfoContainer = styled.div`
    position: absolute;

    border-top: 2px solid #61b8b9;
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
    .row {
        font-size: 0.6rem;
        color: #7a7a7a;
        line-height: 1.5rem;
    }
    .phone {
        margin-top: 0.3rem;
        font-size: 0.7rem;
        font-size: 0.8rem;
        line-height: 1rem;
    }
    @media screen and (min-width: 501px) {
        left: 70px;
        bottom: 0px;
    }
    @media screen and (max-width: 500px) {
        left: 50px;
        bottom: 0px;
    }
    @media screen and (max-width: 350px) {
        /* margin-top: 2rem; */
        transform: translateY(2rem);
    }
`
