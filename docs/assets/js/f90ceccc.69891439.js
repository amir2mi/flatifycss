"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[324],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),p=c(n),d=i,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?o.createElement(b,a(a({ref:e},u),{},{components:n})):o.createElement(b,a({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,a=new Array(l);a[0]=p;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:i,a[1]=r;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2695:function(t,e,n){n.d(e,{Z:function(){return r}});var o=n(7462),i=n(3366),l=n(7294),a=["children"];function r(t){var e=t.children,n=(0,i.Z)(t,a);return l.createElement("iframe",(0,o.Z)({width:"100%",className:"docus-preview-box",srcDoc:e},n))}},1078:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var o=n(7462),i=n(3366),l=(n(7294),n(3905)),a=n(2695),r=["components"],s={title:"Buttons"},c=void 0,u={unversionedId:"components/buttons",id:"components/buttons",isDocsHomePage:!1,title:"Buttons",description:"Buttons play a big role in any user interface as they give users the ability",source:"@site/docs/components/buttons.mdx",sourceDirName:"components",slug:"/components/buttons",permalink:"/FlatifyCSS/docs/components/buttons",editUrl:"https://github.com/amir2mi/FlatifyCSS/tree/master/website/docs/components/buttons.mdx",tags:[],version:"current",frontMatter:{title:"Buttons"},sidebar:"tutorialSidebar",previous:{title:"Table",permalink:"/FlatifyCSS/docs/content/table"},next:{title:"Alignment",permalink:"/FlatifyCSS/docs/helpers/alignment"}},m=[{value:"A simple button",id:"a-simple-button",children:[],level:3},{value:"Colors",id:"colors",children:[],level:3},{value:"Sizes",id:"sizes",children:[],level:3},{value:"Customization",id:"customization",children:[],level:3}],p={toc:m};function d(t){var e=t.components,n=(0,i.Z)(t,r);return(0,l.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Buttons play a big role in any user interface as they give users the ability\nto interact with the website, so we should use them carefully.\nIt is necessary to know the good and bad practices for a perfect button.\nFirst, take a look at ",(0,l.kt)("a",{parentName:"p",href:"https://www.buttoncheatsheet.com/"},"button cheat sheet"),"."),(0,l.kt)("h3",{id:"a-simple-button"},"A simple button"),(0,l.kt)("p",null,"A button with Flatify CSS style can be defined in several ways as mentioned in the button cheatsheet,\nfor any type of element, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},".button")," class but elements like ",(0,l.kt)("inlineCode",{parentName:"p"},"<button>")," or input with button type do not need the class."),(0,l.kt)(a.Z,{height:"100px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> </head> <body> <div class="flex-center"> <button> Click Here </button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},"<button>Click Here</button>\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you do not want to have Flatify CSS style on elements like ",(0,l.kt)("inlineCode",{parentName:"p"},"<button>")," there is a class called\n",(0,l.kt)("inlineCode",{parentName:"p"},".default")," that do not allow the button to have Flatify CSS button style primarily."),(0,l.kt)(a.Z,{height:"100px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> </head> <body> <div class="flex-center"> <button class="default"> Click Here </button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="default">Click Here</button>\n')))),(0,l.kt)("h3",{id:"colors"},"Colors"),(0,l.kt)("p",null,"There are helper classes for styling elements like button,\nfirst ",(0,l.kt)("a",{parentName:"p",href:"/docs/helpers/color-setters"},"color setter classes")," for having button which diffrent\nbackground and text color."),(0,l.kt)(a.Z,{height:"200px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> </head> <body> <div class="flex-center" style="flex-wrap: wrap;"> <button style="width: 200px; margin: 10px" class="style-accent">Click Here</button> <button style="width: 200px; margin: 10px" class="style-purple">Click Here</button> <button style="width: 200px; margin: 10px" class="style-yellow">Click Here</button> <button style="width: 200px; margin: 10px" class="style-warning">Click Here</button> <button style="width: 200px; margin: 10px" class="style-danger">Click Here</button> <button style="width: 200px; margin: 10px" class="style-dark">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="style-accent">Click Here</button>\n<button class="style-purple">Click Here</button>\n<button class="style-yellow">Click Here</button>\n<button class="style-warning">Click Here</button>\n<button class="style-danger">Click Here</button>\n<button class="style-dark">Click Here</button>\n')),(0,l.kt)("h3",{id:"sizes"},"Sizes"),(0,l.kt)("p",null,"To change the button size use ",(0,l.kt)("a",{parentName:"p",href:"/docs/helpers/size-setters"},"size setter classes"),".\nThis classes just set a ",(0,l.kt)("inlineCode",{parentName:"p"},"font-size")," property so it is possible to change it yourself by writing custom CSS."),(0,l.kt)(a.Z,{height:"340px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> </head> <body> <div class="flex-column-center"> <button class="size-sm">Click Here</button> <button class="size-md">Click Here</button> <button class="size-lg">Click Here</button> <button class="size-2x">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="size-sm">Click Here</button>\n<button class="size-md">Click Here</button>\n<button class="size-lg">Click Here</button>\n<button class="size-2x">Click Here</button>\n')),(0,l.kt)("h3",{id:"customization"},"Customization"),(0,l.kt)("p",null,"Each button has these CSS variables for customization, they can be set as ",(0,l.kt)("inlineCode",{parentName:"p"},":root")," for all buttons default style\nof just for an specific selector."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--flatify__button-bg-color")," Button background color",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"--flatify__button-bg-color__focus")," Button background color for border and focus",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"--flatify__button-text-color")," Button text color",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"--flatify__button-text-color__focus")," Button text color for focus"),(0,l.kt)(a.Z,{height:"150px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> <style> .my-button-1{ --flatify__button-bg-color: linear-gradient(to right, #4A00E0, #8E2DE2); --flatify__button-bg-color__focus: linear-gradient(to right, #4A00E0, #8E2DE2); --flatify__button-text-color: white; --flatify__button-text-color__focus: white; } .my-button-2{ --flatify__button-bg-color: #48CFAD; --flatify__button-bg-color__focus: #37BC9B; --flatify__button-text-color: #fff; --flatify__button-text-color__focus: #F5F7FA; } </style> </head> <body> <div class="flex-column-center"> <button class="my-button-1">Click Here</button> <button class="my-button-2">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="my-button-1">Click Here</button> <button class="my-button-2">Click Here</button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".my-button-1 {\n    --flatify__button-bg-color: linear-gradient(to right, #4a00e0, #8e2de2);\n    --flatify__button-bg-color__focus: linear-gradient(to right, #4a00e0, #8e2de2);\n    --flatify__button-text-color: white;\n    --flatify__button-text-color__focus: white;\n}\n.my-button-2 {\n    --flatify__button-bg-color: #48cfad;\n    --flatify__button-bg-color__focus: #37bc9b;\n    --flatify__button-text-color: #fff;\n    --flatify__button-text-color__focus: #f5f7fa;\n}\n")))}d.isMDXComponent=!0}}]);