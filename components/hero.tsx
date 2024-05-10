/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "./ui/button";
import { Icons } from "./icons";

export default function Hero() {
  return (
    <section className="w-full max-w-3xl container px-4 py-10">
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Building apps with ease and speed.
          </h1>
          <p className="w-full px-10 md:text-xl lg:text-lg xl:text-xl text-muted-foreground">
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </p>
        </div>
        <div className="flex gap-2 justify-center">
          <Link href="/components/glitch">
            <Button>Explore all components</Button>
          </Link>
          <Link href="#">
            <Button variant="outline" className="flex items-center gap-2">
              Star on GitHub <Icons.github />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
