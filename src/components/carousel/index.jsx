// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Text, VStack } from "@chakra-ui/react";
import { Card } from "../card";
import { carouselImages } from "./array";

export const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={19}
      slidesPerView={3.5}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      height={"600px"}
      
    >
      <SwiperSlide>
        <Card>{carouselImages[0]}</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>{carouselImages[1]}</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>{carouselImages[2]}</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>{carouselImages[3]}</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>{carouselImages[4]}</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>{carouselImages[5]}</Card>
      </SwiperSlide>
    </Swiper>
  );
};
