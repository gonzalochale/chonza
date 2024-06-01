/* eslint-disable @next/next/no-img-element */
import React from "react";

function Hero() {
  return (
    <section className="relative w-full max-w-3xl mx-auto flex flex-col justify-center items-center gap-8 bg-[#0D0D0C] py-24">
      <div className="z-10 flex flex-col gap-5 text-center animate-hero-in">
        <span className="text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-100">
          Your next hero component is here!
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
      <div className="relative flex justify-center items-center aspect-video w-full p-2 overflow-hidden">
        <img
          src="/images/hero-img.webp"
          alt="Hero example image"
          className="z-10 w-full rounded-[0.5rem] border border-[#303030]"
          loading="eager"
          width="1920"
          height="1080"
        />
        <span className="absolute z-20 inset-0 w-full h-full bg-gradient-to-b from-transparent to-[#0D0D0C]"></span>
      </div>
      <span className="absolute top-48 w-[calc(100%-70%)] h-[calc(100%-70%)] bg-purple-700 blur-[120px]"></span>
    </section>
  );
}

export default Hero;
