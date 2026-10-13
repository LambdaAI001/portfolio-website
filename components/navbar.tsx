"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ThemeToggle } from "./theme-toggle";

interface NavbarProps {
  name: string;
  avatarUrl?: string;
  availableForWork?: boolean;
}

export function Navbar({ name, avatarUrl, availableForWork = true }: NavbarProps) {
  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-4xl px-4 sm:px-6">
      <nav
        aria-label="Main Navigation"
        className="flex items-center justify-between rounded-full border border-border/70 bg-background/80 px-3 py-1.5 sm:px-4 sm:py-2 shadow-xs backdrop-blur-md transition-all duration-200 hover:border-border"
      >
        {/* Brand / Monogram */}
        <Link
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight transition-colors hover:text-primary"
        >
          <Avatar className="size-7 rounded-full ring-1 ring-primary/20 transition-transform group-hover:scale-105">
            {avatarUrl && <AvatarImage src={avatarUrl} alt={name} className="object-cover" />}
            <AvatarFallback className="bg-primary/10 font-mono text-xs font-bold text-primary">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline font-medium text-foreground">
            {name}
          </span>
        </Link>

        {/* Section Navigation Links */}
        <div className="flex items-center gap-0.5 text-xs font-medium text-muted-foreground sm:gap-2 sm:text-sm">
          <Link
            href="#experience"
            className="rounded-full px-2 py-1 transition-colors hover:bg-muted hover:text-foreground sm:px-2.5"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="rounded-full px-2 py-1 transition-colors hover:bg-muted hover:text-foreground sm:px-2.5"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="rounded-full px-2 py-1 transition-colors hover:bg-muted hover:text-foreground sm:px-2.5"
          >
            Skills
          </Link>
          <Link
            href="#certifications"
            className="hidden sm:inline-block rounded-full px-2.5 py-1 transition-colors hover:bg-muted hover:text-foreground"
          >
            Credentials
          </Link>
        </div>

        {/* Actions Group: Theme Toggle & Contact */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {availableForWork && (
            <span className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available
            </span>
          )}

          <ThemeToggle />

          <a
            href="#contact"
            className={buttonVariants({
              variant: "default",
              size: "xs",
              className: "rounded-full font-medium h-7 px-3 text-xs",
            })}
          >
            <span>Contact</span>
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </nav>
    </header>
  );
}
