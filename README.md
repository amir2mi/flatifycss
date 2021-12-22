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
    Getting started
  </a>
&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;   
  <a target="_blank" href="https://amir2mi.github.io/flatifycss/">
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
</p>

<hr>

# Getting stated

FlatifyCSS is available for users in many ways, you can install it using package managers, directly from CDN, or even downloading [lastest project archive](https://github.com/amir2mi/flatifycss/archive/master.zip).

## CDN

Here is [jsDelivr](https://www.jsdelivr.com/), you can add FlatifyCSS just with a single line of code:

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

You can include FlatifyCSS in your project with npm, yarn or composer:

### npm

```bash
npm install flatifycss
```

### Yarn

```bash
yarn add flatifycss
```

### Composer

```bash
composer require amir2mi/flatifycss
```

## Contents

After installing FlatifyCSS with package managers or downloading the archive file there is a folder called `/dist`, where compiled CSS, JS and their map files are there, inside this folder these files are provided:

### CSS

CSS files come with some options, files with `-noprefix` suffix, do not have [PostCSS Autoprefixer](https://github.com/postcss/autoprefixer), while `-min` means this file is minified and `-rtl` is the special file for languages like Arabic, Persian, Hebrew, etc which direction is right to left.

`flatify.css`  
`flatify-min.css`  
`flatify-noprefix.css`  
`flatify-noprefix-min.css`  
`flatify-rtl.css`  
`flatify-rtl-min.css`  
`flatify-rtl-noprefix.css`  
`flatify-rtl-noprefix-min.css`

### JS

Note that FlatifyCSS needs [Popperjs](https://popper.js.org/) for dropdowns and popovers, but this library is not included inside the JavaScript file of FlatifyCSS, so it is up to you to include it inside your webpage.

`flatify.js`  
`flatify-min.js`

## Development
FlatifyCSS is written in Sass, which we compile to CSS & JavaScript using Gulp, to use Gulp, we need to install it globally with `npm i gulp-cli -g`, then run `npm install` in the root directory of FlatifyCSS. If everything is okay, we can run `gulp` in the root directory to compile the stylesheet and JavaScript file, read more about FlatifyCSS's Gulp tasks [here](https://amir2mi.github.io/flatifycss/docs/overview/development#gulp).

