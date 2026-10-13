"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ThemeToggle } from "./theme-toggle";

interface NavbarProps {
  name: string;
  avatarUrl?: string;
}

const NAV_ITEMS = [
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#certifications", id: "certifications", label: "Credentials" },
] as const;

export function Navbar({ name, avatarUrl }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const scrollPosition = window.scrollY + 160;
      const sectionIds = ["experience", "projects", "skills", "certifications", "contact"];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }

      if (window.scrollY < 180) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <header className="sticky top-3 sm:top-5 z-50 mx-auto w-full max-w-3xl px-3 sm:px-4">
      <nav
        aria-label="Main Navigation"
        className={`flex items-center justify-between rounded-full border px-2 py-1.5 sm:px-3 sm:py-1.5 transition-all duration-300 ${
          isScrolled
            ? "border-border/80 bg-background/85 shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-xl ring-1 ring-border/20"
            : "border-border/50 bg-background/70 shadow-xs backdrop-blur-md"
        }`}
      >
        {/* Brand Monogram */}
        <Tooltip>
          <TooltipTrigger
            render={
              <Link
                href="#top"
                className="group flex items-center gap-2 rounded-full p-0.5 text-xs font-semibold tracking-tight transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Scroll to top - ${name}`}
              />
            }
          >
            <Avatar className="size-7 rounded-full border border-border/70 ring-1 ring-background transition-transform duration-200 group-hover:scale-105">
              {avatarUrl && (
                <AvatarImage src={avatarUrl} alt={name} className="object-cover" />
              )}
              <AvatarFallback className="bg-primary/10 font-mono text-[11px] font-bold text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:inline-block font-medium text-foreground tracking-tight text-xs pr-1">
              {name}
            </span>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={8}>
            Top
          </TooltipContent>
        </Tooltip>

        {/* Center Nav Links */}
        <div className="flex items-center gap-0.5 rounded-full p-0.5 text-xs text-muted-foreground sm:gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative rounded-full px-2.5 py-1 text-xs font-medium transition-colors duration-150 sm:px-3 ${
                  isActive
                    ? "bg-muted font-semibold text-foreground"
                    : "hover:bg-muted/60 hover:text-foreground"
                }`}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Action Group: Theme Toggle & Contact */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <ThemeToggle />

          <Separator orientation="vertical" className="h-4 bg-border/60 mx-0.5" />

          <a
            href="#contact"
            className={buttonVariants({
              variant: "default",
              size: "sm",
              className: "group h-7 rounded-full px-2.5 sm:px-3 text-xs font-medium gap-1 shadow-2xs cursor-pointer",
            })}
          >
            <span>Contact</span>
            <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
