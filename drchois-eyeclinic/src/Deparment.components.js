import styled from 'styled-components';
// import {Link} from "react-scroll";


export const ShowUp  = styled.div`
.showup{
    position : relative;
opacity : ${({show})=>(show===true?"1":"0")};
cursor : ${({show})=>(show===true?"pointer":"none")};
transition: 0.2s;

color : white;
z-index : 20;
flex-direction:row;
/* align-items: center; */
font-size: 1.5vw;
font-family:NanumSquareBold;
display: flex;
span{
    margin-right: 1rem;
    :hover{
        color: #707070;
    }
}
/* justify-content: space-between;
width: 50%; */
}
@media screen and (min-width:501px){
    .showup{
transform: ${({show})=>(show===true?"translateY(-8rem)":"translateY(-7rem)")};
span{
    transform: translateX(1rem);
}
}
}
@media screen and (max-width:500px){
    .showup{
    transform : ${({show})=>(show===true?"translateY(-5rem)":"translateY(-3rem)")};
    span{
        transform: translateX(0.5rem);
        font-size: 0.5rem;
    }}
}


`;
