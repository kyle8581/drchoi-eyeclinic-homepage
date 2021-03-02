import React, { useState } from 'react'
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Mousewheel,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import {
    View,
    Section1,
    Wrapper,
    Section2,
    Section3,
    Process,
    ProcessDescription,
    SlideButton,
    Section4,
} from './DesktopTestProcess.components'
import TopNav from '../TopNav'
import slide1 from './slide1.png'
import slide2 from './slide2.png'
import slide3 from './slide3.png'
import slide4 from './slide4.png'
import slide5 from './slide5.png'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel])
function DesktopTestProcess() {
    const [curProcess, setCurProcess] = useState(0)
    const [processSwiper, setProcessSwiper] = useState(null)

    return (
        <View>
            <TopNav />
            <Wrapper>
                <Section1 />
                <Section2>
                    <div className="title">
                        <div className="gray">압구정최안과에서 </div>
                        <div className="orange">예약</div>
                        <div className="gray">부터 </div>
                        <div className="orange">수술</div>
                        <div className="gray">까지</div>
                    </div>
                    <div className="processimg"></div>
                </Section2>
                <Section3>
                    <SlideButton
                        dir="left"
                        onClick={() => {
                            processSwiper.slideTo(processSwiper.realIndex - 1)
                            console.log(processSwiper.realIndex)
                        }}
                    >
                        &#60;
                    </SlideButton>
                    <SlideButton
                        dir="right"
                        onClick={() => {
                            processSwiper.slideTo(processSwiper.realIndex + 1)
                            // processSwiper.slideTo(curProcess)
                        }}
                    >
                        &#62;
                    </SlideButton>
                    <Swiper
                        useRef={processSwiper}
                        slidesPerView={1}
                        onInit={(swiper) => {
                            setProcessSwiper(swiper)
                        }}
                    >
                        <SwiperSlide>
                            <Process>
                                <img src={slide1} alt="processimg" />
                                <ProcessDescription>
                                    <div className="title">
                                        01. 예약 및 접수
                                    </div>
                                    <div className="par">
                                        <div>
                                            검사 예약을 하기 전, 주의사항을
                                            체크한 다음 전화 또는 인터넷으로
                                            예약합니다.
                                        </div>
                                        <div>
                                            온라인으로 검사를 신청한 경우
                                            병원에서 확인전화를 통해 정확한 시간
                                            예약을 도와드립니다.
                                        </div>
                                        <div>
                                            압구정최안과는 고객님의 편의를
                                            위해서 100% 사전예약제로 진행됩니다.
                                        </div>
                                        <div>
                                            예약된 날짜와 시간에 내원하여
                                            접수데스크에서 확인합니다.
                                        </div>
                                        <div>
                                            접수가 되면 고객님의 인적사항과 함께
                                            사전검사 준비를 위한 차트를
                                            작성합니다.
                                        </div>
                                    </div>
                                </ProcessDescription>
                            </Process>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Process>
                                <img src={slide2} alt="processimg" />
                                <ProcessDescription>
                                    <div className="title">
                                        02. 정밀 시력 검사
                                    </div>
                                    <div className="par">
                                        <div>
                                            담당검안사가 지정되어 10여가지
                                            특수검사 및 51가지
                                            정밀검사를진행합니다.
                                        </div>
                                        <div>
                                            굴절검사, 안압검사, 각막두께검사,
                                            세극등검사, 안저검사 및 각막지형도
                                            등을 검사하고 교정시력을 측정
                                            합니다.
                                        </div>
                                    </div>
                                </ProcessDescription>
                            </Process>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Process>
                                <img src={slide3} alt="processimg" />
                                <ProcessDescription>
                                    <div className="title">03. 수술 상담</div>
                                    <div className="par">
                                        <div>
                                            약 2시간의 정밀검사가 끝나면 검사
                                            결과를 바탕으로 환자에게 가장 적합한
                                            수술방법을 원장선생님과
                                        </div>
                                        <div>
                                            1:1맞춤 상담을 통해서 결정하게
                                            됩니다.
                                        </div>
                                        <div>
                                            이때 수술가능 여부와 수술의 종류,
                                            수술의 원리와 과정에 대한 상담을
                                            진행합니다.
                                        </div>
                                        <div>
                                            수술 당일, 1시간 전에 도착하여, 수술
                                            전 검사를 최종적으로 진행하며, 수술
                                            후 사용할 약 설명을 받습니다.
                                        </div>
                                    </div>
                                </ProcessDescription>
                            </Process>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Process>
                                <img src={slide4} alt="processimg" />
                                <ProcessDescription>
                                    <div className="title">04. 수술 진행</div>
                                    <div className="par">
                                        <div>
                                            수술 전 소독과 함께 주의사항을 안내
                                            받은 후 수술을 시작합니다.
                                        </div>
                                        <div>
                                            라식과 라섹수술은 약 15~20분,
                                            수술종류에 따라 수술 시간은
                                            달라집니다.
                                        </div>
                                        <div>
                                            수술이 진행되는 동안 편안한 마음으로
                                            의료진의 안내에 따라 주시면 수술이
                                            안전하게 끝나게 됩니다.{' '}
                                        </div>
                                    </div>
                                </ProcessDescription>
                            </Process>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Process>
                                <img src={slide5} alt="processimg" />
                                <ProcessDescription>
                                    <div className="title">
                                        05. 수술 후 회복 및 귀가
                                    </div>
                                    <div className="par">
                                        <div>
                                            수술을 받은 후 회복실에서 눈을 감고
                                            편안하게 20~30분 가량 휴식을
                                            취합니다.
                                        </div>
                                        <div>
                                            퇴원 전 원장선생님과 다시 한번
                                            수술상태를 확인하고 수술 후
                                            주의사항을 듣습니다.
                                        </div>
                                        <div>
                                            귀가 후에도 충분한 휴식과 수면을
                                            취하시고 수술 후 꾸준한 관리를 위해
                                            정해진 날짜에 꼭 내원하세요.
                                        </div>
                                    </div>
                                </ProcessDescription>
                            </Process>
                        </SwiperSlide>
                    </Swiper>
                </Section3>
                <Section4 />
            </Wrapper>
        </View>
    )
}

export default DesktopTestProcess
