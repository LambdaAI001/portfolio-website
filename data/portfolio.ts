import type {
  Certification,
  Profile,
  Project,
  SkillGroup,
  TimelineEntry,
} from "@/types/portfolio";

export const profile: Profile = {
  name: "John Doe",
  role: "Senior Full-Stack Engineer",
  location: "Nairobi, Kenya",
  email: "johndoe@gmail.com",
  summary:
    "I design and ship reliable, high-performance web products and resilient backend platforms. Over eight years I've led distributed teams, scaled payment platforms to millions of users, and championed modern web architectures across fintech and developer tooling.",
  resumeUrl: "/resume.pdf",
  avatarUrl:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  availableForWork: true,
  statusText: "Available for select roles & advisory",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  stats: [
    { label: "Years of experience", value: "8+" },
    { label: "Products shipped", value: "25+" },
    { label: "Engineers mentored", value: "12" },
    { label: "MAU scaled", value: "2M+" },
  ],
};

/** Ordered newest → oldest. */
export const timeline: readonly TimelineEntry[] = [
  {
    id: "northwind-staff",
    type: "work",
    title: "Senior Software Engineer",
    organization: "Northwind Labs",
    location: "Remote",
    startDate: "2023-02",
    endDate: null,
    summary:
      "Core lead on the global payments platform serving 2M+ monthly active users across multi-region infrastructure.",
    highlights: [
      "Cut checkout latency by 38% by introducing streaming server components and edge rendering.",
      "Introduced an accessible design system adopted across five product teams and 40+ microfrontends.",
      "Mentored four engineers, two of whom received senior promotions within 12 months.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Redis"],
  },
  {
    id: "brightpay-engineer",
    type: "work",
    title: "Full-Stack Engineer",
    organization: "BrightPay",
    location: "Nairobi, Kenya",
    startDate: "2020-06",
    endDate: "2023-01",
    summary:
      "Engineered mobile-money integrations, real-time settlement ledgers, and merchant analytics dashboards.",
    highlights: [
      "Shipped a self-serve merchant dashboard that reduced tier-1 customer support tickets by 30%.",
      "Architected an event-driven reconciliation pipeline on Kafka & Redis processing 1M+ daily transactions.",
      "Integrated automated reconciliation workflows with 99.98% financial transaction accuracy.",
    ],
    technologies: ["React", "Node.js", "Redis", "AWS", "Kafka", "PostgreSQL"],
  },
  {
    id: "safari-tech",
    type: "work",
    title: "Frontend Engineer",
    organization: "Safari Interactive",
    location: "Nairobi, Kenya",
    startDate: "2018-05",
    endDate: "2020-05",
    summary:
      "Built responsive, accessible web portals for high-traffic media and e-commerce platforms.",
    highlights: [
      "Refactored legacy single-page apps into modern modular component libraries, boosting Lighthouse scores from 62 to 98.",
      "Collaborated with UX researchers to conduct weekly usability studies and A/B test conversion funnels.",
    ],
    technologies: ["JavaScript", "React", "TypeScript", "CSS Modules", "Webpack"],
  },
  {
    id: "uon-bsc",
    type: "education",
    title: "BSc in Computer Science",
    organization: "University of Nairobi",
    location: "Nairobi, Kenya",
    startDate: "2016-09",
    endDate: "2020-05",
    summary: "Graduated with First Class Honours. Specialization in Distributed Systems & Algorithms.",
    highlights: [
      "Final-year capstone: Offline-first decentralized learning platform for bandwidth-constrained rural schools.",
      "Head Teaching Assistant for Data Structures, Algorithms, and Operating Systems.",
    ],
    technologies: ["Java", "Python", "SQL", "C++"],
  },
];

export const certifications: readonly Certification[] = [
  {
    id: "aws-solutions-architect",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issueDate: "2023",
    credentialId: "AWS-SAA-849201",
    credentialUrl: "https://aws.amazon.com/verification",
  },
  {
    id: "cka-kubernetes",
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    issueDate: "2022",
    credentialId: "CKA-294021",
    credentialUrl: "https://www.cncf.io/certification/cka/",
  },
  {
    id: "meta-frontend",
    name: "Meta Certified Front-End Developer",
    issuer: "Meta",
    issueDate: "2021",
    credentialId: "META-FED-10492",
    credentialUrl: "https://coursera.org/verify/professional-cert",
  },
];

export const skillGroups: readonly SkillGroup[] = [
  {
    category: "Frontend & Architecture",
    skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "State Machines", "Web Vitals"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "REST APIs", "Kafka", "Prisma / Drizzle"],
  },
  {
    category: "Cloud, DevOps & QA",
    skills: ["Docker", "AWS (ECS, Lambda, S3)", "GitHub Actions", "Terraform", "Vitest", "Playwright"],
  },
];

export const projects: readonly Project[] = [
  {
    id: "ledgerly",
    name: "Ledgerly",
    description:
      "An open-source double-entry immutable accounting engine with a strictly typed, framework-agnostic API and automated balance verification.",
    technologies: ["TypeScript", "Vitest", "Turborepo", "Node.js"],
    href: "https://example.com/ledgerly",
    githubUrl: "https://github.com/example/ledgerly",
    featured: true,
    role: "Creator & Maintainer",
    metrics: "450+ GitHub Stars • Zero runtime dependencies",
  },
  {
    id: "pulse",
    name: "Pulse Monitoring",
    description:
      "Real-time distributed synthetic uptime monitor featuring instant webhook triggers, incident post-mortem generation, and live status pages.",
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "Redis"],
    href: "https://example.com/pulse",
    githubUrl: "https://github.com/example/pulse",
    featured: true,
    role: "Lead Architect",
    metrics: "< 50ms incident detection • 99.99% uptime",
  },
  {
    id: "flow-ui",
    name: "Flow UI Primitives",
    description:
      "A collection of accessible, copy-paste micro-interactions and command palettes engineered with Radix primitives and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Radix UI", "Tailwind CSS"],
    href: "https://example.com/flow-ui",
    githubUrl: "https://github.com/example/flow-ui",
    featured: false,
    role: "Author",
    metrics: "15k+ downloads",
  },
  {
    id: "kazi-pipeline",
    name: "Kazi Distributed Queue",
    description:
      "Lightweight resilient job orchestrator built on Redis streams with retry backoff, dead-letter exchanges, and a live web dashboard.",
    technologies: ["Go", "Redis", "Docker", "HTMX"],
    href: "https://example.com/kazi",
    githubUrl: "https://github.com/example/kazi",
    featured: false,
    role: "Creator",
    metrics: "Handles 10k ops/sec",
  },
];
