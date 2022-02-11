"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2785],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var l=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,o=function(t,e){if(null==t)return{};var n,l,o={},s=Object.keys(t);for(l=0;l<s.length;l++)n=s[l],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(l=0;l<s.length;l++)n=s[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var r=l.createContext({}),u=function(t){var e=l.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return l.createElement(r.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,o=t.mdxType,s=t.originalType,r=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=u(n),p=o,h=d["".concat(r,".").concat(p)]||d[p]||b[p]||s;return n?l.createElement(h,i(i({ref:e},c),{},{components:n})):l.createElement(h,i({ref:e},c))}));function p(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var r in e)hasOwnProperty.call(e,r)&&(a[r]=e[r]);a.originalType=t,a.mdxType="string"==typeof t?t:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2695:function(t,e,n){n.d(e,{Z:function(){return a}});var l=n(7462),o=n(3366),s=n(7294),i=["isBad","isGood","children","disableFullscreen","limitWidth"];function a(t){var e=t.isBad,n=t.isGood,a=t.children,r=t.disableFullscreen,u=t.limitWidth,c=(0,o.Z)(t,i),b=(0,s.useState)(!1),d=b[0],p=b[1];return s.createElement("div",{className:"preview-box-wrapper",style:u?{width:u,display:"table",margin:"0 auto"}:{}},!r&&s.createElement("button",{"aria-label":d?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(t){var e=t.target.closest(".preview-box-wrapper");d?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),p(!d)}},d?s.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},s.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):s.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},s.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),e&&s.createElement("div",{className:"is-bad-example style-red"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"2 2 12 12"},s.createElement("path",{d:"M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"}))),n&&s.createElement("div",{className:"is-good-example style-green"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 18 18"},s.createElement("path",{d:"M5.056 15.04a1.5 1.5 0 002.217-.119l10.17-12.476A1.5 1.5 0 0015.118.55L6.007 11.758l-3.453-3.41a1.5 1.5 0 10-2.109 2.133l4.611 4.56"}))),s.createElement("iframe",(0,l.Z)({width:"100%",className:"docus-preview-box"+(d?" is-fullscreen":""),srcDoc:a},c)))}},4387:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return b},default:function(){return p}});var l=n(7462),o=n(3366),s=(n(7294),n(3905)),i=n(2695),a=["components"],r={title:"Buttons",sidebar_position:1},u=void 0,c={unversionedId:"components/buttons/button",id:"components/buttons/button",isDocsHomePage:!1,title:"Buttons",description:"Buttons play a big role in any user interface as they give users the ability to interact with the website, so we should use them carefully.",source:"@site/docs/components/buttons/button.mdx",sourceDirName:"components/buttons",slug:"/components/buttons/button",permalink:"/docs/components/buttons/button",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/components/buttons/button.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Buttons",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Toggle switch",permalink:"/docs/forms/toggle"},next:{title:"Two-layer button",permalink:"/docs/components/buttons/two-layer-button"}},b=[{value:"A simple button",id:"a-simple-button",children:[],level:2},{value:"Buttons priority",id:"buttons-priority",children:[],level:2},{value:"Sizes",id:"sizes",children:[],level:2},{value:"Colors",id:"colors",children:[],level:2},{value:"Roundness",id:"roundness",children:[],level:2},{value:"Bordered",id:"bordered",children:[],level:2},{value:"Outline",id:"outline",children:[],level:2},{value:"States",id:"states",children:[],level:2},{value:"Customization",id:"customization",children:[],level:2}],d={toc:b};function p(t){var e=t.components,n=(0,o.Z)(t,a);return(0,s.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Buttons play a big role in any user interface as they give users the ability to interact with the website, so we should use them carefully.",(0,s.kt)("br",{parentName:"p"}),"\n","It is necessary to know the good and bad practices for a perfect button.\nFirst, take a look at ",(0,s.kt)("a",{parentName:"p",href:"https://www.buttoncheatsheet.com/"},"button cheat sheet"),"."),(0,s.kt)("h2",{id:"a-simple-button"},"A simple button"),(0,s.kt)("p",null,"A button with FlatifyCSS style can be defined in several ways as mentioned in the button cheatsheet, for any type of element, you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},".button")," class, the element will have button style with the active/focus-visible states if it supports."),(0,s.kt)(i.Z,{height:"110px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Buttons</title> </head> <body> <div class="flex-center"> <button class="button"> Click Here </button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="button">Click Here</button>\n')),(0,s.kt)("h2",{id:"buttons-priority"},"Buttons priority"),(0,s.kt)("p",null,"A great design system must give different priorities for buttons, each button should have its priority based on what it does.\nGenerally, there are primary, secondary, and tertiary buttons (link buttons ",(0,s.kt)("inlineCode",{parentName:"p"},".link-button"),"), you can see them in the example below:"),(0,s.kt)(i.Z,{height:"100px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Buttons</title> </head> <body> <div class="flex-center"> <button class="button style-accent">Primary</button> <button class="button style-light">Secondary</button> <button class="link-button">Link button</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="button style-accent">Primary</button>\n<button class="button style-light">Secondary</button>\n<button class="link-button">Link button</button>\n')),(0,s.kt)("h2",{id:"sizes"},"Sizes"),(0,s.kt)("p",null,"To change the button size use ",(0,s.kt)("a",{parentName:"p",href:"/docs/helpers/size-setters"},"size setter classes"),".\nThese classes just set a ",(0,s.kt)("inlineCode",{parentName:"p"},"font-size")," property so it is possible to change it yourself by writing custom CSS."),(0,s.kt)(i.Z,{height:"350px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Buttons</title> <style> @media screen and (max-width: 650px){ .flex-center button { width: 45% !important; } } </style> </head> <body> <div class="flex-column-center"> <button class="button size-xs">Click Here</button> <button class="button size-md">Click Here</button> <button class="button size-2x">Click Here</button> <button class="button size-4x">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="button size-xs">Click Here</button>\n<button class="button size-md">Click Here</button>\n<button class="button size-2x">Click Here</button>\n<button class="button size-4x">Click Here</button>\n')),(0,s.kt)("h2",{id:"colors"},"Colors"),(0,s.kt)("p",null,"There are helper classes for styling elements like button, first read about ",(0,s.kt)("a",{parentName:"p",href:"/docs/helpers/color-setters"},"color setter classes")," for having button with diffrent background and text color."),(0,s.kt)(i.Z,{height:"330px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Buttons</title> <style> @media screen and (max-width: 650px){ .flex-center button { width: 45% !important; } } </style> </head> <body> <div class="flex-center" style="flex-wrap: wrap;"> <button style="width: 200px; margin: 10px" class="button style-accent-light">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-purple-light">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-yellow-light">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-accent">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-purple">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-yellow">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-warning-light">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-danger-light">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-dark-light">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-warning">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-danger">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-dark">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="button style-accent">Click Here</button>\n<button class="button style-purple">Click Here</button>\n<button class="button style-yellow">Click Here</button>\n\n<button class="button style-accent-light">Click Here</button>\n<button class="button style-purple-light">Click Here</button>\n<button class="button style-yellow-light">Click Here</button>\n\n<button class="button style-warning">Click Here</button>\n<button class="button style-danger">Click Here</button>\n<button class="button style-dark">Click Here</button>\n\n<button class="button style-warning-light">Click Here</button>\n<button class="button style-danger-light">Click Here</button>\n<button class="button style-dark-light">Click Here</button>\n')),(0,s.kt)("h2",{id:"roundness"},"Roundness"),(0,s.kt)("p",null,"To change roundness there are ",(0,s.kt)("a",{parentName:"p",href:"/docs/helpers/roundness-setters"},"roundness helper classes"),"."),(0,s.kt)(i.Z,{height:"200px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Buttons</title> <style> @media screen and (max-width: 650px){ .flex-center button { width: 45% !important; } } </style> </head> <body> <div class="flex-center" style="flex-wrap: wrap;"> <button style="width: 200px; margin: 10px" class="button style-accent edge-sharp">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-purple edge-round-sm">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-yellow edge-circle">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="button style-accent edge-sharp">Click Here</button>\n<button class="button style-purple edge-round-sm">Click Here</button>\n<button class="button style-yellow edge-circle">Click Here</button>\n')),(0,s.kt)("h2",{id:"bordered"},"Bordered"),(0,s.kt)("p",null,"By default, FlatifyCSS buttons do not have borders however if you add bordered class to the button it will have borders."),(0,s.kt)(i.Z,{height:"330px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Buttons</title> <style> @media screen and (max-width: 650px){ .flex-center button { width: 45% !important; } } </style> </head> <body> <div class="flex-center" style="flex-wrap: wrap"> <button style="width: 200px; margin: 10px" class="button style-accent bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-purple bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-yellow bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-accent-light bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-purple-light bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-yellow-light bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-warning bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-danger bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-dark bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-warning-light bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-danger-light bordered">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-dark-light bordered">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="button style-accent bordered">Click Here</button>\n<button class="button style-purple bordered">Click Here</button>\n<button class="button style-yellow bordered">Click Here</button>\n\n<button class="button style-accent-light bordered">Click Here</button>\n<button class="button style-purple-light bordered">Click Here</button>\n<button class="button style-yellow-light bordered">Click Here</button>\n\n<button class="button style-warning bordered">Click Here</button>\n<button class="button style-danger bordered">Click Here</button>\n<button class="button style-dark bordered">Click Here</button>\n\n<button class="button style-warning-light bordered">Click Here</button>\n<button class="button style-danger-light bordered">Click Here</button>\n<button class="button style-dark-light bordered">Click Here</button>\n')),(0,s.kt)("h2",{id:"outline"},"Outline"),(0,s.kt)("p",null,"Kind of a ninja, which gets less attention but is still influential."),(0,s.kt)(i.Z,{height:"330px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Buttons</title> <style> @media screen and (max-width: 650px){ .flex-center button { width: 45% !important; } } </style> </head> <body> <div class="flex-center" style="flex-wrap: wrap"> <button style="width: 200px; margin: 10px" class="button style-accent outline">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-purple outline">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-yellow outline">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-accent-light outline">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-purple-light outline">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-yellow-light outline">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-warning outline">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-danger outline">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-dark outline">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-warning-light outline">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-danger-light outline">Click Here</button> <button style="width: 200px; margin: 10px" class="button style-dark-light outline">Click Here</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="button style-accent outline">Click Here</button>\n<button class="button style-purple outline">Click Here</button>\n<button class="button style-yellow outline">Click Here</button>\n\n<button class="button style-accent-light outline">Click Here</button>\n<button class="button style-purple-light outline">Click Here</button>\n<button class="button style-yellow-light outline">Click Here</button>\n\n<button class="button style-warning outline">Click Here</button>\n<button class="button style-danger outline">Click Here</button>\n<button class="button style-dark outline">Click Here</button>\n\n<button class="button style-warning-light outline">Click Here</button>\n<button class="button style-danger-light outline">Click Here</button>\n<button class="button style-dark-light outline">Click Here</button>\n')),(0,s.kt)("h2",{id:"states"},"States"),(0,s.kt)("p",null,"To make a button disabled you can add the ",(0,s.kt)("inlineCode",{parentName:"p"},".disabled")," class or HTML ",(0,s.kt)("inlineCode",{parentName:"p"},"disabled")," attribute, also to keep the button in pressed style use the ",(0,s.kt)("inlineCode",{parentName:"p"},".active")," class. There is a class called ",(0,s.kt)("inlineCode",{parentName:"p"},".static")," specially for buttons when you need to have the style of FlatifyCSS buttons but not styles for hover/focus."),(0,s.kt)(i.Z,{height:"180px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Buttons</title> <style> @media screen and (max-width: 650px){ .flex-center button { width: 45% !important; } } </style> </head> <body> <div class="flex-center" style="flex-wrap: wrap"> <button disabled style="width: 220px; margin: 10px" class="button style-accent disabled">Disabled</button> <button style="width: 220px; margin: 10px" class="button style-accent active">Active</button> <button style="width: 220px; margin: 10px" class="button style-accent static">Static</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="button style-accent disabled">Disabled</button>\n<button disabled class="button style-accent">Disabled</button>\n<button class="button style-accent active">Active</button>\n<button class="button style-accent static">Static</button>\n')),(0,s.kt)("h2",{id:"customization"},"Customization"),(0,s.kt)("p",null,"Each button has these CSS variables for customization, they can be set as ",(0,s.kt)("inlineCode",{parentName:"p"},":root")," for all buttons default style or just for a specific selector."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"--flatify__button-txt-color"),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"--flatify__button-bg-color"),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"--flatify__button-border-color")),(0,s.kt)(i.Z,{height:"330px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Buttons</title> <style> .my-button-1{ margin: 0.5em !important; --flatify__button-bg-color: linear-gradient(15deg, #03001e, #7303c0, #ec38bc, #fdeff9); --flatify__button-txt-color: white; --flatify__button-border-color: linear-gradient(25deg, #03001e, #7303c0, #ec38bc, #fdeff9); } .my-button-2{ margin: 0.5em !important; --flatify__button-bg-color: #48CFAD; --flatify__button-txt-color: #fff; --flatify__button-border-color: #37BC9B; } .my-button-3{ margin: 0.5em !important; --flatify__button-bg-color: #EC87C0; --flatify__button-txt-color: #d770ad; --flatify__button-border-color: #D770AD; } </style> </head> <body> <div class="flex-column-center"> <button class="my-button-1 button size-lg">Custom button</button> <button class="my-button-2 button size-lg">Custom button</button> <button class="my-button-3 button outline size-lg">Custom button</button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<button class="my-button-1 button size-lg">Custom button</button>\n<button class="my-button-2 button size-lg">Custom button</button>\n<button class="my-button-3 button outline size-lg">Custom button</button>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".my-button-1 {\n  --flatify__button-txt-color: white;\n  --flatify__button-bg-color: linear-gradient(15deg, #03001e, #7303c0, #ec38bc, #fdeff9);\n  --flatify__button-border-color: linear-gradient(25deg, #03001e, #7303c0, #ec38bc, #fdeff9);\n}\n\n.my-button-2 {\n  --flatify__button-txt-color: #fff;\n  --flatify__button-bg-color: #48cfad;\n  --flatify__button-border-color: #37bc9b;\n}\n\n.my-button-3 {\n  --flatify__button-txt-color: #d770ad;\n  --flatify__button-bg-color: #ec87c0;\n  --flatify__button-border-color: #d770ad;\n}\n")))}p.isMDXComponent=!0}}]);