"use client";

import Image from "next/image";
import React from "react";
import MohitPortfolioImage from "../../public/mohit-tater-portrait.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaEye, FaFile, FaGithubSquare } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { useSectionInView } from "@/hooks/hooks";
import { FaTwitter } from "react-icons/fa6";

function Intro() {
  const { ref } = useSectionInView({
    sectionName: "Home",
    threshold: 0.7,
  });

  return (
    <section id="home" ref={ref} className="scroll-mt-[100rem]">
      <div
        className="flex flex-col max-w-4xl mx-auto gap-4 items-center justify-center\
      dark:text-white/60"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, type: "tween" }}
          >
            <Image
              src={MohitPortfolioImage.src}
              alt="Mohit Tater Portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="rounded-full w-24 h-24 border-[0.35rem] border-white 
          object-cover shadow-xl shadow-black/30 "
            ></Image>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "string",
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-3xl z-20 font-bold absolute bottom-0 left-0"
          >
            👋
          </motion.span>
        </div>
        <motion.h1
          className="mx-10 mt-4 px-4 font-normal !leading-[1.5] text-center text-xl
          md:text-2xl text-gray-600 dark:text-white/60"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi there! I &apos;m <strong>Mohit Tater</strong> –– A Software Creative with
          ~10 years of experience.  I’ve worked on everything from writing clean code to brainstorming design ideas and improving usability
          of product of all stages.
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="flex items-center justify-center rounded-full px-6 py-2 bg-gray-900 text-white text-center
              hover:bg-gray-800
              hover:scale-110
              focus:scale-110
              active:scale-105
              transition
            "
          >
            Contact Me
          </Link>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1Itws4h0E7V8QWUtIWbOVIgvDLWZ7OYfo18PBP5BdSho/edit?usp=sharing"
            className="group flex items-center justify-center rounded-full px-6 py-2
             bg-white dark:bg-white/10 text-gray-900 dark:text-white/60 text-center
             hover:scale-110
              focus:scale-110
              active:scale-105
              transition"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/tatermohit/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full p-4 bg-white dark:bg-white/10 text-gray-900  dark:text-white/60 text-center
              hover:scale-110
              focus:scale-110
              active:scale-105
              transition"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/mnttnm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full p-4 bg-white dark:bg-white/10 text-gray-900  dark:text-white/60 text-center text-[1.25rem] hover:scale-110
              focus:scale-110
              active:scale-105
              transition"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://twitter.com/tatermohit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full p-4 bg-white dark:bg-white/10 text-gray-900  dark:text-white/60 text-center text-[1.25rem] hover:scale-110
              focus:scale-110
              active:scale-105
              transition"
          >
            <FaTwitter />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Intro;
