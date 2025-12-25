"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StackedTextProps {
  items: string[];
  duration?: number;
  stagger?: number;
  className?: string;
}

export const StackedText = ({
  items,
  duration = 20,
  stagger = 0,
  className,
}: StackedTextProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden", className)}
      style={
        {
          "--duration": duration,
          "--items": items.length,
          "--stagger": `${stagger}s`,
        } as React.CSSProperties
      }
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="stacked-text__item absolute inset-0 flex items-center justify-center text-center px-4"
          style={{ "--i": index } as React.CSSProperties}
        >
          <div className="text-sm font-medium text-white leading-tight">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

StackedText.displayName = "StackedText";

