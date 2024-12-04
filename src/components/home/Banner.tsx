"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="ml-[230px]">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="h-[480px] rounded-md w-full"
            src="https://i.ibb.co.com/rpHJPw1/Cat-food-2000x1198.webp"
            alt="Banner 1"
            width={1200}
            height={480}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="h-[480px] rounded-md w-full"
            src="https://i.ibb.co.com/B2WKdpM/smalls-cat-food-main-2.jpg"
            alt="Banner 2"
            width={1200}
            height={480}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="h-[480px] rounded-md w-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/051/955/242/small_2x/a-dog-sitting-beside-a-large-pile-of-dog-food-looking-curiously-at-the-viewer-photo.jpg"
            alt="Banner 3"
            width={1200}
            height={480}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-[480px] rounded-md w-full"
            src="https://i.ibb.co.com/Sc1DSCG/is-it-okay-to-hand-feed-birds.webp"
            alt="Banner 3"
            width={1200}
            height={480}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
