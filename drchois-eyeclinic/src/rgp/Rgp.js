import React from 'react'
import { Fragment } from 'react'
import styled from "styled-components/macro"
import TopNav from '../TopNav'
import useWindowDimensions from '../useWindowDimensions'
const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

`
const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top:68px;
    @media screen and (min-width:751px){
        img{
            width: 100vw;
            max-width: 1000px;
        }
    }
    @media screen and (max-width:750px){
        img{
            width:100vw;
        }
    }
`
function Rgp() {
    const {width, height} = useWindowDimensions()
    return (
        <Fragment>
            <Wrapper>
                <TopNav/>
                <Container>
                    {width>750?(
                        <img src="/rgp/rgp_desktop.webp" alt="rgp" />
                    ):(
                        <img src="/rgp/rgp_mobile.webp" alt="rgp" />
                    )}
                </Container>

            </Wrapper>
            
        </Fragment>
    )
}

export default Rgp
