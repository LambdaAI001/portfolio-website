export interface Stat {
  readonly label: string;
  readonly value: string;
}

export interface SocialLinks {
  readonly github?: string;
  readonly linkedin?: string;
  readonly twitter?: string;
}

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly email: string;
  readonly summary: string;
  readonly resumeUrl: string;
  readonly avatarUrl?: string;
  readonly availableForWork?: boolean;
  readonly statusText?: string;
  readonly socialLinks?: SocialLinks;
  readonly stats: Stat[];
}

export type TimelineEntryType = "work" | "education";

export interface TimelineEntry {
  readonly id: string;
  readonly type: TimelineEntryType;
  readonly title: string;
  readonly organization: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string | null;
  readonly summary: string;
  readonly highlights: string[];
  readonly technologies: string[];
}

export interface SkillGroup {
  readonly category: string;
  readonly skills: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly href: string;
  readonly technologies: readonly string[];
  readonly featured?: boolean;
  readonly role?: string;
  readonly metrics?: string;
  readonly githubUrl?: string;
}

export interface Certification {
  readonly id: string;
  readonly name: string;
  readonly issuer: string;
  readonly issueDate: string;
  readonly credentialId?: string;
  readonly credentialUrl?: string;
}
