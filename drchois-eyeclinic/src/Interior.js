import React, {useRef} from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import InteriorSlide from './InteriorSlide'
import imageAsset from "./interior_image_asset.json"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

function Interior(){
    const prevRef = useRef(null);
    const nextRef = useRef(null); 
    return(
        <div className="slide__3">
        <div className="background__1">
      
        </div>
        <div className="background__2">
        </div>
        <div className="content__wrapper">
          <div className="text__container">
            <div className="point__top"></div>
            <div className="large__text">압구정 최안과 둘러보기</div>
            <div className="small__text">환자만을 위한 공간, 원장님의 섬세함으로 완성된 인테리어</div>

          </div>
          <div className="swiper__container">
            <Swiper

              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{clickable:true}}
              touchEventsTarget="wrapper"
              direction="horizontal"
              grabCursor="true"
              loop="true"
              draggable="true"
              
              >
                  {imageAsset.map((asset)=>(
                      <SwiperSlide
                        key={asset.key}>
                        <InteriorSlide
                        
                        id={asset.id}
                        src={asset.src}
                        />
                      </SwiperSlide>
                    )
                    )
                  }
                  <div ref={nextRef} className="next__button">&#62;</div>
                  <div ref={prevRef}className="prev__button">&#60;</div>
            </Swiper>
          </div>
        </div>
        <div className="bottom__letter">INTERIOR</div>
      
      </div>
    )
}
export default Interior;