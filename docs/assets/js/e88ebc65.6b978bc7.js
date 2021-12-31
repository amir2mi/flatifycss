"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5168],{3905:function(e,a,r){r.d(a,{Zo:function(){return m},kt:function(){return u}});var t=r(7294);function l(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){l(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,l=function(e,a){if(null==e)return{};var r,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(l[r]=e[r]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var n=t.createContext({}),o=function(e){var a=t.useContext(n),r=a;return e&&(r="function"==typeof e?e(a):c(c({},a),e)),r},m=function(e){var a=o(e.components);return t.createElement(n.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,l=e.mdxType,i=e.originalType,n=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=o(r),u=l,h=d["".concat(n,".").concat(u)]||d[u]||b[u]||i;return r?t.createElement(h,c(c({ref:a},m),{},{components:r})):t.createElement(h,c({ref:a},m))}));function u(e,a){var r=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=r.length,c=new Array(i);c[0]=d;var s={};for(var n in a)hasOwnProperty.call(a,n)&&(s[n]=a[n]);s.originalType=e,s.mdxType="string"==typeof e?e:l,c[1]=s;for(var o=2;o<i;o++)c[o]=r[o];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2695:function(e,a,r){r.d(a,{Z:function(){return s}});var t=r(7462),l=r(3366),i=r(7294),c=["isBad","isGood","children","disableFullscreen","limitWidth"];function s(e){var a=e.isBad,r=e.isGood,s=e.children,n=e.disableFullscreen,o=e.limitWidth,m=(0,l.Z)(e,c),b=(0,i.useState)(!1),d=b[0],u=b[1];return i.createElement("div",{className:"preview-box-wrapper",style:o?{width:o,display:"table",margin:"0 auto"}:{}},!n&&i.createElement("button",{"aria-label":d?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(e){var a=e.target.closest(".preview-box-wrapper");d?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():a.requestFullscreen?a.requestFullscreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen(),u(!d)}},d?i.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},i.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):i.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},i.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),a&&i.createElement("div",{className:"is-bad-example style-red"},i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"2 2 12 12"},i.createElement("path",{d:"M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"}))),r&&i.createElement("div",{className:"is-good-example style-green"},i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 18 18"},i.createElement("path",{d:"M5.056 15.04a1.5 1.5 0 002.217-.119l10.17-12.476A1.5 1.5 0 0015.118.55L6.007 11.758l-3.453-3.41a1.5 1.5 0 10-2.109 2.133l4.611 4.56"}))),i.createElement("iframe",(0,t.Z)({width:"100%",className:"docus-preview-box"+(d?" is-fullscreen":""),srcDoc:s},m)))}},7674:function(e,a,r){r.r(a),r.d(a,{frontMatter:function(){return n},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return b},default:function(){return u}});var t=r(7462),l=r(3366),i=(r(7294),r(3905)),c=r(2695),s=["components"],n={title:"Breadcrumb"},o=void 0,m={unversionedId:"components/breadcrumb",id:"components/breadcrumb",isDocsHomePage:!1,title:"Breadcrumb",description:"Breadcrumbs are a necessary part of any website they determine where users are so they can navigate.",source:"@site/docs/components/breadcrumb.mdx",sourceDirName:"components",slug:"/components/breadcrumb",permalink:"/flatifycss/docs/components/breadcrumb",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/components/breadcrumb.mdx",tags:[],version:"current",frontMatter:{title:"Breadcrumb"},sidebar:"tutorialSidebar",previous:{title:"Badges",permalink:"/flatifycss/docs/components/badge"},next:{title:"Cards",permalink:"/flatifycss/docs/components/card"}},b=[{value:"Scrollable overflow",id:"scrollable-overflow",children:[],level:2},{value:"Sizes",id:"sizes",children:[],level:2},{value:"Colors",id:"colors",children:[],level:2},{value:"Customization",id:"customization",children:[],level:2}],d={toc:b};function u(e){var a=e.components,r=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Breadcrumbs are a necessary part of any website they determine where users are so they can navigate.",(0,i.kt)("br",{parentName:"p"}),"\n","It is easy to create one just add ",(0,i.kt)("inlineCode",{parentName:"p"},".breadcrumb")," class and create children with ",(0,i.kt)("inlineCode",{parentName:"p"},".breadcrumb-item"),", here is an example:"),(0,i.kt)(c.Z,{height:"110px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Breadcrumb</title> </head> <body class="flex-center"> <nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb"> <ol class="breadcrumb"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item"><a href="#">Tutorials</a></li> <li class="breadcrumb-item"><a href="#">Videos</a></li> <li class="breadcrumb-item active" aria-current="location">How to create videos</li> </ol> </nav> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<nav class="breadcrumb-wrapper" aria-label="breadcrumb">\n    <ol class="breadcrumb">\n        <li class="breadcrumb-item"><a href="#">Home</a></li>\n        <li class="breadcrumb-item"><a href="#">Tutorials</a></li>\n        <li class="breadcrumb-item"><a href="#">Videos</a></li>\n        <li class="breadcrumb-item active" aria-current="location">How to create videos</li>\n    </ol>\n</nav>\n')),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Accesibility matters!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Always add ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current"},(0,i.kt)("inlineCode",{parentName:"a"},'aria-current="location"'))," for the last breadcrumb item, it determines it is the current page which helps screen reader users a lot."))),(0,i.kt)("h2",{id:"scrollable-overflow"},"Scrollable overflow"),(0,i.kt)("p",null,"When there are a lot of breadcrumb items which overflow, breadcrumb will be scrollable instead of breaking to new line, although it will be better to set scroll position to the end with JavaScript."),(0,i.kt)(c.Z,{height:"120px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Breadcrumb</title> </head> <body class="flex-column-center"> <nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb"> <ol class="breadcrumb"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item"><a href="#">Tutorials</a></li> <li class="breadcrumb-item"><a href="#">Free</a></li> <li class="breadcrumb-item"><a href="#">Web</a></li> <li class="breadcrumb-item"><a href="#">Front-end</a></li> <li class="breadcrumb-item"><a href="#">Basics</a></li> <li class="breadcrumb-item"><a href="#">Videos</a></li> <li class="breadcrumb-item active" aria-current="location">How to become a web developer in one week and create awesome websites with no pain?</li> </ol> </nav> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("h2",{id:"sizes"},"Sizes"),(0,i.kt)("p",null,"To change the breadcrumb size use ",(0,i.kt)("a",{parentName:"p",href:"/docs/helpers/size-setters"},"size setter classes"),".\nThese classes just set a ",(0,i.kt)("inlineCode",{parentName:"p"},"font-size")," property so it is possible to change it yourself by writing custom CSS."),(0,i.kt)(c.Z,{height:"275px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Breadcrumb</title> </head> <body class="flex-column-center"> <nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb"> <ol class="breadcrumb size-xs"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item"><a href="#">Tutorials</a></li> <li class="breadcrumb-item"><a href="#">Videos</a></li> <li class="breadcrumb-item active" aria-current="location">How to create videos</li> </ol> </nav> <nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb"> <ol class="breadcrumb size-md"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item"><a href="#">Tutorials</a></li> <li class="breadcrumb-item"><a href="#">Videos</a></li> <li class="breadcrumb-item active" aria-current="location">How to create videos</li> </ol> </nav> <nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb"> <ol class="breadcrumb size-2x"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item"><a href="#">Tutorials</a></li> <li class="breadcrumb-item"><a href="#">Videos</a></li> <li class="breadcrumb-item active" aria-current="location">How to create videos</li> </ol> </nav> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb">\n    <ol class="breadcrumb size-xs">\n        ...\n    </ol>\n</nav>\n\n<nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb">\n    <ol class="breadcrumb size-md">\n        ...\n    </ol>\n</nav>\n\n<nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb">\n    <ol class="breadcrumb size-2x">\n        ...\n    </ol>\n</nav>\n')),(0,i.kt)("h2",{id:"colors"},"Colors"),(0,i.kt)("p",null,"There are helper classes for styling elements like breadcrumb, first read about ",(0,i.kt)("a",{parentName:"p",href:"/docs/helpers/color-setters"},"color setter classes")," for having button with diffrent background and text color."),(0,i.kt)(c.Z,{height:"290px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Breadcrumb</title> </head> <body class="flex-column-center"> <nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb"> <ol class="breadcrumb style-dark"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item"><a href="#">Tutorials</a></li> <li class="breadcrumb-item"><a href="#">Videos</a></li> <li class="breadcrumb-item active" aria-current="location">How to create videos</li> </ol> </nav> <nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb"> <ol class="breadcrumb style-blue"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item"><a href="#">Tutorials</a></li> <li class="breadcrumb-item"><a href="#">Videos</a></li> <li class="breadcrumb-item active" aria-current="location">How to create videos</li> </ol> </nav> <nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb"> <ol class="breadcrumb style-orange"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item"><a href="#">Tutorials</a></li> <li class="breadcrumb-item"><a href="#">Videos</a></li> <li class="breadcrumb-item active" aria-current="location">How to create videos</li> </ol> </nav> <nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb"> <ol class="breadcrumb style-yellow"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item"><a href="#">Tutorials</a></li> <li class="breadcrumb-item"><a href="#">Videos</a></li> <li class="breadcrumb-item active" aria-current="location">How to create videos</li> </ol> </nav> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb">\n    <ol class="breadcrumb style-dark">\n        ...\n    </ol>\n</nav>\n\n<nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb">\n    <ol class="breadcrumb style-blue">\n        ...\n    </ol>\n</nav>\n\n<nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb">\n    <ol class="breadcrumb style-orange">\n        ...\n    </ol>\n</nav>\n\n<nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb">\n    <ol class="breadcrumb style-yellow">\n        ...\n    </ol>\n</nav>\n')),(0,i.kt)("h2",{id:"customization"},"Customization"),(0,i.kt)("p",null,"Each breadcrumb has these CSS variables for customization, they can be set as ",(0,i.kt)("inlineCode",{parentName:"p"},":root")," for all breadcrumbs default style or just for a specific selector."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__breadcrumb-txt-color"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__breadcrumb-bg-color"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__breadcrumb-border-color")),(0,i.kt)(c.Z,{height:"110px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Breadcrumb</title> <style> .my-custom-breadcrumb{ --flatify__breadcrumb-txt-color: #F5F7FA; --flatify__breadcrumb-bg-color: #AA8E69; --flatify__breadcrumb-border-color: #BAA286; --flatify__link-color: #FFCE54; --flatify__link-color__hover: #F6BB42; --flatify__link-color__focus: #A0D468; } </style> </head> <body class="flex-center"> <nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb"> <ol class="breadcrumb my-custom-breadcrumb"> <li class="breadcrumb-item"><a href="#">Home</a></li> <li class="breadcrumb-item"><a href="#">Tutorials</a></li> <li class="breadcrumb-item"><a href="#">Videos</a></li> <li class="breadcrumb-item active" aria-current="location">How to create videos</li> </ol> </nav> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<nav class="breadcrumb-wrapper" aria-label="It is a breadcrumb">\n    <ol class="breadcrumb my-custom-breadcrumb">\n        <li class="breadcrumb-item"><a href="#">Home</a></li>\n        <li class="breadcrumb-item"><a href="#">Tutorials</a></li>\n        <li class="breadcrumb-item"><a href="#">Videos</a></li>\n        <li class="breadcrumb-item active" aria-current="location">How to create videos</li>\n    </ol>\n</nav>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},".my-custom-breadcrumb {\n    /* custom breadcrumb colors */\n    --flatify__breadcrumb-txt-color: #f5f7fa;\n    --flatify__breadcrumb-bg-color: #aa8e69;\n    --flatify__breadcrumb-border-color: #baa286;\n\n    /* custom breadcrumb links */\n    --flatify__link-color: #ffce54;\n    --flatify__link-color__hover: #f6bb42;\n    --flatify__link-color__focus: #a0d468;\n}\n")))}u.isMDXComponent=!0}}]);