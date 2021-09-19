import styled from 'styled-components/macro'

export const BackGround = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    margin-top: 116px;
    @media screen and (max-height: 750px) {
        margin-top: 58px;
    }
`
export const Wrapper = styled.div`
    height: 50rem;
    width: 90vw;
    position: absolute;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1401px) {
    top: 8rem;
        right: 0;
    }
    @media screen and (max-width: 1400px) and (min-width: 751px) {
        right: 2rem;
    }
    @media screen and (max-height: 900px) {
        transform: translateY(-50px);
    }
    @media screen and (max-height: 750px) {
        transform: translateY(0);
    }
    /* border : 2px solid rgba(100,0,100, 0.3); */
`

export const NavBar = styled.div`
    height: 4rem;
    /* border: 1px solid rgba(155,155,0, 0.3); */
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #959595;
    @media screen and (max-width: 1400px) {
        height: 3rem;
    }
    @media screen and (max-width: 750px) {
        visibility: hidden;
        cursor: none;
    }
`

export const NavBarButton = styled.div`
    height: 100%;
    width: 9.3rem;
    background-color: ${(p) => (p.toggled ? 'white' : '#e6e6e6')};
    border-top: ${({ toggled }) =>
        toggled ? '1px solid #959595' : '1px solid white'};
    border-bottom: ${({ toggled }) => (toggled ? '1px solid white' : 'none')};
    border-left: ${({ toggled }) => (toggled ? '1px solid #959595' : 'none')};
    border-right: ${({ toggled }) => (toggled ? '1px solid #959595' : 'none')};
    font-size: 1.3rem;
    font-family: NanumSquare_acB;
    color: #707070;
    display: flex;
    text-align: center;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
    transform: translateY(-1px);
    div {
        height: 47%;
        transform: translateY(2px);
    }
    @media screen and (max-width: 1400px) and (min-width: 501px) {
        height: 3rem;
        font-size: 1.1rem;
        width: 8rem;
    }
    a {
        text-decoration: none;
        color: #707070;
    }
`
export const TopBar = styled.div`
    height: 6rem;
    /* border : 1px solid blue; */
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #707070;
    @media screen and (max-width: 1400px) and (min-width: 751px) {
        height: 5rem;
    }

    @media screen and (max-width: 750px) {
        visibility: hidden;
    }
`
export const TopBarTitle = styled.div`
    font-size: 2rem;
    font-family: NanumSquare_acEB;
    font-weight: 1000;
    @media screen and (max-width: 1400px) and (min-width: 501px) {
        font-size: 2.2rem;
    }
`

export const TopBarContent = styled.div`
    height: 100%;
    width: 40rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    margin-left: 2rem;
    @media screen and (max-width: 1400px) and (min-width: 501px) {
        margin-left: 1rem;
    }
`
export const PhoneNumber = styled.div`
    font-size: 1rem;
    color: #707070;
    font-family: NanumSquare_acEB;
    @media screen and (max-width: 1400px) and (min-width: 501px) {
        font-size: 1.1rem;
    }
`
export const Address = styled.div`
    margin-top: 3px;
    font-size: 1rem;
    font-family: NanumSquare_acB;
    height: 1.7rem;
    @media screen and (max-width: 1400px) {
        font-size: 1.1rem;
    }
`
export const PrintButton = styled.div`
    width: 10rem;
    height: 3rem;
    background-color: #747373;
    color: white;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    justify-content: center;
    right: 4rem;
    position: absolute;
    cursor: pointer;
    font-family: NanumSquare_acR;
    @media screen and (max-width: 1400px) and (min-width: 501px) {
        height: 2rem;
        font-size: 0.8rem;
        width: 6rem;
        transform: translateY(-4.5rem);
    }
    @media screen and (max-width: 500px) {
        visibility: hidden;
        cursor: none;
    }
`
export const MapAndText = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    @media screen and (min-width: 751px){
        height: 39.5rem;
    }
    @media screen and (max-width: 750px) {
        position: absolute;
        top: 0;
        /* left: 0; */
        display: flex;
        flex-direction: column;
        width: 100vw;
        /* transform: translate(-40px, -75px); */
    }
`

