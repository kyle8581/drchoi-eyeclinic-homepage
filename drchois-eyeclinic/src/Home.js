import React, { useState } from 'react'
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Mousewheel,
} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import firebase from 'firebase/app'
import 'firebase/auth'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import './Home.css'
import Greeting from './Greeting'
import DoctorMent from './doctor-ment/DoctorMent'
import Interior from './Interior'
import Department from './Department'
import TopNav from './TopNav'
import YouTube from './YouTube'
import Map from './map/Map'
import FooterReturn from './footer/FooterReturn'
import FloatingIcon from './icon_components/FloatingIcon'
// install Swiper components

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel])

function Home() {
    function changeFloatShowOnHamburgerClicked() {
        changeFloatShow(!toFloatIconShow)
    }
    let currentActiveSlide = null
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [curSlide, setCurslide] = useState(1)
    const [toFloatIconShow, changeFloatShow] = useState(true)

    return (
        <div>
            <TopNav
                changefloatshow={changeFloatShowOnHamburgerClicked}
                swiper={swiperInstance}
            />
            <FloatingIcon toshow={toFloatIconShow} />
            <Swiper
                useRef={swiperInstance}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onInit={(swiper) => {
                    setSwiperInstance(swiper)
                }}
                onSwiper={(swiper) => {
                    console.log(swiper)
                }}
                onSlideChange={(swiper) => {
                    currentActiveSlide = swiper.realIndex
                    console.log(currentActiveSlide)
                    setCurslide(swiper.realIndex)
                }}
                mousewheel={{ invert: false }}
                touchEventsTarget="wrapper"
                direction="vertical"
                autoHeight="true"
                // touchRatio={0}
            >
                {/* slide 1 : 눈깜빡이는 영상 */}
                <SwiperSlide className="greeting__slide">
                    <Greeting />
                </SwiperSlide>
                <SwiperSlide>
                    <DoctorMent />
                </SwiperSlide>
                {/* slide 3 : 병원 소개 */}
                <SwiperSlide>
                    <Interior curSlide={curSlide} />
                </SwiperSlide>

                <SwiperSlide>
                    <Department />
                </SwiperSlide>

                <SwiperSlide>
                    <YouTube />
                </SwiperSlide>
                {/* slide 6 : 지도, footer */}
                <SwiperSlide>
                    <Map />
                </SwiperSlide>
                <SwiperSlide>
                    <FooterReturn />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Home
