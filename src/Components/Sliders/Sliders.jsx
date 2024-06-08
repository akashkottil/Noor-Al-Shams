import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the main CSS file directly
import './Slider.css'


// importing images

import logo from '../../assets/img/Logo/logo.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// banner import

import banner1 from '../../assets/img/banner/banner1.jpg'
import banner2 from '../../assets/img/banner/banner2.jpg'
import banner3 from '../../assets/img/banner/banner3.jpg'
// import banner4 from '../../assets/img/banner/banner4.jpg'
import banner5 from '../../assets/img/banner/banner5.jpg'
import banner6 from '../../assets/img/banner/banner6.jpg'
import banner7 from '../../assets/img/banner/banner7.jpg'
import { Element } from 'react-scroll';

const Sliders = ({ banners }) => {
  
  return (
    <>
    <Element id='home'>
        <div className=' h-screen w-full bg-black absolute z-10 bg-opacity-70'></div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen w-full relative"
        
      >
        <SwiperSlide><img src={banner1} alt="" className=' object-cover h-full w-full'/></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" className=' object-cover h-full w-full' /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" className=' object-cover h-full w-full' /></SwiperSlide>
        {/* <SwiperSlide><img src={banner4} alt="" className=' object-cover h-full w-full'/></SwiperSlide> */}
        <SwiperSlide><img src={banner5} alt="" className=' object-cover h-full w-full'/></SwiperSlide>
        <SwiperSlide><img src={banner6} alt="" className=' object-cover h-full w-full'/></SwiperSlide>
        <SwiperSlide><img src={banner7} alt="" className=' object-cover h-full w-full'/></SwiperSlide>
        
      </Swiper>

      <div className=' text-white  font-serif  flex-col  absolute  px-12 inset-0 flex justify-center items-center z-10 text-xl sm:text-4xl md:text-5xl  xl:text-7xl font-bold text-center animate-gradient '>
        <img src={logo} className='  h-20  w-20' alt="" />
        <h1>Noor Al Shams</h1>
        <h1 > Love Nature Live Better </h1>
        </div>
        <div className=' absolute text-white z-10 top-[85%] inset-0 flex justify-center items-center'>
        <h1 className=' text-center' >Take care of the trees, They will take <br/> care of <span className=' text-green-500 font-bold'>you.</span></h1>
        </div>
        </Element>
    </>
  );
};

export default Sliders;
