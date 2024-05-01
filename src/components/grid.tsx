import React from "react";
import { HeroHighlightDemo } from "./herodemo";
import { NavbarDemo } from "./navbardemo";
;

export function GridSmallBackgroundDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      
      <HeroHighlightDemo />

    </>
  );
}
