"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[997],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?s.createElement(g,o(o({ref:t},p),{},{components:n})):s.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2695:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(7462),a=n(3366),r=n(7294),o=["children"];function i(e){var t=e.children,n=(0,a.Z)(e,o);return r.createElement("iframe",(0,s.Z)({width:"100%",className:"docus-preview-box",srcDoc:t},n))}},2491:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var s=n(7462),a=n(3366),r=(n(7294),n(3905)),o=n(2695),i=["components"],l={title:"Badges",sidebar_position:2},c=void 0,p={unversionedId:"components/badge",id:"components/badge",isDocsHomePage:!1,title:"Badges",description:"Use badges to show numbers, texts, or just as an icon to get user attention, badges get their size from parent font size either you can set a specific size.",source:"@site/docs/components/badge.mdx",sourceDirName:"components",slug:"/components/badge",permalink:"/flatifycss/docs/components/badge",editUrl:"https://github.com/amir2mi/FlatifyCSS/tree/master/website/docs/components/badge.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Badges",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/flatifycss/docs/components/alert"},next:{title:"Buttons",permalink:"/flatifycss/docs/components/buttons"}},d=[],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use badges to show numbers, texts, or just as an icon to get user attention, badges get their size from parent font size either you can set a specific size."),(0,r.kt)(o.Z,{height:"200px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Badges</title> </head> <body> <p class="size-sm"> You have got new messages! <span class="badge style-green edge-circle pulse">+1</span> </p> <p class="size-md"> You have got new messages! <span class="badge style-orange edge-round-md pulse">+50</span> </p> <p class="size-lg"> You have got new messages! <span class="badge style-red edge-round-sm">+999</span> </p> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},".pulse")," is a helper class that gives animation to the element ",(0,r.kt)("inlineCode",{parentName:"p"},"::after")," so it will get users' attention where is it necessary."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'{3,8,13} title="index.html"',"{3,8,13}":!0,title:'"index.html"'},'<p class="size-sm">\n    You have got new messages!\n    <span class="badge style-green edge-circle pulse">+1</span>\n</p>\n\n<p class="size-md">\n    You have got new messages!\n    <span class="badge style-orange edge-round-md pulse">+50</span>\n</p>\n\n<p class="size-lg">\n    You have got new messages!\n    <span class="badge style-red edge-round-sm">+999</span>\n</p>\n')),(0,r.kt)("p",null,"Here is an example of badge over button:"),(0,r.kt)(o.Z,{height:"110px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Badges</title> <style> .my-button{ position: relative; min-width: 120px; margin: 10px; } .my-badge{ position: absolute; top: -2px; right: -2px } </style> </head> <body> <div class="flex-center"> <button class="my-button button bordered"> Help us! <span class="my-badge badge style-red edge-circle pulse"></span> </button> <button class="my-button button bordered"> New messages! <span class="my-badge badge style-green edge-round-sm pulse"></span> </button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="my-button button bordered">\n    Help us!\n    <span class="my-badge badge style-red edge-circle pulse"></span>\n</button>\n\n<button class="my-button button bordered">\n    New messages!\n    <span class="my-badge badge style-green edge-round-sm pulse"></span>\n</button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".my-button {\n    position: relative;\n    min-width: 120px;\n    margin: 10px;\n}\n\n.my-badge {\n    position: absolute;\n    top: -2px;\n    right: -2px;\n}\n")))}u.isMDXComponent=!0}}]);