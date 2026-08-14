# Waterboys Portfolio

Portfolio website for **Zulkarnain / Waterboys**.

Built with:
- HTML
- CSS
- Vanilla JavaScript

No framework, build process, backend, or UI library is required.

## Folder structure

```text
waterboys-portofolio/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── profile.jpg
│       ├── stage/
│       ├── product/
│       ├── portrait/
│       └── fashion/
└── README.md
```

## Add photos

Put your photos into the matching folders, then update the `CATEGORIES` array in:

`assets/js/main.js`

For each category, update `previewImages`.

For each project, update `images`.

Example:

```js
previewImages: [
  "assets/images/stage/stage-01.jpg",
  "assets/images/stage/stage-02.jpg"
]
```

## GitHub Pages

Upload the complete folder to a GitHub repository. The website uses relative asset paths, so it can run directly from GitHub Pages.

## Current placeholder image paths

The HTML and JavaScript contain image paths for the portfolio structure. Add your actual JPG/WebP images using the same filenames, or change the paths in `main.js`.

Profile image:

`assets/images/profile.jpg`
