import styled from 'styled-components/macro'
import { NanumSquareEB, NanumSquare_acB } from '../font'
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
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    border: 1px solid;
`
export const HeaderImg = styled.img`
    margin-left: auto;
    width: 300px;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export const ExtraTitle = styled.div`
    font-size: 1.8rem;
    font-family: NanumSquare_acB;
    color: #707070;
    line-height: 2.5rem;
`
export const ExtraTitleMint = styled(ExtraTitle)`
    color: #63c3c4;
`
export const EBTitle = styled(ExtraTitle)`
    font-family: NanumSquareEB;
`
export const HeaderDetail = styled(ExtraTitle)`
    font-size: 1rem;
`
export const ConsentContainer = styled(Column)``
export const ConsentR1 = styled(ExtraTitle)`
    font-size: 1rem;
    margin-left: 0.5rem;
`
export const ConsentTitle = styled(ExtraTitle)`
    font-size: 1rem;
`
export const ConsentBox = styled.div`
    border-bottom: 2px solid #63c3c4;
    border-top: 2px solid #63c3c4;
    height: 300px;
    width: 900px;
    overflow-y: scroll;
    white-space: pre-line;
    overflow-wrap: normal;
    color: #707070;
    font-family: NanumSquare_ac;
`
export const CheckRow = styled(Row)`
    color: #707070;
    align-items: center;
    font-family: NanumSquare_acB;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    margin-left: 0.5rem;
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
`
