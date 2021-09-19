import React from 'react'
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Mousewheel,
} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import './Interior.css'
import InteriorSlide from './InteriorSlide'
import imageAsset from './interior_image_asset.json'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel])

function Interior({ curSlide }) {
    // const prevRef = useRef(null)
    // const nextRef = useRef(null)
    let isActive = false
    // console.log(curSlide)
    if (curSlide === 2) {
        isActive = true
    } else {
        isActive = false
    }
    // console.log(isActive)

    return (
        <div className="slide__3">
            <div className="background__1"></div>
            <div className="background__2"></div>
            <div className="content__wrapper">
                <div className="text__container">
                    <div className={'large__text ' + isActive}>
                        <div>압구정 최안과 둘러보기</div>
                    </div>
                    <div className={'small__text ' + isActive}>
                        <div>
                            환자들의 눈과 마음이 편안해지는 인체공학적 인테리어
                        </div>
                    </div>
                </div>
                <div className="swiper__container">
                    <Swiper
                        onInit={(swiper) => {
                            // swiper.params.navigation.prevEl = prevRef.current
                            // swiper.params.navigation.nextEl = nextRef.current
                            swiper.navigation.init()
                            swiper.navigation.update()
                            }
                        }
                        onmousemove={(e)=>{e.preventPropagation()}}
                        spaceBetween={3}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        touchEventsTarget="wrapper"
                        direction="horizontal"
                        grabCursor="true"
                        loop="true"
                        draggable="true"
                    >
                        {imageAsset.map((asset) => (
                            <SwiperSlide key={asset.key}>
                                <InteriorSlide id={asset.id} src={asset.src} alt="interior img"/>
                            </SwiperSlide>
                        ))}
                        {/* <div ref={nextRef} className="next__button">
                            &#62;
                        </div>
                        <div ref={prevRef} className="prev__button">
                            &#60;
                        </div> */}
                    </Swiper>
                </div>
            </div>
            <div className="bottom__letter">INTERIOR</div>
        </div>
    )
}
export default Interior
