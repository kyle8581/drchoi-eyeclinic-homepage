import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    // background-color: #fff;
    font-family: NanumBarunGothic;
`;
export const Background = styled.img`
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height: 100vh;
`;
export const Lamp = styled.img`
    position: absolute;
    width: 110px;
    left: 0;
    transform-origin: -100% 0;
    transform: translate(45vw,0);

`;
export const Shelf = styled.img`
    position: absolute;
    bottom: 9vh;
    width: 90vw;
    left: 5vw;
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 52vw;
    z-index: 2;
    position : absolute;
    transform: translate(24vw, 24vh);
    align-items:center;
`; 
export const Title = styled.div`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
    color : #636363;
    width: 60vw;
    transform-origin: center;
    font-family:NanumBarunGothic;

`;
export const Par = styled.div`
    width:63vw;
    margin-bottom: 1rem;
    color : #636363;
    font-size : 1.3rem;
    line-height: 1.8rem;
    transform:translateY(2rem);
    font-family:NanumBarunGothic;
`;
export const TrophyContainer = styled.div`
    width: 60vw;
    background-color:pink;
    height: 100px;
    border: 1px solid red;
`;

export const Atropy = styled.img`
    width:
    ${({id, cur}) => (id === cur?"270px; transform: translate(-0.6rem, -4.5rem); margin:0 ;":"150px; transform:translate(1rem); margin:0;")};
    transition : transform 0.4s, width 0.2s;
`;