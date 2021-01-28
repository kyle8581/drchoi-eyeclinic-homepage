// import React from 'react'
import styled from 'styled-components'

export const BlackBackGround = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(10,10,10, 0.8);
    visibility: ${({clicked}) => (clicked?"visible": "collapse")};
    z-index: 11;
    top:0;
    left: 0;
    position: absolute;
`;
export const SideMenuContainer = styled.div`
    width:${({clicked}) => (clicked?"80vw": "0")};
    height:100vh;
    top:0;
    right:0;
    display: flex;
    position: absolute;
    flex-direction: column;
    z-index: 12;
    visibility: ${({clicked}) => (clicked?"visible": "collapse")};
    /*transform: ${({clicked}) => (clicked?"translateX(0)": "translateX(70vw)")};*/
    transition: 0.2s;
    background-color: #63c3c4;
    color: #000;
    /* padding-top: 10rem; */
    div {
        transform : translate(2rem, 10rem);
    }
    a{
        color: #fff;
        font-size:${({clicked}) => (clicked?"1.5rem": "0px")};
        text-align: left;
        
        text-decoration: none;
        font-family: NanumSquare_acB;
        line-height: 4rem;
        width:${({clicked}) => (clicked?"100%": "0px")};
        visibility: ${({clicked}) => (clicked?"visible": "collapse")};
        
        
    }
    a:hover{
        color : rgba(30, 30, 30, 0.5);
        
    }

`;
