"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <>
    <div>
    <h1 className="text-5xl md:text-8xl  font-bold text-center mb-12 md:mb-16 mt-12">
        Info Spider 
      </h1> 
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 md:h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos corrupti dolor dolores animi cupiditate magni tempora architecto aliquid ratione.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         Lorem ipsum dolor sit amet.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, esse!
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-orange-700">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         Lorem ipsum dolor sit amet.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, esse!
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-2 min-h-[300px] bg-red-700">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         Lorem ipsum dolor sit amet.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, esse!
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nostrum similique aliquid autem doloremque eum ipsam? Quam quia praesentium reprehenderit?
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus vero quas expedita sunt ad nulla iusto officia porro velit veritatis.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </>
    
  );
}
