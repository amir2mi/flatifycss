---
slug: intro-to-flatifycss-modern-flat-design-framework-for-the-web
title: Intro to FlatifyCSS - Modern flat design framework for the web
authors: [amir2mi]
tags: [Guide, Release]
---

After months of working on the project called [FlatifyCSS](https://flatifycss.com/) now, I can announce the stable version that you can use to create fantastic websites.

<!--truncate-->

FlatifyCSS is a modern flat design framework for the web, inspired by the [Duolingo design system](https://design.duolingo.com/). It comes with several components and helper classes to speed up the development process.

I can describe it as a fancier version of the Material Design system. In FlatifyCSS, there are no blurred shadows, but borders express the same feeling, which causes the layout to be cleaner.

## Features

Here is why FlatifyCSS can be the right choice because of:

- Customizability
- Accessibility
- Support for right to left layouts
- Practical set of components
- Handy helper classes

### Customizability

With the power of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), it is possible to customize colors, typography, animations, etc. You can do the customization for each component or generally from the config file.
For example, here is a default button and we want to create a new kind of button:

```css
.my-custom-button {
  --flatify__button-txt-color: #fff;
  --flatify__button-bg-color: #48cfad;
  --flatify__button-border-color: #37bc9b;
}
```

Therefore instead of changing all properties, you only need to modify some CSS variables to customize the styles.

### Accessibility

FlatifyCSS respects accessibility. It is keyboard-friendly, the friend of assistive technologies, and supports the reduced motion for animation and transitions when the user prefers.

> For [reduced motion users](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion), all animations will be fade in/out.
> General users:
> ![Original animation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kmiubtbmp4eh9isqeyyp.gif)
> Users who prefer reduced motion :
> ![Reduced motion animation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z26e0d6vo3a3molfgt24.gif)

It is also possible to create the high-contrast version of FlatifyCSS for those who struggle with contrast loss issues. It is simply doable by applying some tweaks inside the SCSS config file. [Read more about high-contrast version](https://flatifycss.com/docs/overview/a11y#high-contrast)

![FlatifyCSS original and high contrast versions](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mlmevr6o32gow93o8cc8.jpg)

### Support for right to left layouts

FlatifyCSS supports the RTL layout perfectly, it uses CSS inline positioning properties that gives the layout ability to be RTL/LTR based on the document `direction`.
[Read more about RTL layouts](https://flatifycss.com/docs/overview/rtl)

### Practical set of components

There are more than twenty components that can be mixed and make more complex user interfaces, each component has its unique CSS variables and can be customized based on the usage.

### Handy helper classes

FlatifyCSS is not a utility-first CSS framework, and honestly, we are not eager to be on that side. It makes things ready for development because real developers prove themselves by coding.

![Color setter helper classes](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tsxqqunef2n16n9u9vom.gif)
Nonetheless, FlatifyCSS comes with some of the must-must-haves. For example, if you want to change the theme of a component, there is just a set of helper classes started with `style-` and `color-` prefixes, not repeated like `button-success` or `alert-danger`, you just set `style-danger` and voilà you have the element with that style!

## Getting started

FlatifyCSS is available for users in many ways, you can install it using package managers, directly from CDN, or even downloading [lastest project archive](https://github.com/amir2mi/flatifycss/archive/master.zip).

Install the latest version via npm or Yarn:

```bash
npm install flatifycss
yarn add flatifycss
```

Once the package got installed, you can import files into your project or link them inside your web pages directly.

## Learn more!

All components, forms, helper classes, principles, and pieces of information are documented, read about how things work, try, and then use them. I suggest first starting reading [the overview section](https://flatifycss.com/docs/overview/design-system).

## Help us make it better...

We are on the first steps of this road, some things should get polished and missing features should be added, in this case, your feedback and contributions to this project will be appreciated by us and the people who will use it.  
[FlatifyCSS's Github page](https://github.com/amir2mi/flatifycss)
