import styled from 'styled-components/macro'
const Bold = 'NanumSquare_acB'
const EB = 'NanumSquare_acEB'
export const Wrapper = styled.div`
    width: 100vw;
    height: 90vh;
    overflow-y: scroll;
    /* padding: 100px; */
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding-top: 100px;
    /* border: 1px solid red; */
`

export const Container = styled.div`
    display: flex;
    @media screen and (min-width: 1221px) {
        flex-direction: row;
    }
    @media screen and (max-width: 1220px) and (min-width: 501px) {
        flex-direction: column;
        margin-left: 10rem;
    }
    @media screen and (max-width: 500px) {
        transform: scale(0.6) translateY(-20rem);
        flex-direction: column;
        height: 1200px;
    }
    /* border: 1px solid; */
    width: 1200px;
    height: 800px;
    justify-content: space-between;
`
export const NopayGreenBox = styled.div`
    position: relative !important;
    width: 20px;
    height: 4px;
    background-color: #63c3c4;
    transform: translateY(-10px);
`
export const Title = styled.div`
    p {
        font-size: 1.5rem;
        color: #707070;
        font-family: ${Bold};
    }
`
export const Part = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;
    height: 1000px;
    @media screen and (max-width: 1220px) {
        margin-bottom: 6rem;
    }
    /* border: 1px solid magenta; */
`
export const Grid1 = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: 1fr;
    grid-template-rows: 40px 120px 40px 50px 40px 160px 40px 50px 40px 50px 40px 50px;
    border: 1px solid #9d9c9c;
    .green_back {
        background-color: #76afad;
        color: white;
        font-family: ${Bold};
        font-size: 1.2rem;
        text-align: center;
        justify-content: center;
        line-height: 2.5rem;
        border-bottom: 1px solid #9d9c9c;
    }
    .content {
        font-size: 1.1rem;
        font-family: ${Bold};
        color: #555555;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 20px;
        justify-content: space-between;
        div {
            text-align: left;
        }
    }
    .content.single {
        padding: 15px;
    }
`
export const Grid2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr;
    grid-template-rows: 50px repeat(14, 48.1px);
    border: 1px solid #9d9c9c;
    margin-top: 50px;
    height: 722px;
    width: 100%;
    .top {
        background-color: #76afad;
        color: white;
        font-family: ${Bold};
        font-size: 1.2rem;
        grid-row: 1/2;
        text-align: center;
        align-items: center;
        justify-content: center;
        line-height: 3rem;
        border-left: 1px solid #9d9c9c;
        .blank {
            grid-column: 1/2;
            border: none;
        }
    }
    .name {
        grid-column: 2/3;
        font-size: 1.1rem;
        font-family: ${Bold};
    }
    .name > .small {
        font-size: 0.6rem;
    }
    .element {
        color: #494949;
        border-top: 1px solid #9d9c9c;
        border-left: 1px solid #9d9c9c;
        line-height: 3rem;
        text-align: center;
    }
    .price {
        grid-column: 3/4;
        font-size: 1.1rem;
        font-family: ${Bold};
    }
    .row {
        border-top: 1px solid #9d9c9c;
    }
    .type1 {
        grid-column: 1/2;
        color: #004759;
        background-color: #f9fcfa;
        font-size: 1.3rem;
        font-family: ${EB};
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        div {
            height: 1.3rem;
        }
    }
    .type2 {
        color: #004759;
        text-align: center;
        grid-column: 1/2;

        font-family: ${EB};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        background-color: #e6f1ea;
    }
    .row1 {
        grid-row: 2/4;
    }
    .row2 {
        grid-row: 4/5;
    }
    .row3 {
        grid-row: 5/7;
    }
    .row4 {
        grid-row: 7/8;
    }
    .row5 {
        grid-row: 8/12;
    }
    .row6 {
        grid-row: 12/16;
    }
    .row6.type2 {
        border-bottom: 1px solid #9d9c9c;
    }
`
