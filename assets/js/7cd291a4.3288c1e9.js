"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[1823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||n;return r?o.createElement(h,i(i({ref:t},s),{},{components:r})):o.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={title:"Export and import your data",slug:"/export-import-existing-data"},i=void 0,p={unversionedId:"Advanced/export-import-existing-data",id:"Advanced/export-import-existing-data",title:"Export and import your data",description:"Export your data",source:"@site/user-guide/30-Advanced/16-export-import-existing-data.md",sourceDirName:"30-Advanced",slug:"/export-import-existing-data",permalink:"/user-guide/export-import-existing-data",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Export and import your data",slug:"/export-import-existing-data"},sidebar:"tutorialSidebar",previous:{title:"Writing Pioreactor scripts with Python",permalink:"/user-guide/intro-python-scripting"},next:{title:"Blue LED flashing & error codes",permalink:"/user-guide/error-codes"}},l={},c=[{value:"Export your data",id:"export-your-data",level:3},{value:"Import your data to a new, fresh, Pioreactor",id:"import-your-data-to-a-new-fresh-pioreactor",level:3}],s={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"export-your-data"},"Export your data"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We're here to help: we can offer email or live support, just email us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@pioreactor.com"},"hello@pioreactor.com"),".")),(0,a.kt)("p",null,"Here's how we suggest your workflow be."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Starting with your leader Pioreactor, make note of the name of it. The next steps will turn off all data collection, so do this outside of any running experiments.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.pioreactor.com/user-guide/accessing-raspberry-pi"},"SSH")," into the leader, and create a new file with:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"nano ~/export_data.sh\n")),(0,a.kt)("p",{parentName:"li"},"Paste the ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Pioreactor/pioreactor/develop/migration_scripts/export_data.sh"},"code linked here")," into the editor. ",(0,a.kt)("inlineCode",{parentName:"p"},"crtl-x")," to exit the editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run this export script with ",(0,a.kt)("inlineCode",{parentName:"p"},"bash export_data.sh"),". This creates an export file with all your experiment data, config files, Python plugins, profiles, etc. Exporting will take time proportional to how large your database is.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once the export file is finished being created, make note of the filename of the export. Locally, on the command line (or with FileZilla), download the file. You can do:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"# this is run on your local computer, i.e. the one you SSH from.\nscp pioreactor@<leader name>.local:/home/pioreactor/<filename of export> .\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Optional: do this for each Pioreactor worker in your cluster. Exporting workers will save data like calibrations, but we suggest you re-calibrate after anyways. Almost all important data, like historical experiments and logs, are stored on the leader, so you may be okay with just transferring leader data and wiping workers. It's up to you. Happy to chat further at ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@pioreactor.com"},"hello@pioreactor.com"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"With the export file(s) local, you may now proceed with re-imaging your Pioreactors, by following the same ",(0,a.kt)("a",{parentName:"p",href:"https://docs.pioreactor.com/user-guide/software-set-up"},"steps here"),". ",(0,a.kt)("strong",{parentName:"p"},"Important"),": choose the same Pioreactor hostnames!"))),(0,a.kt)("h3",{id:"import-your-data-to-a-new-fresh-pioreactor"},"Import your data to a new, fresh, Pioreactor"),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Once your new Pioreactor leader is running (check that you can access the UI at ",(0,a.kt)("a",{parentName:"li",href:"http://pioreactor.local"},"http://pioreactor.local"),"), we'll upload the export with:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"# this is run on your local computer\nscp <filename of export> pioreactor@<leader name>.local:/home/pioreactor/\n"))),(0,a.kt)("li",{parentName:"ol"},"You may receive an error: host key verification failed. Open the known_hosts file in your .ssh folder and delete the line containing your ",(0,a.kt)("inlineCode",{parentName:"li"},"<leader name>"),".\nWhen prompted, ",(0,a.kt)("inlineCode",{parentName:"li"},"Are you sure you want to continue connecting?")," enter ",(0,a.kt)("inlineCode",{parentName:"li"},"yes"),".\nEnter password ",(0,a.kt)("inlineCode",{parentName:"li"},"raspberry")," and continue.  "),(0,a.kt)("li",{parentName:"ol"},"SSH into the leader, and create a new file with:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"nano ~/import_data.sh\n")),"Paste the ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Pioreactor/pioreactor/develop/migration_scripts/import_data.sh"},"code linked here")," into the editor. ",(0,a.kt)("inlineCode",{parentName:"li"},"crtl-x")," to exit the editor."),(0,a.kt)("li",{parentName:"ol"},"Run this export script with ",(0,a.kt)("inlineCode",{parentName:"li"},"bash import_data.sh <filename of export>"),". The Pioreactor will update itself, and then perform a restart."),(0,a.kt)("li",{parentName:"ol"},"Once the Pioreactor is back online, you should see your old experiments in the UI."),(0,a.kt)("li",{parentName:"ol"},"Optional: If you exported your worker data, you can do the same thing."),(0,a.kt)("li",{parentName:"ol"},"You're done!")))}m.isMDXComponent=!0}}]);