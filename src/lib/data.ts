import projectImage from "@/../public/project-image.png";
import React from "react";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Projects",
    path: "#projects",
  },

  {
    name: "About",
    path: "#about",
  },
  {
    name: "Experience",
    path: "#experience",
  },
  {
    name: "Contact",
    path: "#contact",
  },
] as const;
// as const makes it immutable and readonly, the structure of the array is not changed
// if you will hover over the type of the array, it will show you the structure

export const projects = [
  {
    title: "Figma Variable Explorer Plugin",
    path: "/figma-variable-explorer",
    liveUrl:
      "https://www.figma.com/community/plugin/1310888112326715990/figma-variable-explorer",
    github: "https://github.com/mnttnm/figma-variable-explorer",
    description:
      "A tool built using ReactJS for Figma. ~4000 users are currently using it",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
    imageUrl: projectImage,
  },
  {
    title: "School Management App (Mobile)",
    path: "/school-management-app",
    description:
      "An app built to make school management easier. I did the UI/UX myself as well",
    tags: ["ReactNative", "Supabase", "CSS"],
    imageUrl: projectImage,
  },
  {
    title: "Brain Basket",
    path: "/brain-basket",
    description:
      "A fullstack webapp built using Flutter and Firebase",
    tags: ["Flutter", "Firebase", "Razorpay SDK"],
    imageUrl: projectImage,
  },
  {
    title: "Community Fair (Coming Soon)",
    path: "/community-fair",
    github: "https://github.com/mnttnm",
    live: "https://github.com/mnttnm",
    description: "An app to promote your communities and events",
    tags: ["NextJS", "Supabase", "Tailwind", "ShadCN UI"],
    imageUrl: projectImage,
  },
] as const;

// frontend skills
export const skills = [
  {
    title: "React",
    icon: "react",
  },
  {
    title: "HTML",
    icon: "html",
  },
  {
    title: "CSS",
    icon: "css",
  },
  {
    title: "JavaScript",
    icon: "javascript",
  },
  {
    title: "TypeScript",
    icon: "typescript",
  },

  {
    title: "Next.js",
    icon: "nextjs",
  },

  {
    title: "Tailwind",
    icon: "tailwind",
  },
  {
    title: "Node.js",
    icon: "nodejs",
  },
  {
    title: "Supabase",
    icon: "supabase",
  },
  {
    title: "Framer Motion",
    icon: "framer-motion",
  },
  {
    title: "C++",
    icon: "c++",
  },
  {
    title: "CI/CD",
    icon: "ci-cd",
  },
  {
    title: "GraphQL",
    icon: "graphql",
  },

  {
    title: "VS Code",
    icon: "vscode",
  },
  {
    title: "Git",
    icon: "github",
  },
  {
    title: "Figma",
    icon: "figma",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance",
    location: "Bengaluru, India",
    description:
      "Self-Employed, working on various projects including a Figma plugin with ~4000 users, an Attendance Manager App using React Native and Supabase, and a Raycast extension for Google Docs with ~250 users.",
    icon: React.createElement(LuBriefcase),
    date: "Dec 2023 – Present",
  },
  {
    title: "Software Development and UX",
    location: "Remote",
    description:
      "Worked at GoodCode (goodcode.us), leading UX work for 10+ clients in product discovery and design phases, and migrated design systems in Figma.",
    icon: React.createElement(LuBriefcase),
    date: "Dec 2022 – Nov 2023",
  },
  {
    title: "Senior Software Engineer",
    location: "Remote",
    description:
      "Worked at Query (query.ai) on modules for security data extraction and transformation, and led the integration development for Microsoft suite products.",
    icon: React.createElement(LuBriefcase),
    date: "Sept 2020 – Sept 2022",
  },
  {
    title: "Senior Software Developer",
    location: "Bengaluru, India",
    description:
      "Worked at Bluejeans Networks by Verizon, implemented automation frameworks, launched a Mac app for conferencing, and introduced new features in C++ modules.",
    icon: React.createElement(LuBriefcase),
    date: "July 2016 – Sept 2020",
  },
  {
    title: "B.Tech in Electronics and Communications",
    location: "Allahabad, U.P., India",
    description:
      "Graduated from the Indian Institute Of Information Technology with a GPA of 8.6/10.",
    icon: React.createElement(LuGraduationCap),
    date: "2011 – 2015",
  },
] as const;
