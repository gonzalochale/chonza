"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export const Sidebar = () => {
  const pathname = usePathname();

  siteConfig.components.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <aside className="sticky top-[49px] gap-10 py-10 z-50 h-[calc(100dvh-98px)] w-full hidden md:block overflow-y-auto pr-5">
      <div className="flex flex-col gap-16 h-full w-full">
        <div className="flex flex-col gap-5 items-start">
          <span className="scroll-m-20 text-sm font-medium tracking-tight">
            Getting Started
          </span>
          {siteConfig.docs.map((doc) => (
            <Link
              key={doc.path}
              href={doc.path}
              className="flex items-center gap-3"
            >
              <Button
                variant="link"
                size="sm"
                className={cn(
                  "hover:no-underline text-muted-foreground hover:text-foreground px-0",
                  pathname === `${doc.path}` && "text-foreground"
                )}
              >
                {doc.title}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-5 items-start">
          <span className="scroll-m-20 text-sm font-medium tracking-tight">
            Components
          </span>
          {siteConfig.components.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="flex w-full justify-between items-center gap-1"
            >
              <Button
                variant="link"
                size="sm"
                className={cn(
                  "flex hover:no-underline text-muted-foreground hover:text-foreground p-0 text-left whitespace-normal",
                  pathname === `${component.path}` && "text-foreground"
                )}
              >
                {component.title}
              </Button>
              {component.new && <Badge variant="outline">New</Badge>}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
