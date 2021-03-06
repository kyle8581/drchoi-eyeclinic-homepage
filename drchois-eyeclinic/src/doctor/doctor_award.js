import React from 'react'
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Mousewheel,
    Autoplay,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

// import './doctor_award.css'
import AwardSlide from './AwardSlide'
import AwardAsset from './doctoraward_image_asset.json'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay])

function DoctorAward() {
    return (
        <div className="awardPageContainer">
            <img
                className="spotlight"
                src="/doctor/spotlight.png"
                alt="Dr.Choi"
            />
            <div className="content_wrapper">
                <div className="text-container">
                    <div className="BigBox1">Trust in 압구정최안과</div>
                    <div className="BigBox2">
                        <div className="SmallBox1">
                            저희 압구정최안과는 확실하게 수술하는 병원으로
                        </div>
                        <div className="SmallBox2">
                            저희 의료진의 치료와 지시사항을 잘 따르기만 하면
                            빠른 시간 내에 완쾌가 됩니다.
                        </div>
                    </div>
                </div>
                <div className="trophy__slide__container">
                    <Swiper
                        spaceBetween={0} // 캐러셀 사이의 간격
                        slidesPerView={'auto'} // 한 swiper container 안에 보여지는 slide 개수
                        // scrollbar={{hide:"true", draggable:"true",snapOnRelease:"false"}}
                        touchEventsTarget="wrapper"
                        direction="horizontal"
                        grabCursor="true"
                        loop="true"
                        loopedSlides={12}
                        draggable="true"
                        centeredSlides="true"
                        autoplay={{ delay: 6000 }}
                        onSlideChange={(swiper) => {
                            console.log('$$$$$$$$$$$$')
                            console.log(swiper.params)
                        }}
                    >
                        {AwardAsset.map((asset) => (
                            <SwiperSlide key={asset.key}>
                                <AwardSlide id={asset.id} src={asset.src} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default DoctorAward
