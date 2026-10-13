import { TimelineEntry, TimelineEntryType } from "@/types/portfolio";
import { formatDateRange } from "@/lib/format";

import { Briefcase, GraduationCap, type LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const ENTRY_ICONS: Record<TimelineEntryType, LucideIcon> = {
  work: Briefcase,
  education: GraduationCap,
};

interface TimelineItemProps {
  entry: TimelineEntry;
}

export function TimelineItem({ entry }: TimelineItemProps) {
  const {
    type,
    title,
    organization,
    location,
    startDate,
    endDate,
    summary,
    highlights,
    technologies,
  } = entry;
  const Icon = ENTRY_ICONS[type];
  const isCurrent = endDate === null;

  return (
    <li className="relative pb-10 pl-7 last:pb-2 md:pl-10">
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-border/80 bg-background text-primary shadow-2xs ring-4 ring-background transition-colors"
      >
        <Icon className="size-4" />
      </span>
      <Card className="border-border/60 bg-card/60 backdrop-blur-xs transition-all duration-200 hover:border-primary/25 hover:bg-card/90 hover:shadow-xs">
        <CardHeader className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <time className="font-mono text-xs font-medium tracking-tight text-muted-foreground">
              {formatDateRange(startDate, endDate)}
            </time>
            {isCurrent && (
              <Badge
                variant="outline"
                className="gap-1.5 border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
              >
                <span className="relative flex size-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                </span>
                Current
              </Badge>
            )}
          </div>
          <div>
            <CardTitle className="text-lg font-semibold tracking-tight">
              {title}
            </CardTitle>
            <CardDescription className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="font-medium text-foreground/80">{organization}</span>
              <span className="text-muted-foreground/40">•</span>
              <span>{location}</span>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground/90">
            {summary}
          </p>

          {highlights.length > 0 && (
            <ul className="space-y-2 text-sm text-muted-foreground">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60"
                  />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {technologies.length > 0 && (
            <ul
              aria-label="Technologies used"
              className="flex flex-wrap gap-1.5 pt-1"
            >
              {technologies.map((technology) => (
                <li key={technology}>
                  <Badge
                    variant="secondary"
                    className="border border-border/40 bg-secondary/50 font-mono text-[11px] font-normal text-secondary-foreground transition-colors hover:bg-secondary"
                  >
                    {technology}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </li>
  );
}
