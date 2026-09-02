# Anderson Mwangi — Portfolio

Personal site for [Anderson Mwangi](https://github.com/Andymwangi), a full-stack developer focused on cybersecurity, cloud engineering, and enterprise systems. Based in Nairobi, Kenya.

Live routes cover selected work, background, experience, certifications, and a contact form that emails enquiries directly.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS with shadcn-style primitives (Radix Select, CVA)
- Framer Motion
- Nodemailer for contact mail
- next-themes for light / dark

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home — intro, selected work, tech marquee |
| `/projects` | Full project list |
| `/about` | Background, skills, GitHub contributions |
| `/experience` | Roles and timeline |
| `/certifications` | Credentials |
| `/contact` | Enquiry form (service, budget, timeline) |
| `/privacy`, `/terms`, `/cookies` | Legal |

API routes:

- `POST /api/contact` — sends the enquiry over SMTP
- `GET /api/github-contributions` — last-year contribution graph
- `GET /api/visitors` — footer visitor count

## Getting started

Requires Node.js 20+ and npm.

```bash
git clone https://github.com/Andymwangi/anderson-portfolio.git
cd anderson-portfolio
npm install
cp .env.example .env.local   # then fill in values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Environment

Create `.env.local` (gitignored). Contact mail will fail until Gmail credentials are set.

```env
# Required for /api/contact (Gmail SMTP, app password)
GMAIL_EMAIL=
GMAIL_APP_PASSWORD=

# Optional — defaults exist in code
GITHUB_CONTRIBUTIONS_USER=Andymwangi
COUNTAPI_NAMESPACE=andymwangi-portfolio
COUNTAPI_KEY=site-visitors
```

Use a [Gmail app password](https://support.google.com/accounts/answer/185833), not the account password.

## Project layout

```
app/            Routes, layout, global styles, API handlers
components/     Chrome, page sections, ui primitives
lib/            Site copy, project data, helpers
public/         Images, resume PDF, static assets
```

Design tokens live in `app/globals.css` (canvas, ink, brick accent). Type uses Cormorant Garamond, Instrument Sans, and DM Mono via `next/font`.

## Licence

Private portfolio. All rights reserved unless otherwise noted.
