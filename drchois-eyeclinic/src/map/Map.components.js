import styled from 'styled-components'

export const BackGround = styled.div`
    width: 100vw;
    height:100vh;
    background-color:white;
`;
export const Wrapper = styled.div`
    height: 50rem;
    width:90vw;
    position : absolute;
    right:0;
    top:8rem;
    display:flex;
    flex-direction:column;
    @media screen and (max-height:900px){
        transform: translateY(-50px);
    }
    
    /* border : 2px solid rgba(100,0,100, 0.3); */
`;
export const NavBar = styled.div`
    height: 4rem;
    /* border: 1px solid rgba(155,155,0, 0.3); */
    display:flex;
    flex-direction: row;
    border-bottom: 1px solid #959595;
    @media screen and (max-width:500px){
        visibility: hidden;
        cursor: none;
    }
`;

export const NavBarButton = styled.div`
    height:100%;
    width:9.3rem;
    background-color : ${({toggled})=>(toggled?"white":"#e6e6e6")};
    border-top: ${({toggled})=>(toggled?"1px solid #959595":"1px solid white")};
    border-bottom: ${({toggled})=>(toggled?"1px solid white":"none")};;
    font-size: 1.3rem;
    font-family: NanumSquare_acB;
    color: #707070;
    display: flex;
    text-align: center;
    justify-content:center;
    vertical-align: middle;
    align-items:center;
    transform: translateY(-1px);
    div{
        height: 47%;
        transform: translateY(2px);
    }
    

`;
export const TopBar = styled.div`
    height:6rem;
    /* border : 1px solid blue; */
    display: flex;
    flex-direction: row;
    align-items: center;
    color : #707070;
    @media screen and (max-width:500px){
        visibility: hidden;
      
    }
  

    
`;
export const TopBarTitle = styled.div`
    font-size: 3rem;
    font-family: NanumSquare_acEB;
    font-weight: 1000;

`;

export const TopBarContent = styled.div`
    height: 100%;
    width: 40rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    margin-left: 2rem;

`;
export const PhoneNumber = styled.div`
    font-size: 1.5rem;
    color : #707070;
    font-family: NanumSquare_acEB;


`;
export const Address = styled.div`
margin-top: 3px; 
    font-size: 1.6rem;
    font-family: NanumSquare_acB;
    height: 1.7rem;
`;
export const PrintButton = styled.div`
    width: 10rem;
    height: 3rem;
    background-color: #747373;
    color : white;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    justify-content: center;
    right: 4rem;
    position: absolute;
    cursor: pointer;
    @media screen and (max-width:500px){
        visibility: hidden;
        cursor: none;
    }
`;
export const MapAndText = styled.div`
    /* border: 1px solid red; */
    height: 39.5rem;
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    @media screen and (max-width:500px){
        position: absolute;
        top:0;
        left:0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        transform:translate(-40px, -75px);
    }
`;

export const MapImage = styled.div`
    /* border: 1px solid blue; */
    height: 100%;
    img {
        width: 100%;
        height: 39.5rem;
        max-height: 100%;
    }
    @media screen and (max-width:500px){
        display: flex;
        flex-direction: column;
        height: 35vh;
    }

`; 

export const WayContainer = styled.div`
    /* border: 1px solid green; */
    padding-left: 2.5rem;
    @media screen and (max-width:5200px){
        transform: translateY(-40rem);
    }
    @media screen and  (max-width:500px){
        transform: none;
    }
`;
export const WayTitle = styled.div`
    font-family: NanumSquare_acEB;
    font-size: 2rem;
    color : #747373;
    text-align:left;
   
    @media screen and (max-width:500px){
        font-size: 0.7rem;
    }
`;
export const MobileEnlargeButton =  styled.a`
    width: 6rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    align-self: center;
    height: 1.7rem;
    background-color: #747373;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    color:white;
    font-family: NanumSquare_acB;
    visibility: collapse;
    cursor: pointer;
    text-decoration : none;
    @media screen and (max-width:500px){
        display: flex;
        visibility: visible;
    }
    
`;
export const MobileAddressContainer = styled.div`
    flex-direction: column;
    text-align: left;
    color : #747373;
    visibility: collapse;
    margin-left: 2.5rem;
    @media screen and (max-width:500px){
        visibility: visible;
        display: flex;

    }

`;
export const MobileAddressContent = styled.div`
    @media screen and (max-width:500px){
        visibility: visible;
        font-size: 0.5rem;
        font-family: NanumSquare_acB;
        color : #747373;
        margin-top: 0.5rem;


    }
`;
export const ParkContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    color : #747373;
    @media screen and (max-width:500px){
        margin-top: 1rem;
    }



`;
export const ParkContent = styled.div`
    display :flex;
    flex-direction: row;
    margin-top: 1rem;
    h1{
        font-family: NanumSquare_acB;
        font-size: 1.5rem;
        margin-right: 1rem;
    }
    p {
        font-family: NanumSquare_acR;
        font-size: 1.5rem;
    }
    @media screen and (max-width:500px){
        margin-top: 0.5rem;
        
        h1{
        font-family: NanumSquare_acB;
        font-size: 0.5rem;
        margin-right: 0.5rem;
    }
        p {
            font-family: NanumSquare_acR;
            font-size: 0.5rem;
        }
    }
`;

export const SubwayContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    color : #747373;
    margin-top: 1.5rem;
    text-align: left;
    @media screen and (max-width:500px){
        margin-top:1rem;
    }

`;
export const SubwayContent = styled.div`
    display :flex;
    flex-direction: row;
    margin-top: 1rem;
    color : #747373;

    h1{
        font-family: NanumSquare_acB;
        font-size: 1.5rem;
        margin-right: 1rem;
    }
    @media screen and (max-width:500px){
        margin-top: 0.5rem;
        h1{
        font-family: NanumSquare_acB;
        font-size: 0.5rem;
        margin-right: 1rem;
    }
    }
`;

export const BusContainer = styled.div`
  display :flex;
    flex-direction: column;
    margin-top: 4rem;
    color : #747373;
    @media screen and (max-width:500px){
        margin-top: 1rem;
    }
`;
export const BusContent = styled.div`
    display: grid;
    margin-top: 1rem;
    height: 24rem;
    grid-template-rows: 1fr 2fr 2fr 2fr;
    grid-template-columns: 1fr 8fr;
    grid-gap: 0 2rem;
    @media screen and (max-width:500px){
        grid-template-columns: 1.2fr 8fr;
        height: 200px;
        grid-gap: 0 0.5rem;
    }
`;
export const BusSmallTitle = styled.div`
    color: #747373;
    font-size: 1.4rem;
    font-family: NanumSquare_acB;
    text-align: left;
    @media screen and (max-width:500px){
        font-size: 0.5rem;
    }


`;
export const BusRow = styled.div`
    /* text-align: left; */
    display: flex;
    align-items:flex-start;  
    margin-bottom: 0.5rem;
    p{
        font-size: 1.4rem;
        margin-left: 1rem;
        color: ${({line})=>(line==="red"?"#d63131":(line==="green"?"#119b2e":(line==="blue"?"#2b56c8":"#747373")))};

    }
     .line__num{
        flex: 1;
        text-align:left;
        font-size: 1.4rem;
        margin-left: 1rem;
    }
    @media screen and (max-width:500px){
        margin-bottom: 0;
        p{
            font-size: 0.5rem;
            margin-left: 0rem;
        }
        .line__num{
        font-size: 0.5rem;
        margin-left: 0.5rem;
        }
        .circle, .B, .G, .R{
            transform: scale(0.5,0.5) translateY(-50%);
        }
    }
`;
