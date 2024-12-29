"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="md:ml-[230px]">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              className="h-[480px] rounded-md w-full object-cover"
              src="https://i.ibb.co.com/rpHJPw1/Cat-food-2000x1198.webp"
              alt="Banner 1"
              width={1200}
              height={480}
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                Quality Cat Food
              </h1>
              <p className="text-white text-lg md:text-xl max-w-[600px] mb-6">
                Give your furry friend the best meals with our specially curated
                cat food options that ensure health and happiness.
              </p>
              <Link href={"/products"}>
                <button className="button-primary">Shop Now</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <Image
              className="h-[480px] rounded-md w-full object-cover"
              src="https://i.ibb.co.com/B2WKdpM/smalls-cat-food-main-2.jpg"
              alt="Banner 2"
              width={1200}
              height={480}
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                Healthy Meals for Cats
              </h1>
              <p className="text-white text-lg md:text-xl max-w-[600px] mb-6">
                Keep your feline friend in top shape with nutritious and
                delicious meals designed to meet their needs.
              </p>
              <Link href={"/products"}>
                <button className="button-primary">Shop Now</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <Image
              className="h-[480px] rounded-md w-full object-cover"
              src="https://static.vecteezy.com/system/resources/thumbnails/051/955/242/small_2x/a-dog-sitting-beside-a-large-pile-of-dog-food-looking-curiously-at-the-viewer-photo.jpg"
              alt="Banner 3"
              width={1200}
              height={480}
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                Delicious Dog Food
              </h1>
              <p className="text-white text-lg md:text-xl max-w-[600px] mb-6">
                Your canine companion deserves the best! Explore our range of
                tasty and healthy dog food options.
              </p>
              <Link href={"/products"}>
                <button className="button-primary">Shop Now</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <Image
              className="h-[480px] rounded-md w-full object-cover"
              src="https://i.ibb.co.com/Sc1DSCG/is-it-okay-to-hand-feed-birds.webp"
              alt="Banner 4"
              width={1200}
              height={480}
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                Hand-Feeding Birds
              </h1>
              <p className="text-white text-lg md:text-xl max-w-[600px] mb-6">
                Build a bond with your feathered friends by exploring our range
                of safe and nutritious bird feed.
              </p>
              <Link href={"/products"}>
                <button className="button-primary">Shop Now</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
