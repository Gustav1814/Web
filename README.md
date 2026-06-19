# Orxivo Website

Premium Orxivo marketing site and search-ready content platform built with Next.js.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_SITE_URL` — the final canonical domain, including `https://`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Google Search Console verification token
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 measurement ID
- `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` — reserved for the production form/CRM endpoint
- `NEXT_PUBLIC_LINKEDIN_URL` — optional public LinkedIn profile used in Organization schema
- `NEXT_PUBLIC_GITHUB_URL` — optional public GitHub profile used in Organization schema
- `NEXT_PUBLIC_X_URL` — optional public X profile used in Organization schema

No fake analytics or verification IDs are committed.

## Deploy to Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Keep the detected Next.js build settings.
4. Add the production environment variables.
5. Deploy and verify `/robots.txt`, `/sitemap.xml`, and a service page.

### Connect a custom domain

1. Open the Vercel project and select **Settings → Domains**.
2. Add the production domain.
3. Apply the DNS records provided by Vercel.
4. Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS domain and redeploy.
5. Configure one preferred domain and redirect the alternate `www` or apex version.

## Google Search Console

1. Create a Domain property or URL-prefix property in Search Console.
2. Add the provided verification token to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, or complete DNS verification.
3. Redeploy and verify ownership.
4. Submit `https://your-domain.com/sitemap.xml`.
5. Inspect the homepage and important service URLs after deployment.

## Google Analytics 4

1. Create a GA4 web data stream.
2. Add its measurement ID to `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
3. Redeploy.
4. Confirm page views and the `booking_click` / `generate_lead` events in GA4 DebugView.

## Vercel Analytics

Install `@vercel/analytics` when the Vercel project is ready:

```bash
npm install @vercel/analytics
```

Then add `<Analytics />` from `@vercel/analytics/next` to `app/layout.tsx`. It is intentionally not installed with a fake project configuration.

## Contact form

The contact form includes all required fields and fires the GA4 `generate_lead` event. Before launch, connect it to a verified CRM, email, or form endpoint and add server-side validation, spam protection, and a privacy notice.

## Lighthouse and quality checks

Run Lighthouse against a production build, not the development server:

```bash
npm run build
npm run start
```

Then test the homepage and representative service/article pages in Chrome DevTools Lighthouse using mobile and desktop profiles. Also verify:

- One H1 per page
- Canonical URL and social metadata
- JSON-LD in page source
- Keyboard navigation and visible focus
- No console errors
- Mobile layout at 360px, 390px, and 768px
- All internal links return successful status codes

## SEO architecture

- Service pages use shared, server-rendered content and `Service` + `FAQPage` schema.
- Articles use `Article` schema and link to relevant services.
- Global `Organization` and `WebSite` schema are defined in the root layout.
- Breadcrumbs include `BreadcrumbList` schema.
- `app/sitemap.ts` and `app/robots.ts` generate crawl files.
- The animated homepage remains the brand experience; SEO landing pages avoid the 3D and animation bundle for faster loading.

## Update page metadata

- Homepage metadata is defined in `app/page.tsx`.
- Global defaults and Organization/WebSite schema are in `app/layout.tsx`.
- Shared metadata generation is in `lib/metadata.ts`.
- Service and industry metadata is generated from `lib/seo-content.ts`.

Keep every title and description unique, retain the canonical URL, and verify the rendered source after changes.

## Add a service page

Add a new service object to `servicePages` in `lib/seo-content.ts`. The shared dynamic route automatically provides:

- Static generation
- Metadata and canonical URL
- Service and FAQ schema
- Breadcrumbs
- Problem, solution, benefits, use cases, process, trust, FAQ, related links, and CTA sections
- Sitemap inclusion

Use a unique slug and link it from relevant services, industries, articles, and navigation where appropriate.

## Add an industry page

Add an object to `industryPages` in `lib/seo-content.ts`. The `/industries/[slug]` route automatically generates metadata, schema, breadcrumbs, internal links, and sitemap coverage.

## Add a blog post

Add an object to `blogPosts` in `lib/seo-content.ts` with:

- Unique slug, title, and meta description
- Publication date
- Reading time
- Related service slug
- Practical introduction and structured sections

The article route automatically adds canonical/social metadata, Article schema, breadcrumbs, service linking, CTA, and sitemap inclusion.
