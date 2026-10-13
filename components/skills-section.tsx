import { SkillGroup } from "@/types/portfolio";
import { Badge } from "./ui/badge";
import { Cloud, Code2, Server } from "lucide-react";

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  "Tooling & Cloud": Cloud,
  "Frontend & Architecture": Code2,
  "Backend & Systems": Server,
  "Cloud, DevOps & QA": Cloud,
};

interface SkillsSectionProps {
  groups: readonly SkillGroup[];
}

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map(({ category, skills }) => {
        const Icon = CATEGORY_ICONS[category] || Code2;
        return (
          <div
            key={category}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur-xs transition-all duration-200 hover:border-primary/30 hover:bg-card/90"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-3.5" />
                  </span>
                  <h3 className="text-sm font-semibold tracking-tight text-foreground">
                    {category}
                  </h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {skills.length} skills
                </span>
              </div>

              <ul className="flex flex-wrap gap-1.5" aria-label={`${category} skills`}>
                {skills.map((skill) => (
                  <li key={skill}>
                    <Badge
                      variant="outline"
                      className="border-border/60 bg-muted/40 font-mono text-[11px] font-normal transition-colors hover:border-primary/40 hover:bg-muted hover:text-foreground"
                    >
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}