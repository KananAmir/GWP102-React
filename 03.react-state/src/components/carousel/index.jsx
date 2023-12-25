import React from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";
const Carousel = () => {
  return (
    <div id="carousel">
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <h3>Fixed-Height Slider</h3>
          <h1>Excellent bouquets for you</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Floral</h3>
          <h1>Excellent bouquets for you</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
