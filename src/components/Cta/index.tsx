
import React from "react";
import {  Image,Link as ChakraLink} from '@chakra-ui/react';
import Link from 'next/link'
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
  
  const continentes = ['europa','america-do-norte','america-do-sul','asia','africa','oceania']
  
  
  return (
    <Swiper 
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      className="mySwiper">
      
      {
        continentes.map(elemento => (
          <SwiperSlide>
            <ChakraLink href={`/Continente/${elemento}`}>
          
                <Image 
                  h="600"
                  w="100%"
                  src={`/images/${elemento}.jpg`}
                  alt="Europa"
                />
            
            </ChakraLink>
           </SwiperSlide>

        ))
      }
  </Swiper>
    
  )
}