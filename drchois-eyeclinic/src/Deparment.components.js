import styled from 'styled-components';
import {Link} from "react-scroll";




export const ShowUp  = styled.div`
position : relative;
visibility : ${({show})=>(show===true?"visible":"hidden")};
color : white;
z-index : 20;
transform: translateY(-8rem);
flex-direction:row;
/* align-items: center; */
font-size: 1.5vw;
font-family:NanumSquareBold;
display: flex;
span{
    margin-right: 1rem;
    transform: translateX(1rem);
}
/* justify-content: space-between;
width: 50%; */
@media all and (max-width:500px){
    visibility:hidden;
}
`;
