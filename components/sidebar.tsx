"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sticky top-[49px] gap-10 py-10 z-50 h-[calc(100dvh-98px)] w-full hidden md:block">
      <ScrollArea className="flex flex-col gap-3">
        <div className="flex flex-col gap-5">
          {siteConfig.docs.map((doc) => (
            <div key={doc.title} className="flex flex-col gap-5 items-start">
              <span className="scroll-m-20 text-sm font-medium tracking-tight">
                {doc.title}
              </span>
              {doc.subpages.map((subpage) => (
                <Link
                  key={subpage.path}
                  href={subpage.path}
                  className="flex items-center gap-3"
                >
                  <Button
                    variant="link"
                    size="sm"
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
    </aside>
  );
};
