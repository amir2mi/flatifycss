"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6021],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return h}});var n=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(i),h=l,v=m["".concat(o,".").concat(h)]||m[h]||c[h]||a;return i?n.createElement(v,s(s({ref:t},p),{},{components:i})):n.createElement(v,s({ref:t},p))}));function h(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,s=new Array(a);s[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:l,s[1]=r;for(var d=2;d<a;d++)s[d]=i[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2695:function(e,t,i){i.d(t,{Z:function(){return r}});var n=i(7462),l=i(3366),a=i(7294),s=["isBad","isGood","children","disableFullscreen","limitWidth"];function r(e){var t=e.isBad,i=e.isGood,r=e.children,o=e.disableFullscreen,d=e.limitWidth,p=(0,l.Z)(e,s),c=(0,a.useState)(!1),m=c[0],h=c[1];return a.createElement("div",{className:"preview-box-wrapper",style:d?{width:d,display:"table",margin:"0 auto"}:{}},!o&&a.createElement("button",{"aria-label":m?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(e){var t=e.target.closest(".preview-box-wrapper");m?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),h(!m)}},m?a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},a.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),t&&a.createElement("div",{className:"is-bad-example style-red"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"2 2 12 12"},a.createElement("path",{d:"M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"}))),i&&a.createElement("div",{className:"is-good-example style-green"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 18 18"},a.createElement("path",{d:"M5.056 15.04a1.5 1.5 0 002.217-.119l10.17-12.476A1.5 1.5 0 0015.118.55L6.007 11.758l-3.453-3.41a1.5 1.5 0 10-2.109 2.133l4.611 4.56"}))),a.createElement("iframe",(0,n.Z)({width:"100%",className:"docus-preview-box"+(m?" is-fullscreen":""),srcDoc:r},p)))}},3214:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var n=i(7462),l=i(3366),a=(i(7294),i(3905)),s=i(2695),r=["components"],o={title:"Alignment & positioning",sidebar_position:3},d=void 0,p={unversionedId:"helpers/alignment",id:"helpers/alignment",isDocsHomePage:!1,title:"Alignment & positioning",description:"Alignment in CSS is a dilemma for beginners, there are tons of ways to achieve it",source:"@site/docs/helpers/alignment.mdx",sourceDirName:"helpers",slug:"/helpers/alignment",permalink:"/docs/helpers/alignment",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/helpers/alignment.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Alignment & positioning",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overlay layer",permalink:"/docs/helpers/overlay-layer"},next:{title:"Opacity setters",permalink:"/docs/helpers/opacity-setters"}},c=[{value:"Flex",id:"flex",children:[{value:"Children in a row",id:"children-in-a-row",children:[],level:3},{value:"Children in a column",id:"children-in-a-column",children:[],level:3}],level:2},{value:"Margin",id:"margin",children:[],level:2},{value:"Absolute position",id:"absolute-position",children:[],level:2},{value:"Sticky &amp; Fixed",id:"sticky--fixed",children:[],level:2}],m={toc:c};function h(e){var t=e.components,i=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alignment in CSS is a dilemma for beginners, there are tons of ways to achieve it\nbut helpers classes are life savers."),(0,a.kt)("h2",{id:"flex"},"Flex"),(0,a.kt)("p",null,"Flexbox is a great feature in CSS you can have what you need without any effort though,\nwith vendor prefixes it can be messy if you repeat the main logic all the time,\nit is better to use the helper classes.\nThere are two types of helper classes for vertical and horizontal centering with Flexbox."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Pay attention")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For alignment with flexbox, ",(0,a.kt)("strong",{parentName:"p"},"the helper class should be applied to the wrapper element")," so the child itself\nwithout flex parent do nothing."))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".inline-flex")," Treats as inline flex."),(0,a.kt)("h3",{id:"children-in-a-row"},"Children in a row"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".flex-center")," ","[row]"," Alignment for both X and Y axes.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".flex-center-x")," ","[row]"," Alignment for X axis.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".flex-center-y")," ","[row]"," Alignment for Y axis."),(0,a.kt)(s.Z,{height:"265px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Flex alignment classes</title> <style> .box{ width: 200px; height: 200px; margin: 0.5em; border: 0.25em solid; border-radius: 1em; } .box-sm{ width: 25px; height: 25px; margin: 0.5em; border: 0.18em solid; border-radius: 0.5em; } @media screen and (max-width: 650px){ .wrapper { flex-direction: column !important; } } </style> </head> <div class="wrapper flex-center"> <div class="box flex-center style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> <div class="box flex-center-x style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> <div class="box flex-center-y style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> </div>\n</html>\n',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="flex-center style-light">\n  <div class="style-red"></div>\n  <div class="style-green"></div>\n  <div class="style-blue"></div>\n</div>\n\n<div class="flex-center-x style-light">\n  <div class="style-red"></div>\n  <div class="style-green"></div>\n  <div class="style-blue"></div>\n</div>\n\n<div class="flex-center-y style-light">\n  <div class="style-red"></div>\n  <div class="style-green"></div>\n  <div class="style-blue"></div>\n</div>\n')),(0,a.kt)("h3",{id:"children-in-a-column"},"Children in a column"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".flex-column-center")," ","[column]"," Alignment for both X and Y axes.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".flex-column-center-x")," ","[column]"," Alignment for X axis.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".flex-column-center-y")," ","[column]"," Alignment for Y axis."),(0,a.kt)(s.Z,{height:"265px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Flex alignment classes</title> <style> .box{ width: 200px; height: 200px; margin: 0.5em; border: 0.25em solid; border-radius: 1em; } .box-sm{ width: 25px; height: 25px; margin: 0.5em; border: 0.18em solid; border-radius: 0.5em; } @media screen and (max-width: 650px){ .wrapper { flex-direction: column !important; } } </style> </head> <div class="wrapper flex-center"> <div class="box flex-column-center style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> <div class="box flex-column-center-x style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> <div class="box flex-column-center-y style-light"> <div class="box-sm style-red"></div> <div class="box-sm style-green"></div> <div class="box-sm style-blue"></div> </div> </div>\n</html>',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="flex-column-center style-light">\n  <div class="style-red"></div>\n  <div class="style-green"></div>\n  <div class="style-blue"></div>\n</div>\n\n<div class="flex-column-center-x style-light">\n  <div class="style-red"></div>\n  <div class="style-green"></div>\n  <div class="style-blue"></div>\n</div>\n\n<div class="flex-column-center-y style-light">\n  <div class="style-red"></div>\n  <div class="style-green"></div>\n  <div class="style-blue"></div>\n</div>\n')),(0,a.kt)("h2",{id:"margin"},"Margin"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".margin-auto")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".margin-ya")," Margin top & bottom is auto.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".margin-ta")," Margin top auto.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".margin-ba")," Margin bottom auto."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".margin-xa")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".push-center")," Margin left & right is auto.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".margin-la")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".push-right")," Margin lefy is auto.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".margin-ra")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".push-left")," Margin right is auto."),(0,a.kt)("p",null,"With margin you can center an element one horizontal line."),(0,a.kt)(s.Z,{height:"265px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Margin alignment classes</title> <style> .box{ width: 200px; height: 200px; padding: 10px; margin: 0.5em; border: 0.25em solid; border-radius: 1em; } .box-sm{ width: 25px; height: 25px; border: 0.18em solid; border-radius: 0.5em; } @media screen and (max-width: 650px){ .wrapper { flex-direction: column !important; } } </style> </head> <div class="wrapper flex-center"> <div class="box style-light"> <div class="box-sm push-left style-red"></div> </div> <div class="box style-light"> <div class="box-sm push-center style-green"></div> </div> <div class="box style-light"> <div class="box-sm push-right style-blue"></div> </div> </div>\n</html>',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="style-light">\n  <div class="push-left style-red"></div>\n</div>\n\n<div class="style-light">\n  <div class="push-center style-green"></div>\n</div>\n\n<div class="style-light">\n  <div class="push-right style-blue"></div>\n</div>\n')),(0,a.kt)("h2",{id:"absolute-position"},"Absolute position"),(0,a.kt)("p",null,"Sometime it happens that the element has absolute position and you might try above tricks\nbut they will not work, to center things with absolute position just set both sides\nso in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"left: 50%")," or something like ",(0,a.kt)("strong",{parentName:"p"},"is not a wise choice"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bottom")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"right")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and set ",(0,a.kt)("inlineCode",{parentName:"p"},"margin: auto"),".\nThe list position helper classes are:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".position-relative")," To have relative postion (mostly for wrapper).",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".position-absolute")," To have absolute postion (mostly for children)."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".place-expand")," It sets all sides to 0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".place-expand-y")," It sets ",(0,a.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bottom")," to 0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".place-expand-x")," It sets ",(0,a.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"right")," to 0"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".place-top")," It sets top to 0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".place-bottom")," It sets bottom to 0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".place-left")," It sets left to 0",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".place-right")," It sets right to 0"),(0,a.kt)("p",null,"Let see what is the better way:"),(0,a.kt)(s.Z,{height:"265px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Position alignment classes</title> <style> .box{ width: 200px; height: 200px; padding: 10px; margin: 0.5em; border: 0.25em solid; border-radius: 1em; } .box-sm{ width: 25px; height: 25px; border: 0.18em solid; border-radius: 0.5em; } </style> </head> <div class="flex-center"> <div class="box style-light position-relative"> <div class="box-sm position-absolute place-top place-left style-blue"></div> <div class="box-sm position-absolute place-top place-expand-x margin-xa style-blue"></div> <div class="box-sm position-absolute place-top place-right style-blue"></div> <br> <div class="box-sm position-absolute place-expand-y margin-ya place-left style-red"></div> <div class="box-sm position-absolute place-expand margin-auto style-red"></div> <div class="box-sm position-absolute place-expand-y margin-ya place-right style-red"></div> <br> <div class="box-sm position-absolute place-bottom place-left style-green"></div> <div class="box-sm position-absolute place-bottom place-expand-x margin-xa style-green"></div> <div class="box-sm position-absolute place-bottom place-right style-green"></div> </div> </div>\n</html>',mdxType:"PreviewBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="style-light position-relative">\n  <div class="position-absolute place-top place-left style-blue"></div>\n  <div class="position-absolute place-top place-expand-x margin-xa style-blue"></div>\n  <div class="position-absolute place-top place-right style-blue"></div>\n\n  <div class="position-absolute place-expand-y place-left margin-ya style-red"></div>\n  <div class="position-absolute place-expand margin-auto style-red"></div>\n  <div class="position-absolute place-expand-y place-right margin-ya style-red"></div>\n\n  <div class="position-absolute place-bottom place-left style-green"></div>\n  <div class="position-absolute place-bottom place-expand-x margin-xa style-green"></div>\n  <div class="position-absolute place-bottom place-right style-green"></div>\n</div>\n')),(0,a.kt)("h2",{id:"sticky--fixed"},"Sticky & Fixed"),(0,a.kt)("p",null,"Sticky and fixed positions have their helper classes. The main use case for these classes is related to nav bar component."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".sticky-top"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".sticky-bottom"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".sticky-left"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".sticky-right")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".fixed-top"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".fixed-bottom"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".fixed-left"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},".fixed-right")))}h.isMDXComponent=!0}}]);