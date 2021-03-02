import styled from 'styled-components'

export const NoanContainer = styled.div`
    width: 80vw;
    height: 800px;
    margin: auto;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 500px) {
        width: 90vw;
    }
`
export const IntroductionBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: yellow; */
    color: #707070;
`
export const GreenBox = styled.div`
    width: 2rem;
    height: 0.3rem;
    transform: translate(-0.2rem, -0.6rem);
    background-color: #63c3c4;
    margin-bottom: 1vw;
    @media screen and (max-width: 1300px) and (min-width: 501px) {
        height: 0.35rem;
        transform: translate(0.1rem, -0.3rem);
    }
    @media screen and (max-width: 500px) {
        transform: scale(0.7, 0.7) translate(-0.5rem, -0.5rem);
    }
`
export const Title = styled.div`
    font-size: 30pt;
    font-family: 'NanumSquare_acEB';
`
export const Summary = styled.div`
    font-family: 'NanumSquare_acR';
    font-size: 14pt;
    line-height: 20pt;
    margin-top: 20px;
    @media screen and (max-width: 500px) {
        font-size: 3.3vw;
    }
`
export const IntroductionImgBox = styled.img`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

export const ImgBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SurgeryProcess = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    align-items: center;
`

export const Title2 = styled.div`
    font-family: 'NanumSquare_acB';
    font-size: 25pt;
    color: #707070;
    align-self: flex-start;
`
export const SurgeryImgBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: 300px 300px; */
    grid-template-rows: 25vw 25vw;
    grid-column-gap: 10px;
    /* grid-row-gap: 30px; */
    grid-row-gap: 2vw;
    margin-top: 30px;
    @media screen and (max-width: 500px) {
        grid-row-gap: 5vw;
        margin-top: 10vw;
        grid-template-rows: 25vw 25vw;
    }
`
export const SurgeryImg = styled.img`
    width: 40vw;
`

export const TagBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    color: #707070;
    .green_circle_with_number {
        width: 15pt;
        height: 15pt;
        border-radius: 15pt;
        p {
            font-size: 14pt;
        }
    }
    @media screen and (max-width: 500px) {
        .green_circle_with_number {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.8rem;
            p {
                font-size: 0.7rem;
            }
        }
        margin-top: 2vw;
    }
    @media screen and (max-width: 1000px) and (min-width: 501px) {
        .green_circle_with_number {
            width: 1.8vw;
            height: 1.8vw;
            border-radius: 1.8vw;
            p {
                font-size: 1.7vw;
            }
        }
    }
`
export const ClosingImg = styled.img`
    margin-top: 30px;
    width: 70vw;
`

export const ImgTag2 = styled.div`
    font-size: 14pt;
    font-family: 'NanumSquare_acR';
    margin-left: 5px;
    @media screen and (max-width: 500px) {
        font-size: 1vw;
        margin-left: 0;
    }
    @media screen and (max-width: 1000px) and (min-width: 501px) {
        font-size: 1.7vw;
    }
`
