'use client';

import { cn } from '@/lib/utils';

interface GlowingBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: string;
}

export function GlowingBorderCard({
  className,
  children,
  ...props
}: GlowingBorderCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lg bg-card/80 text-card-foreground shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:shadow-2xl',
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-[-200%] -z-10 h-[400%] w-[400%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--accent))_50%,hsl(var(--primary))_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 -z-20 rounded-lg bg-card/80" />
    </div>
  );
}
