# RSA Tech Softwares - Project Structure

**Rapid Solution & Automation** — Software development and digital marketing company website.

## Folder Structure

```
my-app/
├── public/                     # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (marketing)/        # Marketing website pages (shared layout)
│   │   │   ├── layout.tsx      # Header + Footer wrapper
│   │   │   ├── page.tsx        # Home
│   │   │   ├── about/          # /about
│   │   │   ├── services/       # /services
│   │   │   │   ├── software/   # /services/software
│   │   │   │   └── digital-marketing/  # /services/digital-marketing
│   │   │   ├── portfolio/      # /portfolio
│   │   │   ├── blog/           # /blog
│   │   │   └── contact/        # /contact
│   │   ├── api/                # API routes
│   │   │   └── contact/        # POST /api/contact
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── sections/           # Page sections (Hero, Services, etc.)
│   │   └── forms/              # ContactForm, NewsletterForm
│   │
│   ├── lib/                    # Utilities & shared logic
│   │   ├── utils.ts
│   │   ├── api.ts              # Axios instance
│   │   └── validations/        # Zod schemas
│   │
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript types & interfaces
│   ├── config/                 # Site config, navigation
│   ├── content/                # MDX/blog content
│   │   └── blog/
│   └── assets/
│       ├── images/
│       └── icons/
│
├── package.json
└── tsconfig.json
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home (Hero, Services, About, Portfolio, Contact) |
| `/about` | Company story & team |
| `/services` | Overview of software & digital marketing services |
| `/services/software` | Custom software, web apps, automation |
| `/services/digital-marketing` | SEO, social media, PPC, content |
| `/portfolio` | Case studies & projects |
| `/blog` | Articles & insights |
| `/contact` | Contact form & info |

## Key Conventions

- **Route groups** `(marketing)` — Shared layout without affecting URL
- **Components** — Reusable UI; sections for page-specific blocks
- **Config** — `site.ts`, `navigation.ts` for centralized settings
- **Validations** — Zod schemas in `lib/validations/`
