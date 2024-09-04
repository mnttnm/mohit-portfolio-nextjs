"use client";

import React from "react";
import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 dark:bg-gray-200/20 mt-24 h-16 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "tween" }}
    ></motion.div>
  );
}

export default SectionDivider;
