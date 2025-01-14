import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 flex flex-col sm:flex-row py-6 w-full mt-24 text-center dark:bg-gray-800/60 p-6">
      <div className="flex justify-center gap-4 sm:flex-1 mb-4 sm:mb-0">
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
      </div>
      <div className="flex flex-col sm:flex-1">
        <p className="text-gray-500 mt-2 text-xs">
          This website is built with Next.js, React, TailwindCSS, and
          Framer Motion.
        </p>
        <p className="text-gray-500 mt-2 text-xs">
          Reference:{" "}
          <a
            href="https://www.youtube.com/watch?v=sUKptmUVIBM&t=3059s&ab_channel=ByteGrad"
            className="underline hover:text-gray-700 dark:hover:text-gray-300"
          >
            ByteGrad
          </a>
        </p>
      </div>
      <div className="hidden sm:block sm:flex-1"></div>
    </footer>
  );
};

export default Footer;
