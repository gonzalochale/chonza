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

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden flex gap-10 w-full items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="h-dvh w-1/2 rounded-none flex flex-col flex-1 justify-start items-start border-none"
        >
          <SheetHeader className="w-full">
            <SheetTitle className="w-full text-center">
              <Link href="/" onClick={() => setOpen(false)}>
                {siteConfig.name}
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
