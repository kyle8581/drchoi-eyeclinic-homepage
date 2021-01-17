import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import TopNav from '../TopNav';
import DoctorAward from "./doctor_award"

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);



function DoctorHome() {
  return (
   
    <div>
    <TopNav/>
    <Swiper
    // onInit={(swiper)=>{swiperObject = swiper;}}
    spaceBetween={50}
    slidesPerView={1}
    mousewheel={{invert:false,}}
    touchEventsTarget="wrapper"
    direction="vertical"
    autoHeight="true"
    

  >
    {/* slide 1 : 상패 */}
    <SwiperSlide className="doctorAward">
      <DoctorAward/>
    </SwiperSlide>  
    {/* 원장님 경력 */}
    <SwiperSlide>
        <doctor_main/>
    </SwiperSlide>
    {/* slide 3 : 원장님 인터뷰 */}
    <SwiperSlide>
      
    </SwiperSlide>
      
    
  </Swiper>
 
  </div>
 
  );
}

export default DoctorHome;
