# LD Safety Solutions, Inc. Website

A simple static homepage for LD Safety Solutions, Inc. with linked partner and
product logos.

## Files

- `index.html` contains the page content and links.
- `styles.css` contains the responsive styling.
- `assets/` contains the local logo images used on the page.

## Local Preview

Open `index.html` in a browser, or serve the folder with any static web server.

## GitHub Pages Setup

This repo is ready for the GitHub Pages "Deploy from a branch" flow:

1. Create the GitHub repository `dakota-ld.github.io` under the `dakota-ld`
   account.
2. Push this folder to the repository.
3. In the repository, go to **Settings** > **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder.
6. Save the Pages settings and wait for GitHub to publish the site.

GitHub notes that Pages updates can take up to 10 minutes after pushing changes.

Official quickstart:
https://docs.github.com/en/pages/quickstart

## Push Commands

```bash
git init
git add .
git commit -m "Initial LD Safety Solutions website"
git branch -M main
git remote add origin https://github.com/dakota-ld/dakota-ld.github.io.git
git push -u origin main
```

For GitHub Pages, set the repository Pages source to the `main` branch and the
root folder.
