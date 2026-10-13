"use client";

import { useState } from "react";
import { Check, Copy, Mail, ArrowUp } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import type { SocialLinks } from "@/types/portfolio";

interface FooterProps {
  email: string;
  name: string;
  socialLinks?: SocialLinks;
  year?: number;
}

export function Footer({ email, name, socialLinks, year = 2025 }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="mt-20 border-t border-border/60 pt-16 pb-12">
      {/* Contact Call-to-Action Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-linear-to-br from-card via-card/90 to-primary/5 p-8 md:p-12">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Get in touch
          </span>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
            Let&apos;s build something exceptional together.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Whether you are looking to scale a mission-critical platform, need senior technical architecture guidance, or want to discuss full-stack engineering roles, my inbox is open.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${email}`}
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "gap-2 shadow-xs",
              })}
            >
              <Mail className="size-4" />
              <span>Send an email</span>
            </a>

            <Button
              variant="outline"
              size="lg"
              onClick={handleCopyEmail}
              className="gap-2"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">
                    Copied to clipboard
                  </span>
                </>
              ) : (
                <>
                  <Copy className="size-4 text-muted-foreground" />
                  <span>Copy email</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Ambient subtle lighting effect */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs text-muted-foreground sm:flex-row">
        <p>
          &copy; {year} {name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks?.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          )}
          {socialLinks?.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          )}
          {socialLinks?.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              X / Twitter
            </a>
          )}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 rounded px-2 py-1 transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="size-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
