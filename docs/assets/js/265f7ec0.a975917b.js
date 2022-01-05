"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1096],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),p=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,h=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return a?l.createElement(h,r(r({ref:t},d),{},{components:a})):l.createElement(h,r({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2695:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(7462),n=a(3366),i=a(7294),r=["isBad","isGood","children","disableFullscreen","limitWidth"];function s(e){var t=e.isBad,a=e.isGood,s=e.children,o=e.disableFullscreen,p=e.limitWidth,d=(0,n.Z)(e,r),m=(0,i.useState)(!1),c=m[0],u=m[1];return i.createElement("div",{className:"preview-box-wrapper",style:p?{width:p,display:"table",margin:"0 auto"}:{}},!o&&i.createElement("button",{"aria-label":c?"Minimize the example":"Fullscreen the example",className:"preview-box-fullscreen-toggle",onClick:function(e){var t=e.target.closest(".preview-box-wrapper");c?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),u(!c)}},c?i.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},i.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):i.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},i.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),t&&i.createElement("div",{className:"is-bad-example style-red"},i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"2 2 12 12"},i.createElement("path",{d:"M3.3 12.7c.2.2.4.3.7.3s.5-.1.7-.3L8 9.4l3.3 3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L9.4 8l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 4.7 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L6.6 8l-3.3 3.3c-.4.4-.4 1 0 1.4z"}))),a&&i.createElement("div",{className:"is-good-example style-green"},i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 18 18"},i.createElement("path",{d:"M5.056 15.04a1.5 1.5 0 002.217-.119l10.17-12.476A1.5 1.5 0 0015.118.55L6.007 11.758l-3.453-3.41a1.5 1.5 0 10-2.109 2.133l4.611 4.56"}))),i.createElement("iframe",(0,l.Z)({width:"100%",className:"docus-preview-box"+(c?" is-fullscreen":""),srcDoc:s},d)))}},7620:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var l=a(7462),n=a(3366),i=(a(7294),a(3905)),r=a(2695),s=["components"],o={title:"Inputs",sidebar_position:1},p=void 0,d={unversionedId:"forms/inputs",id:"forms/inputs",isDocsHomePage:!1,title:"Inputs",description:"On this page we will talk about how to style inputs for a form with FlatifyCSS, by default inputs get FlatifyCSS style but you can reset to default with the .default class.",source:"@site/docs/forms/inputs.mdx",sourceDirName:"forms",slug:"/forms/inputs",permalink:"/docs/forms/inputs",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/forms/inputs.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Inputs",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Table",permalink:"/docs/content/table"},next:{title:"Select",permalink:"/docs/forms/select"}},m=[{value:"Label",id:"label",children:[{value:"Inline label",id:"inline-label",children:[],level:3},{value:"Floating label",id:"floating-label",children:[],level:3}],level:2},{value:"Validation",id:"validation",children:[],level:2},{value:"Password visibilty toggle",id:"password-visibilty-toggle",children:[{value:"Change eye icon",id:"change-eye-icon",children:[],level:3}],level:2},{value:"Sizes",id:"sizes",children:[],level:2},{value:"Colors",id:"colors",children:[],level:2},{value:"Customization",id:"customization",children:[],level:2}],c={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"On this page we will talk about how to style inputs for a form with FlatifyCSS, by default inputs get FlatifyCSS style but you can reset to default with the ",(0,i.kt)("inlineCode",{parentName:"p"},".default")," class."),(0,i.kt)("h2",{id:"label"},"Label"),(0,i.kt)("h3",{id:"inline-label"},"Inline label"),(0,i.kt)("p",null,"By default input labels are inline until you add ",(0,i.kt)("inlineCode",{parentName:"p"},".form-label")," which is necessary, in this case, if you add the ",(0,i.kt)("inlineCode",{parentName:"p"},".inline")," class to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<label>")," it will be inline."),(0,i.kt)(r.Z,{height:"200px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Inputs</title> </head> <body> <label for="my-text-input" class="form-label inline">Enter you name</label> <input id="my-text-input" type="text" placeholder="Enter you name" /> <br> <label for="my-text-input" class="form-label">Enter you name</label> <input id="my-text-input" type="text" placeholder="Enter you name" /> </body>\n</html>',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<label class="form-label inline" for="my-text-input">Enter you name</label>\n<input id="my-text-input" type="text" placeholder="Enter you name" />\n\n<label class="form-label" for="my-text-input"> Enter you name </label>\n<input id="my-text-input" type="text" placeholder="Enter you name" />\n')),(0,i.kt)("h3",{id:"floating-label"},"Floating label"),(0,i.kt)("p",null,"The floating label is inside the input and it seems like a placeholder, how it works is done by pure CSS and it is necessary to set a placeholder for input, though it does not show it.\nTo have a floating label first wrap both input and label with ",(0,i.kt)("inlineCode",{parentName:"p"},".input-wrapper")," & ",(0,i.kt)("inlineCode",{parentName:"p"},".floating-label")," classes and place the label after input."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Textarea floating label")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that if you want to have the floating label for ",(0,i.kt)("inlineCode",{parentName:"p"},"<textarea>")," should add the ",(0,i.kt)("inlineCode",{parentName:"p"},".is-textarea")," class to the ",(0,i.kt)("inlineCode",{parentName:"p"},".input-wrapper"),"."))),(0,i.kt)(r.Z,{height:"260px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Inputs</title> </head> <body> <div class="input-wrapper floating-label"> <input id="my-text-input" type="text" placeholder="Enter you name" /> <label for="my-text-input" class="form-label">Enter you name</label> </div> <div class="input-wrapper is-textarea floating-label"> <textarea id="thoughts" name="thoughts" rows="4" style="width:100%" placeholder="What do you think?"></textarea> <label id="thoughts" class="form-label" name="thoughts" for="yourname">What do you think?</label> </div> </body>\n</html>',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'{2,4,8,10} title="index.html"',"{2,4,8,10}":!0,title:'"index.html"'},'\x3c!-- input --\x3e\n<div class="input-wrapper floating-label">\n  <input id="my-text-input" type="text" placeholder="Enter you name" />\n  <label for="my-text-input" class="form-label">Enter you name</label>\n</div>\n\n\x3c!-- textarea --\x3e\n<div class="input-wrapper is-textarea floating-label">\n  <textarea id="thoughts" name="thoughts" rows="4" placeholder="What do you think?"></textarea>\n  <label id="thoughts" class="form-label" name="thoughts" for="yourname">What do you think?</label>\n</div>\n')),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"Input invalid state is red by default however you can have valid and warning states as well. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},".valid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".warning"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".invalid")," classes both for input or input wrapper. The diffrence between them is simple if you add these classes to the ",(0,i.kt)("inlineCode",{parentName:"p"},".input-wrapper")," it will show an indicator icon."),(0,i.kt)(r.Z,{height:"620px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Inputs</title> </head> <body> <label for="my-text-input-1" class="form-label">Enter you name</label> <div class="input-wrapper"> <input class="valid" id="my-text-input-1" type="text" placeholder="Enter you name" /> </div> <label for="my-text-input-2" class="form-label">Enter you name</label> <div class="input-wrapper"> <input class="warning" id="my-text-input-2" type="text" placeholder="Enter you name" /> </div> <label for="my-text-input-3" class="form-label">Enter you name</label> <div class="input-wrapper"> <input class="invalid" id="my-text-input-3" type="text" placeholder="Enter you name" /> </div> <br> <label for="my-email-input-4" class="form-label">Enter you email</label> <div class="input-wrapper valid"> <input id="my-email-input-4" type="email" placeholder="Enter you email" /> </div> <label for="my-email-input-5" class="form-label">Enter you email</label> <div class="input-wrapper warning"> <input id="my-email-input-5" type="email" placeholder="Enter you name" /> </div> <label for="my-email-input-6" class="form-label">Enter you email</label> <div class="input-wrapper invalid"> <input id="my-email-input-6" type="email" placeholder="Enter you email" /> </div> </body>\n</html>',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'\x3c!-- Validation classes added to the input --\x3e\n<label for="my-text-input-1" class="form-label">Enter you name</label>\n<div class="input-wrapper">\n  <input class="valid" id="my-text-input-1" type="text" placeholder="Enter you name" />\n</div>\n\n<label for="my-text-input-2" class="form-label">Enter you name</label>\n<div class="input-wrapper">\n  <input class="warning" id="my-text-input-2" type="text" placeholder="Enter you name" />\n</div>\n\n<label for="my-text-input-3" class="form-label">Enter you name</label>\n<div class="input-wrapper">\n  <input class="invalid" id="my-text-input-3" type="text" placeholder="Enter you name" />\n</div>\n\n\x3c!-- Validation classes added to the .input-wrapper --\x3e\n<label for="my-text-input-4" class="form-label">Enter you name</label>\n<div class="input-wrapper valid">\n  <input id="my-text-input-4" type="text" placeholder="Enter you name" />\n</div>\n\n<label for="my-text-input-5" class="form-label">Enter you name</label>\n<div class="input-wrapper warning">\n  <input id="my-text-input-5" type="text" placeholder="Enter you name" />\n</div>\n\n<label for="my-text-input-6" class="form-label">Enter you name</label>\n<div class="input-wrapper invalid">\n  <input id="my-text-input-6" type="text" placeholder="Enter you name" />\n</div>\n')),(0,i.kt)("p",null,"Here is an example of how to use validation classes to have a dynamic input."),(0,i.kt)(r.Z,{height:"140px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Inputs</title> </head> <body> <div class="input-wrapper floating-label"> <input id="password" type="password" placeholder="Enter new password" /> <label for="password" class="form-label">Enter new password</label> </div> <p class="help-text size-sm"> Password length should be more than 8 chars with letters. </p> </body> <script> const elem_wrapper = document.querySelector(".input-wrapper"); const elem_password = document.querySelector("#password"); const elem_help = document.querySelector(".help-text"); elem_password.addEventListener("keyup", function () { if (elem_password.value.length >= 8) { if (/[a-zA-Z]/.test(elem_password.value)) { elem_wrapper.classList.remove("invalid", "warning"); elem_wrapper.classList.add("valid"); elem_help.innerText = "You chose the perfect password!"; } else { elem_wrapper.classList.remove("invalid", "valid"); elem_wrapper.classList.add("warning"); elem_help.innerText = "You can add some letters as well!"; } } else { elem_wrapper.classList.remove("valid", "warning"); elem_wrapper.classList.add("invalid"); elem_help.innerText = "Password length should be more than 8 chars."; } }); <\/script>\n</html>',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="input-wrapper floating-label">\n  <input required id="password" type="password" placeholder="Enter new password" />\n  <label for="password" class="form-label">Enter new password</label>\n</div>\n<p class="help-text size-sm">Password length should be more than 8 chars with letters.</p>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},'const elem_wrapper = document.querySelector(".input-wrapper");\nconst elem_password = document.querySelector("#password");\nconst elem_help = document.querySelector(".help-text");\n\n// check on keyup\nelem_password.addEventListener("keyup", function () {\n  // should have length of eight chars\n  if (elem_password.value.length >= 8) {\n    // should have at least one letter\n    if (/[a-zA-Z]/.test(elem_password.value)) {\n      elem_wrapper.classList.remove("invalid", "warning");\n      elem_wrapper.classList.add("valid");\n      elem_help.innerText = "You chose the perfect password!";\n    } else {\n      elem_wrapper.classList.remove("invalid", "valid");\n      elem_wrapper.classList.add("warning");\n      elem_help.innerText = "You can add some letters as well!";\n    }\n  } else {\n    // invalid if does not have 8 chars length and letter\n    elem_wrapper.classList.remove("valid", "warning");\n    elem_wrapper.classList.add("invalid");\n    elem_help.innerText = "Password length should be more than 8 chars.";\n  }\n});\n')),(0,i.kt)("h2",{id:"password-visibilty-toggle"},"Password visibilty toggle"),(0,i.kt)("p",null,"It is a built-in button that helps you change the type of input from password to text, so the user can see the password. Having this button is pretty simple you just need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"<button>")," with ",(0,i.kt)("inlineCode",{parentName:"p"},".show-password-button")," class inside the ",(0,i.kt)("inlineCode",{parentName:"p"},".input-wrapper.toggle-password")," wrapper."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Accessibility matters!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You do not need to add anything inside the show password button element but it is necessary to set an ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-label")," HTML attribute for accessibility purposes. ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute"},"Read more about aria-label usage"),"."))),(0,i.kt)(r.Z,{height:"150px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Buttons</title> <script src="https://raw.githack.com/amir2mi/flatifycss/master/dist/js/flatify-min.js"><\/script> </head> <body> <label for="password" class="form-label">New password</label> <div class="input-wrapper"> <input required id="password" type="password" placeholder="Enter new password" /> <button class="show-password-button" aria-label="Show password"></button> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'{4} title="index.html"',"{4}":!0,title:'"index.html"'},'<label for="password" class="form-label">New password</label>\n<div class="input-wrapper">\n  <input required id="password" type="password" placeholder="Enter new password" />\n  <button class="show-password-button" aria-label="Show password"></button>\n</div>\n')),(0,i.kt)("h3",{id:"change-eye-icon"},"Change eye icon"),(0,i.kt)("p",null,"It is possible to change the eye icon with both ",(0,i.kt)("inlineCode",{parentName:"p"},"_config.scss")," and CSS variables."),(0,i.kt)("p",null,"Inside ",(0,i.kt)("inlineCode",{parentName:"p"},"_config.scss")," find ",(0,i.kt)("inlineCode",{parentName:"p"},"$EYE_ICON")," and set svg of customized icon with this format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="_config.scss"',title:'"_config.scss"'},'$EYE_ICON: url("data:image/svg+xml; utf8, YOUR SVG CODE HERE");\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("p",null,"change its CSS variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},'--flatify__eye-icon: url("data:image/svg+xml; utf8, YOUR SVG CODE HERE");\n')),(0,i.kt)("h2",{id:"sizes"},"Sizes"),(0,i.kt)("p",null,"To change the input size use ",(0,i.kt)("a",{parentName:"p",href:"/docs/helpers/size-setters"},"size setter classes"),".\nThese classes just set a ",(0,i.kt)("inlineCode",{parentName:"p"},"font-size")," property so it is possible to change it yourself by writing custom CSS."),(0,i.kt)(r.Z,{height:"520px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Inputs</title> </head> <body> <div class="size-xs"> <label for="my-datetime-input-sm" class="form-label">Make an appointment</label> <input id="my-datetime-input-sm" type="datetime-local" placeholder="Make an appointment" /> </div> <div class="size-md"> <label for="my-datetime-input-md" class="form-label">Make an appointment</label> <input id="my-datetime-input-md" type="datetime-local" placeholder="Make an appointment" /> </div> <div class="size-lg"> <label for="my-datetime-input-lg" class="form-label">Make an appointment</label> <input id="my-datetime-input-lg" type="datetime-local" placeholder="Make an appointment" /> </div> <div class="size-3x"> <label for="my-datetime-input-3x" class="form-label">Make an appointment</label> <input id="my-datetime-input-3x" type="datetime-local" placeholder="Make an appointment" /> </div> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div class="size-xs">\n  <label for="my-datetime-input-sm" class="form-label">Make an appointment</label>\n  <input id="my-datetime-input-sm" type="datetime-local" placeholder="Make an appointment" />\n</div>\n\n<div class="size-md">\n  <label for="my-datetime-input-md" class="form-label">Make an appointment</label>\n  <input id="my-datetime-input-md" type="datetime-local" placeholder="Make an appointment" />\n</div>\n\n<div class="size-lg">\n  <label for="my-datetime-input-lg" class="form-label">Make an appointment</label>\n  <input id="my-datetime-input-lg" type="datetime-local" placeholder="Make an appointment" />\n</div>\n\n<div class="size-3x">\n  <label for="my-datetime-input-3x" class="form-label">Make an appointment</label>\n  <input id="my-datetime-input-3x" type="datetime-local" placeholder="Make an appointment" />\n</div>\n')),(0,i.kt)("h2",{id:"colors"},"Colors"),(0,i.kt)("p",null,"There are helper classes for styling inputs, first read about ",(0,i.kt)("a",{parentName:"p",href:"/docs/helpers/color-setters"},"color setter classes")," for having button with diffrent background and text color."),(0,i.kt)(r.Z,{height:"510px",children:'\n<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Inputs</title> <script src="https://raw.githack.com/amir2mi/flatifycss/master/dist/js/flatify-min.js"><\/script> </head> <body> <form> <input type="color" value="#ED5565" /> <input type="color" value="#2ECC71" class="style-green-light" /> <input type="color" value="#FFCE54" class="style-blue-light" /> <input type="color" value="#48CFAD" class="style-dark"/> <input type="range" class="style-purple" /> <input type="file" class="style-yellow-light" /> <br> <label for="your-age" class="form-label">Age</label> <input id="your-age" type="number" class="style-blue" /> <label for="your-name" class="form-label">Name</label> <input class="style-orange" id="your-name" type="text" placeholder="Write something..." /> <div class="input-wrapper toggle-password"> <input class="style-dark" id="password" type="password" placeholder="Write something..." /> <button class="show-password-button style-dark" aria-label="Show password"></button> </div> <input type="reset" class="style-red-light" value="Reset" /> <input type="submit" class="style-red" value="Submit" /> </form> </body>\n</html>\n',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'\x3c!-- Color pickers --\x3e\n<input type="color" value="#ED5565" />\n<input type="color" value="#2ECC71" class="style-green-light" />\n<input type="color" value="#FFCE54" class="style-blue-light" />\n<input type="color" value="#48CFAD" class="style-dark" />\n\x3c!-- Range --\x3e\n<input type="range" class="style-purple" />\n\x3c!-- File --\x3e\n<input type="file" class="style-yellow-light" />\n\x3c!-- Number --\x3e\n<label for="your-age" class="form-label">Age</label>\n<input id="your-age" type="number" class="style-blue" />\n\x3c!-- Text --\x3e\n<label for="your-name" class="form-label">Name</label>\n<input class="style-orange" id="your-name" type="text" placeholder="Write something..." />\n\x3c!-- Password --\x3e\n<div class="input-wrapper toggle-password">\n  <input class="style-dark" id="password" type="password" placeholder="Write something..." />\n  <button class="show-password-button style-dark" aria-label="Show password"></button>\n</div>\n\x3c!-- Buttons --\x3e\n<input type="reset" class="style-red-light" value="Reset" />\n<input type="submit" class="style-red" value="Submit" />\n')),(0,i.kt)("h2",{id:"customization"},"Customization"),(0,i.kt)("p",null,"There are CSS variables for customizing form inputs:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__form-element-accent-color"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__form-element-bg-color"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__form-element-txt-color"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__form-element-border-color"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__form-element-border-color__focus"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__form-element-border-color__valid"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__form-element-border-color__warning"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--flatify__form-element-border-color__invalid")),(0,i.kt)("p",null,"Here is an example of these variables usage:"),(0,i.kt)(r.Z,{height:"140px",children:'<!DOCTYPE html>\n<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <link rel="stylesheet" href="https://raw.githack.com/amir2mi/FlatifyCSS/master/dist/css/flatify-min.css" /> <title>Inputs</title> <style> :root{ --flatify__form-element-accent-color: #37BC9B; --flatify__form-element-bg-color: #FFCE54; --flatify__form-element-txt-color: #434A54; --flatify__form-element-border-color: #FFCE54; --flatify__form-element-border-color__focus: #F6BB42; --flatify__form-element-border-color__valid: #5D9CEC; --flatify__form-element-border-color__warning: #8067B7; --flatify__form-element-border-color__invalid: #BF263C; } </style> </head> <body> <div class="input-wrapper floating-label"> <input id="password" type="password" placeholder="Enter new password" /> <label for="password" class="form-label">Enter new password</label> </div> <p class="help-text size-sm"> Password length should be more than 8 chars with letters. </p> </body> <script> const elem_wrapper = document.querySelector(".input-wrapper"); const elem_password = document.querySelector("#password"); const elem_help = document.querySelector(".help-text"); elem_password.addEventListener("keyup", function () { if (elem_password.value.length >= 8) { if (/[a-zA-Z]/.test(elem_password.value)) { elem_wrapper.classList.remove("invalid", "warning"); elem_wrapper.classList.add("valid"); elem_help.innerText = "You chose the perfect password!"; } else { elem_wrapper.classList.remove("invalid", "valid"); elem_wrapper.classList.add("warning"); elem_help.innerText = "You can add some letters as well!"; } } else { elem_wrapper.classList.remove("valid", "warning"); elem_wrapper.classList.add("invalid"); elem_help.innerText = "Password length should be more than 8 chars."; } }); <\/script>\n</html>',mdxType:"PreviewBox"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style.css"',title:'"style.css"'},":root {\n    --flatify__form-element-accent-color: #37BC9B;\n    --flatify__form-element-bg-color: #ffce54;\n    --flatify__form-element-txt-color: #434a54;\n    --flatify__form-element-border-color: #ffce54;\n    --flatify__form-element-border-color__focus: #f6bb42;\n    --flatify__form-element-border-color__valid: #5d9cec;\n    --flatify__form-element-border-color__warning: #8067b7;\n    --flatify__form-element-border-color__invalid: #bf263c;ch\n}\n")),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Style every input differently!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that you do not have to set these variables as root, you can style ",(0,i.kt)("inlineCode",{parentName:"p"},".input-wrapper")," or each ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," element as well."))))}u.isMDXComponent=!0}}]);