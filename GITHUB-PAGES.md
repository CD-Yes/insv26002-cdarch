# GitHub Pages Hosting

This React build is ready for GitHub Pages static hosting.

## Recommended: Automatic Deploy

1. Push this project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Set `Source` to `GitHub Actions`.
5. Push to `main`, `master`, or `enhanced-site`, or run the `Deploy to GitHub Pages` workflow manually.

The workflow builds the React site and publishes the `dist` folder.

## Branch Deploy Fallback

If you use `Deploy from a branch` instead of GitHub Actions:

1. Run `npm run build`.
2. Commit the generated `docs` folder.
3. Go to `Settings` > `Pages`.
4. Set `Branch` to your publishing branch and folder to `/docs`.

Do not publish from the repository root. The root contains source files for development, while `docs` contains the static website GitHub Pages can serve.

## Local Build Check

```bash
npm ci
npm run build
```

The build creates `index.html`, page files such as `gallery.html`, `about.html`, and `contact.html`, plus `404.html` for static fallback.
