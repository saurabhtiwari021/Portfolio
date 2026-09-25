# Saurabh Tiwari — Portfolio

Personal portfolio website built with Next.js, TypeScript, Tailwind CSS,
React, Motion, and GitHub API integrations.

## Featured Projects

- [DocPilot](https://github.com/saurabhtiwari021/DocPilot) — Document-intelligence RAG platform (FastAPI, LangChain, Gemini, FAISS, pgvector)
- [CampusKart](https://github.com/saurabhtiwari021/CampusKart) — Full-stack campus marketplace (React, Node.js, MongoDB, Socket.io)
- [Internal Marking System](https://github.com/saurabhtiwari021/internal-marking-system) — Academic ETL platform (FastAPI, Streamlit, Pandas)
- [College Discovery](https://github.com/saurabhtiwari021/CollegeDiscovery) — College discovery platform (Next.js, TypeScript, PostgreSQL, Prisma)
- [Load Balancer](https://github.com/saurabhtiwari021/LoadBalancer) — Systems project on load distribution and request handling

## Tech Stack

Next.js · React · TypeScript · Tailwind CSS · Node.js · Python · FastAPI ·
PostgreSQL · MongoDB · Docker · Git

## Run Locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` and fill in the values you need. Every
variable in there is optional — the site runs fine with none of them set;
setting `GITHUB_TOKEN` enables live GitHub stats, and setting the two
`UMAMI_*` variables enables the page-view analytics.

## Deploy

Built for zero-config deployment on Vercel. No database or external auth
provider is required — this is a static/serverless portfolio site.
