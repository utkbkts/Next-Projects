"use client";
import Image from "next/image";
import { RiMap2Fill } from "react-icons/ri";
import image1 from "../../../public/assets/events/singer.png";
import { motion } from "framer-motion";
import { FadeIn } from "../../../variants";
const EventBox = ({ events }) => {
  return (
    <motion.div
      variants={FadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-secondary/60 rounded-[10px] xl:p-12 relative flex"
    >
      <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
        <div className="hidden xl:flex w-[400px]">
          <Image
            src={image1}
            width={350}
            height={490}
            priority
            quality={100}
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 bg-purple-400/10 h-[500px] gap-12 flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10 ">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col xl:flex-row items-center justify-between gap-y-12 bg-pink-400/10 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b border-white/10 pb-10 xl:pt-3 xl:pb-3 last-of-type:border-none first-of-type:pt-0"
          >
            <div className="flex flex-col xl:flex-row items-center">
              <div className="flex flex-col justify-center items-center leading-tight w-[90px] mb-4 xl:mb-0 ">
                <div className="text-[44px] font-black text-accent">
                  {event.date.day}
                </div>
                <div className="text-[20px] font-extrabold">
                  {event.date.month}
                </div>
              </div>
              <div className=" w-64 flex flex-col gap-y-2">
                <div className="text-lg leading-none font-bold">{`${event.location.city}, ${event.location.country}`}</div>
                <div className="flex items-center gap-x-1 justify-center xl:justify-start">
                  <div className="text-accent text-lg">
                    <RiMap2Fill />
                  </div>
                  <div className="font-light">{event.location.address}</div>
                </div>
              </div>
            </div>
            <div className="w-[100px] text-[18px] text-center text-accent font-bold">
              {event.priceRange}
            </div>
            <button className="btn btn-sm btn-accent">Get tickets</button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EventBox;
