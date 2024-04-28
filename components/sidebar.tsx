"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full h-full flex flex-col max-md:hidden gap-10 py-10">
      <div className="flex flex-col gap-3">
        <ScrollArea className="flex flex-col gap-3">
          <div className="flex flex-col gap-5">
            {siteConfig.docs.map((doc) => (
              <>
                <span className="scroll-m-20 text-sm font-medium tracking-tight">
                  {doc.title}
                </span>
                {doc.subpages.map((subpage) => (
                  <Link key={subpage.path} href={subpage.path}>
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
                  </Link>
                ))}
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};
