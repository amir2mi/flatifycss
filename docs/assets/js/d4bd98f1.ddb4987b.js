"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7931],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var i=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,i,s=function(e,a){if(null==e)return{};var t,i,s={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=i.createContext({}),m=function(e){var a=i.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},c=function(e){var a=m(e.components);return i.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=m(t),d=s,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return t?i.createElement(h,n(n({ref:a},c),{},{components:t})):i.createElement(h,n({ref:a},c))}));function d(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var l=t.length,n=new Array(l);n[0]=p;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r.mdxType="string"==typeof e?e:s,n[1]=r;for(var m=2;m<l;m++)n[m]=t[m];return i.createElement.apply(null,n)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2695:function(e,a,t){t.d(a,{Z:function(){return r}});var i=t(7462),s=t(3366),l=t(7294),n=["isBad","isGood","children","disableFullscreen","limitWidth"];function r(e){var a=e.isBad,t=e.isGood,r=e.children,o=e.disableFullscreen,m=e.limitWidth,c=(0,s.Z)(e,n),u=(0,l.useState)(!1),p=u[0],d=u[1];return l.createElement("div",{className:"preview-box-wrapper",style:m?{width:m,display:"table",margin:"0 auto"}:{}},!o&&l.createElement("button",{"aria-label":p?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(e){var a=e.target.closest(".preview-box-wrapper");p?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():a.requestFullscreen?a.requestFullscreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen(),d(!p)}},p?l.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},l.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):l.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},l.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),a&&l.createElement("div",{className:"is-bad-example style-red"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"2 2 12 12"},l.createElement("path",{d:"M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"}))),t&&l.createElement("div",{className:"is-good-example style-green"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 18 18"},l.createElement("path",{d:"M5.056 15.04a1.5 1.5 0 002.217-.119l10.17-12.476A1.5 1.5 0 0015.118.55L6.007 11.758l-3.453-3.41a1.5 1.5 0 10-2.109 2.133l4.611 4.56"}))),l.createElement("iframe",(0,i.Z)({width:"100%",className:"docus-preview-box"+(p?" is-fullscreen":""),srcDoc:r},c)))}},6151:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=t(7462),s=t(3366),l=(t(7294),t(3905)),n=t(2695),r=["components"],o={title:"Navigation bar"},m=void 0,c={unversionedId:"components/navbar",id:"components/navbar",isDocsHomePage:!1,title:"Navigation bar",description:"The navigation bar contains links, brand logo, and search bar typically. FlatifyCSS use menu component to extend navigation bar features. Navigation bars also support submenu and dropdown components.",source:"@site/docs/components/navbar.mdx",sourceDirName:"components",slug:"/components/navbar",permalink:"/docs/components/navbar",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/components/navbar.mdx",tags:[],version:"current",frontMatter:{title:"Navigation bar"},sidebar:"tutorialSidebar",previous:{title:"Modals",permalink:"/docs/components/modal"},next:{title:"Pagination",permalink:"/docs/components/pagination"}},u=[{value:"A simple navigation bar",id:"a-simple-navigation-bar",children:[],level:2},{value:"Submenu &amp; dropdown",id:"submenu--dropdown",children:[],level:2},{value:"Logo",id:"logo",children:[],level:2},{value:"Fixed &amp; Sticky",id:"fixed--sticky",children:[],level:2},{value:"Scrollable",id:"scrollable",children:[],level:2},{value:"Sizes",id:"sizes",children:[],level:2},{value:"Colors",id:"colors",children:[],level:2},{value:"Customization",id:"customization",children:[],level:2}],p={toc:u};function d(e){var a=e.components,t=(0,s.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The navigation bar contains links, brand logo, and search bar typically. FlatifyCSS use ",(0,l.kt)("a",{parentName:"p",href:"/docs/components/menu"},"menu component")," to extend navigation bar features. Navigation bars also support submenu and dropdown components."),(0,l.kt)("h2",{id:"a-simple-navigation-bar"},"A simple navigation bar"),(0,l.kt)("p",null,"Just add ",(0,l.kt)("inlineCode",{parentName:"p"},".menu-items-wrapper")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".navbar")," classes to an element. Inside this element can be links or other components, In this example you will see ",(0,l.kt)("a",{parentName:"p",href:"/docs/components/search-bar"},"search bar")," as well."),(0,l.kt)(n.Z,{height:"110px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Navigation bar</title> </head> <body> <nav class="menu-items-wrapper navbar"> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> <div class="search-bar push-right"> <input type="search" class="style-light" placeholder="Search something..." /> <button class="search-button" aria-label="Search"></button> </div> </nav> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="index.html"',"{1}":!0,title:'"index.html"'},'<nav class="menu-items-wrapper navbar">\n  <ul class="links">\n    <li class="menu-item active">\n      <a href="#">Home</a>\n    </li>\n    <li class="menu-item">\n      <a href="#">Articles</a>\n    </li>\n    <li class="menu-item">\n      <a href="#">Photos</a>\n    </li>\n    <li class="menu-item">\n      <a href="#">Videos</a>\n    </li>\n    <li class="menu-item">\n      <a href="#">About us</a>\n    </li>\n  </ul>\n  <div class="search-bar push-right">\n    <input type="search" class="style-light" placeholder="Search something..." />\n    <button class="search-button" aria-label="Search"></button>\n  </div>\n</nav>\n')),(0,l.kt)("h2",{id:"submenu--dropdown"},"Submenu & dropdown"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Difference between submenu & dropdown")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Generally, submenus in the navigation bar will be displayed on hover/focus however downtowns are togglable, which means you should click to show and click again to hide them, as mentioned in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/components/dropdown#autoclose"},"dropdowns autoclose feature documentation"),", you can control when dropdowns should be closed."))),(0,l.kt)("p",null,"Here is an example of ",(0,l.kt)("a",{parentName:"p",href:"/docs/components/menu#submenu"},"submenu")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/components/dropdown"},"dropdown"),". Navigation bar submenu will be displayed when you hover/focus its parents."),(0,l.kt)(n.Z,{height:"300px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Navigation bar</title> <script src="https://unpkg.com/@popperjs/core@2"><\/script> <script src="https://raw.githack.com/amir2mi/flatifycss/master/dist/js/flatify-min.js"><\/script> </head> <body> <nav class="menu-items-wrapper navbar"> <ul class="links"> <li class="menu-item"><a href="#">Articles</a></li> <li class="menu-item"><a href="#">Photos</a></li> <li class="menu-item dropdown-wrapper"> <button class="dropdown-toggle arrow-button" id="defaultDropdown" aria-expanded="false"> With dropdown </button> <ul class="dropdown menu-items-wrapper" aria-labelledby="defaultDropdown"> <li class="menu-item"><a href="#">Item 1</a></li> <li class="menu-item"><a href="#">Item 2</a></li> <li class="menu-item"><a href="#">Item 3</a></li> <li class="menu-item"><a href="#">Item 4</a></li> <li class="menu-item"><a href="#">Item 5</a></li> <li><span class="pointer-arrow"></span></li> </ul> </li> <li class="menu-item"> <a class="arrow-button">With submenu</a> <ul class="submenu menu-items-wrapper arrow-top"> <li class="menu-item"><a href="#">Item 1</a></li> <li class="menu-item"><a href="#">Item 2</a></li> <li class="menu-item"><a href="#">Item 3</a></li> <li class="menu-item arrow-button arrow-right"> <a href="#">Item 4</a> <ul class="submenu menu-items-wrapper arrow-left"> <li class="menu-item"><a href="#">Item 1</a></li> <li class="menu-item"><a href="#">Item 2</a></li> <li class="menu-item"><a href="#">Item 3</a></li> <li class="menu-item"><a href="#">Item 4</a></li> </ul> </li> </ul> </li> <li class="menu-item disabled"><a>About Us</a></li> </ul> </nav> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<nav class="menu-items-wrapper navbar">\n  <ul class="links">\n    <li class="menu-item"><a href="#">Articles</a></li>\n    <li class="menu-item"><a href="#">Photos</a></li>\n    <li class="menu-item dropdown-wrapper">\n      <button class="dropdown-toggle arrow-button" id="defaultDropdown" aria-expanded="false">With dropdown</button>\n      <ul class="dropdown menu-items-wrapper" aria-labelledby="defaultDropdown">\n        <li class="menu-item"><a href="#">Item 1</a></li>\n        <li class="menu-item"><a href="#">Item 2</a></li>\n        <li class="menu-item"><a href="#">Item 3</a></li>\n        <li class="menu-item"><a href="#">Item 4</a></li>\n        <li class="menu-item"><a href="#">Item 5</a></li>\n        <li><span class="pointer-arrow"></span></li>\n      </ul>\n    </li>\n    <li class="menu-item">\n      <a href="#" class="arrow-button">With submenu</a>\n      \x3c!-- level 2 --\x3e\n      <ul class="submenu menu-items-wrapper arrow-top">\n        <li class="menu-item"><a href="#">Item 1</a></li>\n        <li class="menu-item"><a href="#">Item 2</a></li>\n        <li class="menu-item"><a href="#">Item 3</a></li>\n        <li class="menu-item arrow-button arrow-right">\n          <a href="#">Item 4</a>\n          \x3c!-- level 3 --\x3e\n          <ul class="submenu menu-items-wrapper arrow-left">\n            <li class="menu-item"><a href="#">Item 1</a></li>\n            <li class="menu-item"><a href="#">Item 2</a></li>\n            <li class="menu-item"><a href="#">Item 3</a></li>\n            <li class="menu-item"><a href="#">Item 4</a></li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li class="menu-item disabled"><a>About Us</a></li>\n  </ul>\n</nav>\n')),(0,l.kt)("h2",{id:"logo"},"Logo"),(0,l.kt)("p",null,"It is possible to have a logo in the navigation bar with the ",(0,l.kt)("inlineCode",{parentName:"p"},".navbar-logo")," class. It takes care of height and fits the image to have the desired result you want."),(0,l.kt)(n.Z,{height:"110px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Navigation bar</title> </head> <body> <nav class="menu-items-wrapper navbar"> <a class="navbar-logo" href="#"> <img src="https://raw.githack.com/amir2mi/flatifycss/master/website/static/img/logo.svg" alt="logo" /> </a> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'{2-4} title="index.html"',"{2-4}":!0,title:'"index.html"'},'<nav class="menu-items-wrapper navbar">\n  <a class="navbar-logo" href="#">\n    <img src="URL" alt="logo" />\n  </a>\n  <ul class="links">\n    ...\n  </ul>\n</nav>\n')),(0,l.kt)("h2",{id:"fixed--sticky"},"Fixed & Sticky"),(0,l.kt)("p",null,"There are classes to set position for navigation bars, they can be either sticky or fixed.",(0,l.kt)("br",{parentName:"p"}),"\n","Fixed classes: ",(0,l.kt)("inlineCode",{parentName:"p"},".fixed-top")," ",(0,l.kt)("inlineCode",{parentName:"p"},".fixed-bottom")," ",(0,l.kt)("inlineCode",{parentName:"p"},".fixed-left")," ",(0,l.kt)("inlineCode",{parentName:"p"},".fixed-right"),(0,l.kt)("br",{parentName:"p"}),"\n","Sticky classes: ",(0,l.kt)("inlineCode",{parentName:"p"},".sticky-top")," ",(0,l.kt)("inlineCode",{parentName:"p"},".sticky-bottom")," ",(0,l.kt)("inlineCode",{parentName:"p"},".sticky-left")," ",(0,l.kt)("inlineCode",{parentName:"p"},".sticky-right")),(0,l.kt)(n.Z,{height:"320px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Navigation bar</title> </head> <body> <nav class="menu-items-wrapper navbar fixed-bottom style-dark"> <a class="navbar-logo" href="#"> <img src="https://raw.githack.com/amir2mi/flatifycss/master/website/static/img/logo.svg" alt="logo" /> </a> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> <h1> Scroll Down </h1> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <nav class="menu-items-wrapper navbar sticky-top"> <a class="navbar-logo" href="#"> <img src="https://raw.githack.com/amir2mi/flatifycss/master/website/static/img/logo.svg" alt="logo" /> </a> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("h2",{id:"scrollable"},"Scrollable"),(0,l.kt)("p",null,"Sometimes it is possible to have a long navigation bar (especially if you use the navigation bar for small screen sizes), so it is necessary to have the scrollable x-axis, you can have it by using scrollable classes."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".scrollable"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},".scrollable-x"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},".scrollable-y")),(0,l.kt)(n.Z,{height:"110px",limitWidth:"420px",disableFullscreen:"true",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Navigation bar</title> </head> <body> <nav class="menu-items-wrapper navbar scrollable-x"> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Note that these classes limit overflow, so dropdowns and submenues will not work anymore if you want to have a\nscrollable navigation bar."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="index.html"',"{1}":!0,title:'"index.html"'},'<nav class="menu-items-wrapper navbar scrollable-x">\n  <ul class="links">\n    ...\n  </ul>\n</nav>\n')),(0,l.kt)("h2",{id:"sizes"},"Sizes"),(0,l.kt)("p",null,"To change the navigation bar size use ",(0,l.kt)("a",{parentName:"p",href:"/docs/helpers/size-setters"},"size setter classes"),".\nThese classes just set a ",(0,l.kt)("inlineCode",{parentName:"p"},"font-size")," property so it is possible to change it yourself by writing custom CSS."),(0,l.kt)(n.Z,{height:"300px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Navigation bar</title> <style> .menu-items-wrapper:not(:last-child){ margin-bottom: 0.64em; } </style> </head> <body> <nav class="menu-items-wrapper navbar size-sm"> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> <nav class="menu-items-wrapper navbar size-lg"> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> <nav class="menu-items-wrapper navbar size-2x"> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<nav class="menu-items-wrapper navbar size-sm">...</nav>\n<nav class="menu-items-wrapper navbar size-lg">...</nav>\n<nav class="menu-items-wrapper navbar size-2x">...</nav>\n')),(0,l.kt)("h2",{id:"colors"},"Colors"),(0,l.kt)("p",null,"There are helper classes for styling navigation bar, first read about ",(0,l.kt)("a",{parentName:"p",href:"/docs/helpers/color-setters"},"color setter classes"),"."),(0,l.kt)(n.Z,{height:"400px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Navigation bar</title> <style> .menu-items-wrapper:not(:last-child){ margin-bottom: 0.64em; } </style> </head> <body> <nav class="menu-items-wrapper navbar style-red"> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> <nav class="menu-items-wrapper navbar style-blue"> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> <nav class="menu-items-wrapper navbar style-green"> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> <nav class="menu-items-wrapper navbar style-dark"> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> <nav class="menu-items-wrapper navbar style-light-light"> <ul class="links"> <li class="menu-item active"> <a href="#">Active</a> </li> <li class="menu-item"> <a href="#">Articles</a> </li> <li class="menu-item"> <a href="#">Photos</a> </li> <li class="menu-item"> <a href="#">Videos</a> </li> <li class="menu-item disabled"> <a>Disabled</a> </li> </ul> </nav> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<nav class="menu-items-wrapper navbar style-red">...</nav>\n<nav class="menu-items-wrapper navbar style-blue">...</nav>\n<nav class="menu-items-wrapper navbar style-green">...</nav>\n<nav class="menu-items-wrapper navbar style-dark">...</nav>\n<nav class="menu-items-wrapper navbar style-light-light">...</nav>\n')),(0,l.kt)("h2",{id:"customization"},"Customization"),(0,l.kt)("p",null,"As said above navigation bar is simply a menu with submenues, there is no special option for navigation bar customization, you can check ",(0,l.kt)("a",{parentName:"p",href:"/docs/components/menu#customization"},"menu customization documentation"),"."))}d.isMDXComponent=!0}}]);