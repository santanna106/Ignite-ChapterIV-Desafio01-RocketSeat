
import React, { useRef, useState } from "react";
import { Box, Image} from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./styles.module.css";


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);


export default function Cta() {
  
  
  
  return (

    
    <Swiper 
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      className="mySwiper">
      <SwiperSlide>
        <Image 
           h="600"
           w="100%"
           src="/images/europe.jpg"
           alt="Europa"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
            h="600"
            w="100%"
            src="/images/northAmerica.jpg"
            alt="América do Norte"
          />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
            h="600"
            w="100%"
            src="/images/bahia.jpg"
            alt="América do Sul"
          />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
            h="600"
            w="100%"
            src="/images/asia.jpg"
            alt="Asia"
          />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
            h="600"
            w="100%"
            src="/images/africa.jpg"
            alt="África"
          />
      </SwiperSlide>
      <SwiperSlide>
        <Image 
            h="600"
            w="100%"
            src="/images/oceania.jpg"
            alt="Oceania"
          />
      </SwiperSlide>
     
  </Swiper>
    
  )
}