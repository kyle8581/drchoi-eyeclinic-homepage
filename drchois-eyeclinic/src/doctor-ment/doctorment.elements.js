import styled from 'styled-components'

const containerWidth = "21.5rem";
const font = "NanumBarunGothic";
export const Wrapper = styled.div`
    width: 100vw;
    height:100vh;
    z-index:-2;
`;
export const TextContainer = styled.div`
    position :absolute;
    font-family: ${font};
    display : flex;
    flex-direction: column;
    @media screen and (max-width:2400px){
        top : 50vh;
        left : 8rem;
        width:${containerWidth};
        height: calc(${containerWidth}/7 * 2);
        transform:scale(1.8,1.8) translateX(20%);

    }
    @media screen and (max-width:1800px){
        transform: scale(1.5,1.5) translateX(20%);
    }
    /* @media screen and (max-width:1400px){
       
        left : 6rem;
        width:${containerWidth};
        height: calc(${containerWidth}/7 * 2);
        transform : none;

    } */
    @media screen and (max-width:500px){
        left:1rem;
        top:17rem;
    }
`;

export const TopLetter = styled.div`
    flex : 3;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:500px){
        transform: translateX(-1.5rem) scale(0.9,0.9);
    }
`;
export const QuotationMark = styled.div`
    color : #b2b2b2;
    @media screen and (max-width:5300px){
        font-size:2.2rem;
        transform: ${({order})=>(order===0?"translate(-0.3rem,-0.5rem)":"translate(0,-0.5rem)")};
        /* margin-bottom:100%; */
    }

`;
export const Row = styled.div`
    height: 2rem;
    text-align:${({first}) => (first?'left':'right')};
    font-size: 1.4rem;
    font-family: ${font};
    display: flex;
    color : #747373;
    padding-left: ${({secondrow})=>(secondrow?"3rem":"none")};
    @media screen and (max-width:500px){
        font-size:1rem;
        height:1.1rem;
    }
`;
export const MintLetter = styled.div`
    color : #63c3c4;
    

`;

export const BottomLetter = styled.div`
    flex : 2;
    display:flex;
    font-weight:100;
    color : #5c5c5c;
    @media screen and (max-width:5300px){
        font-size : 0.9rem;
        text-align: left;
        padding-left: 1.5rem;
        align-items:center;
    }
    @media screen and (max-width:500px){
       font-size:0.7rem;
       position:relative;
       top:-7rem;
       transform: translateX(-1rem);
    }

`;

export const DoctorImg = styled.img`
    width: 40rem;
    position:absolute;
    bottom: 0;
    right : 7rem;
    /* pointer-events:none; */

    @media screen and (max-width:1800px){
        width: 40rem;
    }
    @media screen and (max-height:700px){
        width: 30rem;
    }
    @media screen and (max-width:500px){
        width: 18rem;
        right: -3rem;
    }
`;

export const BackGroundLogo = styled.img`
    width: 60rem;
    position : absolute;
    right: 0;
    /* transform: translateX(4rem); */
    z-index:-1;
    /* pointer-events:none; */

    @media screen and (max-width:1800px){
        width: 50rem;
    }
    @media screen and (max-width:500px){
        width:30rem;
        right:-10rem;
        top: 5rem;
    }
`;

export const BackGroundTextContrainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size : 16rem;
    font-family: ${font};
    text-align: right;
    font-weight:800;
    position: absolute;
    left:0;
    top: 4rem;
    z-index:-1;
    color: #f2f2f2;
    @media screen and (max-width:1800px){
        font-size:12rem;
    }
    @media screen and (max-width:1400px){
        display:none;
    }

`;
export const BacGroundText = styled.div`
    
`;