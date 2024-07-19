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
import { Badge } from "./ui/badge";

export function Header() {
  const pathname = usePathname();

  const newComponent =
    siteConfig.components.length > 0
      ? siteConfig.components[0]
      : siteConfig.docs[0];

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="max-md:px-4 md:container h-12 flex justify-center items-center">
        <MobileNav />
        <nav className="max-md:hidden flex gap-10 w-full items-center">
          <Link href="/" className="flex gap-3 items-center">
            <h1 className="text-lg font-medium tracking-tighter flex gap-1 items-center">
              Your UI Library
            </h1>
            <Badge variant="outline" className="text-normal">
              Beta
            </Badge>
          </Link>
          <div className="flex gap-10 items-center">
            <Link href="/docs">
              <Button
                variant="link"
                size="sm"
                className={cn(
                  "hover:no-underline text-muted-foreground hover:text-foreground",
                  pathname.includes("docs") && "text-foreground"
                )}
              >
                Docs
              </Button>
            </Link>
            <Link href={newComponent.path}>
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
            aria-label="Follow on Twitter"
          >
            <Button
              variant="outline"
              size="sm"
              className="flex gap-3 items-center max-md:h-9 max-md:w-9 max-md:px-0"
              aria-label="Follow on Twitter"
            >
              <span className="hidden md:block">Follow on</span>{" "}
              <Icons.twitter />
            </Button>
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Give a star on GitHub"
          >
            <Button
              variant="outline"
              size="sm"
              className="flex gap-3 items-center max-md:h-9 max-md:w-9 max-md:px-0"
              aria-label="Give a star on GitHub"
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
