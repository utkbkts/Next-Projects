"use client";
import { motion } from "framer-motion";
import { FadeIn } from "../../../variants";
const SectionHeader = ({ pretitle, title }) => {
  return (
    <motion.header
      variants={FadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h3 className="pretitle text-center">{pretitle}</h3>
      <h3 className="h2 text-center">{title}</h3>
    </motion.header>
  );
};

export default SectionHeader;
