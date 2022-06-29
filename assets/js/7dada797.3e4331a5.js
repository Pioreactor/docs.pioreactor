"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[9344],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6737:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"LED automations",slug:"/led-automations"},u=void 0,l={unversionedId:"Automations/led-automations",id:"Automations/led-automations",title:"LED automations",description:"LED automations are ways to automatically control the 4 available LEDs in the Pioreactor. These LEDs can be used as a light source for photosynthetic microbes, influence the environment of the microbes, as additional sensors, or improve existing sensors.",source:"@site/user-guide/29-Automations/03-led-automations.md",sourceDirName:"29-Automations",slug:"/led-automations",permalink:"/user-guide/led-automations",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"LED automations",slug:"/led-automations"},sidebar:"tutorialSidebar",previous:{title:"Dosing automations",permalink:"/user-guide/dosing-automations"},next:{title:"Accessing the Raspberry Pi",permalink:"/user-guide/accessing-raspberry-pi"}},c={},p=[{value:"Silent",id:"silent",level:3},{value:"Light/Dark cycle",id:"lightdark-cycle",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"LED automations are ways to automatically control the 4 available LEDs in the Pioreactor. These LEDs can be used as a light source for photosynthetic microbes, influence the environment of the microbes, as additional sensors, or improve existing sensors."),(0,i.kt)("h3",{id:"silent"},"Silent"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires:")," None"),(0,i.kt)("p",null,'The silent automation is the simplest automation: doing nothing. The automation will still "wake up" every ',(0,i.kt)("inlineCode",{parentName:"p"},"duration")," minutes, but does nothing."),(0,i.kt)("h3",{id:"lightdark-cycle"},"Light/Dark cycle"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires:")," up to 2 LEDs, in channels B and C."),(0,i.kt)("p",null,"This automation will turn the LEDs in channels B & C ON and OFF on a predetermined scheduale, specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"light_duration_hours")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dark_duration_hours"),". The intensity of the LED is given by ",(0,i.kt)("inlineCode",{parentName:"p"},"light_intensity"),". The LEDs start ON. ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," is set to be 60 minutes."))}d.isMDXComponent=!0}}]);