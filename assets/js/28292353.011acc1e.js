"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[9056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(67294),a=n(93743);const o="tableOfContentsInline_prmo";function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return i.createElement("div",{className:o},i.createElement(a.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:r,className:"table-of-contents",linkClassName:null}))}},93743:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(87462),a=n(67294),o=n(86668);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function u(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>s(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),s=u(l,{anchorTopOffset:n.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function p(e){let{toc:t,className:n,linkClassName:i,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:i}))))):null}const d=a.memo(p);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:c,maxHeadingLevel:p,...g}=e;const f=(0,o.L)(),h=c??f.tableOfContents.minHeadingLevel,v=p??f.tableOfContents.maxHeadingLevel,y=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>l({toc:r(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return m((0,a.useMemo)((()=>{if(s&&u)return{linkClassName:s,linkActiveClassName:u,minHeadingLevel:h,maxHeadingLevel:v}}),[s,u,h,v])),a.createElement(d,(0,i.Z)({toc:y,className:n,linkClassName:s},g))}},6138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905)),o=n(3901);const r={title:"Using community plugins",slug:"/using-community-plugins"},l=void 0,s={unversionedId:"Extending your Pioreactor/06a-using-community-plugins",id:"Extending your Pioreactor/06a-using-community-plugins",title:"Using community plugins",description:"The Pioreactor comes with a large set of functionality and behaviour to accomplish most projects. For example, continuous culturing, optical density reading, and stable temperatures are available out-of-the-box. However, the specifics and range of how people use bioreactors goes far beyond what we could ever cover. That's why Pioreactor has added a platform so that community members can make their own extensions and share them with others. We call these plugins. (Below is how to install plugins - if you are looking to create your own plugins, see here.)",source:"@site/user-guide/03-Extending your Pioreactor/06a-using-community-plugins.mdx",sourceDirName:"03-Extending your Pioreactor",slug:"/using-community-plugins",permalink:"/user-guide/using-community-plugins",draft:!1,tags:[],version:"current",frontMatter:{title:"Using community plugins",slug:"/using-community-plugins"},sidebar:"tutorialSidebar",previous:{title:"Using the StemmaQT/Qwicc connector",permalink:"/user-guide/using-stemma-qt"},next:{title:"List of available plugins",permalink:"/user-guide/available-plugins"}},u={},c=[{value:"Installing plugins",id:"installing-plugins",level:2},{value:"Automations installed via plugins",id:"automations-installed-via-plugins",level:3},{value:"Activities installed via plugins",id:"activities-installed-via-plugins",level:3},{value:"Alternative: putting Python files in the the <code>plugins</code> folder",id:"alternative-putting-python-files-in-the-the-plugins-folder",level:2}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Pioreactor comes with a large set of functionality and behaviour to accomplish most projects. For example, continuous culturing, optical density reading, and stable temperatures are available out-of-the-box. However, the specifics and range of how people use bioreactors goes far beyond what we could ever cover. That's why Pioreactor has added a platform so that community members can make their own extensions and share them with others. We call these ",(0,a.kt)("em",{parentName:"p"},"plugins.")," (Below is how to install plugins - if you are looking to create your own plugins, see ",(0,a.kt)("a",{parentName:"p",href:"/developer-guide/plugin-as-python-package"},"here"),".)"),(0,a.kt)(o.Z,{toc:c,mdxType:"TOCInline"}),(0,a.kt)("h2",{id:"installing-plugins"},"Installing plugins"),(0,a.kt)("p",null,'From your Pioreactor\'s interface, the "Plugins" button on the left navigation bar will display all your currently installed plugins, and available plugins that meet standard requirements. We also encourage you to explore our ',(0,a.kt)("a",{parentName:"p",href:"https://forum.pioreactor.com/"},"forums")," for more plugins created by the community. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"plugin page",src:n(44901).Z,width:"3064",height:"1656"})),(0,a.kt)("h3",{id:"automations-installed-via-plugins"},"Automations installed via plugins"),(0,a.kt)("p",null,"After installation, dosing, LED, and temperature automations will be available in the list of automations available to you."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(33097).Z,width:"1444",height:"1104"}),"\n",(0,a.kt)("img",{src:n(4461).Z,width:"1444",height:"1104"})),(0,a.kt)("h3",{id:"activities-installed-via-plugins"},"Activities installed via plugins"),(0,a.kt)("p",null,"After installation, an activity's state and settings will show up on each Pioreactor's card. Below, we've installed the pioreactor-air-bubbler plugin:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87980).Z,width:"2074",height:"1042"})),(0,a.kt)("p",null,"Managing on/off and settings are done just like any other job, in the Manage dialog:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(70480).Z,width:"1356",height:"1122"}),"\n",(0,a.kt)("img",{src:n(37185).Z,width:"1356",height:"1122"})),(0,a.kt)("h2",{id:"alternative-putting-python-files-in-the-the-plugins-folder"},"Alternative: putting Python files in the the ",(0,a.kt)("inlineCode",{parentName:"h2"},"plugins")," folder"),(0,a.kt)("p",null,"An alternative way to install a plugin is to place a Python file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/pioreactor/.pioreactor/plugins")," directory on the Raspberry Pi. This is good for one-off scripts or plugins you are demoing or testing. See more ",(0,a.kt)("a",{parentName:"p",href:"/developer-guide/intro-plugins"},"about writing and distributing plugins"),"."))}p.isMDXComponent=!0},33097:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/custom_automation_plugin-8bfc78d2e5bc9068d650383c03b33b84.png"},4461:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/custom_automation_plugin2-ed68a401f7dfe1dfa68040223145e21f.png"},87980:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/custom_job_plugin-f18e5be715690d46a13604124730611a.png"},70480:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/custom_job_plugin2-f7f8404759e338d9338021e2caebf6a6.png"},37185:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/custom_job_plugin3-7723824b84b2ddaa66231e53a53d17b1.png"},44901:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plugin_page-bdf79417540fbac2c29b4b576ddccd3a.png"}}]);