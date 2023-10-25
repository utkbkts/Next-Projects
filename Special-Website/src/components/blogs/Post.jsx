"use client"
import { motion } from "framer-motion";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FadeIn } from "../../../variants";
import Link from "next/link";
const Post = ({ posts }) => {
  const firstpost = posts.slice(0, 3);
  return (
    <motion.div
      variants={FadeIn("left", 1.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-14 xl:pb-24 border-t border-white p-4">
        {firstpost.map((post) => {
          const { id, date, title, description } = post;
          return (
            <div className="flex-1" key={id}>
              <div className="text-accent font-bold mb-2">{date}</div>
              <div className="text-xl font-medium mb-4">{title}</div>
              <div className="text-white/30 mb-4 font-light">{description}</div>
              <Link href={"#"}>
                Read More
                <BsArrowRight className="text-xl group-hover:ml-1 transition-all" />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
      <button className="btn btn-lg btn-accent text-center">View all Posts</button>
      </div>
    </motion.div>
  );
};

export default Post;
