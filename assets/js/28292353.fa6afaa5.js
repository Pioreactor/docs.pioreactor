"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[9056],{22117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var i=t(85893),l=t(11151),a=t(3901);const o={title:"Using community plugins",slug:"/using-community-plugins"},s=void 0,r={id:"Extending your Pioreactor/06a-using-community-plugins",title:"Using community plugins",description:"The Pioreactor comes with a large set of functionality and behaviour to accomplish most projects. For example, continuous culturing, optical density reading, and stable temperatures are available out-of-the-box. However, the specifics and range of how people use bioreactors goes far beyond what we could ever cover. That's why Pioreactor has added a platform so that community members can make their own extensions and share them with others. We call these plugins. (Below is how to install plugins - if you are looking to create your own plugins, see here.)",source:"@site/user-guide/03-Extending your Pioreactor/06a-using-community-plugins.mdx",sourceDirName:"03-Extending your Pioreactor",slug:"/using-community-plugins",permalink:"/user-guide/using-community-plugins",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Using community plugins",slug:"/using-community-plugins"},sidebar:"tutorialSidebar",previous:{title:"Adding the Temperature Expansion Upgrade kit",permalink:"/user-guide/temperature-expansion-kit"},next:{title:"List of available plugins",permalink:"/user-guide/available-plugins"}},c={},u=[{value:"Installing plugins",id:"installing-plugins",level:2},{value:"Automations installed via plugins",id:"automations-installed-via-plugins",level:3},{value:"Activities installed via plugins",id:"activities-installed-via-plugins",level:3},{value:"Uninstalling plugins",id:"uninstalling-plugins",level:3},{value:"I don&#39;t have internet access - how can I install the plugin?",id:"i-dont-have-internet-access---how-can-i-install-the-plugin",level:2},{value:"Alternative: putting Python files in the the <code>plugins</code> folder",id:"alternative-putting-python-files-in-the-the-plugins-folder",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The Pioreactor comes with a large set of functionality and behaviour to accomplish most projects. For example, continuous culturing, optical density reading, and stable temperatures are available out-of-the-box. However, the specifics and range of how people use bioreactors goes far beyond what we could ever cover. That's why Pioreactor has added a platform so that community members can make their own extensions and share them with others. We call these ",(0,i.jsx)(n.em,{children:"plugins."})," (Below is how to install plugins - if you are looking to create your own plugins, see ",(0,i.jsx)(n.a,{href:"/developer-guide/plugin-as-python-package",children:"here"}),".)"]}),"\n",(0,i.jsx)(a.Z,{toc:u}),"\n",(0,i.jsx)(n.h2,{id:"installing-plugins",children:"Installing plugins"}),"\n",(0,i.jsxs)(n.p,{children:['From your Pioreactor\'s interface, the "Plugins" button on the left navigation bar will display all your currently installed plugins, and some recommended plugins. We also encourage you to explore our ',(0,i.jsx)(n.a,{href:"https://forum.pioreactor.com/",children:"forums"})," for more plugins created by the community."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin page in the Pioreactor UI. The page shows a list of plugins, with a description of the plugin under each one.",src:t(44901).Z+"",width:"3100",height:"1648"})}),"\n",(0,i.jsx)(n.p,{children:'You can also use the "Install plugin by name" button in the top-right to install a plugin that is not featured on this page.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin page in the Pioreactor UI. The &quot;install plugin by name&quot; is highlighted.",src:t(28243).Z+"",width:"3100",height:"1648"})}),"\n",(0,i.jsx)(n.h3,{id:"automations-installed-via-plugins",children:"Automations installed via plugins"}),"\n",(0,i.jsx)(n.p,{children:"Some plugins add new automations to your Pioreactor. After installing, new dosing, LED, or temperature automations will be available in the list of automations available to you."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"The UI of an automation installed via a plugin. The plugin is highlighted in the dropdown.",src:t(33097).Z+"",width:"1444",height:"1104"}),"\n",(0,i.jsx)(n.img,{alt:"The UI of an automation installed via a plugin, with the automation&#39;s settings displayed.",src:t(4461).Z+"",width:"1444",height:"1104"})]}),"\n",(0,i.jsx)(n.h3,{id:"activities-installed-via-plugins",children:"Activities installed via plugins"}),"\n",(0,i.jsx)(n.p,{children:"Some plugins add new activities to your Pioreactor.  After installation, an activity's state and settings will show up on each Pioreactor's card. Below, we've installed the pioreactor-air-bubbler plugin:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"The Pioreactor card with the newly installed activity displayed.",src:t(87980).Z+"",width:"2074",height:"1042"})}),"\n",(0,i.jsx)(n.p,{children:"Managing on/off and settings are done just like any other job, in the Manage dialog:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"The list of activities, that now includes the activity installed via a plugin (highlighted).",src:t(70480).Z+"",width:"1356",height:"1122"}),"\n",(0,i.jsx)(n.img,{alt:"The list of settings of activities, and specific settings for the new activity are highlighted.",src:t(37185).Z+"",width:"1356",height:"1122"})]}),"\n",(0,i.jsx)(n.h3,{id:"uninstalling-plugins",children:"Uninstalling plugins"}),"\n",(0,i.jsx)(n.p,{children:"You can uninstall plugins from the same page, too. These will remove the action on the Pioreactor's card, but won't delete the section in your config.ini. Also, if a SQL table was installed with the plugin, the table will not be deleted."}),"\n",(0,i.jsx)(n.h2,{id:"i-dont-have-internet-access---how-can-i-install-the-plugin",children:"I don't have internet access - how can I install the plugin?"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["First, get the latest .whl file ",(0,i.jsx)(n.a,{href:"https://pypi.org/",children:"here"})," onto any computer that can SSH into the Pioreactor."]}),"\n",(0,i.jsxs)(n.li,{children:["To get this .whl file onto a Pioreactor, use either ",(0,i.jsx)(n.code,{children:"scp"}),", WinSCP, or FileZilla. Note: if you upload the .whl file to your leader Pioreactor first, you can distribute the .whl file to all your workers with ",(0,i.jsx)(n.code,{children:"pios cp <location of .whl file>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Once the .whl file is on the Pioreactor, use the following to install the plugin:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pio plugin install <name-of-plugin> --source <location of .whl file>\n"})}),"\n","For example:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pio plugins install pioreactor-air-bubbler --source ~/pioreactor_air_bubbler-0.3.1-py3-none-any.whl\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"alternative-putting-python-files-in-the-the-plugins-folder",children:["Alternative: putting Python files in the the ",(0,i.jsx)(n.code,{children:"plugins"})," folder"]}),"\n",(0,i.jsxs)(n.p,{children:["An alternative way to install a plugin is to place a Python file in the ",(0,i.jsx)(n.code,{children:"/home/pioreactor/.pioreactor/plugins"})," directory on the Raspberry Pi. This is good for one-off scripts or plugins you are demoing or testing. See more ",(0,i.jsx)(n.a,{href:"/developer-guide/intro-plugins",children:"about writing and distributing plugins"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3901:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var i=t(93743);const l={tableOfContentsInline:"tableOfContentsInline_prmo"};var a=t(85893);function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,a.jsx)("div",{className:l.tableOfContentsInline,children:(0,a.jsx)(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null})})}},93743:(e,n,t)=>{t.d(n,{Z:()=>m});var i=t(67294),l=t(86668);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):i.push(l)})),i}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>s(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:l,minHeadingLevel:a,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),s=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let l=n;l<=t;l+=1)i.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),c=r(s,{anchorTopOffset:t.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===u)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var d=t(39960),h=t(85893);function g(e){let{toc:n,className:t,linkClassName:i,isChild:l}=e;return n.length?(0,h.jsx)("ul",{className:l?void 0:t,children:n.map((e=>(0,h.jsxs)("li",{children:[(0,h.jsx)(d.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const p=i.memo(g);function m(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:d,...g}=e;const m=(0,l.L)(),f=c??m.tableOfContents.minHeadingLevel,v=d??m.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,i.useMemo)((()=>o({toc:a(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:f,maxHeadingLevel:v});return u((0,i.useMemo)((()=>{if(s&&r)return{linkClassName:s,linkActiveClassName:r,minHeadingLevel:f,maxHeadingLevel:v}}),[s,r,f,v])),(0,h.jsx)(p,{toc:x,className:t,linkClassName:s,...g})}},33097:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/custom_automation_plugin-8bfc78d2e5bc9068d650383c03b33b84.png"},4461:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/custom_automation_plugin2-ed68a401f7dfe1dfa68040223145e21f.png"},87980:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/custom_job_plugin-f18e5be715690d46a13604124730611a.png"},70480:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/custom_job_plugin2-f7f8404759e338d9338021e2caebf6a6.png"},37185:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/custom_job_plugin3-7723824b84b2ddaa66231e53a53d17b1.png"},44901:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/plugin_page-2b8971737b3f594f623dce2012c0a13a.png"},28243:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/plugin_page_button_highlight-89fd844a6b09f352b97f4795a412d16a.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(67294);const l={},a=i.createContext(l);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);