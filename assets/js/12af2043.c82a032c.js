"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[9631],{43483:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(85893),n=t(11151);const i={title:"Hardware and operation",slug:"/troubleshooting-hardware"},s=void 0,a={id:"Troubleshooting/Hardware troubleshooting",title:"Hardware and operation",description:"My Pioreactor isn't responsive anymore",source:"@site/user-guide/50-Troubleshooting/Hardware troubleshooting.md",sourceDirName:"50-Troubleshooting",slug:"/troubleshooting-hardware",permalink:"/user-guide/troubleshooting-hardware",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Hardware and operation",slug:"/troubleshooting-hardware"},sidebar:"tutorialSidebar",previous:{title:"Blue LED flashing & error codes",permalink:"/user-guide/error-codes"},next:{title:"Power and restarts",permalink:"/user-guide/troubleshooting-power"}},c={},l=[{value:"My Pioreactor isn&#39;t responsive anymore",id:"my-pioreactor-isnt-responsive-anymore",level:3},{value:"I see a &quot;Pioreactor HAT must be present&quot; error, but the HAT is definitely attached.",id:"i-see-a-pioreactor-hat-must-be-present-error-but-the-hat-is-definitely-attached",level:3},{value:"I see &quot;The internal ADC/DAC is not responding. Exiting.&quot;",id:"i-see-the-internal-adcdac-is-not-responding-exiting",level:3},{value:"I see &quot;Heating PCB must be attached to Pioreactor HAT&quot; or Heating PCB must be present to measure RPM.&quot; errors.",id:"i-see-heating-pcb-must-be-attached-to-pioreactor-hat-or-heating-pcb-must-be-present-to-measure-rpm-errors",level:3},{value:"I&#39;m having trouble with Pioreactor&#39;s stirring.",id:"im-having-trouble-with-pioreactors-stirring",level:3}];function h(e){const r={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h3,{id:"my-pioreactor-isnt-responsive-anymore",children:"My Pioreactor isn't responsive anymore"}),"\n",(0,o.jsxs)(r.p,{children:["If your Pioreactor stops being responsive (and ",(0,o.jsx)(r.em,{children:"was previously working"}),"),"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["For Raspberry Pi 3A model, is the Pi's green LED constantly on?","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"there should be a short, perhaps caused by damage. Power off, and disconnect the heater PCB's flat-flex cable from the HAT (unlock, and pull straight out), and power on. Is the Pioreactor responsive now? Investigate the heater PCB for damage."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"i-see-a-pioreactor-hat-must-be-present-error-but-the-hat-is-definitely-attached",children:'I see a "Pioreactor HAT must be present" error, but the HAT is definitely attached.'}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Is your HAT directly connected to the Raspberry Pi, or are you using a long cable to connect them? Long cables tend to degrade signals, which can cause communication problems between the HAT and RPi."}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"i-see-the-internal-adcdac-is-not-responding-exiting",children:'I see "The internal ADC/DAC is not responding. Exiting."'}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/user-guide/accessing-raspberry-pi",children:"SSH"})," into the Pioreactor that's causing problems. Run ",(0,o.jsx)(r.code,{children:"pio version -v"}),". Does the ",(0,o.jsx)(r.code,{children:"firmware"})," section say ",(0,o.jsx)(r.code,{children:"0.0"}),"? If so, run ",(0,o.jsx)(r.code,{children:"sudo systemctl restart load_rp2040.service"}),". Try ",(0,o.jsx)(r.code,{children:"pio version -v"})," again. Continue below if ",(0,o.jsx)(r.code,{children:"firmware"})," still says ",(0,o.jsx)(r.code,{children:"0.0"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Disconnect the heater PCB's flat-flex cable from the HAT (unlock, and pull straight out). Try ",(0,o.jsx)(r.code,{children:"pio version -v"})," again. If this shows something other than ",(0,o.jsx)(r.code,{children:"0.0"})," beside firmware, there could be a problem with your heater PCB. Email us at ",(0,o.jsx)(r.a,{href:"mailto:help@pioreactor.com",children:"help@pioreactor.com"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["See section ",(0,o.jsx)(r.a,{href:"/user-guide/troubleshooting-Hardware#my-pioreactor-isnt-responsive-anymore",children:"above"}),"."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"i-see-heating-pcb-must-be-attached-to-pioreactor-hat-or-heating-pcb-must-be-present-to-measure-rpm-errors",children:'I see "Heating PCB must be attached to Pioreactor HAT" or Heating PCB must be present to measure RPM." errors.'}),"\n",(0,o.jsx)(r.p,{children:"Check the connection between the 3\" flat-flex-cable and the HAT, and the connection on the heater PCB. It's possible that the connector could have been pulled out by accident."}),"\n",(0,o.jsx)(r.h3,{id:"im-having-trouble-with-pioreactors-stirring",children:"I'm having trouble with Pioreactor's stirring."}),"\n",(0,o.jsxs)(r.p,{children:["See our ",(0,o.jsx)(r.a,{href:"/user-guide/troubleshooting-stirring",children:"stirring troubleshooting docs"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>s});var o=t(67294);const n={},i=o.createContext(n);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);