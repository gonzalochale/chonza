"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface Word {
  text: string;
  color: string;
}

export default function Hero() {
  const words: Word[] = useMemo(
    () => [
      { text: "COMPONENT", color: "#FFB3C0" },
      { text: "PRODUCT", color: "#FFA36F" },
      { text: "INTERFACE", color: "#FDE047" },
      { text: "PROJECT", color: "#C7A4FF" },
    ],
    []
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState<Word>({
    text: words[currentWordIndex].text,
    color: words[currentWordIndex].color,
  });
  const [glitchActive, setGlitchActive] = useState(false);

  const GLYPHS = "!$%&/()=?¡*+_-.,;:[]{}^<>'~#|@abcdefghijk1234567890";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setGlitchActive(true);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  const MAX_GLITCH_CHARACTERS = 10;

  useEffect(() => {
    if (glitchActive) {
      const glitchInterval = setInterval(() => {
        const newText = Array.from(
          { length: currentText.text.length },
          (_, i) => {
            if (i < MAX_GLITCH_CHARACTERS) {
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            }
            return currentText.text[i];
          }
        ).join("");
        setCurrentText({ text: newText, color: currentText.color });
      }, 50);

      setTimeout(() => {
        clearInterval(glitchInterval);
        setGlitchActive(false);
        setCurrentText({
          text: words[currentWordIndex].text,
          color: words[currentWordIndex].color,
        });
      }, 300);
    }
  }, [currentText, glitchActive, words, currentWordIndex]);
  return (
    <section className="container flex flex-1 max-md:flex-col justify-center items-center">
      <div className="flex flex-col max-md:justify-center gap-5 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            stiffness: 150,
            duration: 0.6,
            delay: 0.3,
          }}
          className="flex gap-3 max-md:justify-center items-center"
        >
          <Link
            href="/components/glitch"
            className="w-fit relative bg-card rounded-full text-xs font-normal text-foreground border border-secondary hover:border-primary flex justify-center items-center gap-1 py-1 px-3 group transition-all duration-300 ease-in-out"
          >
            <p>New components</p>
            <span className="absolute -bottom-[1px] h-[1px] w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 ease-in-out"></span>
          </Link>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.6,
            delay: 0.3,
          }}
          className="w-full flex flex-col max-md:text-center scroll-m-20 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-balance"
        >
          YOUR NEXT
          <span style={{ color: currentText.color }}>
            {currentText.text.split("").map((char, index) => (
              <span
                key={index}
                data-char={char}
                style={
                  {
                    "--index": index,
                    "--char-1": `"${
                      GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                    }"`,
                    "--char-2": `"${
                      GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                    }"`,
                    "--char-3": `"${
                      GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                    }"`,
                  } as any
                }
              >
                {char}
              </span>
            ))}
          </span>
          STARTS HERE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.6,
            delay: 0.5,
          }}
          className="scroll-m-20 text-sm sm:text-base font-medium tracking-tight text-muted-foreground flex gap-3 items-end max-md:justify-center"
        >
          Built with React and TailwindCSS.
        </motion.h2>
      </div>
      <div className="flex w-full h-full"></div>
    </section>
  );
}
