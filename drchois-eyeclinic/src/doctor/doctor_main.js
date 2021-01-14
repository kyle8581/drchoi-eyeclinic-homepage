import React,{useRef} from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import AwardSlide from "./AwardSlide";
import imageAsset from "./doctor_image_asset.json";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

function DoctorSayHi() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="container">
      <div className="content_wrapper">
        <div className="text-container">
          <span>대표원장</span>
          <span>최승일</span>
          <div className="doctorComment">
            압구정최안과에서는 대표원장이 직접 고객 맞춤형 진료를 봅니다.
          </div>
        </div>
        <div className="swiper-container">
          <Swiper
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={50}
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
                <AwardSlide id={asset.id} src={asset.src} />
              </SwiperSlide>
            ))}
            <div ref={nextRef} className="next__button">
              &#62;
            </div>
            <div ref={prevRef} className="prev__button">
              &#60;
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default DoctorSayHi;
