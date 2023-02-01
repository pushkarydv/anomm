import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center sm:items-center text-white min-h-[85vh] hero-bg px-4">
      <div className="text-4xl sm:text-5xl sm:text-center md:text-6xl mg:text-7xl xl:text-8xl font-bold w-[90%]">
        Anonymous messages in a completely different way
      </div>
      <div className="text-lg lg:text-xl sm:text-center xl:text-2xl mt-4 lg:mt-6 xl:mt-8 font-semibold">
        No need to install any app, messages directly to your telegram
      </div>
      <div className="flex flex-row justify-center gap-4 my-6">
        <Link
          className="transition-all font-semibold text-xl lg:text-2xl xl:text-3xl w-fit py-2 px-4 mb-4 rounded-full bg-white text-emerald-600 active:scale-90 flex flex-row gap-1 justify-center items-center"
          href={"/register"}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
