/* eslint-disable @next/next/no-img-element */
import React from "react";

function Hero() {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col justify-center items-center gap-8 bg-[#0D0D0C] py-24">
      <div className="z-10 flex flex-col gap-3 text-center animate-hero-in">
        <span className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-100">
          Your next hero component is here!
        </span>
        <span className="w-full px-10 md:text-xl lg:text-lg xl:text-xl text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-100">
          This is a hero component.
        </span>
        <a
          href="https://github.com/gonzalochale/chonza"
          className="no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white/70 text-black shadow hover:bg-white/30 hover:text-white h-9 px-4 py-2">
            Star on GitHub
          </button>
        </a>
      </div>
      <div className="relative flex justify-center items-center">
        <img
          src="/static/hero-img.png"
          alt="Hero examnple image"
          className="z-10 w-full object-contain rounded-[0.5rem] bg-center bg-no-repeat bg-cover border border-[#303030]"
          loading="eager"
        />
        <span className="absolute -top-20 w-[calc(100%-40%)] h-[calc(100%-40%)] bg-purple-700 blur-[120px]"></span>
        <span className="absolute z-20 inset-0 w-full h-full bg-gradient-to-b from-transparent to-[#0D0D0C]"></span>
      </div>
    </section>
  );
}

export default Hero;
