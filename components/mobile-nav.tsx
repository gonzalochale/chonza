"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden flex gap-10 w-full items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Open navigation">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="h-dvh w-1/2 rounded-none flex flex-col flex-1 justify-start items-start border-none"
        >
          <SheetHeader className="w-full">
            <SheetTitle className="w-full text-center">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 justify-center"
              >
                {siteConfig.name}
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
              </Link>
            </SheetTitle>
            <ScrollArea className="flex flex-col gap-3">
              <div className="flex flex-col gap-5 items-start mt-5">
                {siteConfig.docs.map((doc) => (
                  <div
                    key={doc.title}
                    className="flex flex-col gap-5 items-start"
                  >
                    <span className="scroll-m-20 text-base font-medium tracking-tight">
                      {doc.title}
                    </span>
                    {doc.subpages.map((subpage) => (
                      <Link
                        key={subpage.path}
                        href={subpage.path}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3"
                      >
                        <Button
                          variant="link"
                          className={cn(
                            "hover:no-underline text-muted-foreground hover:text-foreground px-0",
                            pathname === `${subpage.path}` && "text-foreground"
                          )}
                        >
                          {subpage.title}
                        </Button>
                        {subpage.new && <Badge variant="outline">New</Badge>}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
