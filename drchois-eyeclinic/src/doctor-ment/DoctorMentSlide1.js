import React from 'react'
// import styled from 'styled-components'
// import BackgroundImg from '../backgrounds/doctorment-background.png';
import {
    Wrapper,
    TextContainer, 
    TopLetter,
    BottomLetter,
    QuotationMark,
    Row,
    MintLetter,
    DoctorImg,
    BackGroundLogo,
    BackGroundTextContrainer
} from './doctorment.elements'
// const BackGround = styled.div`
//     background-image : url(${BackgroundImg});
//     background-repeat: no-repeat;
//     background-size: 100vw auto;
//     /* background-color: #ee0000; */
//     width:100vw;
//     height:100vh;
//     `;
function DoctorMentSlide1(){
    return(
        <Wrapper>
           <TextContainer testBorder>
                <TopLetter testBorder>
                    <Row testBorder first>
                        <QuotationMark order={0}>&#x201C;</QuotationMark>
                        <MintLetter>
                            안전을 최우선
                        </MintLetter>
                        으로 하는 
                    </Row>
                    
                    <Row secondrow>당신의 주치의 최승일 입니다.<QuotationMark>&#x201D;</QuotationMark></Row>
                </TopLetter>
                <BottomLetter testBorder>
                    의사가 추천하는 무사고 23년차 안과 전문의
                </BottomLetter>
           </TextContainer>
           <DoctorImg src="doctor/slide1_0_background_image.png"/>
            <BackGroundLogo src="doctor/slide1_0_background_logo.png"/>
            <BackGroundTextContrainer>
                <div>TRUST</div>
                <div>IN</div>
            </BackGroundTextContrainer>
        </Wrapper>
    );
}
export default DoctorMentSlide1;

  