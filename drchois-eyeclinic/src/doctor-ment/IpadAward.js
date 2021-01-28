import React , {useState} from 'react';
import SwiperCore, {Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';
import {Wrapper, Background, Lamp, Shelf,TextContainer, Title, Par, Atropy, TrophyContainer} from './IpadAward.components'
import AwardAsset from "./doctoraward_image_asset.json";

const AwardSwiper = styled(Swiper)`

    width: 665.59px;
    left: calc(-665.59px/2);
    height: 15rem;
    border : 1px soled red;
    position: absolute;
    bottom: 10vh;
    display:flex;
    align-items:flex-end;
    transform-origin: center;
    transform: translateX(50vw);
    .swiper-wrapper{
        height:10rem;
    }
    .swiper-slide{
        width: 120px !important;
        /* margin-right: 2rem; */
    }
    .swiper-slide-active{
        width: 190px !important;
    }
`;
SwiperCore.use([Autoplay]);
function IpadAward(){
    const [curAward, setCurAward] = useState(-1);
    return(
                <Wrapper>
                <Background src="/doctor-ment/desktop_award_background.png"/>
                <Lamp src="doctor-ment/desktop_lamp.png" alt="lamp"/>
                <Shelf src="doctor-ment/desktop_shelf.png" alt="shelf"/>
                <TextContainer>
                    <Title>
                    Trust in 압구정최안과
                    </Title>
                    <Par>
                        <p>
                        임상 1만 시간 이상, 4만 임상증례를 넘는 풍부한 시력교정수술 경험을 토대로

                        </p>
                        <p>
                            환자의 눈에 가장 적합한 수술만을 집도하며 원칙과 소신을 지킨 진료로

                        </p>
                        <p>
                        믿고 찾아주신 환자들께 ‘결과’로 보여드리겠습니다.
                        </p>
                        
             
                    </Par>
                </TextContainer>
                <TrophyContainer>
                <AwardSwiper
                spaceBetween={0}// 캐러셀 사이의 간격
                slidesPerView={"auto"} // 한 swiper container 안에 보여지는 slide 개수
                // scrollbar={{hide:"true", draggable:"true",snapOnRelease:"false"}}
                touchEventsTarget="wrapper"
                direction="horizontal"
                grabCursor="true"
                loop="true"
                draggable="true"
                
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
                </TrophyContainer>
            </Wrapper>
    );
}
export default IpadAward;