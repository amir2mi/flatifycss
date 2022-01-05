"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6510],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1771:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),i=["components"],a={title:"Design system",sidebar_position:1},l=void 0,c={unversionedId:"overview/design-system",id:"overview/design-system",isDocsHomePage:!1,title:"Design system",description:"FlatifyCSS is not a design system itself and it follows the Duolingo design system principles. It is a collection of design system components that can be used to build a web page.",source:"@site/docs/overview/design-system.mdx",sourceDirName:"overview",slug:"/overview/design-system",permalink:"/docs/overview/design-system",editUrl:"https://github.com/amir2mi/flatifycss/tree/master/website/docs/overview/design-system.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Design system",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Colors",permalink:"/docs/overview/colors"}},d=[{value:"Shadows",id:"shadows",children:[],level:2},{value:"Roundness",id:"roundness",children:[],level:2},{value:"Color",id:"color",children:[],level:2},{value:"Typography",id:"typography",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"FlatifyCSS is not a design system itself and it follows the ",(0,s.kt)("a",{parentName:"p",href:"https://design.duolingo.com/"},"Duolingo design system")," principles. It is a collection of design system components that can be used to build a web page."),(0,s.kt)("div",{class:"flex-center",style:{marginBottom:50}},(0,s.kt)("div",{class:"flex-column-center"},(0,s.kt)("img",{src:"/flatifycss/img/docs/intro/blur.png",alt:"No blurred shadows"}),"1- No blurred shadows"),(0,s.kt)("div",{class:"flex-column-center"},(0,s.kt)("img",{src:"/flatifycss/img/docs/intro/border.png",alt:"Borders are cool"}),"2- Borders are cool"),(0,s.kt)("div",{class:"flex-column-center"},(0,s.kt)("img",{src:"/flatifycss/img/docs/intro/roundness.png",alt:"Round but not much"}),"3- Round but not much")),(0,s.kt)("h2",{id:"shadows"},"Shadows"),(0,s.kt)("p",null,"There are no blurred shadows in FlatifyCSS. Instead, we have sharp and subtle shadows, it helps to have a clean and user-friendly interface."),(0,s.kt)("h2",{id:"roundness"},"Roundness"),(0,s.kt)("p",null,"Elements are round \u2014 but not too much. It does not mean there is no element with circle corners at all, but elements tend to be round enough to be usable. We have rounded elements for buttons, cards, and other elements."),(0,s.kt)("p",null,"For example, an ordinary element like a button would have ",(0,s.kt)("inlineCode",{parentName:"p"},"1em")," for ",(0,s.kt)("inlineCode",{parentName:"p"},"border-radius"),", and based on its portion roundness value can be less or more."),(0,s.kt)("h2",{id:"color"},"Color"),(0,s.kt)("p",null,"\"The world is a diverse and wonderful place. We want to reflect that in the people we see, and the colors we use \u2014 that's why we've developed a bright and beautiful palette.\"",(0,s.kt)("br",{parentName:"p"}),"\n","You use defined palette of FlatifyCSS ",(0,s.kt)("a",{parentName:"p",href:"/docs/overview/colors"},"here"),"."),(0,s.kt)("h2",{id:"typography"},"Typography"),(0,s.kt)("p",null,"As we prefer roundness for elements, the main typeface should be round as well to keep the rhyme. Read more about Typography ",(0,s.kt)("a",{parentName:"p",href:"/docs/overview/typography"},"here"),"."))}p.isMDXComponent=!0}}]);