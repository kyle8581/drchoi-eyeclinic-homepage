import React, { useState, useEffect, useContext, lazy, Suspense } from 'react'
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Mousewheel,
} from 'swiper'
import { Placeholder } from 'semantic-ui-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'firebase/auth'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import './Home.css'
import { SlideContext } from './SlideContext'
import TopNav from './TopNav'
import FloatingIcon from './icon_components/FloatingIcon'
// import Interior from './Interior'
import DoctorMent from './doctor-ment/DoctorMent'
// import Department from './Department'
// import PopupElement from './popup/PopupElement'
import Map from './map/Map'
import FooterReturn from './footer/FooterReturn'
// code splititng
// const DoctorMent = lazy(() => import('./doctor-ment/DoctorMent'))
const Interior = lazy(() => import('./Interior'))
const Department = lazy(() => import('./Department'))

// const Map = lazy(() => {
//     import('./map/Map')
// })
// const FooterReturn = lazy(() => {
//     import('./footer/FooterReturn')
// })
// const FloatingIcon = lazy(() => {
//     import('./icon_components/FloatingIcon')
// })
// const PopupElement = lazy(() => (
//     import('./popup/PopupElement')
// ))
// install Swiper components

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel])

function Home() {
    const [allowScroll, setAllowScroll] = useState(true)
    function changeFloatShowOnHamburgerClicked() {
        changeFloatShow(!toFloatIconShow)
    }
    let currentActiveSlide = null
    const [swiperInstance, setSwiperInstance] = useState(null)
    const { curSlide, setCurslide } = useContext(SlideContext)
    useEffect(() => {
        if (swiperInstance !== null) swiperInstance.slideTo(curSlide)
    }, [swiperInstance, curSlide])

    const [toFloatIconShow, changeFloatShow] = useState(true)
    useEffect(() => {
        if (!allowScroll) {
            console.log('disabled scroll')
            setTimeout(function () {
                setAllowScroll(true)
            }, 3000)
            console.log('allow scroll')
        }
    })

    return (
        <div
            onScroll={() => {
                console.log('scroll!!')
            }}
        >
            <TopNav
                changefloatshow={changeFloatShowOnHamburgerClicked}
                swiper={swiperInstance}
                removeBlur={true}
            />

            <FloatingIcon toshow={toFloatIconShow} />

            {/* <PopupElement>ddfd</PopupElement> */}
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

                    setCurslide(swiper.realIndex)
                }}
                mousewheel={{ invert: false, thresholdTime: '1000' }}
                touchEventsTarget="wrapper"
                setAllowScroll={false}
                direction="vertical"
                autoHeight="true"
                longSwipes={false}
                shortSwipes="false"
                preventInteractionOnTransition="true"
                // allowTouchMove={true}
                // touchRatio={0}
            >
                {/* <SwiperSlide className="greeting__slide">
                    <Greeting />
                </SwiperSlide> */}
                <SwiperSlide>
                    <DoctorMent />
                </SwiperSlide>
                {/* slide 3 : 병원 소개 */}
                <SwiperSlide>
                    <Suspense
                        fallback={
                            <Placeholder
                                style={{ width: '100vw', height: '100vh' }}
                            >
                                <Placeholder.Image />
                            </Placeholder>
                        }
                    >
                        <Interior curSlide={curSlide} />
                    </Suspense>
                </SwiperSlide>

                <SwiperSlide>
                <Suspense
                        fallback={
                            <Placeholder
                                style={{ width: '100vw', height: '100vh' }}
                            >
                                <Placeholder.Image />
                            </Placeholder>
                        }
                    >
                        <Department/>
                    </Suspense>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <YouTube />
                </SwiperSlide> */}
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
