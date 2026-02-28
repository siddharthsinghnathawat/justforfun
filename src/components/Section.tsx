import { cn } from '@/lib/utils';
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, title, subtitle, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn('container mx-auto w-full', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-8 h-full">
        <div className="text-center md:text-left w-full">
            {subtitle && <p className="text-muted-foreground font-semibold mb-2">{subtitle}</p>}
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-left relative pb-4 font-headline uppercase">
              {title}
            </h2>
        </div>
        {children}
      </div>
    </section>
  )
);
Section.displayName = 'Section';

export default Section;
