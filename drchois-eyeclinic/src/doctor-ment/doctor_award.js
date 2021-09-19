import React from 'react'
import Media from 'react-media'
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

import './doctor_award.css'
import AwardSlide from './AwardSlide'
import AwardAsset from './doctoraward_image_asset.json'
import MobileAward from './MobileAward'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay])
export const TrophyContainer = ()=>{
    return(
        <div className="trophy__slide__container">
        <Swiper
            spaceBetween={0} // 캐러셀 사이의 간격
            slidesPerView={5} // 한 swiper container 안에 보여지는 slide 개수
            centeredSlides="true"
            width="1075"
            // onSlideChange={(swiper) => {
            //     setCurslide(swiper.realIndex)
            // }}
            // onSlideChange={(swiper) => {
            //     console.log(swiper.params)
            // }}
            touchEventsTarget="wrapper"
            direction="horizontal"
            grabCursor="true"
            loop="true"
            draggable="true"
            autoplay={{ delay: 6000 }}
            speed={400}
        >
            {AwardAsset.map((asset) => (
                <SwiperSlide key={asset.key}>
                    <AwardSlide
                        id={asset.id}
                        src={asset.src}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    )
}
function DoctorAward() {
    return (
        <Media queries={{ small: { maxWidth: 1300 } }}>
            {(matches) =>
                matches.small ? (
                    <MobileAward />
                ) : (
                    <div className="awardPageContainer">
                        <img
                            className="spotlight"
                            src="/doctor/spotlight.webp"
                            alt="Dr.Choi"
                        />
                        <div className="content_wrapper">
                            <div className="text-container">
                                <div className="BigBox1">
                                    Trust in 압구정최안과
                                </div>
                                <div className="BigBox2">
                                    {/* <div className="SmallBox1"> */}
                                    <p>
                                        임상 1만 시간 이상, 4만 임상증례를 넘는
                                        풍부한 시력교정수술 경험을 토대로{' '}
                                    </p>
                                    <p>
                                        환자의 눈에 가장 적합한 수술만을
                                        집도하며 원칙과 소신을 지킨 진료로
                                    </p>
                                    <p>
                                        믿고 찾아주신 환자들께 ‘결과’로
                                        보여드리겠습니다.{' '}
                                    </p>
                                    {/* </div> */}
                                    {/* <div className="SmallBox2">
               
                </div> */}
                                </div>
                            </div>
                           <TrophyContainer/>
                        </div>
                    </div>
                )
            }
        </Media>
    )
}

export default DoctorAward
