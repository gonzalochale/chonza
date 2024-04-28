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
    <header className="max-md:px-4 md:container py-2 backdrop-blur-lg flex justify-center items-center">
      <MobileNav />
      <nav className="max-md:hidden flex gap-10 w-full items-center">
        <Link href="/">
          <h1 className="text-lg font-semibold tracking-tighter flex gap-1 items-center">
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
            className="flex gap-3 items-center"
          >
            Follow on <Icons.twitter />
          </Button>
        </Link>
        <ThemeSwitcher />
      </div>
      <div className="z-[-1] absolute h-full w-full border-b degrade-x"></div>
    </header>
  );
}
