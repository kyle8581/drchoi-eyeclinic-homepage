import styled from 'styled-components/macro'
export const SignUpWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SignupContainer = styled.form`
    margin-top: 58px;
    display: flex;
    flex-direction: column;
    width: 900px;
    @media screen and (max-width:750px){
        width: 80vw;
    }
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
`
export const HeaderImg = styled.img`
    margin-left: auto;
    width: 300px;
    @media screen and (max-width:750px){
        width: 30vw;
        height: calc(30vw*277/300);
    }
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width:750px){
        .green_circle_with_check{
            width: 3vw;
            height: 3vw;
            font-size:2vw;
        }
    }
`
export const ExtraTitle = styled.div`
    font-size: 1.8rem;
    font-family: NanumSquare_acB;
    color: #707070;
    line-height: 2.5rem;
    @media screen and (max-width:750px){
        font-size:0.8rem;
        line-height:1.5rem
    }
    @media screen and (max-width:350px){
        font-size:0.6rem;
    }
`
export const ExtraTitleMint = styled(ExtraTitle)`
    color: #63c3c4;
`
export const EBTitle = styled(ExtraTitle)`
    font-family: NanumSquare_acEB;
`
export const HeaderDetail = styled(ExtraTitle)`
    font-size: 1rem;
    @media screen and (max-width:750px){
        font-size:0.8rem;
    }
`
export const ConsentContainer = styled(Column)``
export const ConsentR1 = styled(ExtraTitle)`
    font-size: 1rem;
    margin-left: 0.5rem;
    @media screen and (max-width:750px){
        font-size:0.8rem;
    }
    @media screen and (max-width:380px){
        font-size:0.6rem;
    }
`
export const ConsentTitle = styled(ExtraTitle)`
    font-size: 1rem;
`
export const ConsentBox = styled.div`
    border-bottom: 3px solid #63c3c4;
    border-top: 3px solid #63c3c4;
    height: 300px;
    width: 900px;
    overflow-y: scroll;
    white-space: pre-line;
    overflow-wrap: normal;
    color: #707070;
    font-family: NanumSquare_ac;
    @media screen and (max-width:750px){
        width: 80vw;
        font-size:0.6rem;
    }
`
export const CheckRow = styled(Row)`
    color: #707070;
    align-items: center;
    font-family: NanumSquare_acB;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    margin-left: 0.5rem;
    @media screen and (max-width:750px){
        font-size:0.8rem;
    }
    @media screen and (max-width:380px){
        font-size:0.7rem;
        input{
            transform:scale(0.6)
        }
        label{
            margin:0 1.5rem 0 0.5rem !important
        }
    }
`
export const PhoneNumberInput = styled.input`
    width:300px;
    height:30px;
    border:1px solid #CCCCCC;
    color:#707070;
    @media screen and (max-width:750px){
        height:25px;
        width:80vw;
    }
`
export const Submit = styled.button`
    width: 150px;
    height: 50px;
    font-family: NanumSquare_acB;
    color: white;
    background-color: #63c3c4;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
    border: none;
    align-self: cetner;
    @media screen and (max-width:750px){
        transform:scale(0.8);
    }
    @media screen and (max-width:380px){
        transform:scale(0.6)
    }
`
