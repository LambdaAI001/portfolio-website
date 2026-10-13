import { SkillGroup } from "@/types/portfolio";
import { Cloud, Code2, Cpu, Database, Server, Shield } from "lucide-react";

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  "Frontend & Interface Systems": Code2,
  "Backend & Distributed Systems": Server,
  "Cloud, DevOps & Observability": Cloud,
  "Architecture & Applied AI": Cpu,
  "Data Engineering & Analytics": Database,
  "Security & Reliability": Shield,
};

interface SkillsSectionProps {
  groups: readonly SkillGroup[];
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {groups.map(({ category, skills }) => {
        const Icon = CATEGORY_ICONS[category] || Code2;
        return (
          <div key={category} className="space-y-3.5">
            <div className="flex items-center justify-between border-b border-border/50 pb-2">
              <div className="flex items-center gap-2">
                <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {category}
                </h3>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground/70">
                {skills.length}
              </span>
            </div>

            <ul className="flex flex-wrap gap-1.5" aria-label={`${category} skills`}>
              {skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-block rounded-md border border-border/50 bg-muted/30 px-2 py-0.5 font-mono text-xs text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}