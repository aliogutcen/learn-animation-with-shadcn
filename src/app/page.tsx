import { CardHoverEffectDemo } from "@/components/cardHoverDemo";
import { GridSmallBackgroundDemo } from "@/components/grid";
import { HeroParallaxDemo } from "@/components/hero";
import { HeroHighlightDemo } from "@/components/herodemo";
import { InfiniteMovingCardsDemo } from "@/components/InfinityMovingDemo";

import { HeroScrollDemo } from "@/components/scroll-spider";
import { SpotlightPreview } from "@/components/spotprew";
import { TabsDemo } from "@/components/tabs";
import {  TypewriterEffectSmoothDemo } from "@/components/type";
import { WobbleCardDemo } from "@/components/wobbieCard";
import Image from "next/image";

export default function Home() {
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
    <main >
      <section  className="md:container md:mx-auto px-4 md:px-0 ">
      <GridSmallBackgroundDemo />
      <section className="flex justify-center mt-12 mb-12 md:mb-24 md:mt-24 w-full md:container md:mx-auto">
        <button className="p-[3px] relative w-full md:w-fit">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-6 py-2 md:px-16 md:py-4  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent font-bold">
            BOOK A DEMO
          </div>
        </button>
      </section>
<HeroScrollDemo/>
<CardHoverEffectDemo/>
<HeroParallaxDemo/>
<div className="hidden md:block">
<WobbleCardDemo/>
</div>

<TypewriterEffectSmoothDemo/>
      </section>
  

    </main>
    
  );
}
