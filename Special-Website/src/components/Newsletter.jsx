"use client";

import { motion } from "framer-motion";
import SectionHeader from "./events/SectionHeader";
import { FadeIn } from "../../variants";
import Image from "next/image";
const Newsletter = () => {
  return (
    <section className="h-[480px] relative">
      <Image
        width={250}
        height={250}
        priority
        alt="image"
        className="bg-fixed  bg-cover w-full bg-center bg-no-repeat"
        src={"/assets/newsletter/bg.png"}
      />
      <div className="absolute section-email">
        <SectionHeader
          pretitle={"Get in touch"}
          title={"Sign up to our newsletter"}
        />
        <div className="relative flex items-center w-full max-w-xl justify-center emailinput">
            <input type="email" name="email" placeholder="Email adress" className="w-full outline-none rounded-full md:h-[65px] h-[40px] backdrop-blur-md px-8" />
          <div className="flex items-center justify-center">
          <button type="submit" className="bg-accent absolute right-2 md:h-[46px] h-[20px] rounded-full text-xl transition-all md:px-6 px-2  flex items-center justify-center">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
