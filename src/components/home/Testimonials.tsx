"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Title from "../title/Title";

const TestiMonials = () => {
  const users = [
    {
      question: "What are the best gardening tips for beginners?",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&s",
      name: "Alice Green",
    },
    {
      question: "How to grow vegetables in small spaces?",
      profile:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/User_icon-cp.png/483px-User_icon-cp.png",
      name: "John Doe",
    },
    {
      question: "What are the benefits of organic gardening?",
      profile:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png",
      name: "Samantha Leaf",
    },
  ];

  return (
    <div>
      <Title title="Testimonials" subTitle="What our customer voice say" />
      <div
        className="relative h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://marten-2.myshopify.com/cdn/shop/files/slider-3.jpg?v=1613542903')`,
        }}
      >
        <div className="relative z-10 flex justify-center items-center h-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="w-full max-w-2xl"
          >
            {users.map((user, index) => (
              <SwiperSlide key={index}>
                <div className=" p-6 rounded-lg shadow-md text-center">
                  <Image
                    src={user.profile}
                    alt={user.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                    width={80}
                    height={80}
                  />
                  <h2 className="text-xl font-semibold mb-2 text-[#f85606]">
                    {user.name}
                  </h2>
                  <p className="text-white">{user.question}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestiMonials;
