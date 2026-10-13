import React from "react";
import { Document, Page, View, Text, StyleSheet, Link, Fixed } from "@formepdf/react";
import { render } from "@formepdf/react";
import { renderPdf } from "@formepdf/core";
import {
  profile,
  timeline,
  projects,
  certifications,
  skillGroups,
} from "@/data/portfolio";
import type {
  Certification,
  Profile,
  Project,
  SkillGroup,
  TimelineEntry,
} from "@/types/portfolio";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#27272a",
    backgroundColor: "#ffffff",
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: "#18181b",
    paddingBottom: 8,
  },
  headerTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    color: "#09090b",
    letterSpacing: -0.4,
  },
  role: {
    fontSize: 11,
    fontWeight: 600,
    color: "#0f172a",
    marginTop: 1,
  },
  location: {
    fontSize: 8.5,
    color: "#52525b",
  },
  contactBar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 4,
    fontSize: 8.5,
    color: "#52525b",
  },
  contactItem: {
    color: "#0f172a",
    textDecoration: "none",
  },
  contactDivider: {
    color: "#a1a1aa",
  },
  section: {
    marginTop: 8,
    marginBottom: 3,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: "#09090b",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    borderBottomWidth: 0.75,
    borderBottomColor: "#e4e4e7",
    paddingBottom: 2,
    marginBottom: 6,
  },
  summaryText: {
    fontSize: 8.5,
    lineHeight: 1.45,
    color: "#3f3f46",
  },
  experienceItem: {
    marginBottom: 8,
  },
  itemHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 1,
  },
  itemTitleLine: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    flexWrap: "wrap",
  },
  itemTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: "#09090b",
  },
  itemCompany: {
    fontSize: 9,
    fontWeight: 600,
    color: "#18181b",
  },
  itemDates: {
    fontSize: 8,
    color: "#52525b",
    fontFamily: "Courier",
  },
  itemLocation: {
    fontSize: 8,
    color: "#71717a",
  },
  itemSummary: {
    fontSize: 8.5,
    color: "#4b5563",
    marginBottom: 3,
  },
  bulletList: {
    marginTop: 1,
    marginBottom: 2,
  },
  bulletItem: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletDot: {
    width: 8,
    fontSize: 8,
    color: "#09090b",
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: "#3f3f46",
    lineHeight: 1.35,
  },
  techPills: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
    marginTop: 2,
  },
  techPill: {
    fontSize: 7.5,
    backgroundColor: "#f4f4f5",
    color: "#3f3f46",
    borderRadius: 2,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 3,
    paddingRight: 3,
    fontFamily: "Courier",
  },
  skillsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  skillRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  skillCategoryTitle: {
    fontSize: 8.5,
    fontWeight: 700,
    color: "#18181b",
    width: 140,
  },
  skillListText: {
    flex: 1,
    fontSize: 8.5,
    color: "#4b5563",
    lineHeight: 1.3,
  },
  twoColumnGrid: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  column: {
    flex: 1,
  },
  certItem: {
    marginBottom: 5,
  },
  certName: {
    fontSize: 8.5,
    fontWeight: 600,
    color: "#09090b",
  },
  certMeta: {
    fontSize: 7.5,
    color: "#71717a",
  },
  footer: {
    borderTopWidth: 0.5,
    borderTopColor: "#e4e4e7",
    paddingTop: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 7.5,
    color: "#71717a",
  },
});

export interface ResumeDocumentProps {
  profile: Profile;
  timeline: readonly TimelineEntry[];
  projects: readonly Project[];
  certifications: readonly Certification[];
  skillGroups: readonly SkillGroup[];
}

