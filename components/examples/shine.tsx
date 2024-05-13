import Hero from "@/components/hero";

export function Shine({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
      {children}
      <div className="z-10 absolute w-6 h-[calc(50%)] md:h-[calc(70%)] top-[calc(-10%)] bg-white/30 blur-[40px] animate-shine"></div>
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
