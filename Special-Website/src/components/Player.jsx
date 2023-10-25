"use client";
import { motion } from "framer-motion";
import React from "react";
import { AudioPlayer } from "react-audio-play";
import { FadeIn } from "../../variants";
import Image from "next/image";
import image1 from "../../public/assets/player/avatar.png";
const Player = () => {
  return (
    <motion.div
      variants={FadeIn("left", 1.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-gradient-to-r from-tartiary/70 to-primary/10 backdrop-blur-md h-[112px] flex items-center relative z-40"
    >
      <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
        <div className="hidden w-[300px] xl:flex items-center gap-4">
          <div className="relative w-16 h-16">
            <Image src={image1} fill alt="" priority />
          </div>
          <div className="leading-none">
            <div className="text-lg font-medium">Mia</div>
            <div className="text-sm font-light">Freedom</div>
          </div>
        </div>
        <div className="w-full max-4xl audioplayer">
          <AudioPlayer
            loop
            preload="none"
            color="#333"
            volume={40}
            volumePlacement="top"
            src={"/assets/freedom.mp3"}
            style={{
              background: "transparent",
              boxShadow: "none",
              width: "100%",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Player;
