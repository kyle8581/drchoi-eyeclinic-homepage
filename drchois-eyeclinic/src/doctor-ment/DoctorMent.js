import React, { useState } from 'react'
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Mousewheel,
    Autoplay,
} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import './DoctorMent.css'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import DoctorMentSlide1 from './DoctorMentSlide1'
import DoctorAward from './doctor_award'
import DoctorSayHi from './DoctorMentSlide3'
import DoctorQna from './DoctorQna'
import SigNatureReturn from './Signature/SignatureReturn'
// import './DoctorMent.css'
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay])

function DoctorMent() {
    // const [mentSwiper, setMentSwiper] = useState(null)
    return (
        <div className="doctorContainer">
            {/* <div
                className="leftarrow"
                onClick={() => {
                    mentSwiper.slideTo(mentSwiper.realIndex - 1)
                    console.log(mentSwiper.realIndex)
                }}
            >
                &#60;
            </div>
            <div
                className="rightarrow"
                onClick={() => {
                    mentSwiper.slideTo(mentSwiper.realIndex + 1)
                    console.log(mentSwiper.realIndex)
                }}
            >
                &#62;
            </div> */}
            <Swiper
                // useRef={mentSwiper}
                // onInit={(swiper) => {
                //     setMentSwiper(swiper)
                // }}
                spaceBetween={3}
                slidesPerView={1}
                touchEventsTarget="wrapper"
                direction="horizontal"
                autoHeight="false"
                draggable="true"
                loop="true"
                autoplay={{ delay: 5000 }}
                speed={400}
                grabCursor="true"
            >
                {/* slide 1 : 상패 */}
                <SwiperSlide>
                    <DoctorMentSlide1 />
                </SwiperSlide>
                <SwiperSlide className="doctorAward">
                    <DoctorAward />
                </SwiperSlide>
                {/* 원장님 경력 */}
                <SwiperSlide className="doctorBackground">
                    <DoctorSayHi />
                </SwiperSlide>
                {/* slide 3 : 원장님 인터뷰 */}
                <SwiperSlide>
                    <DoctorQna />
                </SwiperSlide>
                <SwiperSlide>
                    <SigNatureReturn />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default DoctorMent
