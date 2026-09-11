# Sumesh S — Portfolio

A personal portfolio site built with Next.js, matching the "Obsidian" dark
design system from the Stitch export. Includes a built-in editor: log in
as admin and edit text, add/remove experience, case studies, skills and
certifications, and swap the hero photo — directly on the live site.

## What's inside

- `app/page.tsx` — the homepage (hero, milestones, philosophy, experience
  trail, certifications, case studies grid, skills, contact)
- `app/case-studies/[slug]/page.tsx` — individual case study pages
- `app/admin/login/page.tsx` — the admin sign-in page (linked from the
  footer as "Admin")
- `content/seed.ts` — the real starting content (your resume + the four
  case studies), used the first time the site runs
- `lib/content.ts` — reads/writes the live content (Upstash Redis in
  production, a local JSON file in `.data/` for local dev)
- `app/actions.ts` — the server actions behind every edit, add, and
  remove button

## Deploying it (one-time setup, ~15 minutes)

You'll need one free account: **Vercel** (hosting). Content storage
(Upstash) and photo storage (Vercel Blob) both provision from inside the
Vercel dashboard in a couple of clicks — no separate signup needed.

1. **Push this project to GitHub.**
   Create a new empty repository on github.com/new, then from this folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import it into Vercel.**
   Go to vercel.com/new, sign in with GitHub, and import the repository
   you just pushed. Framework preset should auto-detect as Next.js —
   leave the defaults and click **Deploy** once (it'll fail on the first
   try because the env vars below aren't set yet — that's expected,
   continue to the next step).

3. **Add a content database.**
   In your new Vercel project: **Storage -> Create Database -> Upstash ->
   Redis**. Create it and connect it to your project — Vercel
   automatically adds `UPSTASH_REDIS_REST_URL` and
   `UPSTASH_REDIS_REST_TOKEN` for you.

4. **Add image storage.**
   Same **Storage** tab: **Create Database -> Blob**. Connect it —
   Vercel automatically adds `BLOB_READ_WRITE_TOKEN` for you.

5. **Set your admin password.**
   Go to **Settings -> Environment Variables** and add:
   - `ADMIN_PASSWORD` — whatever password you want to log in with
   - `ADMIN_SESSION_SECRET` — any long random string (e.g. run
     `openssl rand -hex 32` in a terminal, or mash your keyboard for 40
     characters)

6. **Redeploy.**
   Go to **Deployments**, open the latest one, and click **Redeploy** —
   this time it'll pick up the env vars and succeed. You'll get a live
   URL like `your-project.vercel.app`.

7. **(Optional) Custom domain.**
   **Settings -> Domains** — add your own domain if you have one.

## Using the editor

- Go to `/admin/login` on your live site (or click the small **Admin**
  link in the footer) and sign in with `ADMIN_PASSWORD`.
- A purple bar appears at the top confirming you're in edit mode.
- **Text**: click directly on any headline, paragraph, or label and
  type. Click elsewhere (or Tab away) to save — it's live immediately.
- **Lists** (experience, case studies, certifications, skills,
  milestones, principles): a dashed **+ Add** button sits below each
  list; a small **x** appears in the corner of each item to remove it.
- **Case study pages**: open any case study while in edit mode to edit
  its sections the same way, or add/remove whole sections.
- **Photo**: hover the hero photo panel and click **Upload photo** (or
  **Replace photo**) to swap in a real picture of yourself.
- Click **Exit edit mode** in the purple bar when you're done — visitors
  never see the editing controls, only the logged-in admin does.

## Local development

```
npm install
cp .env.example .env.local
# fill in ADMIN_PASSWORD and ADMIN_SESSION_SECRET at minimum —
# Upstash/Blob are optional locally; content just saves to .data/content.json
npm run dev
```

## Notes

- The hero photo currently defaults to a plain monogram, not a stock
  photo — upload your real headshot through the editor whenever you're
  ready.
- Every case study card carries a small disclosure noting it's
  independent, self-directed work, not an official client engagement —
  intentional, and worth keeping if you add more.
- The admin login is a single shared password (no separate user
  accounts) — appropriate for a personal site with one owner, but don't
  share the password or the `/admin/login` habit publicly.
