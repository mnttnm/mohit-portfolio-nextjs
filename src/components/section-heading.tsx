import React from "react";

type SectionHeadingProps = {
  heading: string;
};

const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return (
    <h2 className="text-2xl font-medium text-center  dark:text-white/80">
      {heading}
    </h2>
  );
};

export default SectionHeading;
