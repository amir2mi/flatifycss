"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1452],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,c=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),h=o(a),u=l,p=h["".concat(c,".").concat(u)]||h[u]||m[u]||s;return a?r.createElement(p,i(i({ref:t},d),{},{components:a})):r.createElement(p,i({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,i=new Array(s);i[0]=h;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:l,i[1]=n;for(var o=2;o<s;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2695:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7462),l=a(3366),s=a(7294),i=["isBad","isGood","children","disableFullscreen","limitWidth"];function n(e){var t=e.isBad,a=e.isGood,n=e.children,c=e.disableFullscreen,o=e.limitWidth,d=(0,l.Z)(e,i),m=(0,s.useState)(!1),h=m[0],u=m[1];return s.createElement("div",{className:"preview-box-wrapper",style:o?{width:o,display:"table",margin:"0 auto"}:{}},!c&&s.createElement("button",{"aria-label":h?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(e){var t=e.target.closest(".preview-box-wrapper");h?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),u(!h)}},h?s.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},s.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):s.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},s.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),t&&s.createElement("div",{className:"is-bad-example style-red"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"2 2 12 12"},s.createElement("path",{d:"M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"}))),a&&s.createElement("div",{className:"is-good-example style-green"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 18 18"},s.createElement("path",{d:"M5.056 15.04a1.5 1.5 0 002.217-.119l10.17-12.476A1.5 1.5 0 0015.118.55L6.007 11.758l-3.453-3.41a1.5 1.5 0 10-2.109 2.133l4.611 4.56"}))),s.createElement("iframe",(0,r.Z)({width:"100%",className:"docus-preview-box"+(h?" is-fullscreen":""),srcDoc:n},d)))}},8152:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var r=a(7462),l=a(3366),s=(a(7294),a(3905)),i=a(2695),n=["components"],c={title:"Cards"},o=void 0,d={unversionedId:"components/card",id:"components/card",isDocsHomePage:!1,title:"Cards",description:"Cards are flexible components that let you cleanly display items. Generally, cards should be simple because they will be repeated and they must not be too complicated for users.",source:"@site/docs/components/card.mdx",sourceDirName:"components",slug:"/components/card",permalink:"/docs/components/card",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/components/card.mdx",tags:[],version:"current",frontMatter:{title:"Cards"},sidebar:"tutorialSidebar",previous:{title:"Breadcrumb",permalink:"/docs/components/breadcrumb"},next:{title:"Dropdowns",permalink:"/docs/components/dropdown"}},m=[{value:"Vertical",id:"vertical",children:[],level:2},{value:"Horizontal",id:"horizontal",children:[],level:2},{value:"Sizes",id:"sizes",children:[],level:2},{value:"Colors &amp; customization",id:"colors--customization",children:[],level:2}],h={toc:m};function u(e){var t=e.components,a=(0,l.Z)(e,n);return(0,s.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Cards are flexible components that let you cleanly display items. Generally, cards should be simple because they will be repeated and they must not be too complicated for users.\nEach card has a header, body, and footer, it can be vertical or horizontal based on the content and the layout."),(0,s.kt)("h2",{id:"vertical"},"Vertical"),(0,s.kt)("p",null,"The card is displayed vertically by default, just add the necessary part and, voil\xe0! we have a vertical card."),(0,s.kt)(i.Z,{height:"420px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Card</title> <style> .card-action-buttons svg{ fill: currentColor; width: 1.5em; } </style> </head> <body class="flex-center"> <article class="card" style="max-width: 320px"> <header class="card-header"> <div class="card-badges"> <a href="#" class="badge style-green">Sundays</a> <a href="#" class="badge style-accent">Cards</a> </div> <img class="card-image" src="https://picsum.photos/200/300" alt="Card image" /> <h2 class="card-title">Hello, I am a new card</h2> </header> <div class="card-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </div> <footer class="card-footer"> <div class="button-group card-action-buttons"> <button class="button bordered style-light-light" aria-label="Like"> <svg aria-hidden="true" version="1.1" viewBox="175 120 350 350" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g> <path d="m463.09 186.1c-13.52-11.176-30.867-17.328-48.836-17.328-20.77 0-40.879 8.2812-55.156 22.703-2.5742 2.5977-4.9766 5.3828-7.2266 8.3984-17.488-23.254-46.645-35.207-75.602-29.938-23.969 4.3516-42.801 17.539-55.988 39.156-18.574 30.504-20.086 59.914-4.4922 87.441 8.3516 14.758 19.18 29.109 33.078 43.859 25.484 27.102 55.66 52.836 95.023 80.996 2.5 1.7656 5.1797 2.6602 7.9688 2.6602 4.3125 0 7.2383-2.1797 8.6758-3.2539 34.965-24.953 63.645-48.992 87.68-73.496 13.605-13.859 29.039-30.898 40.324-52.152 4.832-9.1016 10.352-21.336 10.012-35.312-0.71484-30.078-12.648-54.883-35.461-73.734z"/> </g> </svg> </button> <button class="button bordered style-light-light" aria-label="Share"> <svg aria-hidden="true" version="1.1" viewBox="120 40 475 475" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g> <path d="m456.01 202.83c19.488 0.042969 38.012-8.4727 50.664-23.293 12.656-14.824 18.16-34.453 15.059-53.695-3.1016-19.238-14.5-36.145-31.168-46.238-16.672-10.094-36.934-12.359-55.418-6.1914-18.488 6.168-33.332 20.141-40.605 38.223-7.2695 18.082-6.2344 38.441 2.8359 55.691l-110.43 65.855c-12.914-11.039-29.57-16.699-46.535-15.812-16.965 0.88281-32.941 8.2461-44.637 20.566-11.695 12.32-18.215 28.66-18.215 45.648 0 16.984 6.5195 33.324 18.215 45.645 11.695 12.32 27.672 19.684 44.637 20.566 16.965 0.88672 33.621-4.7734 46.535-15.812l107.86 63.617c-8.5469 20.078-6.7383 43.066 4.8438 61.562 11.578 18.496 31.469 30.164 53.262 31.246 21.797 1.082 42.742-8.5547 56.102-25.812 13.355-17.254 17.434-39.949 10.922-60.777-6.5117-20.828-22.789-37.156-43.598-43.73-20.809-6.5742-43.516-2.5625-60.812 10.742l-109.31-64.68c5.4258-14.613 5.4258-30.691 0-45.305l114.52-68.32c10.543 6.7148 22.781 10.289 35.281 10.305z"/> </g> </svg> </button> </div> <a href="#" class="button style-accent push-right">Read more</a> </footer> </article> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Consider using semantic HTML")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"We can give our card semantic HTML, it is a good practice to use semantic HTML, because it is easier to read and understand both for screen readers and robots.",(0,s.kt)("br",{parentName:"p"}),"\n","So we have ",(0,s.kt)("inlineCode",{parentName:"p"},"<header>")," HTML tag for our the card header and ",(0,s.kt)("inlineCode",{parentName:"p"},"<footer>")," HTML tag for our card footer. The whole card is wrapped in ",(0,s.kt)("inlineCode",{parentName:"p"},"<article>")," HTML tag and cards can be inside a parent with ",(0,s.kt)("inlineCode",{parentName:"p"},"<section>")," HTML tag."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<article class="card" style="max-width: 320px">\n  <header class="card-header">\n    <div class="card-badges">\n      <a href="#" class="badge style-green">Sundays</a>\n      <a href="#" class="badge style-accent">Cards</a>\n    </div>\n\n    <img class="card-image" src="https://picsum.photos/200/300" alt="Card image" />\n    <h2 class="card-title">Hello, I am a new card</h2>\n  </header>\n\n  <div class="card-body">\n    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada\n    erat ut turpis.\n  </div>\n\n  <footer class="card-footer">\n    <div class="button-group">\n      <button class="button bordered style-light-light" aria-label="Like">\n        \x3c!-- Like svg ... --\x3e\n      </button>\n      <button class="button bordered style-light-light" aria-label="Share">\n        \x3c!-- Share svg ... --\x3e\n      </button>\n    </div>\n\n    <a href="#" class="button style-accent push-right">Read more</a>\n  </footer>\n</article>\n')),(0,s.kt)("h2",{id:"horizontal"},"Horizontal"),(0,s.kt)("p",null,"By adding the ",(0,s.kt)("inlineCode",{parentName:"p"},".horizontal")," class to the ",(0,s.kt)("inlineCode",{parentName:"p"},".card")," element, it will be horizontal, also its HTML structure is a little different from vertical."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Limit the card height")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It is suggested to set a fixed height or maximum height for the card with the ",(0,s.kt)("inlineCode",{parentName:"p"},".horizontal")," class, to prevent the image height affect the height of the card, or you can set a fixed image size."))),(0,s.kt)(i.Z,{height:"275px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Card</title> <style> .card-action-buttons svg{ fill: currentColor; width: 1.5em; } </style> </head> <body class="flex-center"> <article class="card horizontal" style="max-width: 500px;"> <header class="card-header"> <div class="card-badges"> <a href="#" class="badge style-green">Sundays</a> <a href="#" class="badge style-accent">Cards</a> </div> <img style="height: 200px" class="card-image" src="https://picsum.photos/200/300" alt="Card image" /> </header> <div class="card-right"> <div class="card-body"> <h2 class="card-title">Hello, I am a new card</h2> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </div> <footer class="card-footer"> <div class="button-group card-action-buttons"> <button class="button bordered style-light-light" aria-label="Like"> <svg aria-hidden="true" version="1.1" viewBox="175 120 350 350" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g> <path d="m463.09 186.1c-13.52-11.176-30.867-17.328-48.836-17.328-20.77 0-40.879 8.2812-55.156 22.703-2.5742 2.5977-4.9766 5.3828-7.2266 8.3984-17.488-23.254-46.645-35.207-75.602-29.938-23.969 4.3516-42.801 17.539-55.988 39.156-18.574 30.504-20.086 59.914-4.4922 87.441 8.3516 14.758 19.18 29.109 33.078 43.859 25.484 27.102 55.66 52.836 95.023 80.996 2.5 1.7656 5.1797 2.6602 7.9688 2.6602 4.3125 0 7.2383-2.1797 8.6758-3.2539 34.965-24.953 63.645-48.992 87.68-73.496 13.605-13.859 29.039-30.898 40.324-52.152 4.832-9.1016 10.352-21.336 10.012-35.312-0.71484-30.078-12.648-54.883-35.461-73.734z"/> </g> </svg> </button> <button class="button bordered style-light-light" aria-label="Share"> <svg aria-hidden="true" version="1.1" viewBox="120 40 475 475" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g> <path d="m456.01 202.83c19.488 0.042969 38.012-8.4727 50.664-23.293 12.656-14.824 18.16-34.453 15.059-53.695-3.1016-19.238-14.5-36.145-31.168-46.238-16.672-10.094-36.934-12.359-55.418-6.1914-18.488 6.168-33.332 20.141-40.605 38.223-7.2695 18.082-6.2344 38.441 2.8359 55.691l-110.43 65.855c-12.914-11.039-29.57-16.699-46.535-15.812-16.965 0.88281-32.941 8.2461-44.637 20.566-11.695 12.32-18.215 28.66-18.215 45.648 0 16.984 6.5195 33.324 18.215 45.645 11.695 12.32 27.672 19.684 44.637 20.566 16.965 0.88672 33.621-4.7734 46.535-15.812l107.86 63.617c-8.5469 20.078-6.7383 43.066 4.8438 61.562 11.578 18.496 31.469 30.164 53.262 31.246 21.797 1.082 42.742-8.5547 56.102-25.812 13.355-17.254 17.434-39.949 10.922-60.777-6.5117-20.828-22.789-37.156-43.598-43.73-20.809-6.5742-43.516-2.5625-60.812 10.742l-109.31-64.68c5.4258-14.613 5.4258-30.691 0-45.305l114.52-68.32c10.543 6.7148 22.781 10.289 35.281 10.305z"/> </g> </svg> </button> </div> <a href="#" class="button style-accent push-right">Read more</a> </footer> </div> </article> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<article class="card horizontal" style="max-width: 500px;">\n  <header class="card-header">\n    <div class="card-badges">\n      <a href="#" class="badge style-green">Sundays</a>\n      <a href="#" class="badge style-accent">Cards</a>\n    </div>\n    <img style="height: 200px" class="card-image" src="https://picsum.photos/200/300" alt="Card image" />\n  </header>\n  <div class="card-right">\n    <div class="card-body">\n      <h2 class="card-title">Hello, I am a new card</h2>\n      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam\n      malesuada erat ut turpis.\n    </div>\n\n    <footer class="card-footer">\n      <div class="button-group">\n        <button class="button bordered style-light-light" aria-label="Like">\n          \x3c!-- Like svg ... --\x3e\n        </button>\n        <button class="button bordered style-light-light" aria-label="Share">\n          \x3c!-- Share svg ... --\x3e\n        </button>\n      </div>\n\n      <a href="#" class="button style-accent push-right">Read more</a>\n    </footer>\n  </div>\n</article>\n')),(0,s.kt)("h2",{id:"sizes"},"Sizes"),(0,s.kt)("p",null,"To change the card size use ",(0,s.kt)("a",{parentName:"p",href:"/docs/helpers/size-setters"},"size setter classes"),".\nThese classes just set a ",(0,s.kt)("inlineCode",{parentName:"p"},"font-size")," property so it is possible to change it yourself by writing custom CSS."),(0,s.kt)(i.Z,{height:"330px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Card</title> <style> .card-action-buttons svg{ fill: currentColor; width: 1.5em; } </style> </head> <body class="flex-center"> <article class="card size-xs" style="max-width: 200px"> <header class="card-header"> <div class="card-badges"> <a href="#" class="badge style-green">Sundays</a> <a href="#" class="badge style-accent">Cards</a> </div> <img class="card-image" src="https://picsum.photos/200/300" alt="Card image" /> <h2 class="card-title">Hello, I am a new card</h2> </header> <div class="card-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. </div> <footer class="card-footer"> <div class="button-group card-action-buttons"> <button class="button bordered style-light-light" aria-label="Like"> <svg aria-hidden="true" version="1.1" viewBox="175 120 350 350" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g> <path d="m463.09 186.1c-13.52-11.176-30.867-17.328-48.836-17.328-20.77 0-40.879 8.2812-55.156 22.703-2.5742 2.5977-4.9766 5.3828-7.2266 8.3984-17.488-23.254-46.645-35.207-75.602-29.938-23.969 4.3516-42.801 17.539-55.988 39.156-18.574 30.504-20.086 59.914-4.4922 87.441 8.3516 14.758 19.18 29.109 33.078 43.859 25.484 27.102 55.66 52.836 95.023 80.996 2.5 1.7656 5.1797 2.6602 7.9688 2.6602 4.3125 0 7.2383-2.1797 8.6758-3.2539 34.965-24.953 63.645-48.992 87.68-73.496 13.605-13.859 29.039-30.898 40.324-52.152 4.832-9.1016 10.352-21.336 10.012-35.312-0.71484-30.078-12.648-54.883-35.461-73.734z"/> </g> </svg> </button> <button class="button bordered style-light-light" aria-label="Share"> <svg aria-hidden="true" version="1.1" viewBox="120 40 475 475" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g> <path d="m456.01 202.83c19.488 0.042969 38.012-8.4727 50.664-23.293 12.656-14.824 18.16-34.453 15.059-53.695-3.1016-19.238-14.5-36.145-31.168-46.238-16.672-10.094-36.934-12.359-55.418-6.1914-18.488 6.168-33.332 20.141-40.605 38.223-7.2695 18.082-6.2344 38.441 2.8359 55.691l-110.43 65.855c-12.914-11.039-29.57-16.699-46.535-15.812-16.965 0.88281-32.941 8.2461-44.637 20.566-11.695 12.32-18.215 28.66-18.215 45.648 0 16.984 6.5195 33.324 18.215 45.645 11.695 12.32 27.672 19.684 44.637 20.566 16.965 0.88672 33.621-4.7734 46.535-15.812l107.86 63.617c-8.5469 20.078-6.7383 43.066 4.8438 61.562 11.578 18.496 31.469 30.164 53.262 31.246 21.797 1.082 42.742-8.5547 56.102-25.812 13.355-17.254 17.434-39.949 10.922-60.777-6.5117-20.828-22.789-37.156-43.598-43.73-20.809-6.5742-43.516-2.5625-60.812 10.742l-109.31-64.68c5.4258-14.613 5.4258-30.691 0-45.305l114.52-68.32c10.543 6.7148 22.781 10.289 35.281 10.305z"/> </g> </svg> </button> </div> <a href="#" class="button style-accent push-right">Read more</a> </footer> </article> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<article class="card size-xs" style="max-width: 200px">...</article>\n')),(0,s.kt)("h2",{id:"colors--customization"},"Colors & customization"),(0,s.kt)("p",null,"You can use ",(0,s.kt)("a",{parentName:"p",href:"/docs/helpers/color-setters"},"color setter helpr classes")," or change the CSS variables of cards:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--flatify__card-txt-color"),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"--flatify__card-bg-color"),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"--flatify__card-border-color")),(0,s.kt)("p",null,"Here is an example of how to use the variables:"),(0,s.kt)(i.Z,{height:"420px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Card</title> <style> .card-action-buttons svg{ fill: currentColor; width: 1.5em; } .my-custom-card{ --flatify__card-txt-color: #E6E9ED; --flatify__card-bg-color: #D8334A; --flatify__card-border-color: #BF263C; } </style> </head> <body class="flex-center"> <article class="card my-custom-card" style="max-width: 320px"> <header class="card-header"> <div class="card-badges"> <a href="#" class="badge style-green">Sundays</a> <a href="#" class="badge style-accent">Cards</a> </div> <img class="card-image" src="https://picsum.photos/200/300" alt="Card image" /> <h2 class="card-title">Hello, I am a new card</h2> </header> <div class="card-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </div> <footer class="card-footer"> <a href="#" class="button style-dark push-center">Read more</a> </footer> </article> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<article class="card my-custom-card" style="max-width: 320px">...</article>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".my-custom-card {\n  --flatify__card-txt-color: #e6e9ed;\n  --flatify__card-bg-color: #d8334a;\n  --flatify__card-border-color: #bf263c;\n}\n")),(0,s.kt)("p",null,"We can go further and move the title over the image and use ",(0,s.kt)("a",{parentName:"p",href:"/docs/helpers/overlay-layer"},"overlay layer")," for clarifying the title:"),(0,s.kt)(i.Z,{height:"320px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Card</title> <style> .card-action-buttons svg{ fill: currentColor; width: 1.5em; } .my-custom-card{ --flatify__card-txt-color: #E6E9ED; --flatify__card-bg-color: #323133; --flatify__card-border-color: #434A54; --flatify__overlay-layer-bg-color: linear-gradient(40deg, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.08) 50%); --flatify__overlay-layer-backdrop-filter: blur(5px) brightness(0.75) contrast(0.75); --flatify__overlay-layer-priority: 0; } .my-custom-card .card-header{ margin-bottom: 0.5em; } .my-custom-card .card-title{ position: absolute; bottom: 0.25em; left: 0.75em; } </style> </head> <body class="flex-center"> <article class="card my-custom-card" style="max-width: 320px"> <header class="card-header overlay-layer"> <div class="card-badges"> <a href="#" class="badge style-dark-light">Sundays</a> <a href="#" class="badge style-dark-light">Cards</a> </div> <img class="card-image" src="https://picsum.photos/200/300" alt="Card image" /> <h2 class="card-title">Hello, I am a new card</h2> </header> <div class="card-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </div> </article> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<article class="card my-custom-card" style="max-width: 320px">\n  <header class="card-header overlay-layer">\n    <div class="card-badges">\n      <a href="#" class="badge style-dark-light">Sundays</a>\n      <a href="#" class="badge style-dark-light">Cards</a>\n    </div>\n    <img class="card-image" src="https://picsum.photos/200/300" alt="Card image" />\n    <h2 class="card-title">Hello, I am a new card</h2>\n  </header>\n  <div class="card-body">\n    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada\n    erat ut turpis.\n  </div>\n</article>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".my-custom-card {\n  --flatify__card-txt-color: #e6e9ed;\n  --flatify__card-bg-color: #323133;\n  --flatify__card-border-color: #434a54;\n  --flatify__overlay-layer-bg-color: linear-gradient(\n    40deg,\n    rgba(255, 255, 255, 0.18) 50%,\n    rgba(255, 255, 255, 0.08) 50%\n  );\n  --flatify__overlay-layer-backdrop-filter: blur(5px) brightness(0.75) contrast(0.75);\n  --flatify__overlay-layer-priority: 0;\n}\n\n.my-custom-card .card-header {\n  margin-bottom: 0.5em;\n}\n\n.my-custom-card .card-title {\n  position: absolute;\n  bottom: 0.25em;\n  left: 0.75em;\n}\n")))}u.isMDXComponent=!0}}]);