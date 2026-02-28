'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronDown } from 'lucide-react';

export default function Cover() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'dev-profile');

  const name = "Siddharth Singh Nathawat";
  const bio = "I'm a passionate full stack developer with a knack for creating beautiful, intuitive, and performant user experiences.";

  return (
    <section id="home" className="relative w-full flex items-center justify-center py-20 md:py-32">
        <div className="container mx-auto px-4 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="relative">
                        <h1 className="text-5xl md:text-8xl font-bold font-headline uppercase tracking-tighter text-foreground">
                            {name.split(' ')[0]} <br/> {name.split(' ').slice(1).join(' ')}
                        </h1>
                        <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 bg-primary w-32 h-16 md:w-48 md:h-24 -z-10"></div>
                    </div>
                     <p className="text-lg text-muted-foreground max-w-md">{bio}</p>
                </div>
                <div className="relative w-full max-w-xs md:max-w-md mx-auto aspect-square">
                    {profileImage && (
                        <Image
                            src={profileImage.imageUrl}
                            alt="Siddharth Singh Nathawat"
                            width={600}
                            height={600}
                            data-ai-hint={profileImage.imageHint}
                            className="object-contain z-10"
                        />
                    )}
                    <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 h-24 md:w-48 md:h-32 bg-primary z-0"></div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="animate-bounce-slow text-primary">
                <ChevronDown className="h-8 w-8" />
            </div>
        </div>
    </section>
  );
}
