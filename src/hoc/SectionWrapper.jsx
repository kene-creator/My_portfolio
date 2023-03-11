import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

export default function SectionWrapper(Component, idName) {
  return () => {
    return (
      <motion.section>
        <Component />
      </motion.section>
    );
  };
}
