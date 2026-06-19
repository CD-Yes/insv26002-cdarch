# Deployment

This project has two separate deployment targets.

## React site for Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

The React site uses the original PHP pages from `php-backup/` as raw markup and serves static assets from `public/`.

## PHP backup for Render

Render uses the root `Dockerfile`, which serves `php-backup/` with PHP/Apache on port `10000`.

- Render config: `render.yaml`
- Docker context: repository root
- Health check path: `/healthz`

Keep `php-backup/` as the preserved PHP/cPanel-era source. React-only assets belong in `public/` or `src/`.
