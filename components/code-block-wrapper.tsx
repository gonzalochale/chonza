"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";

export default function CodeBlockWrapper({
  children,
  size,
}: {
  children: React.ReactNode;
  size: "full" | "wrapper";
}) {
  const [open, setOpen] = useState(false);

  if (size === "full") {
    return (
      <div className="overflow-hidden border rounded-[1rem] bg-card">
        {children}
      </div>
    );
  }

  if (size === "wrapper") {
    return (
      <div
        className={cn(
          "relative grid place-items-center overflow-hidden border rounded-[1rem] bg-card",
          open ? "h-auto" : "h-[400px]"
        )}
      >
        {children}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-gradient-to-t from-card to-transparent z-0",
            open ? "hidden" : "block"
          )}
        ></div>
        <Button
          size="sm"
          variant="outline"
          className="z-10 absolute bottom-5"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide" : "Show More"}
        </Button>
      </div>
    );
  }
}
