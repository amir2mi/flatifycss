"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9561],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?r.createElement(d,l(l({ref:e},c),{},{components:n})):r.createElement(d,l({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2695:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(7462),o=n(3366),a=n(7294),l=["isBad","isGood","children","disableFullscreen","limitWidth"];function s(t){var e=t.isBad,n=t.isGood,s=t.children,i=t.disableFullscreen,u=t.limitWidth,c=(0,o.Z)(t,l),b=(0,a.useState)(!1),p=b[0],m=b[1];return a.createElement("div",{className:"preview-box-wrapper",style:u?{width:u,display:"table",margin:"0 auto"}:{}},!i&&a.createElement("button",{"aria-label":p?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(t){var e=t.target.closest(".preview-box-wrapper");p?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),m(!p)}},p?a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},a.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),e&&a.createElement("div",{className:"is-bad-example style-red"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"2 2 12 12"},a.createElement("path",{d:"M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"}))),n&&a.createElement("div",{className:"is-good-example style-green"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 18 18"},a.createElement("path",{d:"M5.056 15.04a1.5 1.5 0 002.217-.119l10.17-12.476A1.5 1.5 0 0015.118.55L6.007 11.758l-3.453-3.41a1.5 1.5 0 10-2.109 2.133l4.611 4.56"}))),a.createElement("iframe",(0,r.Z)({width:"100%",className:"docus-preview-box"+(p?" is-fullscreen":""),srcDoc:s},c)))}},2635:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return b},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=n(2695),s=["components"],i={title:"Arrow button"},u=void 0,c={unversionedId:"components/buttons/arrow-button",id:"components/buttons/arrow-button",isDocsHomePage:!1,title:"Arrow button",description:"By adding .arrow-button to ` it will be a button with the arrow icon, if you add the .arrow-flip` class to the arrow button it will be flipped horizontally or vertically. These are supported classes to change the arrow direction.",source:"@site/docs/components/buttons/arrow-button.mdx",sourceDirName:"components/buttons",slug:"/components/buttons/arrow-button",permalink:"/flatifycss/docs/components/buttons/arrow-button",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/components/buttons/arrow-button.mdx",tags:[],version:"current",frontMatter:{title:"Arrow button"},sidebar:"tutorialSidebar",previous:{title:"Button group",permalink:"/flatifycss/docs/components/buttons/button-group"},next:{title:"Close button",permalink:"/flatifycss/docs/components/buttons/close-button"}},b=[{value:"Sizes",id:"sizes",children:[],level:3},{value:"Colors",id:"colors",children:[],level:3},{value:"Change arrow icon",id:"change-arrow-icon",children:[],level:3}],p={toc:b};function m(t){var e=t.components,n=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By adding ",(0,a.kt)("inlineCode",{parentName:"p"},".arrow-button")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"<button>")," it will be a button with the arrow icon, if you add the ",(0,a.kt)("inlineCode",{parentName:"p"},".arrow-flip")," class to the arrow button it will be flipped horizontally or vertically. These are supported classes to change the arrow direction."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".arrow-top"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".arrow-bottom")," (as default)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".arrow-right"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".arrow-left")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Accessibility matters!")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is not necessary to add text inside the arrow button element but you should set an ",(0,a.kt)("inlineCode",{parentName:"p"},"aria-label")," HTML attribute for accessibility purposes. ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute"},"Read more about aria-label usage"),"."))),(0,a.kt)(l.Z,{height:"100px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Arrow button</title> </head> <body> <div class="flex-center"> <button class="button arrow-button" aria-label="Arrow button"/></button> <button class="button arrow-button arrow-top" aria-label="Arrow button"/></button> <button class="button arrow-button arrow-left" aria-label="Arrow button"/></button> <button class="button arrow-button arrow-right" aria-label="Arrow button"/></button> </div> </body> <script> const buttons = document.querySelectorAll(".arrow-button"); buttons.forEach(function(button){ button.addEventListener("click", function(e){ if(e.target.classList.contains("arrow-flip")){ e.target.classList.remove("arrow-flip"); }else{ e.target.classList.add("arrow-flip"); } }); }) <\/script>\n</html>\n',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="button arrow-button" aria-label="Arrow button"/></button>\n<button class="button arrow-button arrow-top" aria-label="Arrow button"/></button>\n<button class="button arrow-button arrow-left" aria-label="Arrow button"/></button>\n<button class="button arrow-button arrow-right" aria-label="Arrow button"/></button>\n')),(0,a.kt)("h3",{id:"sizes"},"Sizes"),(0,a.kt)("p",null,"To change the button size use ",(0,a.kt)("a",{parentName:"p",href:"/docs/helpers/size-setters"},"size setter classes"),".\nThese classes just set a ",(0,a.kt)("inlineCode",{parentName:"p"},"font-size")," property so it is possible to change it yourself by writing custom CSS."),(0,a.kt)(l.Z,{height:"160px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Arrow button</title> </head> <body> <div class="flex-center"> <button class="button arrow-button size-xs" aria-label="Arrow button"></button> <button class="button arrow-button size-lg" aria-label="Arrow button"></button> <button class="button arrow-button size-2x" aria-label="Arrow button"></button> <button class="button arrow-button size-3x" aria-label="Arrow button"></button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="button arrow-button size-xs" aria-label="Arrow button"></button>\n<button class="button arrow-button size-lg" aria-label="Arrow button"></button>\n<button class="button arrow-button size-2x" aria-label="Arrow button"></button>\n<button class="button arrow-button size-3x" aria-label="Arrow button"></button>\n')),(0,a.kt)("h3",{id:"colors"},"Colors"),(0,a.kt)("p",null,"There are helper classes for styling elements like button, first read about ",(0,a.kt)("a",{parentName:"p",href:"/docs/helpers/color-setters"},"color setter classes")," for having button with diffrent background and text color."),(0,a.kt)(l.Z,{height:"100px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Close button</title> <style> .arrow-button{ margin: 5px !important; } </style> </head> <body> <div class="flex-center" style="flex-wrap: wrap"> <button class="button arrow-button style-success" aria-label="Arrow button"></button> <button class="button arrow-button style-warning" aria-label="Arrow button"></button> <button class="button arrow-button style-purple" aria-label="Arrow button"></button> <button class="button arrow-button style-red" aria-label="Arrow button"/></button> <button class="button arrow-button color-success" aria-label="Arrow button"></button> <button class="button arrow-button color-warning" aria-label="Arrow button"></button> <button class="button arrow-button color-purple" aria-label="Arrow button"></button> <button class="button arrow-button color-red" aria-label="Arrow button"></button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="button arrow-button style-success" aria-label="Arrow button"></button>\n<button class="button arrow-button style-warning" aria-label="Arrow button"></button>\n<button class="button arrow-button style-purple" aria-label="Arrow button"></button>\n<button class="button arrow-button style-red" aria-label="Arrow button"/></button>\n\n<button class="button arrow-button color-success" aria-label="Arrow button"></button>\n<button class="button arrow-button color-warning" aria-label="Arrow button"></button>\n<button class="button arrow-button color-purple" aria-label="Arrow button"></button>\n<button class="button arrow-button color-red" aria-label="Arrow button"></button>\n')),(0,a.kt)("h3",{id:"change-arrow-icon"},"Change arrow icon"),(0,a.kt)("p",null,"It is possible to change the arrow button icon with both ",(0,a.kt)("inlineCode",{parentName:"p"},"_config.scss")," and CSS variables."),(0,a.kt)("p",null,"Inside ",(0,a.kt)("inlineCode",{parentName:"p"},"_config.scss")," find ",(0,a.kt)("inlineCode",{parentName:"p"},"$ARROW_DOWN_ICON")," and set svg of customized icon with this format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="_config.scss"',title:'"_config.scss"'},'$ARROW_DOWN_ICON: url("data:image/svg+xml; utf8, YOUR SVG CODE HERE");\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("p",null,"change its CSS variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},'--flatify__arrow-down-icon: url("data:image/svg+xml; utf8, YOUR SVG CODE HERE");\n')))}m.isMDXComponent=!0}}]);