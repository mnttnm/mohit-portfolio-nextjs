"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

const Skills = () => {
  const { ref } = useSectionInView({
    sectionName: "Skills",
    threshold: 0.3,
  });

  const skillTileAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="mt-24 max-w-3xl px-4 mx-auto scroll-mt-28"
    >
      <SectionHeading heading="Technical Skills" />
      <ul className="flex flex-row flex-wrap gap-2 gap-y-4 mt-8 justify-center">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="border border-black/5 rounded-lg px-4 py-2
      shadow-4 hover:bg-gray-200 bg-gray-100  dark:bg-gray-700/70
      dark:hover:bg-gray-800/70"
            variants={skillTileAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill.title}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
