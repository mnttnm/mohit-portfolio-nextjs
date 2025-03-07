import FigmaPluginImage from "@/../public/figma-variable-explorer.png";
import RaycastExtensionImage from "../../public/raycast-extension.png";
import SlicelyImage from "@/../public/slicely.png";
import GetItRightImage from "@/../public/getitright.png";
import WeeklyPlannerImage from "@/../public/weekly-tracker.png";

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
    title: "Slicely: An Enterprise-Grade SaaS app",
    path: "/slicely",
    liveUrl: "https://slicely.app",
    github: "https://github.com/mnttnm/slicely",
    description:
      "An app built to allow you to manage and get most out of PDF data with the help of AI",
    tags: ["Next.js", "Supabase", "OpenAI", "TypeScript", "React"],
    imageUrl: SlicelyImage,
  },
  {
    title: "Figma Variable Explorer Plugin",
    path: "/figma-variable-explorer",
    liveUrl:
      "https://www.figma.com/community/plugin/1310888112326715990/figma-variable-explorer",
    github: "https://github.com/mnttnm/figma-variable-explorer",
    description:
      "A tool built using ReactJS for Figma. ~5000 users are currently using it",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
    imageUrl: FigmaPluginImage,
  },
  {
    title: "GetItRight: Landing Page",
    path: "/get-it-right",
    liveUrl: "https://getitright.design",
    github: "",
    description:
      "An agency landing page with support for blog",
    tags: ["Astro", "Javascript", "HTML", "CSS"],
    imageUrl: GetItRightImage,
  },
  {
    title: "Weekly Planner and Tracker",
    path: "/weekly-planner",
    liveUrl: "https://weekly-tracker-better-u.vercel.app/",
    github: "https://github.com/mnttnm/weekly-tracker-better-u",
    description:
      "An app I built to plan, track and reflect on my weekly activities to keep myself accountable for a community that I'm a part of",
    tags: ["Next.js", "Tailwind", "TypeScript", "React"],
    imageUrl: WeeklyPlannerImage,
  },
  {
    title: "Raycast extension for Google Docs",
    path: "/brain-basket",
    liveUrl: "https://www.raycast.com/tatermohit/note-in-google-doc",
    github: "https://github.com/mnttnm/raycast-note-in-doc",
    description:
      "An extension built on top of Google Docs APIs and Raycast's developer SDK ~250 users are currently using it",
    tags: ["Google API", "Raycast", "Typescript", "React"],
    imageUrl: RaycastExtensionImage,
  }
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
    title: "Self-Employed",
    location: "Bengaluru, India",
    description:
      "Self-Employed, working on client project and personal projects while making progress of my journey of becoming a Design Engineer",
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
