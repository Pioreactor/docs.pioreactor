"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[9344],{98067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=n(85893),i=n(11151);const s={title:"LED automations",slug:"/led-automations"},a=void 0,r={id:"Automations/led-automations",title:"LED automations",description:"LED automations are ways to automatically control the 4 available LEDs in the Pioreactor. These LEDs can be used as a light source for photosynthetic microbes, influence the environment of the microbes, as additional sensors, or improve existing sensors.",source:"@site/user-guide/29-Automations/03-led-automations.md",sourceDirName:"29-Automations",slug:"/led-automations",permalink:"/user-guide/led-automations",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"LED automations",slug:"/led-automations"},sidebar:"tutorialSidebar",previous:{title:"Dosing automations",permalink:"/user-guide/dosing-automations"},next:{title:"Writing your own automations",permalink:"/user-guide/write-own-automations"}},l={},c=[{value:"Silent",id:"silent",level:3},{value:"Light/Dark cycle",id:"lightdark-cycle",level:3}];function u(e){const t={code:"code",h3:"h3",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"LED automations are ways to automatically control the 4 available LEDs in the Pioreactor. These LEDs can be used as a light source for photosynthetic microbes, influence the environment of the microbes, as additional sensors, or improve existing sensors."}),"\n",(0,o.jsx)(t.h3,{id:"silent",children:"Silent"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Requires:"})," None"]}),"\n",(0,o.jsxs)(t.p,{children:['The silent automation is the simplest automation: doing nothing. The automation will still "wake up" every ',(0,o.jsx)(t.code,{children:"duration"})," minutes, but does nothing."]}),"\n",(0,o.jsx)(t.h3,{id:"lightdark-cycle",children:"Light/Dark cycle"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Requires:"})," up to 2 LEDs, in channels C and D."]}),"\n",(0,o.jsxs)(t.p,{children:["This automation will turn the LEDs in channels C & D on and off on a predetermined scheduale, specified by ",(0,o.jsx)(t.code,{children:"light_duration_minutes"})," and ",(0,o.jsx)(t.code,{children:"dark_duration_minutes"}),". The intensity of the LED is given by ",(0,o.jsx)(t.code,{children:"light_intensity"}),". The LEDs start ON. Note: ",(0,o.jsx)(t.code,{children:"duration"})," is permanently set to be 1 minute."]}),"\n",(0,o.jsx)(t.p,{children:"The LEDs should go in pockets X2 and X3 on the Pioreactor."})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(67294);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);