import React, { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
const fetcher = (url) => fetch(url).then((res) => res.json());
const Albumslider = () => {
  const [thumbsSwiper, setthumbsSwiper] = useState(null);
  const { data, error } = useSWR("http://localhost:4000/albums", fetcher);
  console.log(data);
  if (error) {
    return "failed to fetch data";
  }
  if (!data) {
    return "Loading...";
  }
  return (
    <>
      <Swiper>
        {data.map((albums) => (
          <SwiperSlide key={albums.id}>
            <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
              <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer overflow-hidden">
                <Image
                  src={albums.img}
                  fill
                  priority
                  alt="Album Cover"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 w-full h-[500px]">
                <div className="flex-1 flex flex-col xl:px-12">
                  {albums.tracks?.map((track, index) => (
                    <div className="flex flex-1 w-full " key={index}>
                      <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold">
                        <div className="text-accent text-sm xl:text-lg">
                          {index + 1}
                        </div>
                        <div className="text-sm xl:text-base">{track.name}</div>
                      </div>
                      <div>
                        <AudioPlayer
                          src={track.src}
                          loop
                          preload="none"
                          color="#fff"
                          volume={40}
                          style={{
                            background: "transparent",
                            boxShadow: "none",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          720:{
            slidesPerView:4,
            spaceBetween:30,
          },
          1320:{
            slidesPerView:3,
            spaceBetween:30,
          }
        }}
        onSwiper={setthumbsSwiper}
      >
        {data?.map((thumb, index) => (
          <SwiperSlide key={index}>
            <div className="relative md:w-[195px] w-full md:h-[190px] h-[200px] mt-4">
              <Image
                src={thumb.img}
                fill
                priority
                alt="image"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Albumslider;
