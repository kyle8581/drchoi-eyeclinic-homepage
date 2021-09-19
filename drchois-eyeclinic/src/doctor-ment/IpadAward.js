import React, { useState } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components/macro'
import {
    Wrapper,
    Background,
    Lamp,
    Shelf,
    TextContainer,
    Title,
    Par,
    Atropy,
} from './IpadAward.components'
import AwardAsset from './doctoraward_image_asset.json'
import useWindowDimensions from '../useWindowDimensions'
import { TrophyContainer } from './doctor_award'
const TrophyContainerWrapper = styled.div`
    width: 100vw;
    position: absolute;
    bottom: 8vh;
    left: 0;
    .swiper-container {
      
        transform: translateX(calc(100vw*(100vw)/1500)*0.5);
    }

`
SwiperCore.use([Autoplay])
function IpadAward() {
    const [curAward, setCurAward] = useState(-1)
    const { width, height } = useWindowDimensions()
    return (
        <Wrapper>
            <Background src="/doctor-ment/desktop_award_background.webp" alt="bg"/>
            <Lamp src="doctor-ment/desktop_lamp.webp" alt="lamp" />
            <Shelf src="doctor-ment/desktop_shelf.webp" alt="shelf" />
            <TextContainer>
                <Title>Trust in 압구정최안과</Title>
                <Par>
                    <p>
                        임상 1만 시간 이상, 4만 임상증례를 넘는 풍부한
                        시력교정수술 경험을 토대로
                    </p>
                    <p>
                        환자의 눈에 가장 적합한 수술만을 집도하며 원칙과 소신을
                        지킨 진료로
                    </p>
                    <p>믿고 찾아주신 환자들께 ‘결과’로 보여드리겠습니다.</p>
                </Par>
            </TextContainer>
            <TrophyContainerWrapper
                style={{
                    transform: 'scale(' + width / 1500 + ') ',
                    transformOrigin: 'center bottom',
                }}
            >
                <TrophyContainer />
            </TrophyContainerWrapper>
            {/* <TrophyContainer>
                <AwardSwiper
                spaceBetween={0}// 캐러셀 사이의 간격
                slidesPerView={"auto"} // 한 swiper container 안에 보여지는 slide 개수
                // scrollbar={{hide:"true", draggable:"true",snapOnRelease:"false"}}
                touchEventsTarget="wrapper"
                direction="horizontal"
                grabCursor="true"
                loop="true"
                loopedSlides={10}
                draggable="true"
                style={{transform:"scale("+(width/1000)+") translateX(75%)", transformOrigin:"center bottom", border:"1px solid"}}
                centeredSlides="true"
                onSlideChange={(swiper)=>{setCurAward(swiper.realIndex); console.log(curAward);}}
                autoplay={{delay: 6000}}>
                    {AwardAsset.map((asset)=>
                    (
                            <SwiperSlide
                            key={asset.key}>
                                <Atropy
                                
                                id={asset.id-1}
                                src={asset.src}
                                cur={curAward}
                                />
                            </SwiperSlide>
                        )
                        )
                    }
                </AwardSwiper>
                </TrophyContainer> */}
        </Wrapper>
    )
}
export default IpadAward
