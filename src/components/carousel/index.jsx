import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Card } from "../card";
import { carouselImages } from "./array";
import { Box } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Carousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Box ref={ref} w={"90vw"} h={"auto"} pb={"100px"}>
      <Swiper
        spaceBetween={19}
        slidesPerView={3.5}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          700: {
            slidesPerView: 2.5,
          },
          1000: {
            slidesPerView: 3.5,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        height={"auto"}
        style={{
          transform: isInView ? "none" : "translateY(80px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
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
    </Box>
  );
};
