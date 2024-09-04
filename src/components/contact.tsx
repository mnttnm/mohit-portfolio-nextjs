"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/hooks/hooks";
import CalComWidget from "./cal-com-widget";
import InputBoxWithCopy from "./input-box-with-copy";
import { motion } from "framer-motion";

const Contact = () => {
  const { ref } = useSectionInView({
    sectionName: "Contact",
    threshold: 0.5,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjust the delay between each child animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mt-24 container px-4"
    >
      <SectionHeading heading="Contact Me" />
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-center text-gray-500">
          Feel free to reach out 🤙
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          className="flex flex-col gap-4 items-center"
        >
          <motion.div variants={childVariants}>
            <InputBoxWithCopy
              label={""}
              name={"email"}
              placeholder={"mohittater.iiita@gmail.com"}
              value={"mohittater.iiita@gmail.com"}
            />
          </motion.div>
          <motion.div variants={childVariants}>
            <CalComWidget />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
