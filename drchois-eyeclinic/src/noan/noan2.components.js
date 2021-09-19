import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'NanumSquare_acEB';
    color: #707070;
    width: 1000px;
    margin-top: 80px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    @media screen and (max-width: 1000px) {
        width: 700px;
    }
    @media screen and (max-width: 500px) {
        width: 300px;
    }
`
export const Sec1=styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    position:relative;
    @media screen and (max-width: 1000px) {
        width: 700px;
    }
    @media screen and (max-width: 500px) {
        width: 300px;
    }
`
export const Sec1Title=styled.div`
    font-size: 2rem;
    line-height: 3rem;
    p:before{
        content: "";
  width: 25px;
  height: 3px;
  background-color: #63c3c4;
  position: absolute;
  left: 0;
  top:-3px;
    }
    @media screen and (max-width: 1000px) {
        p:before{
            width: 20px;
        }
        font-size: 1.5rem;
        line-height: 2rem;
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

export const Sec1Content=styled.div`
    margin-top: 10px;
    font-family: 'NanumSquare_acB';
    font-size:18px;
    line-height: 20px;
    @media screen and (max-width: 1000px) {
        font-size: 1rem;
        line-height: 2rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        line-height: 1.5rem;
    }
`

export const Sec1Img=styled.img`
    width: 500px;
    margin-top: 30px;
    align-self: center;
    @media screen and (max-width: 1000px) {
        width: 400px;
    }
    @media screen and (max-width: 500px) {
        width: 300px;
    }
`
export const Sec2=styled.div`
    margin-top: 50px;
`

export const Sec2Title=styled.div`
    font-size: 1.5rem;
    line-height: 2rem;
    @media screen and (max-width: 1000px) {
        font-size: 1.2rem;
        line-height: 2rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`
export const Sec2Content = styled.div`
    margin-top: 10px;
    font-size: 18px;
    line-height: 20px;
    font-family: 'NanumSquare_acB';
    @media screen and (max-width: 1000px) {
        font-size: 1rem;
        line-height: 2rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        line-height: 1.5rem;
    }
`
export const Sec2List = styled.div`
    margin-top: 20px;
`

export const Sec2ListContent = styled.div`
    display: flex;
    flex-direction: row;
    font-family:'NanumSquare_acB';
    font-size: 14px;
    margin-top: 15px;
    span{
        margin-left: 5px;
    }
    @media screen and (max-width: 500px) {
        span{
            font-size: 0.7rem;
            line-height: 1rem;
        }
    }
`
export const Sec3Img = styled.img`
    width: 600px;
    margin-top: 80px;
    align-self: center;
    @media screen and (max-width: 1000px) {
        width: 500px;
    }
    @media screen and (max-width: 500px) {
        width: 300px;
    }
`
export const Sec3 = styled.div`
    margin-top: 80px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`
export const Sec3Title = styled.div`
height:32pt;
font-size: 30pt;
    .blue{
        color:#63c3c4;
    }
    @media screen and (max-width: 1000px) {
        font-size: 1.2rem;
        line-height: 2rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`
export const Sec3SubTitle = styled.div`
margin-top: 10px;
font-size: 19px;
height: 25px;
`
export const Sec3CircleBox = styled.div`
display: flex;
flex-direction: row;
width: 60%;
justify-content: space-between ;

`
export const Sec3Circle = styled.div`
width: 150px;
height: 150px;
background-color: #0e4782;
border-radius: 150px;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
font-size: 18px;
.firstP, .secondP{
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    color:white;
    p{
        line-height: 18px;
        font-family: 'NanumSquare_acR';
        height:auto;
        margin-bottom: 3px;
    }
}
.secondP{
    margin-top: 10px;
}
`
export const Sec3Content = styled.div`
margin-top: 30px;
font-family:NanumSquare_acR;
font-size: 18px;
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
p{
    align-self:center;
    margin-bottom:3px;
}
`
export const Sec4Img = styled.img`

`

export const Sec5 = styled.div`
margin-top:50px;
`

export const Sec5Title = styled.div`
font-size: 30px;
    line-height: 35px;
    @media screen and (max-width: 1000px) {
        font-size: 1.2rem;
        line-height: 2rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 1rem;
        line-height: 1.5rem;
    }
    `

export const Sec5Content = styled.div`
margin-top: 10px;
    font-size: 18px;
    line-height: 20px;
    font-family: 'NanumSquare_acB';
    @media screen and (max-width: 1000px) {
        font-size: 1rem;
        line-height: 2rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        line-height: 1.5rem;
    }
`
export const Sec5List = styled.div`
margin-top: 20px;
`
export const Sec5ListContent = styled.div`
display: flex;
flex-direction: row;
font-family:'NanumSquare_acB';
font-size: 14px;
margin-top: 15px;
span{
    margin-left: 5px;
}
@media screen and (max-width: 500px) {
        span{
            font-size: 0.7rem;
            line-height: 1rem;
        }
    }
`
export const Sec6 = styled.div`
    margin-top: 50px;
    display:flex;
    @media screen and (max-width: 500px) {
    justify-content: center;
    }
`

export const Sec6Title = styled.div`
    
`

export const Sec6ListBox = styled.div`
margin-top: 30px;
img{
    width: 700px;
    margin-top: 50px;
}
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media screen and (max-width: 1000px) {
    img{
        width: 500px;
        margin-top: 30px;
    }
    }
    @media screen and (max-width: 500px) {
        margin-top: 0px;
        img{
        width: 180px;
        margin-top: 40px;
    }
    }
`
export const Sec6ContentBox = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;

`
export const Sec6ContentWrapper = styled.div`
width: 300px;
`
export const Sec6Img = styled.img`
width: 250px;
`
export const Sec6Description = styled.div`
width: 230px;
display:flex;
flex-direction: row;
    font-size: 1rem;
    font-family: NanumSquare_acR;
    span{
        width: 200px;
        margin-left: 10px;
    }
`

export const Sec7 = styled.div`
margin-top: 50px;
margin-bottom: 50px;
`

export const Sec7Title = styled.div`
font-size: 1.5rem;
    @media screen and (max-width: 1000px) {
        font-size: 1.2rem;
        line-height: 2rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 1rem;
        line-height: 1.5rem;
    }
.orange{
    color:#fc893c;
}
`

export const Sec7List = styled.div``

export const Sec7ListComponent = styled.div`
display:flex;
flex-direction: row;
font-family: NanumSquare_acB;
font-size: 1rem;
margin-top: 20px;
span{
        margin-left: 5px;
    }
    @media screen and (max-width: 500px) {
        span{
            font-size: 0.7rem;
            line-height: 1rem;
        }
    }
`