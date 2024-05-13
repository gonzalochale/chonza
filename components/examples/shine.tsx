import Hero from "@/components/hero";

export function Shine({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
      {children}
      <div className="z-10 absolute w-5 md:w-8 h-[calc(70%)] md:h-[calc(90%)] top-[calc(-10%)] bg-white/30 blur-2xl animate-shine"></div>
    </div>
  );
}

export default function ShineExample() {
  return (
    <Shine>
      <Hero />
    </Shine>
  );
}
