# EcoScan — Hosting Ready

This folder is the static web build of EcoScan.

## Before publishing
1. Create a NEW restricted Google Maps browser API key.
2. Enable Maps JavaScript API and Places API (New).
3. Restrict the key by HTTP referrer to your final HTTPS domain.
4. Put the key in `js/google-maps-config.js`.
5. Confirm the Supabase project has proper Row Level Security (RLS). The frontend uses a public/publishable key; never put a Supabase service-role key in frontend files.

## Cloudflare Pages
Upload this folder as a static site. No build command is needed.
The site entry point is `index.html`.

## Important
`lan-server.js`, `EcoScan.bat`, local certificates, the `.vscode` folder, and the saved Supabase dashboard export were intentionally excluded from the hosting package.
