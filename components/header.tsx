/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="max-md:px-4 md:container h-12 flex justify-center items-center">
        <MobileNav />
        <nav className="max-md:hidden flex gap-10 w-full items-center">
          <Link href="/" className="flex gap-2 items-center">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            <h1 className="text-lg font-medium tracking-tighter flex gap-1 items-center">
              {siteConfig.name}
            </h1>
          </Link>
          <div className="flex gap-10 items-center">
            <Link href="/docs">
              <Button
                variant="link"
                size="sm"
                className={cn(
                  "hover:no-underline text-muted-foreground hover:text-foreground",
                  pathname === "/docs" && "text-foreground"
                )}
              >
                Docs
              </Button>
            </Link>
            <Link href="/components/glitch">
              <Button
                variant="link"
                size="sm"
                className={cn(
                  "hover:no-underline text-muted-foreground hover:text-foreground",
                  pathname.includes("components") && "text-foreground"
                )}
              >
                Components
              </Button>
            </Link>
          </div>
        </nav>
        <div className="flex gap-3 items-center justify-end">
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              variant="outline"
              size="sm"
              className="flex gap-3 items-center max-md:h-9 max-md:w-9 max-md:px-0"
            >
              <span className="hidden md:block">Follow on</span>{" "}
              <Icons.twitter />
            </Button>
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              variant="outline"
              size="sm"
              className="flex gap-3 items-center max-md:h-9 max-md:w-9 max-md:px-0"
            >
              <span className="hidden md:block">Give a star</span>{" "}
              <Icons.github />
            </Button>
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