export const MapImage = styled.div`
    height: 500px;
    width: 500px;
    @media screen and (max-width: 1400px){
        height: 400px;
        width: 400px;
    }
    @media screen and (max-width: 1300px){
        height: 350px;
        width: 350px;
    }
    @media screen and (max-width: 1000px){
        height: 300px;
        width: 300px;
    }
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        height: 50vw;
        width: 100vw;
    }
`

export const WayContainer = styled.div`
    margin-left: 2rem;
    @media screen and (max-width: 1600px){
        /* width: 700px; */
        /* transform: translateX(-8rem); */
    }
    @media screen and (max-width: 1200px){
        /* width: 550px; */
    }
    @media screen and (max-width: 1000px){
        /* width: 550px; */
        /* transform: translateX(-1rem); */
    }
`
export const WayTitle = styled.div`
    font-family: NanumSquare_acEB;
    font-size: 1.5rem;
    color: #747373;
    text-align: left;
    @media screen and (max-width: 1600px) and (min-width: 501px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 1200px) {
        font-size: 1rem;
    }
    @media screen and (max-width: 400px) {
        font-size: 0.7rem;
    }
`
export const MobileEnlargeButton = styled.a`
    width: 96px;
    height: 27px !important;
    margin-top: 1rem;
    margin-bottom: 1rem;
    align-self: center;
    /* height: 1.7rem; */
    background-color: #747373;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    color: white;
    font-family: NanumSquare_acB;
    visibility: collapse;
    cursor: pointer;
    text-decoration: none;
    @media screen and (max-width: 500px) {
        display: flex;
        visibility: visible;
    }
    @media screen and (max-height: 670px) {
        /* margin: 0; */
    }
`
export const MobileAddressContainer = styled.div`
    flex-direction: column;
    text-align: left;
    color: #747373;
    visibility: collapse;
    margin-top: 1rem;
    @media screen and (max-width: 750px) {
        font-size: 0.85rem;
        visibility: visible;
        display: flex;
        margin-left: 2rem;
    }
    @media screen and (max-width: 750px) {
        font-size: 0.5rem;
    }
    /* @media screen and (max-height: 630px) {
        transform: scale(0.9, 0.9) translate(-1.2rem, 0rem);
        width: 100vw;
    }
    @media screen and (max-height: 600px) {
        transform: scale(0.8, 0.8) translate(-1.7rem, 1rem);
    }
    @media screen and (max-height: 550px) {
        transform: scale(0.75, 0.75) translate(-2rem, -0.5rem);
    } */
`
export const MobileAddressContent = styled.div`
    @media screen and (max-width: 750px) {
        
        font-family: NanumSquare_acB;
        color: #747373;
        margin-top: 0.2rem;
    }
`
export const ParkContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #747373;
    @media screen and (max-width: 750px) {
        margin-top: 1rem;
    }
    @media screen and (max-width: 500px) {
        margin-top: 0.5rem;
    }
`
export const ParkContent = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
    align-items:center;
    h1 {
        font-family: NanumSquare_acB;
        font-size: 1.2rem;
        margin-right: 1rem;
    }
    p {
        font-family: NanumSquare_acR;
        font-size: 1.2rem;
    }
    @media screen and (max-width: 1600px) and (min-width: 501px) {
        margin-top: 0.5rem;
        h1 {
            font-family: NanumSquare_acB;
            font-size: 1.2rem;
            margin-right: 1rem;
        }
        p {
            font-family: NanumSquare_acR;
            font-size: 1.2rem;
        }
    }
    @media screen and (max-width: 1200px) {
        h1, p{
            font-size: 0.85rem;
        }
        margin-top: 0.3rem;
    }
    @media screen and (max-width: 500px) {
        margin-top: 0.2rem;

        h1 {
            font-family: NanumSquare_acB;
            font-size: 0.5rem;
            margin-right: 0.5rem;
        }
        p {
            font-family: NanumSquare_acR;
            font-size: 0.5rem;
        }
    }
`

export const SubwayContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #747373;
    margin-top: 1.5rem;
    text-align: left;
    @media screen and (max-width: 1400px){
        margin-top: 1rem;
    }
    @media screen and (max-width: 500px) {
        margin-top: 0.5rem;
    }
