import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function DocsPage() {
  return (
    <ScrollArea>
      <article className="flex flex-col justify-start items-start gap-5 h-96 py-10">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
          Introduction
        </h1>
        <div className="w-full">
          <h3 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0">
            ¿What is Chonza?
          </h3>
          <p className="leading-7 text-muted-foreground text-balance">
            Chonza is a collection of components and styles that can be used to
            build web applications. It is designed to be simple and easy to
            integrate into your ReactJS and NextJS projects, using TailwindCSS
            and Framer Motion.
          </p>
        </div>
        <div className="w-full flex flex-col gap-5">
          <h4 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0">
            Dependencies
          </h4>
          <div>
            <span className="scroll-m-20 font-semibold tracking-tight">
              TailwindCSS
            </span>
            <p className="leading-7 text-muted-foreground text-balance">
              We are using Tailwind CSS, so you need to have it installed in
              your project. You can follow the official{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://tailwindcss.com/docs/installation"
                className="text-primary font-medium"
              >
                Installation guide
              </Link>{" "}
              to install it.
            </p>
          </div>
          <div>
            <span className="scroll-m-20 font-semibold tracking-tight">
              Framer Motion
            </span>
            <p className="leading-7 text-muted-foreground text-balance">
              We are using Framer Motion for animations, so you need to have it
              installed in your project. You can follow the official{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.framer.com/motion/introduction/"
                className="text-primary font-medium"
              >
                Installation guide
              </Link>{" "}
              to install it.
            </p>
          </div>
        </div>
        <div>
          <p className="leading-7 text-muted-foreground text-balance">
            This project is heavily inspired by{" "}
            <Link
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              ShadCN
            </Link>{" "}
            and{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://magicui.design/"
              className="underline text-foreground"
            >
              MagicUI
            </Link>{" "}
            , so if you are familiar with it, you will find this library very
            easy to use.
          </p>
        </div>
      </article>
    </ScrollArea>
  );
}
