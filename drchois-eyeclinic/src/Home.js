import React , {useState}from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Home.css';
import Greeting from './Greeting'
import DoctorMent from './doctor-ment/DoctorMent'
import Interior from './Interior'
import Department from './Department'
import TopNav from './TopNav';
import YouTube from './YouTube';
import Map from './map/Map';



// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);



function Home() {
  let currentActiveSlide = null;
  const [curSlide, setCurslide] = useState(1);
  // const [slide1Active, setSlide1Active] = useState(false);
  // const [slide2Active, setSlide2Active] = useState(false);
  // const [slide3Active, setSlide3Active] = useState(false);
  // const [slide4Active, setSlide4Active] = useState(false);
  // const [slide5Active, setSlide5Active] = useState(false);
  // const [slide6Active, setSlide6Active] = useState(false);
  return (
   
    <div>
    <TopNav/>
    <Swiper
    // onInit={(swiper)=>{swiperObject = swiper;}}
    spaceBetween={50}
    slidesPerView={1}

    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={(swiper) => {currentActiveSlide=swiper.realIndex;console.log(currentActiveSlide);setCurslide(swiper.realIndex);}}
    mousewheel={{invert:false,}}
    touchEventsTarget="wrapper"
    direction="vertical"
    autoHeight="true"
    // touchRatio={0}
    

  >
    {/* slide 1 : 눈깜빡이는 영상 */}
    <SwiperSlide className="greeting__slide">
      <Greeting/>
    </SwiperSlide>  
    <SwiperSlide>
      <DoctorMent/>
    </SwiperSlide>
    {/* slide 3 : 병원 소개 */}
    <SwiperSlide>
      <Interior curSlide={curSlide}/>  
    </SwiperSlide>
      
    <SwiperSlide><Department/></SwiperSlide>
      
    <SwiperSlide><YouTube/></SwiperSlide>
    {/* slide 6 : 지도, footer */}
    <SwiperSlide>
      <Map/>
    </SwiperSlide>
  </Swiper>
 
  </div>
 
  );
}

export default Home;
