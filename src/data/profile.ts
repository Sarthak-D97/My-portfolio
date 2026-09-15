/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to update copy, roles, projects or links. Nothing here is invented:
 * every figure comes from the résumé, the GitHub profile/repo READMEs or the live products.
 */

export const site = {
  name: "Sarthak Chauhan",
  firstName: "Sarthak",
  lastName: "Chauhan",
  initials: "SC",
  role: "Lead Full Stack Engineer",
  org: "Physics Wallah · IOI LeapX",
  orgShort: "Physics Wallah, IOI LeapX",
  since: "Dec 2024",
  title: "Lead Full Stack Engineer · Founder, Lireons",
  tagline:
    "Lead Full Stack Engineer at Physics Wallah IOI LeapX and founder of Lireons, a multi-tenant LMS. TypeScript microservices, Next.js products and AWS infrastructure as code, designed for the failure case first.",
  url: "https://www.sarthakchauhan.in",
  location: "Bengaluru, India",
  locationShort: "Bengaluru, IN",
  timezone: "IST (UTC+5:30)",
  email: "gsarthak913@gmail.com",
  resume: "/Sarthak_Chauhan_Resume.pdf",
  /** Hero pill: the role ask only. Relocation details live in Contact. */
  availability: "Open to backend / full-stack lead roles",
  availabilityLong: "Open to backend / full-stack lead roles — Bengaluru, remote, or Europe (EU Blue Card eligible).",
  headshot: "/images/sarthak.jpg",
  github: "https://github.com/Sarthak-D97",
  linkedin: "https://www.linkedin.com/in/sarthakchauhan1/",
  x: "https://x.com/SarthakCha34602",
  topmate: "https://topmate.io/sarthak_chauhan22",
  lireons: "https://lireons.com",
} as const;

export const socials = [
  { label: "GitHub", href: site.github, handle: "Sarthak-D97", icon: "github" },
  { label: "LinkedIn", href: site.linkedin, handle: "sarthakchauhan1", icon: "linkedin" },
  { label: "X", href: site.x, handle: "@SarthakCha34602", icon: "x" },
  { label: "Topmate", href: site.topmate, handle: "sarthak_chauhan22", icon: "topmate" },
  { label: "Email", href: `mailto:${site.email}`, handle: site.email, icon: "mail" },
] as const;

export type SocialIcon = (typeof socials)[number]["icon"];

/** Section index. The running numbers in the nav, running heads and ghost numerals come from here. */
export const sections = [
  { index: "01", id: "top", label: "Intro", inNav: false },
  { index: "02", id: "about", label: "About", inNav: true },
  { index: "03", id: "experience", label: "Experience", inNav: true },
  { index: "04", id: "lireons", label: "Lireons", inNav: true },
  { index: "05", id: "projects", label: "Projects", inNav: true },
  { index: "06", id: "stack", label: "Stack", inNav: true },
  { index: "07", id: "credentials", label: "Credentials", inNav: true },
  { index: "08", id: "contact", label: "Contact", inNav: true },
] as const;

export const nav = sections.filter((s) => s.inNav).map((s) => ({ index: s.index, label: s.label, href: `#${s.id}` }));

export const hero = {
  meta: `Nº 01 — ${site.role} · ${site.orgShort} · ${site.locationShort}`,
  /** Rendered as three lines at ≥1024px; the word `accentWord` is italic in the accent colour. */
  lines: ["I build the platform.", "I lead the team", "that ships it."],
  accentWord: "ships",
  subheadline:
    "I'm Sarthak Chauhan, Lead Full Stack Engineer at Physics Wallah's IOI LeapX, where I run a 12-person unit (7 full-time) across 12 parallel client projects, and founder of Lireons, a multi-tenant LMS for coding bootcamps. I came to engineering through cybersecurity, so I design for the failure case first.",
  primaryCta: { label: "View selected work", href: "#projects" },
  secondaryCta: { label: "Download résumé", href: site.resume },
  dossier: {
    focus: "Backend · platform · DevSecOps",
  },
} as const;

/** Proof strip. Each figure carries a provenance sentence naming where it comes from (résumé). */
export type ProofCell = { value: number; decimals: 0 | 1; prefix: string; suffix: string; label: string; provenance: string };

