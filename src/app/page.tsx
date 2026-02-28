import About from '@/components/About';
import Contact from '@/components/Contact';
import Cover from '@/components/Cover';
import Projects from '@/components/Projects';
import WhatIDo from '@/components/WhatIDo';

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex w-full items-center justify-center bg-background text-foreground md:min-h-screen">
        <Cover />
      </div>
      <div className="flex w-full items-center justify-center bg-card py-16 text-card-foreground md:min-h-screen md:py-24">
        <About />
      </div>
      <div className="flex w-full items-center justify-center bg-background py-16 text-foreground md:min-h-screen md:py-24">
        <WhatIDo />
      </div>
      <div className="flex w-full items-center justify-center bg-card py-16 text-card-foreground md:min-h-screen md:py-24">
        <Projects />
      </div>
      <div className="flex w-full items-center justify-center bg-background py-16 text-foreground md:min-h-screen md:py-24">
        <Contact />
      </div>
    </main>
  );
}
