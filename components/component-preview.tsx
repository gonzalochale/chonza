"use client";

import React, { Suspense } from "react";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  align?: "center" | "start" | "end";
  description?: string;
}

export function ComponentPreview({
  name,
  align = "center",
  description,
  ...props
}: ComponentPreviewProps) {
  const LazyComponent = React.useMemo(() => {
    return React.lazy(() => import(`@/components/examples/${name}`));
  }, [name]);

  if (LazyComponent === null) {
    return (
      <div className="w-full min-h-[400px] flex justify-center items-center">
        Component not found
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-card border rounded-[1rem] w-full min-h-[400px] flex justify-center items-center overflow-hidden"
      )}
      {...props}
    >
      <Suspense
        fallback={
          <div className="w-full min-h-[400px] flex justify-center items-center overflow-hidden">
            Loading...
          </div>
        }
      >
        <LazyComponent />
      </Suspense>
    </div>
  );
}
