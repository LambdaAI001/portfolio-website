"use client";

import { useState } from "react";
import { Profile } from "@/types/portfolio";
import { Check, Copy, FileText, Mail, MapPin } from "lucide-react";
import { buttonVariants, Button } from "./ui/button";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "./ui/avatar";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const {
    name,
    role,
    location,
    email,
    summary,
    resumeUrl,
    stats,
    avatarUrl,
    availableForWork = true,
    statusText = "Available for select roles & advisory",
    socialLinks,
  } = profile;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <header id="top" className="space-y-10 pt-8 pb-16 md:pt-12 md:pb-20">
      {/* Top Banner / Availability Chip */}
      <div className="flex flex-wrap items-center gap-3">
        {availableForWork && (
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span>{statusText}</span>
          </div>
        )}

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="size-3.5 text-muted-foreground/70" aria-hidden="true" />
          <span>{location}</span>
        </div>
      </div>

      {/* Main Hero Grid: Content + Profile Avatar */}
      <div className="grid items-center gap-8 md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_240px]">
        {/* Left Column: Heading, Role, Bio, CTAs */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              {name}
            </h1>
            <p className="text-xl font-semibold text-primary sm:text-2xl">
              {role}
            </p>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {summary}
          </p>

          {/* Action Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${email}`}
              className={buttonVariants({ variant: "default", size: "default" })}
            >
              <Mail className="size-4" aria-hidden="true" />
              <span>Get in touch</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "default" })}
            >
              <FileText className="size-4" aria-hidden="true" />
              <span>Resume</span>
            </a>

            <Button
              variant="outline"
              size="default"
              onClick={handleCopy}
              className="gap-2 cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="size-4 text-muted-foreground" />
                  <span>Copy email</span>
                </>
              )}
            </Button>

            {/* Social Platform Icons */}
            <div className="flex items-center gap-1 pl-1">
              {socialLinks?.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon-sm",
                    className: "text-muted-foreground hover:text-foreground",
                  })}
                  aria-label="GitHub Profile"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              )}

              {socialLinks?.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon-sm",
                    className: "text-muted-foreground hover:text-foreground",
                  })}
                  aria-label="LinkedIn Profile"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24m1.39 9.74v-8.37H5.07v8.37z" />
                  </svg>
                </a>
              )}

              {socialLinks?.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon-sm",
                    className: "text-muted-foreground hover:text-foreground",
                  })}
                  aria-label="Twitter / X Profile"
                >
                  <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Profile Avatar / Portrait with Ambient Ring */}
        <div className="relative mx-auto flex flex-col items-center justify-center md:items-end">
          <div className="group relative">
            {/* Ambient Background Glow (Theme-aware primary tokens) */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-full bg-linear-to-tr from-primary/20 via-accent to-primary/10 blur-2xl opacity-60 transition duration-500 group-hover:opacity-100"
            />

            {/* Shadcn UI Avatar Component with AvatarBadge */}
            <Avatar className="size-40 sm:size-44 md:size-48 rounded-full border border-border/80 bg-muted/40 shadow-xl transition-transform duration-500 group-hover:scale-105">
              {avatarUrl && (
                <AvatarImage
                  src={avatarUrl}
                  alt={name}
                  className="size-full rounded-full object-cover"
                />
              )}
              <AvatarFallback className="flex size-full items-center justify-center rounded-full bg-muted font-mono text-3xl font-bold text-foreground">
                {initials}
              </AvatarFallback>

              {availableForWork && (
                <AvatarBadge
                  className="size-5 sm:size-6 border-2 border-background bg-emerald-500 ring-0 text-white"
                  title={statusText}
                >
                  <span className="size-2 rounded-full bg-white animate-pulse" />
                </AvatarBadge>
              )}
            </Avatar>
          </div>
        </div>
      </div>

      {/* Bento Metric Counters */}
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/60 p-4 backdrop-blur-xs transition-all duration-200 hover:border-primary/30 hover:bg-card/90"
          >
            <dt className="text-xs font-medium text-muted-foreground group-hover:text-foreground/90 transition-colors">
              {label}
            </dt>
            <dd className="mt-1 font-mono text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {value}
            </dd>
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 size-16 rounded-full bg-primary/5 blur-lg transition-transform group-hover:scale-150"
            />
          </div>
        ))}
      </dl>
    </header>
  );
}
