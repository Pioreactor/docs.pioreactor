"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[7118],{76248:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=t(85893),i=t(11151);const n={title:"Overview",slug:"/web-ui-introduction"},s=void 0,a={id:"User interface/introduction",title:"Overview",description:"Every Pioreactor, either worker or leader, have a web server on them. However, only the leader has an associated website (ex//pioreactor.local). Here are the details:",source:"@site/developer-guide/20-User interface/01-introduction.md",sourceDirName:"20-User interface",slug:"/web-ui-introduction",permalink:"/developer-guide/web-ui-introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",slug:"/web-ui-introduction"},sidebar:"tutorialSidebar",previous:{title:"Adding behaviour to the HAT's button",permalink:"/developer-guide/hat-button"},next:{title:"API",permalink:"/developer-guide/web-ui-api"}},d={},l=[{value:"Web server",id:"web-server",level:3},{value:"Backend",id:"backend",level:3},{value:"Frontend",id:"frontend",level:3},{value:"DNS name resolution to <code>pioreactor.local</code>",id:"dns-name-resolution-to-pioreactorlocal",level:3},{value:"Updating and restarting the web UI",id:"updating-and-restarting-the-web-ui",level:3},{value:"Logs",id:"logs",level:3}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["Every Pioreactor, either worker or leader, have a web server on them. However, only the leader has an associated website (ex: ",(0,o.jsx)(r.a,{href:"http://pioreactor.local",children:"http://pioreactor.local"}),"). Here are the details:"]}),"\n",(0,o.jsx)(r.h3,{id:"web-server",children:"Web server"}),"\n",(0,o.jsxs)(r.p,{children:["The web server we use is lighttpd, and hosted from ",(0,o.jsx)(r.code,{children:"/var/www/pioreactorui"}),". This folder is actually a git repo, and pulls from ",(0,o.jsx)(r.a,{href:"https://github.com/pioreactor/pioreactorui",children:"pioreactorui"})," GH repo. Systemd controls starting and restarting lighttpd."]}),"\n",(0,o.jsxs)(r.p,{children:["The lighttpd conf file is located in ",(0,o.jsx)(r.code,{children:"/etc/lighttpd/conf-enabled/50-pioreactorui.conf"}),". Error logs (though not helpful) are in ",(0,o.jsx)(r.code,{children:"/var/log/lighttpd/error.log"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["The default protocol is ",(0,o.jsx)(r.code,{children:"http"})," served on port ",(0,o.jsx)(r.code,{children:"80"}),". To use ",(0,o.jsx)(r.code,{children:"https"})," requires a certificate, and is out of scope for this project. If you'd change the protocol or the port, you'll need up tell the software too: look in the config.ini under ",(0,o.jsx)(r.code,{children:"[ui]"})," section. ",(0,o.jsx)(r.a,{href:"/user-guide/networking#changing-web-ui-port-from-80-to-something-else",children:"How to change the web UI port"})]}),"\n",(0,o.jsx)(r.h3,{id:"backend",children:"Backend"}),"\n",(0,o.jsxs)(r.p,{children:["The backend app is a Flask app, with entry point in ",(0,o.jsx)(r.code,{children:"/var/www/pioreactorui/main.fcgi"}),". The app uses Huey as background workers to perform ",(0,o.jsx)(r.code,{children:"pio"})," tasks, save to disk, etc. Huey is controlled by systemd ",(0,o.jsx)(r.code,{children:"huey.service"}),". The API is ",(0,o.jsx)(r.a,{href:"/developer-guide/web-ui-api",children:"available here"})]}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["Both workers and leaders have this backend. However, workers only use expose the ",(0,o.jsx)(r.code,{children:"/unit_api/"})," endpoints. See full list ",(0,o.jsx)(r.a,{href:"/developer-guide/web-ui-api",children:"here"}),"."]})}),"\n",(0,o.jsx)(r.h3,{id:"frontend",children:"Frontend"}),"\n",(0,o.jsxs)(r.p,{children:["The frontend is a React app, built with Material UI. The source code is at ",(0,o.jsx)(r.a,{href:"https://github.com/Pioreactor/pioreactorui_frontend",children:"pioreactorui_frontend"}),'. A lot of the "data" for the frontend comes from YAML files on the RPi\'s filesystem. For example, all the charts, activities, and automations are defined in their own YAML file in a ',(0,o.jsx)(r.code,{children:"contrib"})," folder on the filesystem. This way, it's easy to add new data to the frontend without having to write new JS."]}),"\n",(0,o.jsx)(r.p,{children:"A lot of the live data"}),"\n",(0,o.jsxs)(r.h3,{id:"dns-name-resolution-to-pioreactorlocal",children:["DNS name resolution to ",(0,o.jsx)(r.code,{children:"pioreactor.local"})]}),"\n",(0,o.jsxs)(r.p,{children:["To allow for ",(0,o.jsx)(r.code,{children:"pioreactor.local"})," to be an alias for ",(0,o.jsx)(r.code,{children:"<leader hostname>.local"}),", we use mdns provided by ",(0,o.jsx)(r.code,{children:"avahi"}),". There is a systemd service, ",(0,o.jsx)(r.code,{children:"avahi_alias.service"}),", that will point ",(0,o.jsx)(r.code,{children:"pioreactor.local"})," to ",(0,o.jsx)(r.code,{children:"<leader hostname>.local"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"updating-and-restarting-the-web-ui",children:"Updating and restarting the web UI"}),"\n",(0,o.jsxs)(r.p,{children:["To update on the UI on Pioreactor leader, use ",(0,o.jsx)(r.code,{children:"pio update ui"}),". This also restarts the server."]}),"\n",(0,o.jsx)(r.p,{children:"To restart:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"sudo systemctl restart lighttp && sudo systemctl restart huey\n"})}),"\n",(0,o.jsx)(r.h3,{id:"logs",children:"Logs"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Start up logs from systemd are in ",(0,o.jsx)(r.code,{children:"sudo systemctl status lighttpd.service"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Logs for the backend and background workers are located in ",(0,o.jsx)(r.code,{children:"/var/log/pioreactor.log"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>s});var o=t(67294);const i={},n=o.createContext(i);function s(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);