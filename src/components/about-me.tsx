"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

const AboutMe = () => {
  const { ref } = useSectionInView({
    sectionName: "About",
    threshold: 0.8,
  });

  return (
    <motion.section
      ref={ref}
      id={"about"}
      className="max-w-3xl mx-auto mt-24 text-center scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, type: "tween" }}
    >
      <SectionHeading heading="About Me" />
      <p className="text-lg text-center mt-8 leading-9 dark:text-white/60">
        Hey there! I'm <strong>Mohit</strong>, a tech enthusiast with
        a passion for building meaningful products and crafting great
        user experiences. Over the past nine years, I've had the
        privilege of working at some exciting startups and a design
        agency, where I've worn many hats—from <em>coding</em> and{" "}
        <em>UX design</em> to <em>QA</em> and{" "}
        <em>product strategy</em>. When I'm not deep in the world of
        tech, I love diving into content about{" "}
        <strong>technology</strong>, <strong>fitness</strong>, and{" "}
        <strong>health</strong>, whether through podcasts, videos, or
        articles. I'm also big on curating valuable resources from
        across the internet—<em>courses</em>, <em>tutorials</em>,{" "}
        <em>workout routines</em>, <em>productivity tools</em>, and
        more. I share my favorite finds in my newsletter, where I get
        to connect with others who share similar interests. Outside of
        work, I’m all about finding the perfect balance between{" "}
        <strong>tech</strong> and a <strong>healthy lifestyle</strong>
        , always looking for ways to grow, learn, and share what I
        discover.
      </p>
    </motion.section>
  );
};

export default AboutMe;
