"use client";

import { motion } from "framer-motion";

interface RadarProps {
  children: React.ReactNode;
  href: string;
}

export const RadarComponent = ({ children, href }: RadarProps) => {
  return (
    <section className="w-full h-full min-h-[400px] p-5 flex justify-center items-center">
      <div className="relative size-[350px] border border-[#27272A] bg-[#09090B] rounded-[1rem] overflow-hidden">
        <div className="z-10 absolute flex justify-center items-center w-full h-full bg-radial-gradient">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <motion.button
              className="bg-[#6325C4] text-white px-4 py-2 rounded-full flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {children}
            </motion.button>
          </a>
        </div>
        <motion.div
          className="h-full aspect-square top-1/2 left-1/2 right-1/2 bottom-1/2 bg-[#6325C4] rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 2 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>
    </section>
  );
};

const Radar = () => {
  return (
    <RadarComponent href="https://twitter.com/gonzalochale">
      Click Me
    </RadarComponent>
  );
};

export default Radar;
