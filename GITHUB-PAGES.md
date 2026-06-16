# GitHub Pages Hosting

This React build is ready for GitHub Pages static hosting.

## Automatic Deploy

1. Push this project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Set `Source` to `GitHub Actions`.
5. Push to `main` or `master`, or run the `Deploy to GitHub Pages` workflow manually.

The workflow builds the React site and publishes the `dist` folder.

## Local Build Check

```bash
npm ci
npm run build
```

The build creates `index.html`, page files such as `gallery.html`, `about.html`, and `contact.html`, plus `404.html` for static fallback.
