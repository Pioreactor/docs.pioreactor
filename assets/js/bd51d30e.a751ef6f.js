"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[4529],{43559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(85893),r=n(11151);const a={title:"Adding behaviour to the HAT's button",slug:"/hat-button"},i=void 0,s={id:"Hardware/button-down",title:"Adding behaviour to the HAT's button",description:"You can add a hook to what happens when the button is pressed on the Pioreactor HAT. For example, you could do things like:",source:"@site/developer-guide/10-Hardware/06-button-down.md",sourceDirName:"10-Hardware",slug:"/hat-button",permalink:"/developer-guide/hat-button",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Adding behaviour to the HAT's button",slug:"/hat-button"},sidebar:"tutorialSidebar",previous:{title:"Pinout diagram",permalink:"/developer-guide/pinout"},next:{title:"Overview",permalink:"/developer-guide/web-ui-introduction"}},u={},d=[];function l(e){const t={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"You can add a hook to what happens when the button is pressed on the Pioreactor HAT. For example, you could do things like:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Flash an LED on when the button is pressed"}),"\n",(0,o.jsx)(t.li,{children:"Cycle media: turn on both media and waste pumps for as long as the button is compressed for"}),"\n",(0,o.jsx)(t.li,{children:"Pause a job, example: pause OD reading so you can take the vial out of the sleeve to inspect"}),"\n",(0,o.jsx)(t.li,{children:"Spike the culture via dosing"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["To do this, you need to write a small plugin that can be placed in the Pioreactor's ",(0,o.jsx)(t.code,{children:"/home/pioreactor/.pioreactor/plugins"})," folder. Here's an example on how to turn on LED channel B for as long as the button is compressed:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'"""\nThe background job Monitor is the job that listens to button state changes. There are hooks in that class\nto add callbacks for button down and button up.\n"""\nfrom pioreactor.background_jobs.monitor import  Monitor\nfrom pioreactor.actions.led_intensity import led_intensity\n\ndef on(*args):\n    led_intensity({\'B\': 20}, verbose=False, source_of_event="button")\n\ndef off(*args):\n    led_intensity({\'B\': 0}, verbose=False, source_of_event="button")\n\nMonitor.add_pre_button_callback(on)\nMonitor.add_post_button_callback(off)\n'})}),"\n",(0,o.jsx)(t.p,{children:"An example to pause a job over MQTT:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from pioreactor.background_jobs.monitor import  Monitor\nfrom pioreactor.pubsub import publish\nfrom pioreactor.whoami import get_latest_experiment_name, get_unit_name\n\ntarget="od_reading"\n\ndef pause(*args):\n    publish(f"pioreactor/{get_unit_name()}/{get_latest_experiment_name()}/{target}/$state/set", "sleeping")\n\ndef unpause(*args):\n    publish(f"pioreactor/{get_unit_name()}/{get_latest_experiment_name()}/{target}/$state/set", "ready")\n\nMonitor.add_pre_button_callback(pause)\nMonitor.add_post_button_callback(unpause)\n'})})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var o=n(67294);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);