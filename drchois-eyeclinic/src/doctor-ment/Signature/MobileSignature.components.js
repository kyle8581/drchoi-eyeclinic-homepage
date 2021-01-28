import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    .bg{
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        z-index: -1;
    }
`;

export const Title = styled.div`
    font-size: 1.5rem;
    font-family: NanumSquare_acEB;
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 5rem;
    padding-left: 1.5rem;
    .green{
        color: #63c3c4;
    }
    .white{
        color: #fff;
        margin-left: 0.5rem;
    }

`;
export const Paragraph = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 70vw;
    left: 1.5rem;
    top: 13rem;
    height: 15rem;
    color: #fff;
    span {
        text-align: left;
        font-size: 0.7rem;
        line-height: 1rem;
        font-family: NanumBarunGothic

    }
    .blank{
        width: 100%;
        height: 0.7rem;
        margin-top: 1rem;
        background-color: transparent;
    }
    .space{
        width: 100%;
        margin-top: 3rem;
    }
    .signature{
        width: 6rem;
    }
`;