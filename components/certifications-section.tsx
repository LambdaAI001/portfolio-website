import { ArrowUpRight, Award, ShieldCheck } from "lucide-react";
import type { Certification } from "@/types/portfolio";

interface CertificationsSectionProps {
  certifications: readonly Certification[];
}

export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <div className="divide-y divide-border/50 rounded-xl border border-border/60 bg-card/30 overflow-hidden">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="group flex flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 transition-colors hover:bg-muted/30"
        >
          <div className="flex items-start gap-3 sm:items-center">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Award className="size-4" aria-hidden="true" />
            </span>
            <div className="space-y-0.5">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="size-3 text-muted-foreground/70" aria-hidden="true" />
                <span>{cert.issuer}</span>
                {cert.credentialId && (
                  <>
                    <span className="text-muted-foreground/40">•</span>
                    <span className="font-mono text-[11px]">ID: {cert.credentialId}</span>
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pl-11 sm:pl-0">
            <span className="font-mono text-xs text-muted-foreground">
              {cert.issueDate}
            </span>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                <span>Verify</span>
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
