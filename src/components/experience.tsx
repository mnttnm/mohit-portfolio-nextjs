"use client";

import { useSectionInView } from "@/hooks/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useThemeContext } from "@/context/theme-context";

const Experience = () => {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.3,
  });

  const { theme, toggleTheme } = useThemeContext();

  return (
    <section
      ref={ref}
      id="experience"
      className="mt-24 max-w-3xl px-4 mx-auto scroll-mt-28"
    >
      <SectionHeading heading="My Experience" />
      <VerticalTimeline className="group mt-8" lineColor="">
        {experiencesData.map(
          (experience: (typeof experiencesData)[number]) => (
            <VerticalTimelineElement
              visible
              contentStyle={{
                background:
                  theme === "light"
                    ? "#f3f4f6"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              dateClassName="mr-4 group-even:ml-4"
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === "light"
                    ? "white"
                    : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
              key={experience.title}
            >
              <h3 className="font-semibold !capitalize">
                {experience.title}
              </h3>
              <p className="!mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
