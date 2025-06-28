import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
const Slider = ({ images }) => {
  console.log(images);
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full w-full"
      >
        {images?.map((img, index) => (
          <div
            key={index}
            className="h-full w-full flex items-center justify-center"
          >
            <SwiperSlide>
              <img className="w-full h-full object-contain" src={img} alt="" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
