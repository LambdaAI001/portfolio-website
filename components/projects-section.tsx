"use client";

import { useState } from "react";
import { ArrowUpRight, FolderGit2, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";
import type { Project } from "@/types/portfolio";

interface ProjectsSectionProps {
  projects: readonly Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  // If none are explicitly featured, show the first 2 as featured
  const primaryProjects =
    featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 2);
  const secondaryProjects =
    featuredProjects.length > 0 ? otherProjects : projects.slice(2);

  const displayedSecondary = showAll
    ? secondaryProjects
    : secondaryProjects.slice(0, 4);

  return (
    <div className="space-y-10">
      {/* Flagship / Featured Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {primaryProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-xs transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:shadow-sm"
          >
            <div className="space-y-4">
              {/* Header with Title and Badges */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                      <Sparkles className="size-2.5" />
                      Featured
                    </span>
                    {project.role && (
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.role}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {project.name}
                  </h3>
                </div>

                {/* External Links */}
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      title="View GitHub Repository"
                      aria-label={`${project.name} source code on GitHub`}
                    >
                      <svg className="size-4 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-7 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground shadow-2xs transition-all hover:border-primary hover:text-primary"
                    title="Visit Live Application"
                    aria-label={`Visit ${project.name} live project`}
                  >
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Key Impact / Metric */}
              {project.metrics && (
                <div className="flex items-center gap-2 pt-1 font-mono text-xs text-foreground/85">
                  <span className="size-1.5 rounded-full bg-primary/60 shrink-0" aria-hidden="true" />
                  <span>{project.metrics}</span>
                </div>
              )}
            </div>

            {/* Technologies */}
            <ul className="flex flex-wrap gap-1.5 pt-6" aria-label="Tech stack">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <Badge
                    variant="secondary"
                    className="border border-border/40 bg-secondary/50 font-mono text-[11px] font-normal"
                  >
                    {tech}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Other Projects / Secondary Archive */}
      {secondaryProjects.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              <FolderGit2 className="size-4" />
              <span>Other Open Source &amp; Tools ({secondaryProjects.length})</span>
            </h4>
            {secondaryProjects.length > 4 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-xs font-medium text-primary hover:underline cursor-pointer"
              >
                {showAll ? "Show less" : `View all (${secondaryProjects.length})`}
              </button>
            )}
          </div>

          <div className="divide-y divide-border/50 rounded-xl border border-border/60 bg-card/30 overflow-hidden">
            {displayedSecondary.map((project) => (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-2 p-4 transition-colors hover:bg-muted/30 sm:flex-row sm:items-center sm:gap-4"
              >
                <div className="space-y-1 sm:max-w-md">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm text-foreground transition-colors group-hover:text-primary">
                      {project.name}
                    </span>
                    <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="line-clamp-1 text-xs text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-[11px] sm:justify-end">
                  <span className="font-mono text-muted-foreground/80">
                    {project.technologies.slice(0, 3).join(" • ")}
                  </span>
                  {project.metrics && (
                    <span className="font-mono text-muted-foreground">
                      {project.metrics}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
