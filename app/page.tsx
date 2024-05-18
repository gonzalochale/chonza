import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Shine } from "@/components/examples/shine";
import Logos from "@/components/logos";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Shine>
        <section className="w-full h-full max-w-3xl container px-4 py-24">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <span className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                Your next component starts here
              </span>
              <p className="w-full px-10 md:text-xl lg:text-lg xl:text-xl text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                {siteConfig.description}
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              <a
                href="https://github.com/gonzalochale/chonza"
                className="no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="flex items-center gap-2">
                  Star on GitHub <Icons.github />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </Shine>
      <Logos />
    </div>
  );
}
