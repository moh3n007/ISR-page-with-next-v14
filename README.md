# Next.js 14 — On-Demand ISR (Revalidation Demo)

A focused Next.js 14 App Router example showing **exactly how on-demand Incremental Static Regeneration works** — by putting a "with revalidation" and "without revalidation" version of the same action side by side, so the caching behavior is visible rather than theoretical.

## Live Demo

https://isr-page-with-next-v14.vercel.app/

## What it demonstrates

- 🏷️ **Tag-based revalidation** — `fetch` calls tagged with `next: { tags: [...] }`, invalidated on demand via `revalidateTag()`
- 🔄 **Path-based revalidation** — full-page refresh via `revalidatePath()`
- ⚡ **Server Actions** — `"use server"` actions (`RevalidateAll`, `RevalidateUsers`, `RevalidateNotes`) triggered directly from form submissions, no client JS required
- 🌐 **Route Handlers** — a comparable POST endpoint (`/api/add-note`) that revalidates from inside an API route instead of a Server Action
- 🆚 **Side-by-side comparison** — for both Users and Notes, an "Add (with revalidation)" and "Add (without revalidation)" button, so you can literally watch stale data persist until the tag is invalidated

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

Install dependencies:

    yarn

Run the dev server:

    yarn dev

Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

## Project Structure

    app/
    ├── api/add-note/       # Route Handler example (POST + revalidateTag)
    ├── api/add-user/
    ├── page.tsx            # entry point, wires up Users + Notes
    lib/
    └── serverActions.ts    # "use server" revalidation actions
    components/
    ├── Notes.tsx / Users.tsx
    └── */AddX/
        ├── AddXWithRevalidation.tsx
        └── AddXWithoutRevalidation.tsx
