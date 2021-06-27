import React, { useState, useRef } from 'react'
import Media from 'react-media'
import SwiperCore, { Thumbs } from 'swiper'
import styled from 'styled-components'
import YouTubeAsset from './YouTubeAsset.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import GreenBox from './icon_components/GreenBox'
import UpArrow from './icon_components/UpArrow'
import DownArrow from './icon_components/DownArrow'
import './YouTube.css'

SwiperCore.use([Thumbs])
const width = 560
const height = 315
let youTubeLinks = YouTubeAsset.map((a) => {
    return {
        key: a.key,
        link: (
            <iframe
                width={width}
                height={height}
                src={a.src}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title={a.key}
            ></iframe>
        ),
    }
})
const MobileYoutubeLink = styled.a`
    cursor: pointer;
    position: absolute;
    left: 1rem;
    top: 5rem;
    img {
        width: 8rem;
    }
`
// console.log(youTubeLinks)
function YouTube() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const thumbnailImages = YouTubeAsset.map((e) => {
        return 'https://i.ytimg.com/vi_webp/' + e.key + '/maxresdefault.webp'
    })
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    // console.log(thumbnailImages)
    return (
        <div className="youtube__slide__wrapper">
            <div className="content__wrapper">
                <div className="yt__wrapper">
                    <Swiper
                        thumbs={{ swiper: thumbsSwiper }}
                        slidesPerView={1}
                        spaceBetween={10}
                        watchSlidesProgress="true"
                        watchSlidesVisibility="true"
                        className="youtube__view"
                        loop="true"
                        touchEventsTarget="wrapper"
                    >
                        {youTubeLinks.map((e) => {
                            return <SwiperSlide>{e.link}</SwiperSlide>
                        })}
                    </Swiper>
                    <Swiper
                        onInit={(swiper) => {
                            // swiper.params.navigation.prevEl = prevRef.current
                            // swiper.params.navigation.nextEl = nextRef.current
                            // swiper.navigation.init()
                            // swiper.navigation.update()
                        }}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={window.innerWidth > 500 ? 4 : 0}
                        draggable="true"
                        loop="true"
                        loopedSlides={5}
                        direction={
                            window.innerWidth > 1300 ? 'vertical' : 'horizontal'
                        }
                        slidesPerView={
                            window.innerWidth > 1300
                                ? 4
                                : window.innerWidth > 500
                                ? 5
                                : 3
                        }
                        navigation={{
                            nextEl: '.uparrow',
                            prevEl: '.downarrow',
                        }}
                        watchSlidesVisibility="true"
                        watchSlidesProgress="true"
                        className="youtube__select"
                    >
                        {thumbnailImages.map((e) => {
                            return (
                                <SwiperSlide className="select__slide">
                                    <img src={e} alt="thumbnails" />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className="uparrow" ref={nextRef}>
                        <UpArrow />
                    </div>
                    <div className="downarrow" ref={prevRef}>
                        <DownArrow />
                    </div>
                </div>

                <div className="text__wrapper">
                    <GreenBox />
                    <div className="mobile__youtube__greenbox"></div>

                    <div className="large__text">압구정최안과 유튜브</div>
                    <a
                        className="yt__link"
                        href="https://www.youtube.com/channel/UCfhlcQAfLiY_uhpigIIRfFA"
                    >
                        유튜브채널 바로가기
                    </a>
                    <Media queries={{ mobile: { maxWidth: 500 } }}>
                        {(matches) =>
                            matches.mobile ? (
                                <MobileYoutubeLink href="https://www.youtube.com/channel/UCfhlcQAfLiY_uhpigIIRfFA">
                                    <img
                                        src="/yt_link.png"
                                        alt="youtube link"
                                    />
                                </MobileYoutubeLink>
                            ) : null
                        }
                    </Media>
                </div>
            </div>
        </div>
    )
}
export default YouTube
