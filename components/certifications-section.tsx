import { ArrowUpRight, Award, ShieldCheck } from "lucide-react";
import type { Certification } from "@/types/portfolio";

interface CertificationsSectionProps {
  certifications: readonly Certification[];
}

export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur-xs transition-all duration-200 hover:border-primary/30 hover:bg-card/90 hover:shadow-xs"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Award className="size-4.5" />
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {cert.issueDate}
              </span>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {cert.name}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="size-3 text-muted-foreground/70" />
                <span>{cert.issuer}</span>
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3 text-xs">
            {cert.credentialId ? (
              <span className="font-mono text-[11px] text-muted-foreground/80">
                ID: {cert.credentialId}
              </span>
            ) : (
              <span />
            )}

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-xs text-primary hover:underline"
              >
                <span>Verify</span>
                <ArrowUpRight className="size-3" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
