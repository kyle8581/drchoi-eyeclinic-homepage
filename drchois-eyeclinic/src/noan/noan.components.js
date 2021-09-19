import styled from 'styled-components'
export const View = styled.div`
    width: 100vw;
    height: 100vh;
    /* overflow-y: scroll; */
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x:hidden;
`
export const NoanContainer = styled.div`
    width: 1000px;
    /* height: auto;
    margin: auto; */
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    @media screen and (max-width: 1000px) {
        width: 700px;
    }
    @media screen and (max-width: 500px) {
        width: 300px;
    }
`
export const IntroductionBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* height: auto; */
    position: relative;
    /* background-color: yellow; */
    color: #707070; 
`
export const Sec2 = styled.img`
    margin-top: 100px;
    width: 1000px;
    align-self: center;
    @media screen and (max-width: 1000px) {
        width: 700px;
    }
    @media screen and (max-width: 500px) {
        width: 100vw;
    }
`
export const Sec3 = styled.img`
    margin-top: 100px;
    width: 500px;
    align-self: center;
    @media screen and (max-width: 1000px) {
        width: 400px;
    }
    @media screen and (max-width: 500px) {
        width: 80vw;
    }
`
export const Sec5 = styled.img`
margin-top: 100px;
    width: 1000px;
    align-self: center;
    @media screen and (max-width: 1000px) {
        width: 700px;
    }
    @media screen and (max-width: 500px) {
        width: 100vw;
    }
    `
export const Sec6 = styled.img`
margin-top: 100px;
    width: 1000px;
    align-self: center;
    @media screen and (max-width: 1000px) {
        width: 700px;
    }
    @media screen and (max-width: 500px) {
        width: 100vw;
    }
    `
export const Sec7 = styled.img`
margin-top: 100px;
    width: 1000px;
    align-self: center;
    @media screen and (max-width: 1000px) {
        width: 700px;
    }
    @media screen and (max-width: 500px) {
        width: 100vw;
    }
    `

export const Title = styled.div`
    font-size: 2rem;
    line-height: 3rem;
    font-family: 'NanumSquare_acEB';
    p:before {
        content: '';
        width: 25px;
        height: 3px;
        background-color: #63c3c4;
        position: absolute;
        left: 0;
        top: -3px;
    }
    @media screen and (max-width: 1000px) {
        font-size: 1.5rem;
        line-height: 2rem;
        p:before{
            width: 20px;
        }
    }
    @media screen and (max-width: 500px) {
        font-size: 1.2rem;
        line-height: 1.5rem;
        p:before{
            width: 15px;
            top: -9px;
        }
    }
`
export const Summary = styled.div`
    font-family: 'NanumSquare_acR';
    font-size: 1.2rem;
    line-height: 20pt;
    margin-top: 20px;
    @media screen and (max-width: 1000px) {
        font-size: 1rem;
        line-height: 2rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        line-height: 1.5rem;
    }
`
export const IntroductionImgBox = styled.img`
    align-self: center;
    margin-top: 30px;
    width: 500px;
    @media screen and (max-width: 1000px) {
        width: 400px;
    }
    @media screen and (max-width: 500px) {
        width: 300px;
    }
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
    height: auto;
`

export const Title2 = styled.div`
    font-family: 'NanumSquare_acB';
    font-size: 25pt;
    color: #707070;
    align-self: flex-start;
    @media screen and (max-width: 500px) {
        font-size: 1.7rem;
    }
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
            width: 2.5vw;
            height: 2.5vw;
            border-radius: 2.5vw;
            p {
                font-size: 2.3vw;
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
        font-size: 2.2vw;
        margin-left: 0;
    }
    @media screen and (max-width: 1000px) and (min-width: 501px) {
        font-size: 1.7vw;
    }
`