import React,{useRef} from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper";
import TopNav from "../TopNav";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import AwardSlide from "./AwardSlide";
import imageAsset from "./doctor_image_asset.json";
import backGroundAsset from "./doctor_background_asset.json";
import DoctorBackgroundStructure from "./DoctorBackgroundStructure";
import './doctor_main.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

function DoctorSayHi() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="doctor_container">
      <TopNav/>
      <div className="content_wrapper">
        <div className="text-container">
          <div className="doctorName">
          <span className="small__text"><div>대표원장</div></span>
          <span className="large__text"><div>최승일</div></span>
          </div>
          <div className="doctorComment">
            압구정최안과에서는 대표원장이 직접 고객 맞춤형 진료를 봅니다.
          </div>
        </div>
        <div className="trophy__slide__container">
          <Swiper
            // onInit={(swiper) => {
            //   swiper.params.navigation.prevEl = prevRef.current;
            //   swiper.params.navigation.nextEl = nextRef.current;
            //   swiper.navigation.init();
            //   swiper.navigation.update();
            // }} //화살표
            spaceBetween={20}// 캐러셀 사이의 간격
            slidesPerView={3} // 한 swiper container 안에 보여지는 slide 개수
            // pagination={{ clickable: true }}
            scrollbar={{hide:"true", draggable:"true",snapOnRelease:"false"}}
            touchEventsTarget="wrapper"
            direction="horizontal"
            grabCursor="true"
            loop="true"
            draggable="true"
            centeredSlides="true"
          >
            {imageAsset.filter((asset,index)=>index<11).map((asset) => (
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
        <div className="doctor-background">
        <div className="education">
          <h3 className="box1">학력</h3>
          <div className="box2">
          <DoctorBackgroundStructure boundary={[0,3]}/>
          </div>
        </div>
        <div className="hospitals">
          <h3 className="box1">압구정최안과의 역사</h3>
          <div className="box2">
          <DoctorBackgroundStructure boundary={[4,9]}/>
          </div>
        </div>
        <div className="career">
          <h3 className="box1">경력</h3>
          <div className="box2">
          <DoctorBackgroundStructure boundary={[10,backGroundAsset.length-1]}/>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorSayHi;
