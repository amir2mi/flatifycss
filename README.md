<p align="center">
  <a target="_blank" href="https://amir2mi.github.io/flatifycss/">
    <img src="https://raw.githubusercontent.com/amir2mi/flatifycss/master/website/static/img/logo.gif" alt="FlatifyCSS" width="160" height="160">
  </a>
</p>

<h3 align="center">FlatifyCSS</h3>

<p align="center">
  Modern flat design framework for the web — inspired by Duolingo design system.
</p>

<p align="center">
  <a target="_blank" href="https://amir2mi.github.io/flatifycss/docs/intro">
    Getting Started
  </a>
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;   
  <a target="_blank" href="https://flatifycss.com/">
    Homepage
  </a>
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;   
  <a target="_blank" href="https://amir2mi.github.io/flatifycss/blog">
    News
  </a>
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;   
  <a target="_blank" href="https://github.com/amir2mi/flatifycss/issues">
    Issues
  </a>
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;   
  <a target="_blank" href="https://react.flatifycss.com/">
    React Components
  </a>
</p>

<hr>

[![npm version](https://img.shields.io/npm/v/flatifycss)](https://www.npmjs.com/package/flatifycss)
[![Packagist Prerelease](https://img.shields.io/packagist/v/amir2mi/flatifycss)](https://packagist.org/packages/amir2mi/flatifycss)
[![CSS Gzip size](https://img.badgesize.io/https:/raw.githubusercontent.com/amir2mi/flatifycss/master/dist/css/flatify-min.css?compression=gzip&label=CSS%20Gzip)](https://github.com/amir2mi/flatifycss/blob/master/dist/css/flatify-min.css)
[![CSS Brotli size](https://img.badgesize.io/https:/raw.githubusercontent.com/amir2mi/flatifycss/master/dist/css/flatify-min.css?compression=brotli&label=CSS%20Brotli)](https://github.com/amir2mi/flatifycss/blob/master/dist/css/flatify-min.css)
[![JS Gzip size](https://img.badgesize.io/https:/raw.githubusercontent.com/amir2mi/flatifycss/master/dist/js/flatify-min.js?label=JS%20Gzip&compression=gzip)](https://github.com/amir2mi/flatifycss/blob/master/dist/js/flatify-min.js)
[![JS Brotli size](https://img.badgesize.io/https:/raw.githubusercontent.com/amir2mi/flatifycss/master/dist/js/flatify-min.js?label=JS%20Brotli&compression=brotli)](https://github.com/amir2mi/flatifycss/blob/master/dist/js/flatify-min.js)

# Getting started

You can use FlatifyCSS in several ways:

- Install it using package managers
- Load it directly from a CDN
- Download the [latest project files](https://github.com/amir2mi/flatifycss/archive/master.zip)

## CDN

You can add FlatifyCSS using [jsDelivr](https://www.jsdelivr.com/) with these lines of code:

```html
<!-- CSS -->
<link
  href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css"
  rel="stylesheet"
  crossorigin="anonymous"
/>

<!-- JavaScript : Popperjs + FlatifyCSS -->
<script src="https://unpkg.com/@popperjs/core@2" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/flatifycss/dist/js/flatify.min.js" crossorigin="anonymous"></script>
```

## Package managers

You can include FlatifyCSS in your project using npm, yarn, or composer:

### npm

```bash
npm install flatifycss
```

### Yarn

```bash
yarn add flatifycss
```

### Bun

```bash
bun add flatifycss
```

### Composer

```bash
composer require amir2mi/flatifycss
```

## Contents

After installing FlatifyCSS or downloading the archive file, you'll find a `/dist` folder with compiled CSS, JS, and their map files:

### CSS

CSS files come in different versions:

- Files with `-noprefix` don't use [PostCSS Autoprefixer](https://github.com/postcss/autoprefixer)
- Files with `-min` are minified

Available CSS files:

- `flatify.css`
- `flatify-min.css`
- `flatify-noprefix.css`
- `flatify-noprefix-min.css`

### JS

Note: FlatifyCSS needs [Popperjs](https://popper.js.org/) for dropdowns and popovers. This library isn't included in FlatifyCSS's JavaScript file, so you need to add it to your webpage separately.

Available JS files:

- `flatify.js`
- `flatify-min.js`

## Development

To develop FlatifyCSS:

1. Install Gulp globally: `npm i gulp-cli -g`
2. Run `npm install` in the root directory of FlatifyCSS
3. Run `gulp` in the root directory to compile the stylesheet and JavaScript file

For more information about FlatifyCSS's Gulp tasks, [read here](https://amir2mi.github.io/flatifycss/docs/overview/development#gulp).

## Support

The best way to support us is by contributing to the project. If you'd like to do more, you can [buy us a coffee](https://www.buymeacoffee.com/amir2mi)!
