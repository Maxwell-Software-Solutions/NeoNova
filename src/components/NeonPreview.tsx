import { cn } from "@/lib/utils";

interface NeonPreviewProps {
  text: string;
  color: "pink" | "cyan" | "amber" | "purple" | "green" | "ice";
  font: "cursive" | "script" | "dancing" | "satisfy";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const colorClasses = {
  pink: "text-neon-pink neon-glow-pink",
  cyan: "text-neon-cyan neon-glow-cyan",
  amber: "text-neon-amber neon-glow-amber",
  purple: "text-neon-purple neon-glow-purple",
  green: "text-neon-green neon-glow-green",
  ice: "text-neon-ice neon-glow-ice",
};

const fontClasses = {
  cursive: "font-cursive",
  script: "font-script",
  dancing: "font-dancing",
  satisfy: "font-satisfy",
};

const sizeClasses = {
  sm: "text-4xl",
  md: "text-6xl",
  lg: "text-8xl",
  xl: "text-9xl",
};

export const NeonPreview = ({ 
  text, 
  color, 
  font, 
  size = "lg", 
  className 
}: NeonPreviewProps) => {
  return (
    <div className={cn(
      "flex items-center justify-center p-8 rounded-xl bg-gradient-to-br from-background to-card min-h-[200px]",
      className
    )}>
      <h1 
        className={cn(
          "font-bold select-none",
          colorClasses[color],
          fontClasses[font],
          sizeClasses[size]
        )}
      >
        {text || "Your Text"}
      </h1>
    </div>
  );
};
