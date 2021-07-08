import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles';

export const LinearGradient = makeStyles({
    root:{
        background: 'linear-gradient(90deg,#7acdcb, #04195a)'
    }
});
export const ForeignContainer = styled.div`
    width:100vw;
    height:100vh;
    overflow-y: scroll;
`
export const ForeignWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    font-family:NanumSquareEB;
`
export const LanguageSelectContainer = styled.div`
    justify-self:flex-start;
`
export const ForeignSec1 = styled.img`
    width: 1000px;
`
export const ForeignSec2 = styled.div`
    width:100vw;
    /* background-color:blue; */
    color:white;
    display:flex;
    justify-content:center;
    align-items: center;
    height: 100px;
`
export const ForeignSec2Text = styled.div`
font-size: 18px;
line-height: 25px;
text-align:center;
    span{
        font-weight:bold;
    }
`
export const ForeignSec3 = styled.div`
    width:100vw;
    height: 200px;
    background-color: #384052;
    display: flex;
    justify-content:center;
    align-items:center;
`
export const ForeignSec3Ele = styled.div`
    width: 420px;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly; 
`
export const ForeignSec3Contents = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    font-size: 12px;
    color:white;
    img{
        width:80%;
        margin-bottom:10px;
    }
`
export const ForeignSec4 = styled.div`
    width:800px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content:center;
`
export const ForeignSec4Ele = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-bottom:20px;
`
export const ForeignSec4Title=styled.div`
        justify-self:center;
        border-top:3px solid #073477;
        border-bottom:3px solid #073477;
        font-size:50px;
`
export const ForeignSec4Information=styled.div`
        margin-top: 10px;
        font-size:15px;
        text-align:center;
        span{
            font-weight:bold;
        }
`
export const ForeignSec4Imgcontainer=styled.div`
    width:80%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content:center;
    align-items:center;
    text-align:center;
    .content{
        /* width:80%; */
        display:flex;
        flex-direction:column;
        justify-content:center;
        img{
            width:70%;
            margin-bottom:10px;
        }
    }
`
export const ForeignSec4Menucontainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
export const ForeignSec4MenuEle=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
export const ForeignSec4MenuTitle=styled.div`
    border-right:5px solid #63c3c4;
    border-left:5px solid #63c3c4;
    color:#63c3c4;
`
export const ForeignSec4Menus=styled.div`
    color:#707070;
`