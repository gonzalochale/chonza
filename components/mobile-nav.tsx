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

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:hidden flex gap-10 w-full items-center">
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
            <ScrollArea>
              <nav className="flex flex-col gap-4 items-start w-full">
                <Link href="/docs" onClick={() => setOpen(false)}>
                  <Button
                    variant="link"
                    className="hover:no-underline text-muted-foreground hover:text-foreground"
                  >
                    Docs
                  </Button>
                </Link>
                <Link href="/components" onClick={() => setOpen(false)}>
                  <Button
                    variant="link"
                    className="hover:no-underline text-muted-foreground hover:text-foreground"
                  >
                    Components
                  </Button>
                </Link>
              </nav>
            </ScrollArea>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
