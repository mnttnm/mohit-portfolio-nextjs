"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import { TbBrandGithub, TbGlobe } from "react-icons/tb";

const Projects = () => {
  const { ref } = useSectionInView({
    sectionName: "Projects",
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="mt-24 container px-4 mx-auto scroll-mt-28"
    >
      <SectionHeading heading="Projects" />
      <div className="flex flex-col gap-12 items-center mt-6">
        {projects.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

type ProjectProps = (typeof projects)[number];

const Project = ({
  title,
  description,
  imageUrl,
  tags,
  github,
  liveUrl,
}: ProjectProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "50% center"],
  });

  const animationScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.8, 1]
  );
  const animatedOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.5, 1]
  );

  return (
    <motion.div
      className="group relative sm:h-[20rem] max-w-[42rem] border border-black/5 dark:border-white/20 overflow-hidden rounded-lg shadow-4 bg-gray-100 hover:bg-gray-200
      dark:bg-gray-700/30 dark:hover:bg-gray-800/70 backdrop-blur-md dark:hover:shadow-md dark:hover:shadow-[#946263]/70 hover:shadow-md hover:shadow-[#EFB7B7]/70 transition"
      ref={ref}
      style={{
        scale: animationScale,
        opacity: animatedOpacity,
        willChange: "transform, opacity",
      }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <section className="h-full flex flex-col sm:flex-row group-even:flex-row-reverse py-6 gap-6">
        <div className="flex flex-col gap-4 items-start justify-start flex-1 p-4">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="flex gap-2 -mt-1">
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 bg-gray-300/80 dark:bg-white/10 rounded-full p-2 dark:hover:text-gray-400">
              <TbBrandGithub className="w-4 h-4" />
            </a>}
            {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 bg-gray-300/80 dark:bg-white/10 rounded-full p-2 dark:hover:text-gray-400">
              <TbGlobe className="w-4 h-4" />
            </a>}
          </div>
          <p className="leading-relaxed text-gray-700 dark:text-gray-200">
            {description}
          </p>
          <ul className="flex flex-wrap gap-y-2 gap-x-2 mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="text-sm text-gray-100 dark:text-gray-300 font-semibold bg-gray-900/80 rounded-full px-3 py-1
              hover:bg-gray-900 transition-colors uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:block flex-1 w-full h-full">
          <Image
            src={imageUrl}
            alt={`Image for project ${title}`}
            quality={95}
            className="w-full h-full object-contain 
          group-even:rounded-r-lg group-odd:rounded-l-lg
          group-hover:scale-105
          group-hover:translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:-translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          
          transition-transform          
          "
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
