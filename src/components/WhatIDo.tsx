import Section from './Section';
import { services } from '@/lib/data';
import { Card } from './ui/card';

export default function WhatIDo() {
  return (
    <Section id="what-i-do" title="WHAT I DO" subtitle="MY SERVICES">
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-center text-center p-6 bg-card text-card-foreground border-border aspect-square"
          >
            <service.icon className="h-10 w-10 text-primary" />
            <h3 className="mt-4 text-lg font-semibold font-headline">{service.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
