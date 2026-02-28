import Section from './Section';
import { projects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import Link from 'next/link';

export default function Projects() {
  return (
    <Section id="projects" title="PROJECTS" subtitle="MY RECENT WORK">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col justify-between bg-background text-foreground border-2 border-border p-4">
                <div>
                  <h3 className="mb-1 text-xl font-semibold font-headline">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <Link href={project.githubUrl} target="_blank">
                  <Button variant="link" className="p-0 mt-4 text-primary justify-start">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
            </div>
          ))}
        </div>
    </Section>
  );
}
