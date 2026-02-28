'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import React, { useState } from 'react';
import { navLinks, socialLinks } from '@/lib/data';
import { Menu, X, Github, Linkedin, ChevronDown } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full',
        'text-foreground bg-white/10 backdrop-blur-sm'
      )}
    >
      <div className="container flex h-20 items-center">
        <div className="flex w-full justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold font-headline uppercase">
              Portfolio
            </span>
          </Link>
          <div className="flex items-center">
            <nav className="hidden md:flex items-center">
              {navLinks.map((link) => (
                <Button key={link.href} variant="ghost" asChild>
                  <Link
                    href={link.href}
                    className="text-sm font-medium uppercase px-4 py-2 hover:bg-primary hover:text-black"
                  >
                    {link.name}
                  </Link>
                </Button>
              ))}
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-sm font-medium uppercase px-4 py-2 hover:bg-primary hover:text-black">
                        Connect <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <Link href={socialLinks.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                         <Link href={socialLinks.linkedin} target="_blank">
                            <Linkedin className="mr-2 h-4 w-4" />
                            <span>LinkedIn</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </nav>
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                     <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold font-headline uppercase">
                        Portfolio
                        </span>
                    </Link>
                  </SheetHeader>
                  <nav className="flex flex-col items-start gap-4 mt-8">
                    {navLinks.map((link) => (
                      <Button
                        key={link.href}
                        variant="link"
                        asChild
                        onClick={() => setIsSheetOpen(false)}
                      >
                        <Link
                          href={link.href}
                          className="text-lg font-medium uppercase text-foreground"
                        >
                          {link.name}
                        </Link>
                      </Button>
                    ))}
                    <div className="flex gap-2">
                         <Button variant="ghost" size="icon" asChild>
                            <Link href={socialLinks.github} target="_blank">
                                <Github />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href={socialLinks.linkedin} target="_blank">
                                <Linkedin />
                            </Link>
                        </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
