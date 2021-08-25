import styled from 'styled-components/macro'
import backgroundimage from './desktop_sitting.png'
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    z-index: -4;
    position: absolute;
`
export const Background = styled.div`
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    display: table;
    background: url(${backgroundimage}) no-repeat center scroll;
`

export const Title = styled.div`
    font-size: 2rem;
    font-family: NanumSquare_acEB;
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 4rem;
    top: 9rem;
    width: 600px;
    padding-left: 1.5rem;
    /* transform: translate(36rem, 5rem); */
    .green {
        color: #63c3c4;
        font-size: 3rem;
    }
    .gray {
        color: #636363;
        font-size: 1.6rem;
        margin-left: 0.5rem;
    }
`
export const Paragraph = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 600px;
    right: 3.8rem;
    top: 14rem;
    height: 15rem;
    color: #333333;
    span {
        text-align: left;
        font-size: 1.1rem;
        line-height: 1.8rem;
        font-family: NanumBarunGothic;
    }
    .blank {
        width: 100%;
        height: 1rem;
        margin-top: 1rem;
        background-color: transparent;
    }
    .space {
        width: 100%;
        margin-top: 3rem;
    }
    .name {
        font-size: 1rem;
        margin-top: 0.5rem;
    }
    .signature {
        width: 6rem;
        transform: translate(29rem, -4rem);
    }
`