export const proof: ProofCell[] = [
  { value: 12, decimals: 0, prefix: "", suffix: "", label: "Person unit led", provenance: "7 full-time engineers · 12 client projects in parallel" },
  { value: 45, decimals: 0, prefix: "−", suffix: "%", label: "Manual release overhead", provenance: "GitHub Actions CI/CD I designed at LeapX" },
  { value: 99.9, decimals: 1, prefix: "", suffix: "%", label: "Lireons uptime", provenance: "Zero-downtime deploys on Kubernetes + AWS" },
  { value: 40, decimals: 0, prefix: "−", suffix: "%", label: "Environment setup time", provenance: "Infra bootstrapping I built for 12+ engineers at LeapX" },
];

export const about = {
  note: site.locationShort,
  marginalia: [
    { label: "Based", value: site.location },
    { label: "Role", value: site.role },
    { label: "Focus", value: "Backend, platform, DevSecOps" },
    { label: "Building", value: "Lireons", href: site.lireons },
    { label: "Availability", value: "Open · Bengaluru, remote or Europe" },
  ],
  title: ["Engineer first, founder second, security", "always."],
  lede:
    "I lead a twelve-person engineering unit at Physics Wallah's IOI LeapX, where we run twelve client projects in parallel and ship TypeScript microservices, Next.js frontends and the pipelines beneath them. On the side I'm building Lireons, a multi-tenant LMS that lets bootcamps run white-label academies on their own domains.",
  paragraphs: [
    "Before I wrote production code I studied cybersecurity — a BCA (Hons), CompTIA Security+ and Network+, and a Top 2% rank on TryHackMe. It left me with a habit: I design for the failure case first, then for the feature.",
    "At LeapX that means CI/CD that removed 45% of manual release work, infrastructure bootstrapping (Bash, Jenkins, Ubuntu Server) that cut environment setup time by 40%, and 15+ hands-on labs so the team learns the systems they run.",
    "Off the clock: weight training most mornings, open-world and fighting games the rest of the time, and 1:1 mentoring sessions for engineers on résumés, mock interviews and interview prep.",
  ],
} as const;

export type Experience = {
  start: string;
  end: string;
  current: boolean;
  role: string;
  company: string;
  href?: string;
  summary: string;
  stack?: string;
  bullets: string[];
  /** Optional in-page link rendered under the bullets. */
  link?: { label: string; href: string };
};

export const experience: Experience[] = [
  {
    start: "Dec 2024",
    end: "Present",
    current: true,
    role: "Lead Full Stack Engineer",
    company: "Physics Wallah · IOI LeapX",
    href: "https://pwleapx.com/",
    summary: "Lead a 12-person unit (7 full-time) across 12 parallel client engagements; 10+ Next.js and NestJS applications shipped.",
    stack: "TypeScript · NestJS · FastAPI · Express · Next.js · PostgreSQL · Docker · AWS · GitHub Actions",
    bullets: [
      "Own technical delivery, code-review standards and release quality across 12 parallel client workstreams",
      "NestJS, FastAPI and Express microservices in TypeScript and Python; secure REST APIs and optimised database queries",
      "GitHub Actions CI/CD: −45% manual release overhead",
      "Infra bootstrapping: −40% environment setup time; 15+ hands-on labs on Linux, networking and Jenkins",
    ],
  },
  {
    start: "Dec 2025",
    end: "Present",
    current: true,
    role: "Founder",
    company: "Lireons · lireons.com",
    href: site.lireons,
    summary: "Architecture, backend and infrastructure for a multi-tenant LMS.",
    stack: "Next.js · NestJS · TypeScript · PostgreSQL · Docker · Kubernetes · Terraform · AWS",
    bullets: [
      "White-label academies on custom domains, tenant-isolated data",
      "Zero-downtime deploys, 99.9% uptime; Terraform cut infra setup time by 50%",
      "Automated grading engine and built-in live broadcast",
    ],
    link: { label: "Case study ↓ 04", href: "#lireons" },
  },
  {
    start: "Dec 2023",
    end: "Feb 2024",
    current: false,
    role: "Web Development Intern",
    company: "InternsElite EdTech",
    summary: "Built and shipped web features for an ed-tech product team, remote.",
    bullets: [
      "REST APIs and React front-end components in Node.js and TypeScript; −20% page-load latency for 500+ daily users",
      "Docker-based CI/CD and hosting on AWS EC2 and S3; OWASP Top 10 reviews with Trivy scanning",
    ],
  },
];

