"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[8961],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(f,a(a({ref:r},s),{},{components:t})):n.createElement(f,a({ref:r},s))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99687:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const o={title:"Creating and editing experiment profiles",slug:"/create-edit-experiment-profiles"},a=void 0,l={unversionedId:"Extending your Pioreactor/Experiment Profiles/create-edit-experiment-profiles",id:"Extending your Pioreactor/Experiment Profiles/create-edit-experiment-profiles",title:"Creating and editing experiment profiles",description:"Using the UI",source:"@site/user-guide/03-Extending your Pioreactor/04-Experiment Profiles/02-create-edit-experiment-profiles.md",sourceDirName:"03-Extending your Pioreactor/04-Experiment Profiles",slug:"/create-edit-experiment-profiles",permalink:"/user-guide/create-edit-experiment-profiles",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Creating and editing experiment profiles",slug:"/create-edit-experiment-profiles"},sidebar:"tutorialSidebar",previous:{title:"Intro to experiment profiles",permalink:"/user-guide/experiment-profiles"},next:{title:"Experiment profiles schema",permalink:"/user-guide/experiment-profiles-schema"}},p={},c=[{value:"Using the UI",id:"using-the-ui",level:3},{value:"On the command line",id:"on-the-command-line",level:3}],s={toc:c},u="wrapper";function d(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"using-the-ui"},"Using the UI"),(0,i.kt)("p",null,"Starting in version 23.9.19, we introduced a new way to create and edit experiment profiles. Experiment profiles can now be managed in the UI at ",(0,i.kt)("inlineCode",{parentName:"p"},"/experiment-profiles"),". See video below for a demonstration."),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/yxxj0ncTxws?si=42eGY8yIt5D84qUA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("h3",{id:"on-the-command-line"},"On the command line"),(0,i.kt)("p",null,"All profiles are stored on the leader's disk under ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.pioreactor/experiment_profiles/"),". You can create and edit profiles here, as well."))}d.isMDXComponent=!0}}]);