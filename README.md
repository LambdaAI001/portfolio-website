<div align="center">

# ⚡ Modern Developer Portfolio

An executive-grade, hyper-polished developer portfolio and engineering showcase built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

Designed with inspiration from top-tier engineering brands like **Linear**, **Vercel**, and **Rauno**, featuring seamless dark/light mode theming, an interactive experience timeline, flagship project bento cards, and verified credential management.

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Base_Nova-black?style=flat-square&logo=shadcnui)](https://ui.shadcn.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

### ⭐️ Show Your Support
If you like this portfolio template or find it useful for your own portfolio, please consider giving it a **Star on GitHub**! It helps the project grow and inspires further development.

[⭐ Star on GitHub](https://github.com/LambdaAI001/portfolio-website) · [🐛 Report Bug](https://github.com/LambdaAI001/portfolio-website/issues) · [💡 Request Feature](https://github.com/LambdaAI001/portfolio-website/issues)

---

</div>

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture & Structure](#-architecture--structure)
- [Getting Started](#-getting-started)
- [Customization Guide](#-customization-guide)
- [Scripts](#-scripts)
- [Star History & Support](#-star-history--support)
- [License](#-license)

---

## 🌟 Overview

Most developer portfolios either look like unstyled templates or suffer from cognitive overload with endless vertical lists. 

This portfolio is engineered as a **senior/staff-level technical portfolio** that balances visual elegance with architectural precision:
- **Clean Visual Hierarchy**: Minimalist, high-contrast typography pairing Geist Sans and Geist Mono.
- **Data-Driven Architecture**: The entire site is powered by strict TypeScript contracts in `types/portfolio.ts` and organized in `data/portfolio.ts`—enabling you to update content in seconds without touching layout code.
- **Production Performance**: Zero layout shifts, optimized image rendering, edge-ready static prerendering, and 100/100 Lighthouse performance baseline.

---

## ✨ Key Features

### 👤 High-Impact Hero with Identity Lockup
- Fully rounded portrait avatar powered by official **shadcn/ui `Avatar`** and **`AvatarBadge`** primitives.
- Live pulsating status beacon (*"Available for select roles & advisory"*).
- One-click copy email button with real-time clipboard feedback.
- Clean social link badges (GitHub, LinkedIn, X/Twitter).
- Key technical career metrics bento badges (*Years of experience, Products shipped, MAU scaled*).

### 🌓 Next-Gen Dark & Light Mode
- Powered by `next-themes` and semantic CSS theme tokens.
- SSR hydration-safe toggle with smooth sun/moon icon transitions.
- Pinned in the floating sticky navbar for instant toggling anywhere on the page.

### ⏱️ Interactive Segmented Timeline
- Solves content overload when you have many years of experience.
- Segmented filter tabs (`All Experience`, `Work History`, `Education`) with dynamic live counts.
- Left-rail timeline track with node markers, monospaced date formatting, and live emerald beacon for current roles.

### 🚀 Flagship Project Bento & Archive
- Featured project showcase cards displaying architectural roles (*Creator & Maintainer*, *Lead Architect*) and concrete impact metrics (*450+ Stars, <50ms incident detection*).
- Secondary project archive with expandable *"View all"* toggle to keep the page compact.

### 🎖️ Verified Certifications Grid
- Dedicated section for industry credentials (AWS, CKA, Meta) with credential IDs and direct verification links.

### 🛠️ Categorized Skills Matrix
- Grouped by domain (*Frontend & Architecture*, *Backend & Systems*, *Cloud, DevOps & QA*).
- Monospaced badge pills with subtle hover feedback.

### 🧭 Floating Glassmorphism Navbar & Interactive Footer
- Sticky pill navigation bar with blur backdrop, section spy links, and brand monogram avatar.
- Modern call-to-action footer with instant clipboard actions and smooth back-to-top scroll.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) | Hybrid static generation, Turbopack, Image optimization |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict typing, robust data contracts |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern atomic styling with OKLCH theme variables |
| **Component System**| [shadcn/ui](https://ui.shadcn.com/) (Base Nova) | Accessible, accessible primitives (`Avatar`, `Badge`, `Button`, `Card`, `Tabs`) |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent vector icons |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) | Dark/Light mode provider with system preference support |
| **Package Manager** | [pnpm](https://pnpm.io/) | Fast, disk space efficient package management |

---

## 📂 Architecture & Structure

```
├── app/
│   ├── favicon.ico
│   ├── globals.css         # OKLCH color palettes & typography tokens
│   ├── layout.tsx          # Root layout with ThemeProvider & fonts
│   └── page.tsx            # Main portfolio composite page
├── components/
│   ├── ui/                 # Official shadcn/ui primitives
│   │   ├── avatar.tsx      # Avatar, AvatarImage, AvatarBadge
│   │   ├── badge.tsx       # Status & technology badges
│   │   ├── button.tsx      # Accessible CVA buttons
│   │   ├── card.tsx        # Bento cards & containers
│   │   └── tabs.tsx        # Segmented controls
│   ├── portfolio/
│   │   └── timeline-item.tsx # Individual timeline item renderer
│   ├── certifications-section.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── projects-section.tsx
│   ├── section-heading.tsx
│   ├── skills-section.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── timeline.tsx
├── data/
│   └── portfolio.ts        # 🧠 Single source of truth for all content
├── types/
│   └── portfolio.ts        # TypeScript schemas & interfaces
└── public/                 # Static assets (images, resume.pdf)
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20.x or higher
- **pnpm** (recommended), or npm / yarn / bun

### 1. Clone the repository
```bash
git clone https://github.com/LambdaAI001/portfolio-website.git
cd portfolio-website
```

### 2. Install dependencies
```bash
pnpm install
# or
npm install
```

### 3. Start the development server
```bash
pnpm dev
# or
npm run dev
```

Visit [`http://localhost:3000`](http://localhost:3000) to view the portfolio live with hot-reload.

---

## 🎨 Customization Guide

You don't need to dive into complex JSX to customize this portfolio. All content is consolidated in **`data/portfolio.ts`**:

### 1. Update Profile & Bio
```ts
// data/portfolio.ts
export const profile: Profile = {
  name: "Your Name",
  role: "Senior Full-Stack Engineer",
  location: "Your City, Country",
  email: "your.email@example.com",
  summary: "Brief elevator pitch of what you build and deliver...",
  avatarUrl: "https://your-image-url.com/avatar.jpg", // Or local path: "/avatar.jpg"
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  statusText: "Available for select roles & advisory",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://x.com/yourusername",
  },
  stats: [
    { label: "Years of experience", value: "8+" },
    { label: "Products shipped", value: "25+" },
    // ...
  ],
};
```

### 2. Add Projects & Certifications
Add or modify entries in `projects`, `timeline`, `skillGroups`, and `certifications` arrays inside `data/portfolio.ts`. Flag your top projects with `featured: true` to have them rendered in the prominent bento showcase.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Starts local Next.js dev server with Turbopack |
| `pnpm build` | Compiles optimized static production build |
| `pnpm start` | Runs the production build locally |
| `pnpm lint` | Runs ESLint checks |

---

## ⭐ Star the Project!

If this portfolio helps you land interviews, build your personal brand, or learn modern Next.js 15 & shadcn architecture, please **star this repo on GitHub**!

[![Star History Chart](https://api.star-history.com/svg?repos=LambdaAI001/portfolio-website&type=Date)](https://github.com/LambdaAI001/portfolio-website)

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information. Built with ❤️ for the developer community.