export const lireons = {
  name: "Lireons",
  runningHead: "04 / Case study — Founder",
  url: site.lireons,
  domain: "lireons.com",
  logo: "/images/lireons-logo.png",
  screenshot: "/projects/lireons.jpg",
  screenshotCaptured: "Sep 2026",
  title: ["The OS for course", "creators."],
  subtitle:
    "An enterprise-grade, multi-tenant LMS for coding bootcamps and training institutes: white-label academies on their own domains, with a web app and native mobile apps, native developer tools, automated grading and built-in live broadcast.",
  spec: [
    { label: "Role", value: "Founder; architecture, backend, infrastructure" },
    { label: "Model", value: "Multi-tenant, white-label, custom domain per academy" },
    { label: "Surfaces", value: "Web · native mobile apps" },
    { label: "Stack", value: "Next.js, NestJS, TypeScript, PostgreSQL" },
    { label: "Infra", value: "Docker, Kubernetes, Terraform, AWS" },
    { label: "Delivery", value: "Zero-downtime deploys" },
    { label: "Reliability", value: "99.9% uptime" },
    { label: "Status", value: "In production" },
  ],
  metrics: [
    { value: "99.9%", label: "uptime" },
    { value: "Zero", label: "downtime deploys" },
  ],
  owned: "Owned end to end — product · architecture · backend · infra · CI/CD · security",
  chapters: [
    {
      n: "01",
      title: "The problem.",
      body: "Bootcamps and institutes run on a patchwork: an LMS here, a video tool there, a grader, a domain workaround, and a plugin bill for each. Students fall through the gaps and the brand is never theirs.",
    },
    {
      n: "02",
      title: "What I built.",
      body: "One platform. Every academy runs isolated on its own domain with its own branding and roles, on a shared NestJS and PostgreSQL core, selling courses, mock tests and cohorts through a white-label website and native mobile apps. Native developer tooling and an automated grading engine let instructors assign real programs and get objective results back at cohort scale. Live broadcast ships inside the platform, so a class, its recording and its assignments live in one place — and academies stop paying for third-party plugins and keep the margin.",
    },
    {
      n: "03",
      title: "How it runs.",
      body: "Containerised with Docker, orchestrated on Kubernetes, provisioned with Terraform on AWS. Infrastructure as code cut environment setup time in half; rollouts are zero-downtime and the platform has held 99.9% uptime.",
    },
  ],
  systemMap: [
    { title: "Tenant domains", note: "illustrative tenants · white-label custom domains", boxes: ["your-academy.com", "another-institute.in", "…"] },
    { title: "Edge", boxes: ["TLS · tenant resolver"] },
    { title: "Services", boxes: ["Next.js web", "Native mobile apps", "NestJS API", "Grading engine", "Live broadcast"] },
    { title: "Data & platform", boxes: ["PostgreSQL (tenant-isolated)", "Docker · Kubernetes · Terraform · AWS — zero-downtime rollouts"] },
  ],
  closing: "Founded and engineered by Sarthak Chauhan",
} as const;

