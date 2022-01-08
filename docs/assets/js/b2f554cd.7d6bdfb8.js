"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"intro-to-flatifycss-modern-flat-design-framework-for-the-web","metadata":{"permalink":"/blog/intro-to-flatifycss-modern-flat-design-framework-for-the-web","editUrl":"https://github.com/amir2mi/flatifycss/tree/master/website/blog/blog/2022-01-08-intro-to-flatifycss.md","source":"@site/blog/2022-01-08-intro-to-flatifycss.md","title":"Intro to FlatifyCSS - Modern flat design framework for the web","description":"After months of working on the project called FlatifyCSS now, I can announce the stable version that you can use to create fantastic websites.","date":"2022-01-08T00:00:00.000Z","formattedDate":"January 8, 2022","tags":[{"label":"Guide","permalink":"/blog/tags/guide"},{"label":"Release","permalink":"/blog/tags/release"}],"readingTime":3.1,"truncated":true,"authors":[{"name":"Amir M. Mohamadi","title":"In love with FlatifyCSS","url":"https://github.com/amir2mi","imageURL":"https://github.com/amir2mi.png","key":"amir2mi"}],"nextItem":{"title":"Hello World!","permalink":"/blog/hello-world"}},"content":"After months of working on the project called [FlatifyCSS](https://flatifycss.com/) now, I can announce the stable version that you can use to create fantastic websites.\\n\\n\x3c!--truncate--\x3e\\n\\nFlatifyCSS is a modern flat design framework for the web, inspired by the [Duolingo design system](https://design.duolingo.com/). It comes with several components and helper classes to speed up the development process.\\n\\nI can describe it as a fancier version of the Material Design system. In FlatifyCSS, there are no blurred shadows, but borders express the same feeling, which causes the layout to be cleaner.\\n\\n## Features\\n\\nHere is why FlatifyCSS can be the right choice because of:\\n\\n- Customizability\\n- Accessibility\\n- Support for right to left layouts\\n- Practical set of components\\n- Handy helper classes\\n\\n### Customizability\\n\\nWith the power of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), it is possible to customize colors, typography, animations, etc. You can do the customization for each component or generally from the config file.\\nFor example, here is a default button and we want to create a new kind of button:\\n\\n```css\\n.my-custom-button {\\n  --flatify__button-txt-color: #fff;\\n  --flatify__button-bg-color: #48cfad;\\n  --flatify__button-border-color: #37bc9b;\\n}\\n```\\n\\nTherefore instead of changing all properties, you only need to modify some CSS variables to customize the styles.\\n\\n### Accessibility\\n\\nFlatifyCSS respects accessibility. It is keyboard-friendly, the friend of assistive technologies, and supports the reduced motion for animation and transitions when the user prefers.\\n\\n> For [reduced motion users](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion), all animations will be fade in/out.\\n> General users:\\n> ![Original animation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kmiubtbmp4eh9isqeyyp.gif)\\n> Users who prefer reduced motion :\\n> ![Reduced motion animation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z26e0d6vo3a3molfgt24.gif)\\n\\nIt is also possible to create the high-contrast version of FlatifyCSS for those who struggle with contrast loss issues. It is simply doable by applying some tweaks inside the SCSS config file. [Read more about high-contrast version](https://flatifycss.com/docs/overview/a11y#high-contrast)\\n\\n![FlatifyCSS original and high contrast versions](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mlmevr6o32gow93o8cc8.jpg)\\n\\n### Support for right to left layouts\\n\\nFlatifyCSS comes with files prefixed as `-rtl.css` built especially for the right to left languages like Arabic, Persian, Hebrew, etc.\\nYou can also extend the right to left styles by using the `flatify-rtl.scss` file and conditional statements. [Read more about RTL layouts](https://flatifycss.com/docs/overview/rtl)\\n\\n### Practical set of components\\n\\nThere are more than twenty components that can be mixed and make more complex user interfaces, each component has its unique CSS variables and can be customized based on the usage.\\n\\n### Handy helper classes\\n\\nFlatifyCSS is not a utility-first CSS framework, and honestly, we are not eager to be on that side. It makes things ready for development because real developers prove themselves by coding.\\n\\n![Color setter helper classes](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tsxqqunef2n16n9u9vom.gif)\\nNonetheless, FlatifyCSS comes with some of the must-must-haves. For example, if you want to change the theme of a component, there is just a set of helper classes started with `style-` and `color-` prefixes, not repeated like `button-success` or `alert-danger`, you just set `style-danger` and voil\xe0 you have the element with that style!\\n\\n## Getting started\\n\\nFlatifyCSS is available for users in many ways, you can install it using package managers, directly from CDN, or even downloading [lastest project archive](https://github.com/amir2mi/flatifycss/archive/master.zip).\\n\\nInstall the latest version via npm or Yarn:\\n\\n```bash\\nnpm install flatifycss\\nyarn add flatifycss\\n```\\n\\nOnce the package got installed, you can import files into your project or link them inside your web pages directly.\\n\\n## Learn more!\\n\\nAll components, forms, helper classes, principles, and pieces of information are documented, read about how things work, try, and then use them. I suggest first starting reading [the overview section](https://flatifycss.com/docs/overview/design-system).\\n\\n## Help us make it better...\\n\\nWe are on the first steps of this road, some things should get polished and missing features should be added, in this case, your feedback and contributions to this project will be appreciated by us and the people who will use it.  \\n[FlatifyCSS\'s Github page](https://github.com/amir2mi/flatifycss)"},{"id":"hello-world","metadata":{"permalink":"/blog/hello-world","editUrl":"https://github.com/amir2mi/flatifycss/tree/master/website/blog/blog/2021-10-29-hello-world.md","source":"@site/blog/2021-10-29-hello-world.md","title":"Hello World!","description":"This is the first blog post from the FlatifyCSS website, heads-up! we will have lots of work to do here.","date":"2021-10-29T00:00:00.000Z","formattedDate":"October 29, 2021","tags":[],"readingTime":0.1,"truncated":false,"authors":[{"name":"Amir M. Mohamadi","title":"In love with FlatifyCSS","url":"https://github.com/amir2mi","imageURL":"https://github.com/amir2mi.png","key":"amir2mi"}],"prevItem":{"title":"Intro to FlatifyCSS - Modern flat design framework for the web","permalink":"/blog/intro-to-flatifycss-modern-flat-design-framework-for-the-web"}},"content":"This is the first blog post from the FlatifyCSS website, heads-up! we will have lots of work to do here."}]}')}}]);