import { TimelineEntry, TimelineEntryType } from "@/types/portfolio";
import { formatDateRange } from "@/lib/format";
import { Briefcase, GraduationCap, MapPin, type LucideIcon } from "lucide-react";

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
    <li className="group relative pb-12 pl-8 last:pb-2 md:pl-10">
      {/* Node Marker on Left Rail */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground shadow-2xs ring-4 ring-background transition-colors group-hover:border-primary/60 group-hover:text-primary"
      >
        <Icon className="size-3.5" />
      </span>

      {/* Streamlined Editorial Content (No Card enclosure) */}
      <div className="space-y-3">
        {/* Header: Role & Date */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="space-y-0.5">
            <h3 className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {title}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              <span className="font-medium text-foreground/85">{organization}</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3 text-muted-foreground/60" aria-hidden="true" />
                <span>{location}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-0.5 sm:pt-0">
            <time className="font-mono text-xs text-muted-foreground/80">
              {formatDateRange(startDate, endDate)}
            </time>
            {isCurrent && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                Current
              </span>
            )}
          </div>
        </div>

        {/* Narrative Summary */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {summary}
        </p>

        {/* High-Impact Highlights */}
        {highlights.length > 0 && (
          <ul className="space-y-2 pt-1 text-sm text-muted-foreground">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/40 transition-colors group-hover:bg-primary/70"
                />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies as sleek subtle chips */}
        {technologies.length > 0 && (
          <ul
            aria-label="Technologies used"
            className="flex flex-wrap gap-1.5 pt-2"
          >
            {technologies.map((technology) => (
              <li key={technology}>
                <span className="inline-block rounded-md border border-border/50 bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground">
                  {technology}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
