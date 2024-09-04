import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 w-full mt-24 text-center dark:bg-gray-800/60">
      <h4 className="text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Mohit Tater. All rights
        reserved.
      </h4>
      <p className="text-gray-500 mt-2 text-xs">
        This website is built with Next.js, React, TailwindCSS, and
        Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;
