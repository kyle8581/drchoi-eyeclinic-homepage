import React, { useState } from 'react'
import Media from 'react-media'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'
import {
    Wrapper,
    Shelf,
    Lamp,
    Blur,
    TextContainer,
    Title,
    Par,
    Atropy,
} from './MobileAward.components'
import AwardAsset from './doctoraward_image_asset.json'
import IpadAward from './IpadAward'
const AwardSwiper = styled(Swiper)`
    width: 100vw;
    height: 140px;
    border: 1px soled red;
    position: absolute;
    bottom: 20vh;
`
SwiperCore.use([Autoplay])
function MobileAward() {
    const [curAward, setCurAward] = useState(1)
    return (
        <Media queries={{ mobile: { maxWidth: 500 } }}>
            {(matches) =>
                matches.mobile ? (
                    <Wrapper>
                        <Shelf
                            src="./doctor-ment/mobile_shelf.webp"
                            alt="shelf"
                        />
                        <Blur src="./doctor-ment/mobile_fog.webp" alt="blur" />
                        <Lamp src="./doctor-ment/mobile_lamp.webp" alt="lamp" />
                        <TextContainer>
                            <Title>Trust in 압구정최안과</Title>
                            <Par>
                                {`
                        임상 1만 시간 이상, 4만 임상증례를 넘는 
                        풍부한 시력교정수술 경험을 토대로 
                        환자의 눈에 가장 적합한 수술만을 집도하며 
                        원칙과 소신을 지킨 진료로 믿고 찾아주신 
                        환자들께 ‘결과’로 보여드리겠습니다. 
                        `}
                            </Par>
                        </TextContainer>
                        <AwardSwiper
                            spaceBetween={1} // 캐러셀 사이의 간격
                            slidesPerView={3} // 한 swiper container 안에 보여지는 slide 개수
                            // scrollbar={{hide:"true", draggable:"true",snapOnRelease:"false"}}
                            touchEventsTarget="wrapper"
                            direction="horizontal"
                            grabCursor="true"
                            loop="true"
                            draggable="true"
                            centeredSlides="true"
                            onSlideChange={(swiper) => {
                                setCurAward(swiper.realIndex)
                                console.log(curAward)
                            }}
                            autoplay={{ delay: 6000 }}
                        >
                            {AwardAsset.map((asset) => (
                                <SwiperSlide key={asset.key}>
                                    <Atropy
                                        id={asset.id - 1}
                                        src={asset.src}
                                        cur={curAward}
                                        alt="award"
                                    />
                                </SwiperSlide>
                            ))}
                        </AwardSwiper>
                    </Wrapper>
                ) : (
                    <IpadAward />
                )
            }
        </Media>
    )
}
export default MobileAward
