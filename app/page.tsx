import { CertificationsSection } from "@/components/certifications-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { SectionHeading } from "@/components/section-heading";
import { SkillsSection } from "@/components/skills-section";
import { Timeline } from "@/components/timeline";
import {
  certifications,
  profile,
  projects,
  skillGroups,
  timeline,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Subtle top ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-1/2 -z-10 h-96 w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,oklch(0.4865_0.2423_291.8661/0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,oklch(0.6083_0.2172_297.1153/0.18),transparent_70%)]"
      />

      <Navbar name={profile.name} avatarUrl={profile.avatarUrl} availableForWork={profile.availableForWork} />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 pb-16">
        <Hero profile={profile} />

        <section id="experience" aria-labelledby="journey-heading" className="py-12 scroll-mt-20">
          <SectionHeading
            id="journey-heading"
            title="Experience & Education"
            description="Track record of engineering leadership, system scaling, and continuous learning."
          />
          <Timeline entries={timeline} labelledBy="journey-heading" />
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="py-12 scroll-mt-20">
          <SectionHeading
            id="projects-heading"
            title="Featured Projects & Open Source"
            description="Production platforms, open-source libraries, and developer tools built with modern stacks."
          />
          <ProjectsSection projects={projects} />
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="py-12 scroll-mt-20">
          <SectionHeading
            id="skills-heading"
            title="Technical Skills & Architecture"
            description="Core technologies, frameworks, and tools applied in high-scale environments."
          />
          <SkillsSection groups={skillGroups} />
        </section>

        <section
          id="certifications"
          aria-labelledby="certifications-heading"
          className="py-12 scroll-mt-20"
        >
          <SectionHeading
            id="certifications-heading"
            title="Certifications & Credentials"
            description="Industry-recognized certifications in cloud architecture, container orchestration, and web development."
          />
          <CertificationsSection certifications={certifications} />
        </section>

        <Footer
          email={profile.email}
          name={profile.name}
          socialLinks={profile.socialLinks}
        />
      </main>
    </div>
  );
}
