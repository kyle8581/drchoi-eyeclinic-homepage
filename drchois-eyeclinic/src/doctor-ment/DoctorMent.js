import React from 'react'
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Mousewheel} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import DoctorMentSlide1 from './DoctorMentSlide1';
import DoctorAward from "./doctor_award";
import DoctorSayHi from "./DoctorMentSlide3";
import DoctorQna from './DoctorQna'
import SigNatureReturn from './Signature/SignatureReturn'
// install Swiper components
SwiperCore.use([Navigation,Pagination, Scrollbar, A11y, Mousewheel]);



function DoctorMent() {
  
  return (
    <div>
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    touchEventsTarget="wrapper"
    direction="horizontal"
    autoHeight="false"
    draggable="true"
    loop="true"
    >

    {/* slide 1 : 상패 */}
    <SwiperSlide>
        <DoctorMentSlide1/>
    </SwiperSlide>
    <SwiperSlide className="doctorAward">
      <DoctorAward/>
    </SwiperSlide>  
    {/* 원장님 경력 */}
    <SwiperSlide className="doctorBackground" >  
        <DoctorSayHi />
    </SwiperSlide>
    {/* slide 3 : 원장님 인터뷰 */}
    <SwiperSlide>
      <DoctorQna/>
    </SwiperSlide>
    <SwiperSlide>
      <SigNatureReturn/>
    </SwiperSlide>
      
    
  </Swiper>
 
  </div>
 
  );
}

export default DoctorMent;
