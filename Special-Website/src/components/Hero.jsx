"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";
import { FadeIn } from "../../variants";
import Image from "next/image";
import image from "../../public/assets/hero/singer.png";
import imagesvg from "../../public/assets/hero/typo-1.svg";
import imagesv2 from "../../public/assets/hero/typo-2.svg";
import imagesv3 from "../../public/assets/hero/bird.png";

const location = [
  "los Angeles - USA",
  3000,
  "Rio De Janerio,Brazil",
  3000,
  "Paris,France",
  3000,
  "Berlin,Germany",
  3000,
  "Athens,Greece",
  3000,
];
const Hero = () => {
  return (
    <section className="h-[80vh]  xl:h-[850px]">
      <div className="container mx-auto  h-full flex justify-center items-center xl:justify-start">
        <div className=" h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="flex items-center relative h-[120px] xl:h-max xl:w-[840px]"
          >
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className="relative"
            >
              <motion.div
                variants={FadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[300px] h-[101px] xl:w-[720px] xl:h-[244px]"
              >
                <Image src={imagesvg} fill alt="" className="object-contain" />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.9}
              className="absolute xl:left-6 z-30"
            >
              <motion.div
                variants={FadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[300px] h-[101px] xl:w-[720px] xl:h-[244px]"
              >
                <Image src={imagesv2} fill alt="" className="object-contain" />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className="hidden xl:flex absolute right-0 z-20 opacity-80"
            >
              <motion.div
                variants={FadeIn("left", 1.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[150px] h-[101px] xl:w-[240px] xl:h-[200px]"
              >
                <Image src={imagesv3} fill alt="" className="object-contain" />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <div>
            <TypeAnimation sequence={location} wrapper="div" speed={10} deletionSpeed={10} repeat={Infinity} cursor={false}/>
          </div>
        </div>
        <motion.div
          variants={FadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="hidden xl:flex absolute right-0 top-0 before:w-[784px] before:h-[890px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10"
        >
          <Image
            src={image}
            width={617}
            height={893}
            alt=""
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
