"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4548],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=o.createContext({}),c=function(t){var e=o.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(a.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,a=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||l;return n?o.createElement(m,s(s({ref:e},u),{},{components:n})):o.createElement(m,s({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=p;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2695:function(t,e,n){n.d(e,{Z:function(){return i}});var o=n(7462),r=n(3366),l=n(7294),s=["isBad","isGood","children","disableFullscreen","limitWidth"];function i(t){var e=t.isBad,n=t.isGood,i=t.children,a=t.disableFullscreen,c=t.limitWidth,u=(0,r.Z)(t,s),b=(0,l.useState)(!1),p=b[0],d=b[1];return l.createElement("div",{className:"preview-box-wrapper",style:c?{width:c,display:"table",margin:"0 auto"}:{}},!a&&l.createElement("button",{"aria-label":p?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(t){var e=t.target.closest(".preview-box-wrapper");p?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),d(!p)}},p?l.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},l.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):l.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},l.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),e&&l.createElement("div",{className:"is-bad-example style-red"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"2 2 12 12"},l.createElement("path",{d:"M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"}))),n&&l.createElement("div",{className:"is-good-example style-green"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 18 18"},l.createElement("path",{d:"M5.056 15.04a1.5 1.5 0 002.217-.119l10.17-12.476A1.5 1.5 0 0015.118.55L6.007 11.758l-3.453-3.41a1.5 1.5 0 10-2.109 2.133l4.611 4.56"}))),l.createElement("iframe",(0,o.Z)({width:"100%",className:"docus-preview-box"+(p?" is-fullscreen":""),srcDoc:i},u)))}},383:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return b},default:function(){return d}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),s=n(2695),i=["components"],a={title:"Button group",sidebar_position:3},c=void 0,u={unversionedId:"components/buttons/button-group",id:"components/buttons/button-group",isDocsHomePage:!1,title:"Button group",description:"Buttons can be in a parent with the .button-group class to create a button group.",source:"@site/docs/components/buttons/button-group.mdx",sourceDirName:"components/buttons",slug:"/components/buttons/button-group",permalink:"/docs/components/buttons/button-group",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/components/buttons/button-group.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Button group",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Two-layer button",permalink:"/docs/components/buttons/two-layer-button"},next:{title:"Add button",permalink:"/docs/components/buttons/add-button"}},b=[{value:"Horizontal",id:"horizontal",children:[],level:3},{value:"Vertical",id:"vertical",children:[],level:3},{value:"Sizes",id:"sizes",children:[],level:3}],p={toc:b};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Buttons can be in a parent with the ",(0,l.kt)("inlineCode",{parentName:"p"},".button-group")," class to create a button group.",(0,l.kt)("br",{parentName:"p"}),"\n","Basically in a button group just, the first and last buttons have roundness and it seems like they are stick together.",(0,l.kt)("br",{parentName:"p"}),"\n","If you don't know about buttons in FlatifyCSS, first ",(0,l.kt)("a",{parentName:"p",href:"/docs/components/buttons/button"},"read more about creating buttons"),"."),(0,l.kt)("p",null,"Button groups can have both horizontal and vertical variations with different kinds of button styles."),(0,l.kt)("h3",{id:"horizontal"},"Horizontal"),(0,l.kt)("p",null,"By default, button groups are horizontal and they can have active buttons just by adding the ",(0,l.kt)("inlineCode",{parentName:"p"},".active")," class to each."),(0,l.kt)(s.Z,{height:"100px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Button group</title> </head> <body> <div class="flex-center"> <div class="button-group"> <button class="button">Click Here</button> <button class="button">Click Here</button> <button class="button active">Click Here</button> </div> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'{4} title="index.html"',"{4}":!0,title:'"index.html"'},'<div class="button-group">\n  <button class="button">Click Here</button>\n  <button class="button">Click Here</button>\n  <button class="button active">Click Here</button>\n</div>\n')),(0,l.kt)("h3",{id:"vertical"},"Vertical"),(0,l.kt)("p",null,"The vertical button group is possible by adding ",(0,l.kt)("inlineCode",{parentName:"p"},".vertical")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},".button-group"),"."),(0,l.kt)(s.Z,{height:"260px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Button group</title> </head> <body> <div class="flex-center"> <div class="button-group vertical" style="width: 250px"> <button class="button">Click Here</button> <button class="button style-success">Click Here</button> <button class="button style-info active">Click Here</button> <button class="button style-warning">Click Here</button> <button class="button style-danger">Click Here</button> </div> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="index.html"',"{1}":!0,title:'"index.html"'},'<div class="button-group vertical" style="width: 250px">\n  <button class="button">Click Here</button>\n  <button class="button style-success">Click Here</button>\n  <button class="button style-info active">Click Here</button>\n  <button class="button style-warning">Click Here</button>\n  <button class="button style-danger">Click Here</button>\n</div>\n')),(0,l.kt)("h3",{id:"sizes"},"Sizes"),(0,l.kt)("p",null,"To change the button group size use ",(0,l.kt)("a",{parentName:"p",href:"/docs/helpers/size-setters"},"size setter classes"),".\nThese classes just set a `font-size property so it is possible to change it yourself by writing custom CSS."),(0,l.kt)(s.Z,{height:"360px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" /> <title>Button group</title> </head> <body> <div class="flex-center"> <div class="button-group vertical size-2x" style="width: 250px"> <button class="button">Click Here</button> <button class="button style-success">Click Here</button> <button class="button style-info">Click Here</button> <button class="button style-warning">Click Here</button> <button class="button style-danger">Click Here</button> </div> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="index.html"',"{1}":!0,title:'"index.html"'},'<div class="button-group vertical size-2x" style="width: 250px">\n  <button class="button">Click Here</button>\n  <button class="button style-success">Click Here</button>\n  <button class="button style-info">Click Here</button>\n  <button class="button style-warning">Click Here</button>\n  <button class="button style-danger">Click Here</button>\n</div>\n')))}d.isMDXComponent=!0}}]);