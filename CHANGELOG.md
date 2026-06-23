# Changelog

## Local modernization work

Summary of changes made during the local development overhaul. Listed by area, not by individual commit.

---

### SEO improvements

- Added global `metadata` export to `src/app/layout.js` (title template, description, Open Graph, Twitter card)
- Added route-specific `metadata` (or `generateMetadata`) exports to individual page and layout files
- Added `src/app/robots.js` — generates `robots.txt` via Next.js App Router convention
- Added `src/app/sitemap.js` — generates `sitemap.xml`, includes all public routes and talent pages
- Added `noindex` metadata to restricted pages (member area, business partner area)
- Added per-talent metadata to individual talent detail pages

---

### Talent cleanup

- Removed DreamyDiino (`src/app/talents/dreamydiino/`) — page and data files deleted
- Removed Gomifuyu (`src/app/talents/gomifuyu/`) — page and data files deleted
- Updated `src/app/talents/data.json` to reflect current roster
- Removed DreamyDiino and Gomifuyu entries from `PAGE_LABELS` map in header
- Sitemap updated accordingly (no entries for removed talents)

---

### Branding

- New VSTAR logo: `public/VSTAR/VSTAR_no_bg.png` (transparent background)
- Updated all logo references from `/vstar.png` and `/VSTAR/VSTAR.png` to `/VSTAR/VSTAR_no_bg.png`:
  - `src/data/brand-hubs.js`
  - `src/app/components/header.js`
  - `src/app/components/footer.js`
  - `src/app/components/faction-chooser.js`
  - `src/app/page.js`
  - `src/app/shop/page.js`
  - `src/app/talents/data.json`
- Updated the app icons to use the new VSTAR logo:
  - `src/app/icon.png` — 512×512 app icon for the Next.js App Router
  - `src/app/apple-icon.png` — 180×180 Apple touch icon
  - `src/app/favicon.ico` — replaced the default Next.js favicon with VSTAR-branded icons

---

### Navigation

- Internal links in hub pages and components were hardcoded as absolute URLs (`https://vstarproject.eu/...`); changed to relative paths (`/...`)
  - `src/app/vinfernia/page.js` — removed `baseUrl` prop from `<Header />` and `<Footer />`, changed `href` to `/talents`
  - `src/app/vstar/page.js` — same
  - `src/components/hub/HubTalentCard.js` — changed `href` from absolute to `talent.href`
  - `src/app/faq/page.js` — changed partner link from absolute to `/partners`
- Shop link intentionally remains external (`https://shop.vstarproject.eu`) — it is a separate subdomain

---

### Hub refactor

New shared infrastructure for the brand hub pages (`/vinfernia`, `/vstar`):

- `src/lib/hub-utils.js` — shared utilities: `formatDate`, `formatTime`, `darkenHex`
- `src/lib/hub-fetch.js` — API wrappers for Twitch (streams, schedule, clips) and YouTube
- `src/data/brand-hubs.js` — central brand config (`VINFERNIA_BRAND`, `VSTAR_BRAND`) with accent colors, logos, taglines

New shared hub UI components under `src/components/hub/`:
- `HubTalentCard` — talent card with live badge
- `HubClipCard` — Twitch clip card
- `HubYouTubeCard` — YouTube video card
- `HubScheduleRow` — schedule row
- `HubLiveNowBanner` — live-now banner strip
- `HubSectionLabel`, `HubSectionHeading`, `HubSpinner`, `HubEmptyState`

CSS cleanup (I1–I4):
- **I1** — Removed redundant `@import` of Oswald font from `vinfernia/page.js` (already loaded globally via `next/font/google` in `layout.js`)
- **I2** — Extracted shared hub fade animation (`hubFadeUp`, `.hub-fade`, `.hub-fade-1/2/3/4`) into `src/app/globals.css`; removed duplicated keyframes from both hub pages
- **I3** — Extracted shared clip card classes (`.hub-clip-card`, `.hub-clip-overlay`) into `globals.css`; kept brand-specific overlay color as 1-line override in each page's inline styles
- **I4** — Extracted shared schedule row class (`.hub-schedule-row`) into `globals.css`; kept brand-specific hover color as 1-line override in each page's inline styles

---

### ESLint cleanup

- Updated `eslint.config.mjs` to ESLint 9 flat config format with `eslint-plugin-react` and `globals`
- Disabled `react/react-in-jsx-scope` and `react/jsx-uses-react` — not needed with React 19 automatic JSX runtime
- Disabled `react/prop-types` — project uses plain JS without PropTypes
- Disabled `react/no-unescaped-entities` — apostrophes in JSX content are acceptable here
- Added `globals.node` to language options — fixes `no-undef` for `process.env` in API routes
- Added `settings.react.version: "detect"` — suppresses React version warning
- Removed unused imports left over from hub refactor (`formatDate`, `formatTime`, `HubEmptyState`) in `vinfernia/page.js` and `vstar/page.js`
- Removed unused `React` import from `faction-chooser.js` and `header.js` (explicit import not needed with automatic JSX runtime)
- Fixed `no-unused-vars` in `faction-chooser.js`: `const [touched, setTouched]` → `const [, setTouched]`
- Fixed `react/jsx-no-comment-textnodes` in `header.js`: JS comment inside JSX was rendering as visible text in the browser; moved to JSX comment syntax
- Removed 19 redundant `/* eslint-disable ... */` directives across 17 files (now covered by global config)

---

### Build / Lint status

- `npm run lint` — `✔ No ESLint warnings or errors`
- `npm run build` — successful, all routes built without errors
