"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Project {
  title: string;
  description: string;
  link: string;
  achievements: string[];
}

interface ProjectsProps {
  content: string;
}

export function Projects({ content }: ProjectsProps) {
  const projects: Project[] = parseProjectsFromMarkdown(content);

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <p className="text-center text-gray-600">No projects found.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.title)}`}
                      alt={`${project.title} preview`}
                      className="w-full h-40 object-cover mb-4 rounded-md"
                    />
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full mt-auto">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

function parseProjectsFromMarkdown(content: string): Project[] {
  const lines = content.split('\n');
  const projects: Project[] = [];
  let currentProject: Partial<Project> | null = null;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentProject && currentProject.title && currentProject.description && currentProject.link) {
        projects.push(currentProject as Project);
      }
      currentProject = { title: line.slice(3).trim(), achievements: [] };
    } else if (currentProject) {
      if (line.startsWith('[') && line.includes('](')) {
          currentProject.link = line.match(/\[(.*?)\]\((.*?)\)/)?.[2] || '';
      } else if (line.startsWith('- ')) {
        currentProject.achievements?.push(line.slice(2).trim());
      } else if (line.trim() !== '' && !currentProject.description) {
        currentProject.description = line.trim();
      }
    }
  }

  if (currentProject && currentProject.title && currentProject.description && currentProject.link) {
    projects.push(currentProject as Project);
  }

  return projects;
}