export function ResumeDocument({
  profile: p,
  timeline: t,
  projects: pr,
  certifications: certs,
  skillGroups: skills,
}: ResumeDocumentProps) {
  const workEntries = t.filter((entry) => entry.type === "work");
  const educationEntries = t.filter((entry) => entry.type === "education");
  const featuredProjects = pr.filter((project) => project.featured);

  return (
    <Document>
      <Page
        size="A4"
        margin={{ top: 32, bottom: 36, left: 36, right: 36 }}
        style={styles.page}
      >
        {/* Fixed Footer repeated on every page with page numbers */}
        <Fixed position="footer">
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              {p.name} — Curriculum Vitae
            </Text>
            <Text style={styles.footerText}>
              Page {"{{pageNumber}}"} of {"{{totalPages}}"}
            </Text>
          </View>
        </Fixed>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.name}>{p.name}</Text>
              <Text style={styles.role}>{p.role}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.location}>{p.location}</Text>
            </View>
          </View>

          <View style={styles.contactBar}>
            <Link href={`mailto:${p.email}`} style={styles.contactItem}>
              {p.email}
            </Link>
            {p.socialLinks?.github && (
              <>
                <Text style={styles.contactDivider}>•</Text>
                <Link href={p.socialLinks.github} style={styles.contactItem}>
                  {p.socialLinks.github.replace(/^https?:\/\//, "")}
                </Link>
              </>
            )}
            {p.socialLinks?.linkedin && (
              <>
                <Text style={styles.contactDivider}>•</Text>
                <Link href={p.socialLinks.linkedin} style={styles.contactItem}>
                  {p.socialLinks.linkedin.replace(/^https?:\/\//, "")}
                </Link>
              </>
            )}
            {p.socialLinks?.twitter && (
              <>
                <Text style={styles.contactDivider}>•</Text>
                <Link href={p.socialLinks.twitter} style={styles.contactItem}>
                  {p.socialLinks.twitter.replace(/^https?:\/\//, "")}
                </Link>
              </>
            )}
          </View>
        </View>

        {/* Executive Summary */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Executive Summary</Text>
          <Text style={styles.summaryText}>{p.summary}</Text>
        </View>

        {/* Technical Skills & Competencies */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Technical Skills & Core Competencies</Text>
          <View style={styles.skillsGrid}>
            {skills.map((group) => (
              <View key={group.category} style={styles.skillRow}>
                <Text style={styles.skillCategoryTitle}>{group.category}:</Text>
                <Text style={styles.skillListText}>{group.skills.join(" • ")}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {workEntries.map((job) => (
            <View key={job.id} style={styles.experienceItem} wrap={false}>
              <View style={styles.itemHeader}>
                <View style={styles.itemTitleLine}>
                  <Text style={styles.itemTitle}>{job.title}</Text>
                  <Text style={{ color: "#71717a" }}>|</Text>
                  <Text style={styles.itemCompany}>{job.organization}</Text>
                  <Text style={styles.itemLocation}>({job.location})</Text>
                </View>
                <Text style={styles.itemDates}>
                  {job.startDate} — {job.endDate ?? "Present"}
                </Text>
              </View>

              <Text style={styles.itemSummary}>{job.summary}</Text>

              {job.highlights && job.highlights.length > 0 && (
                <View style={styles.bulletList}>
                  {job.highlights.map((highlight, idx) => (
                    <View key={idx} style={styles.bulletItem}>
                      <Text style={styles.bulletDot}>•</Text>
                      <Text style={styles.bulletText}>{highlight}</Text>
                    </View>
                  ))}
                </View>
              )}

              {job.technologies && (
                <View style={styles.techPills}>
                  {job.technologies.map((tech) => (
                    <Text key={tech} style={styles.techPill}>
                      {tech}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Key Engineering Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Engineering Projects</Text>
          {featuredProjects.map((proj) => (
            <View key={proj.id} style={styles.experienceItem} wrap={false}>
              <View style={styles.itemHeader}>
                <View style={styles.itemTitleLine}>
                  <Text style={styles.itemTitle}>{proj.name}</Text>
                  {proj.role && (
                    <>
                      <Text style={{ color: "#71717a" }}>|</Text>
                      <Text style={styles.itemCompany}>{proj.role}</Text>
                    </>
                  )}
                </View>
                {proj.metrics && (
                  <Text style={styles.itemDates}>{proj.metrics}</Text>
                )}
              </View>
              <Text style={styles.itemSummary}>{proj.description}</Text>
              <View style={styles.techPills}>
                {proj.technologies.map((tech) => (
                  <Text key={tech} style={styles.techPill}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education & Certifications */}
        <View style={{ ...styles.section, ...styles.twoColumnGrid }} wrap={false}>
          {/* Education */}
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>Education</Text>
            {educationEntries.map((edu) => (
              <View key={edu.id} style={styles.certItem}>
                <Text style={styles.certName}>{edu.title}</Text>
                <Text style={styles.certMeta}>
                  {edu.organization} ({edu.startDate} — {edu.endDate})
                </Text>
                <Text style={{ ...styles.certMeta, marginTop: 1 }}>{edu.summary}</Text>
              </View>
            ))}
          </View>

          {/* Certifications */}
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>Certifications & Credentials</Text>
            {certs.map((cert) => (
              <View key={cert.id} style={styles.certItem}>
                <Text style={styles.certName}>{cert.name}</Text>
                <Text style={styles.certMeta}>
                  {cert.issuer} • {cert.issueDate} • ID: {cert.credentialId}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

/**
 * Server-side helper to compile and render the Forme document into binary PDF bytes.
 */
export async function generateResumePdf(): Promise<Uint8Array> {
  const doc = (
    <ResumeDocument
      profile={profile}
      timeline={timeline}
      projects={projects}
      certifications={certifications}
      skillGroups={skillGroups}
    />
  );

  const json = render(doc);
  return await renderPdf(json);
}