export type Project = {
  index: string;
  name: string;
  description: string;
  stack: string;
  type: string;
  href: string;
  /** Text shown in the arrow column, defaults to "↗". */
  arrow?: string;
  external?: boolean;
  /** Real screenshot under /public used for the desktop hover preview (decorative). */
  preview?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Lireons",
    description: "Multi-tenant LMS: white-label academies, developer tools, automated grading, live broadcast. Full case study in 04.",
    stack: "Next.js · NestJS · PostgreSQL · Kubernetes · Terraform · AWS",
    type: "Product",
    href: "#lireons",
    arrow: "↑ 04",
    external: false,
    preview: "/projects/lireons-preview.jpg",
  },
  {
    index: "02",
    name: "NewsWallah",
    description:
      "News platform on Next.js: NextAuth OAuth and credentials sign-in, JWT sessions, role-based edge middleware, sub-100ms auth via server-component caching, structured data and sitemap for search.",
    stack: "Next.js · TypeScript · NextAuth · MongoDB · Edge middleware",
    type: "Full stack",
    href: "https://newswallah2.vercel.app",
    external: true,
    preview: "/projects/newswallah.jpg",
  },
  {
    index: "03",
    name: "go-student-registry",
    description: "Go/Gin REST API on PostgreSQL with Redis cache-aside, JWT auth, Swagger docs and graceful shutdown; Dockerised with Compose.",
    stack: "Go · Gin · PostgreSQL · Redis · JWT · Swagger",
    type: "Backend",
    href: "https://github.com/Sarthak-D97/go-student-registry",
    external: true,
  },
  {
    index: "04",
    name: "Hollydaff",
    description: "Fully static Next.js 16 storefront for a handmade flower studio, with a custom bouquet builder and a live illustrated SVG preview.",
    stack: "Next.js 16 · React 19 · Tailwind v4 · Motion",
    type: "Full stack",
    href: "https://hollydaff.vercel.app",
    external: true,
    preview: "/projects/hollydaff.jpg",
  },
  {
    index: "05",
    name: "Wanderlust DevSecOps on EKS",
    description:
      "Reference DevSecOps pipeline built on the open-source Wanderlust MERN app (DevMadhup): Jenkins, SonarQube quality gate, OWASP dependency check, Trivy, Argo CD sync to EKS, Prometheus and Grafana via Helm.",
    stack: "Jenkins · SonarQube · Trivy · Argo CD · Helm · AWS EKS",
    type: "DevSecOps",
    href: "https://github.com/Sarthak-D97/Wanderlust-Travel-Blog",
    external: true,
  },
];

export const projectFootnote = [
  { name: "Server-Performance-Stats", note: "Bash", href: "https://github.com/Sarthak-D97/Server-Performance-stats" },
  { name: "docker_postgresql_SOP", note: "Docker, PostgreSQL", href: "https://github.com/Sarthak-D97/docker_postgresql_SOP" },
  { name: "News-Wallah source", note: "GitHub", href: "https://github.com/Sarthak-D97/News-Wallah" },
] as const;

export type StackTier = { tier: string; depth: 1 | 2 | 3; definition: string; items: string[] };

export const stack: StackTier[] = [
  {
    tier: "Core",
    depth: 3,
    definition: "In production every week.",
    items: ["TypeScript", "NestJS", "Node.js", "Next.js", "React", "PostgreSQL", "Docker", "AWS", "GitHub Actions", "Linux / Bash"],
  },
  {
    tier: "Proficient",
    depth: 2,
    definition: "Shipped with, comfortable owning.",
    items: ["Python / FastAPI", "Go", "MongoDB", "Redis", "Prisma", "Terraform", "Kubernetes", "Jenkins", "React Native"],
  },
  {
    tier: "Working",
    depth: 1,
    definition: "Used in real systems, still deepening.",
    items: ["Apache Kafka", "Argo CD", "Grafana", "Prometheus", "SonarQube"],
  },
];

export const securityLine = "Security by training — OAuth 2.0 · JWT · RBAC · OWASP Top 10 · Trivy · DNS, firewalls, subnetting";

export const certifications = [
  { name: "CompTIA Security+", issuer: "CompTIA", date: "May 2025", badge: "/badges/comptia-security-plus.png" },
  { name: "CompTIA Network+", issuer: "CompTIA", date: "Nov 2024", badge: "/badges/comptia-network-plus.png" },
] as const;

export const tryhackme = {
  name: "Top 2% — TryHackMe",
  detail: "Global leaderboard · CTF rooms, Nov 2022 — Jul 2024",
  href: "https://tryhackme.com/r/p/snowstormdevilis",
  figure: "2%",
} as const;

export const education = [
  {
    degree: "BCA (Hons), Cybersecurity",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    years: "2022 — 2025",
    note: "Networking, Linux, object-oriented programming, and data structures and algorithms through project-based learning.",
  },
] as const;

export const contact = {
  note: `Bengaluru · ${site.timezone}`,
  title: ["Let's build something", "durable."],
  links: [
    { label: "GitHub", href: site.github },
    { label: "LinkedIn", href: site.linkedin },
    { label: "Lireons", href: site.lireons },
    { label: "Mentoring on Topmate", href: site.topmate },
  ],
} as const;
