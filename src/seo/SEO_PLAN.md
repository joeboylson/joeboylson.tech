# SEO Implementation Plan for joeboylson.tech

A comprehensive plan to optimize the portfolio site for search engines in 2026.

## Current State

- **Framework**: React + Vite (SPA)
- **Routes**: `/profile`, `/projects`, `/experience`
- **Meta tags**: Minimal (basic title and description)
- **Robots.txt**: Exists (allows all)
- **Sitemap**: None
- **Structured Data**: None
- **Pre-rendering**: None

---

## Phase 1: Meta Tags (React 19 Native) ✅ COMPLETED

### Implementation
React 19 has built-in document metadata support - no external library needed. Simply use `<title>`, `<meta>`, and `<link>` tags directly in components and React 19 hoists them to the `<head>`.

**Files created:**
- `src/seo/ProfileSEO.tsx`
- `src/seo/ProjectsSEO.tsx`
- `src/seo/ExperienceSEO.tsx`
- `src/seo/index.ts` (barrel export)

Each page imports and renders its SEO component which includes:
- Unique `<title>`
- `<meta name="description">` (150-160 chars)
- `<link rel="canonical">`

### Per-Page Meta Tags

| Page | Title | Description |
|------|-------|-------------|
| Profile | `Joe Boylson \| Full-Stack Developer in Cincinnati, OH` | `Full-stack developer specializing in React, TypeScript, and modern web technologies. Based in Cincinnati, OH. Available for hire.` |
| Projects | `Projects \| Joe Boylson - Full-Stack Developer` | `Portfolio of web and mobile development projects by Joe Boylson. React, TypeScript, and full-stack applications.` |
| Experience | `Experience \| Joe Boylson - Full-Stack Developer` | `Professional experience and career history of Joe Boylson, full-stack developer with expertise in React and modern web technologies.` |

---

## Phase 2: Open Graph & Twitter Cards ✅ COMPLETED

Added social sharing meta tags for rich previews on LinkedIn, Twitter, etc.

**Files created:**
- `src/seo/SocialMeta.tsx` - Reusable component for OG & Twitter tags

Each page SEO component now includes `<SocialMeta />` with:
- `og:type`, `og:url`, `og:title`, `og:description`, `og:image`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

### Action Items
- [ ] Create OG image (1200x630px recommended) with name/title/branding
- [ ] Add OG image to `/public/images/og-image.png`

---

## Phase 3: Structured Data (JSON-LD) ✅ COMPLETED

Added schema markup for rich search results.

**Files created:**
- `src/seo/WebSiteSchema.tsx` - WebSite schema (included on all pages via PageSEO)
- `src/seo/PersonSchema.tsx` - Person schema (included on Profile page only)

**Schemas implemented:**
- **WebSite**: name, url
- **Person**: name, url, image, jobTitle, worksFor, address (Cincinnati, OH), sameAs (LinkedIn, GitHub)

---

## Phase 4: Sitemap & Robots.txt ✅ COMPLETED

**Files created/updated:**
- `public/sitemap.xml` - Lists all 3 pages with priority and changefreq
- `public/robots.txt` - Updated to reference sitemap

Crawlers can now discover all pages via the sitemap.

---

## Phase 5: Pre-rendering ⏸️ DEFERRED

Pre-rendering plugins (`vite-plugin-prerender`, `vite-react-ssg`) have compatibility issues with React 19 + React Router v7. The ecosystem is still catching up.

**Mitigating factors:**
- Google's crawler executes JavaScript and will index SPA content
- Meta tags in index.html provide fallback info for crawlers
- Structured data and sitemap help discovery
- Social meta tags ensure good link previews

**Future options when tooling matures:**
- React Router v7 Framework Mode (requires app restructure)
- Vike (formerly vite-plugin-ssr)
- TanStack Start

**For now:** The other SEO improvements (meta tags, structured data, sitemap, llms.txt) provide significant value.

---

## Phase 6: Performance Optimization

Core Web Vitals directly impact SEO rankings.

### Checklist
- [ ] Run Lighthouse audit (Chrome DevTools > Lighthouse)
- [ ] Optimize images (WebP format, proper sizing)
- [ ] Lazy load below-the-fold images
- [ ] Code split routes (React.lazy)
- [ ] Minimize third-party scripts
- [ ] Ensure LCP < 2.5s, INP < 200ms, CLS < 0.1

---

## Phase 7: Additional Enhancements

### Semantic HTML Review
Ensure proper use of:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on images

### Canonical URLs
Add to prevent duplicate content:
```jsx
<link rel="canonical" href="https://joeboylson.tech/profile" />
```

### Language Declaration
Already present: `<html lang="en">`

---

## Implementation Order

1. **Phase 1**: Meta tags with react-helmet-async
2. **Phase 2**: Open Graph & Twitter Cards
3. **Phase 3**: Structured Data (JSON-LD)
4. **Phase 4**: Sitemap & Robots.txt
5. **Phase 5**: Pre-rendering
6. **Phase 6**: Performance audit & fixes
7. **Phase 7**: Final review & testing

---

## Testing & Validation Tools

- [Google Rich Results Test](https://search.google.com/test/rich-results) - Validate structured data
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) - Test OG tags
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Test Twitter cards
- [Google Search Console](https://search.google.com/search-console) - Monitor indexing
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) - Performance & SEO audit
- [Schema.org Validator](https://validator.schema.org/) - Validate JSON-LD

---

## Resources

- [SEO Optimization for React + Vite Apps](https://dev.to/ali_dz/optimizing-seo-in-a-react-vite-project-the-ultimate-guide-3mbh)
- [How to Make a React Website SEO-Friendly](https://www.creolestudios.com/how-to-make-react-website-seo-friendly/)
- [React SEO Best Practices](https://www.codewalnut.com/learn/is-react-js-seo-friendly)
- [Google Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
