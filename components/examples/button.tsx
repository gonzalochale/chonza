import React from "react";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "success" | "destructive";
}

export function Button({
  children,
  variant = "default",
}: React.PropsWithChildren<ButtonProps>) {
  const variants = {
    default: {
      background: "bg-gradient-to-b from-[#282828] to-[#10100F]",
      border: "border-[#10100F]",
      focusOutline: "focus:outline-[#282828]",
      hoverBackground: "bg-gradient-to-b from-[#1e1e1c] to-[#10100F]",
      textColor: "text-white/80",
    },
    secondary: {
      background: "bg-gradient-to-b from-[#d6d6d6] to-[#F7F7F7]",
      border: "border-[#F7F7F7]",
      focusOutline: "focus:outline-[#c7c7c7]",
      hoverBackground: "bg-gradient-to-b from-[#e9e9e9] to-[#F7F7F7]",
      textColor: "text-black/80",
    },
    success: {
      background: "bg-gradient-to-b from-[#d4ffe5] to-[#3fe581]",
      border: "border-[#3fe581]",
      focusOutline: "focus:outline-[#d4ffe5]",
      hoverBackground: "bg-gradient-to-b from-[#8effbb] to-[#3fe581]",
      textColor: "text-[#0C5132]",
    },
    destructive: {
      background: "bg-gradient-to-b from-[#FED3D1] to-[#ff8682]",
      border: "border-[#ff8682]",
      focusOutline: "focus:outline-[#FED3D1]",
      hoverBackground: "bg-gradient-to-b from-[#feb8b4] to-[#ff8682]",
      textColor: "text-[#8D1F0B]",
    },
  };
  const styles = variants[variant] || variants.default;

  return (
    <button
      className={`group relative min-w-[5rem] px-4 py-2 rounded-[12px] ${styles.background} flex justify-center items-center border-2 ${styles.border} outline outline-2 outline-offset-2 outline-transparent ${styles.focusOutline}`}
    >
      <span
        className={`absolute w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[0.5rem] ${styles.hoverBackground} group-hover:opacity-60 transition-all duration-300 ease-in-out`}
      ></span>
      <span className={`z-10 text-xs ${styles.textColor}`}>{children}</span>
    </button>
  );
}

export default function ButtonExample() {
  return (
    <div className="w-full flex max-md:flex-col justify-center items-center gap-10">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}
