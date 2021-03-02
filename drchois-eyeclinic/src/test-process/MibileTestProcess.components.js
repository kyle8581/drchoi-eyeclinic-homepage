import styled from 'styled-components/macro'
// import { Circle } from '../icon_components/GreenCircleWithNumber.components'
import background1 from './mobile-images/background1.png'
import background2 from './mobile-images/background2.png'
import vertical_line from './mobile-images/vertical_line.png'
import circle1 from './mobile-images/circleimg1.png'
import circle2 from './mobile-images/circleimg2.png'
import circle3 from './mobile-images/circleimg3.png'
import circle4 from './mobile-images/circleimg4.png'
import circle5 from './mobile-images/circleimg5.png'
import {
    Process,
    ProcessDescription,
    SlideButton,
} from './DesktopTestProcess.components'
// import background2 from './mobile-images/background2.png'
const B = 'NanumSquare_acB'
const R = 'NanumSquare_acR'
const EB = 'NanumSquare_acEB'
export const MobileView = styled.div`
    width: 100vw;
    height: 100vh;

    overflow-y: scroll;
`
export const Section1 = styled.div`
    width: 80vw;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 8rem;
    margin-bottom: 5rem;
    /* border: 1px solid; */
    div {
        color: #4d4d4d;
        width: 100%;
    }
    .title1 {
        font-size: 2em;
        font-family: ${R};
        line-height: 2.5rem;
    }
    .title2 {
        font-size: 2rem;
        font-family: ${EB};
        line-height: 2.5rem;
        margin-bottom: 1rem;
    }
    .par {
        font-family: ${R};
        font-size: 1rem;
        white-space: pre-wrap;
        line-height: 1.4rem;
    }
`
export const Background1 = styled.div`
    background: url(${background1}) no-repeat;
    background-size: contain;
    width: 100vw;
    height: calc(100vw / 750 * 738);
    /* border: 1px solid; */
    /* margin-bottom: 5rem; */
`
export const Section2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    /* border: 1px solid; */
    .title {
        display: flex;
        flex-direction: column;
    }
    .row {
        display: flex;
        flex-direction: row;
        font-size: 2rem;
        font-family: ${EB};
        color: #707070;
    }
    .orange {
        color: #f58e4e;
    }
`
export const Section3 = styled.div`
    margin-top: 5rem;
    width: 90vw;
    background: url(${vertical_line}) no-repeat center;
    background-size: contain;
    height: 990px;
    display: grid;
    position: relative;
    grid-row-gap: 1.4rem 1rem 1rem 1rem 1rem;
    /* grid-template-columns: 1fr 1fr; */
    grid-template-rows: repeat(5, 1fr);
`
export const ProcessRow = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 5.5fr 0.25fr 5.5fr;
    justify-content: center;
    align-items: center;
    grid-column-gap: 1.5rem;
    .circle {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 1rem;
        border: 2px solid #60b0ec;
        background-color: white;
    }
`

export const ProcessRowText = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    .number {
        font-size: 1.4rem;
        color: #60b0ec;
        font-family: ${EB};
    }
    .title {
        color: #707070;
        font-size: 1.5rem;
        font-family: ${EB};
        margin-bottom: 0.5rem;
    }
    .par {
        font-size: 1rem;
        font-family: ${R};
        color: #707070;
    }
`
export const Circle1 = styled.div`
    background: url(${circle1}) no-repeat center;
    width: 100%;
    height: 100%;
    background-size: contain;
`
export const Circle2 = styled.div`
    background: url(${circle2}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: 100%;
`
export const Circle3 = styled.div`
    background: url(${circle3}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: 100%;
`
export const Circle4 = styled.div`
    background: url(${circle4}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: 100%;
`
export const Circle5 = styled.div`
    background: url(${circle5}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: 100%;
`
export const Section4 = styled.div`
    margin-top: 10rem;
    width: 100vw;
    /* height: auto; */
    display: flex;
    /* margin-bottom: 10rem; */
    align-items: center;
    justify-content: center;
    .swiper-container {
        width: 100vw;
        height: auto;
        /* border: 1px solid; */
    }
    position: relative;
`
export const MobileProcess = styled(Process)`
    width: 100vw;
    height: auto;
`
export const MobileProcessDescription = styled(ProcessDescription)`
    height: 340px;
`
export const MobileSlideButton = styled(SlideButton)`
    top: 50vw;
    ${({ dir }) => (dir === 'left' ? 'left:5vw;' : 'right:5vw;')};
`
export const Background2 = styled.div`
    background: url(${background2}) no-repeat;
    background-size: cover;
    height: calc(100vw / 750 * 1134);
    width: 100vw;
`
