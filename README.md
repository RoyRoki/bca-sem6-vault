# BCA Sem 6 — Exam Vault

A minimal, fast study platform for BCA Semester 6 exam preparation.  
Built with Next.js 16 · TypeScript · Tailwind CSS · shadcn/ui

---

## Features

- **34 static pages** — zero server-side overhead, instant loads
- **Collapsible sidebar** with per-subject doc navigation
- **⌘K global search** — fuzzy search across all notes
- **Table of Contents** — sticky, auto-highlights current heading
- **Reading progress bar** — thin top indicator
- **Prev / Next navigation** between docs
- **Priority badges** — 🔥 Important · 📘 PYQ · 📝 Revision · ✅ Notes · ⭐ Answers
- **Markdown rendering** — GFM tables, code highlight, blockquotes
- Fully **responsive** — mobile slide drawer + desktop sticky sidebar

## Content Structure

```
content/
├── MASTER_GUIDE.md
├── AI/
├── Information_Security/
├── Mobile_Computing/
└── Optimization_Technique/
```

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Vercel

```bash
npm i -g vercel@latest
vercel login
vercel --prod
```

No environment variables needed — fully static SSG.

---

University of North Bengal · BCA Semester 6 · NEP Curriculum
