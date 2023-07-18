"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[9344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={title:"LED automations",slug:"/led-automations"},a=void 0,s={unversionedId:"Automations/led-automations",id:"Automations/led-automations",title:"LED automations",description:"LED automations are ways to automatically control the 4 available LEDs in the Pioreactor. These LEDs can be used as a light source for photosynthetic microbes, influence the environment of the microbes, as additional sensors, or improve existing sensors.",source:"@site/user-guide/29-Automations/03-led-automations.md",sourceDirName:"29-Automations",slug:"/led-automations",permalink:"/user-guide/led-automations",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"LED automations",slug:"/led-automations"},sidebar:"tutorialSidebar",previous:{title:"Dosing automations",permalink:"/user-guide/dosing-automations"},next:{title:"Writing your own automations",permalink:"/user-guide/write-own-automations"}},l={},u=[{value:"Silent",id:"silent",level:3},{value:"Light/Dark cycle",id:"lightdark-cycle",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"LED automations are ways to automatically control the 4 available LEDs in the Pioreactor. These LEDs can be used as a light source for photosynthetic microbes, influence the environment of the microbes, as additional sensors, or improve existing sensors."),(0,r.kt)("h3",{id:"silent"},"Silent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requires:")," None"),(0,r.kt)("p",null,'The silent automation is the simplest automation: doing nothing. The automation will still "wake up" every ',(0,r.kt)("inlineCode",{parentName:"p"},"duration")," minutes, but does nothing."),(0,r.kt)("h3",{id:"lightdark-cycle"},"Light/Dark cycle"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requires:")," up to 2 LEDs, in channels C and D."),(0,r.kt)("p",null,"This automation will turn the LEDs in channels C & D on and off on a predetermined scheduale, specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"light_duration_minutes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dark_duration_minutes"),". The intensity of the LED is given by ",(0,r.kt)("inlineCode",{parentName:"p"},"light_intensity"),". The LEDs start ON. Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"duration")," is permanently set to be 1 minute."),(0,r.kt)("p",null,"The LEDs should go in pockets X2 and X3 on the Pioreactor."))}m.isMDXComponent=!0}}]);