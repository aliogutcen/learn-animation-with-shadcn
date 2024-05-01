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
      <section  className="container mx-auto ">
      <GridSmallBackgroundDemo />
      <section className="flex justify-center mt-24 w-full container mx-auto">
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-16 py-4  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent font-bold">
            BOOK A DEMO
          </div>
        </button>
      </section>
<HeroScrollDemo/>
<CardHoverEffectDemo/>
<HeroParallaxDemo/>
<WobbleCardDemo/>
<TypewriterEffectSmoothDemo/>
      </section>
  

    </main>
    
  );
}
