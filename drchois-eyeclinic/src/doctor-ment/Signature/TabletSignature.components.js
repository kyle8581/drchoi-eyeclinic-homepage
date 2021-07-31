import styled from 'styled-components/macro'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    position: absolute;
    overflow: hidden;
`
export const Background = styled.img`
    position: absolute;

    left: 0;
    top: 0;
    /* 4/3비율 이상 즉 가로가 더 길 때에는 가로 길이에 사진을 맞추고 */
    @media (min-aspect-ratio: 4/3) {
        width: 100vw;
    }
    /* 4/3비율 이하 즉 세로가 더 길 때에는 세로 길이에 사진을 맞춘다 */

    @media (max-aspect-ratio: 4/3) {
        height: 100vh;
    }
`

export const Title = styled.div`
    font-size: 1.5rem;
    font-family: NanumSquare_acEB;
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 10rem;
    top: 9rem;
    width: 400px;
    padding-left: 1.5rem;
    /* transform: translate(36rem, 5rem); */
    .green {
        color: #63c3c4;
        font-size: 2rem;
    }
    .gray {
        color: #636363;
        font-size: 1.2rem;
        transform: translate(0, 0.6rem);
        margin-left: 0.5rem;
    }
`
export const Paragraph = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 400px;
    right: 3.8rem;
    top: 14rem;
    height: 15rem;
    color: #333333;
    span {
        text-align: left;
        font-size: 0.9rem;
        line-height: 1.3rem;
        font-family: NanumBarunGothic;
    }
    .blank {
        width: 100%;
        height: 0.7rem;
        margin-top: 1rem;
        background-color: transparent;
    }
    .space {
        width: 100%;
        margin-top: 3rem;
    }
    .name {
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }
    .signature {
        width: 6rem;
        transform: translate(18.5rem, -4rem);
    }
`