`
export const SubwayContent = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    color: #747373;

    h1 {
        font-family: NanumSquare_acB;
        font-size: 1.2rem;
        margin-right: 1rem;
    }
    @media screen and (max-width: 1600px) and (min-width: 501px) {
        h1 {
            font-size: 1.2rem;
        }
    }
    @media screen and (max-width: 1200px) {
        h1 {
            font-size: 0.85rem;
        }
        margin-top: 0.3rem;
    }
    @media screen and (max-width: 500px) {
        margin-top: 0.2rem;
        h1 {
            font-family: NanumSquare_acB;
            font-size: 0.5rem;
            margin-right: 1rem;
        }
    }
`

export const BusContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    color: #747373;
    /* width: 900px; */
    @media screen and (max-width: 1400px) and (min-width: 501px) {
        margin-top: 2rem;
    }
    @media screen and (max-width: 1200px) {
        margin-top: 1rem;
        /* width: 500px; */
    }
    @media screen and (max-width: 500px) {
        margin-top: 0.5rem;
        /* width: 500px; */
    }
`
export const BusContent = styled.div`
    display: grid;
    margin-top: 1rem;
    height: 20rem;
    grid-template-rows: 1fr 1.5fr 1.5fr 1.5fr;
    grid-template-columns: 1fr 4fr;
    grid-gap: 0 1rem;
    @media screen and (max-width: 1400px) and (min-width: 751px) {
        grid-gap: 0 0.1rem;
        grid-template-columns: 1.5fr 8fr;
        height: 18rem;
    }
    @media screen and (max-width: 750px) {
        grid-template-columns: 1.2fr 8fr;
        height: 200px;
        grid-gap: 0 0.5rem;
    }
    @media screen and (max-width: 500px) {
        margin-top: 0.3rem;
        height: 100px;
        grid-gap: 0 0.1rem;
    }
`
export const BusSmallTitle = styled.div`
    color: #747373;
    font-size: 1.4rem;
    font-family: NanumSquare_acB;
    text-align: left;
    .subThree, .subFour{
        width: 100px;
    }
    @media screen and (max-width: 1600px) and (min-width: 501px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 1200px) {
        font-size: 0.85rem;
        .subThree, .subFour{
        width: 80px;
    }
    }
    @media screen and (max-width: 500px) {
        font-size: 0.5rem;
    }
`
export const BusRow = styled.div`
    /* text-align: left; */
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.5rem;
    font-family: NanumSquare_acR;
    p {
        font-size: 1.2rem;
        margin-left: 1rem;
        color: ${({ line }) =>
            line === 'red'
                ? '#d63131'
                : line === 'green'
                ? '#119b2e'
                : line === 'blue'
                ? '#2b56c8'
                : '#747373'};
    }
    .line__num {
        flex: 1;
        text-align: left;
        font-size: 1.2rem;
        margin-left: 1rem;
    }
    .circle,
        .B,
        .G,
        .R {
            transform: scale(0.7, 0.7);
        }
    @media screen and (max-width: 1600px) and (min-width:1201px){
        margin-bottom: 0rem;
        p {
            font-size: 1.2rem;
            margin-left: 0.2rem;
        }
        .line__num {
            font-size: 1.2rem;
            margin-left: 1rem;
        }
        .circle,
        .B,
        .G,
        .R {
            transform: scale(0.7, 0.7);
        }
    }
    @media screen and (max-width: 1200px) {
        p{
            margin-left: 0.1rem;
            font-size: 1rem; 
        }
        .line__num{
            margin-left: 0.5rem;
            font-size: 1rem;
        }
        .circle,
        .B,
        .G,
        .R {
            transform: scale(0.6, 0.6) translateY(-15%);
        }

    }
    @media screen and (max-width: 500px) {
        margin-bottom: 0.1rem;
        p {
            font-size: 0.5rem;
            margin-left: 0rem;
        }
        .line__num {
            font-size: 0.5rem;
            margin-left: 0.5rem;
        }
        .circle,
        .B,
        .G,
        .R {
            transform: scale(0.5, 0.5) translateY(-50%);
        }
    }
`
