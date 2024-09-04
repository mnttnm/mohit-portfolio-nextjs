"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

const Header = () => {
  const { activeSession, setActiveSession } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.nav
        className="flex items-center justify-center fixed top-0 left-1/2 
          h-[4.5rem] w-full rounded-none border border-white
          border-opacity-40 bg-white bg-opacity-80 shadow-lg
          shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6
          sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
          py-2 dark:bg-gray-800/70 dark:border-gray-700
        "
        initial={{ y: -200, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul
          className="flex flex-wrap w-[22rem] items-center justify-center gap-y-1
        text-[0.9rem] font-medium text-gray-500
        sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => {
            const isActive = activeSession === link.name;
            return (
              <motion.li
                key={link.name}
                className="h-3/4 flex items-center justify-center relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setActiveSession(link.name)}
                layout
              >
                <Link
                  className={clsx(
                    `w-full h-full flex items-center justify-center px-3 py-2 hover:text-gray-950
                     transition-colors`,
                    {
                      "text-gray-950": isActive,
                      "text-gray-500": !isActive,
                      "dark:text-gray-50": isActive,
                      "dark:text-gray-400": !isActive,
                      "dark:hover:text-gray-50": !isActive,
                    }
                  )}
                  href={link.path}
                >
                  {link.name}
                  {activeSession == link.name && (
                    <motion.div
                      className="absolute inset-0 -z-10 bg-gray-100 dark:bg-gray-500/40 rounded-full"
                      layoutId="activeSessionIndicator"
                      transition={{
                        stiffness: 380,
                        damping: 30,
                        type: "spring",
                      }}
                    ></motion.div>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
