"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2114],{73099:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var s=a(85893),o=a(11151);const i={title:"Data stores in the Pioreactor",slug:"/data-stores"},r=void 0,n={id:"Storage and the filesystem/data-stores",title:"Data stores in the Pioreactor",description:"The Pioreactor has a few different ways to store data (depending on the requirements). They are:",source:"@site/developer-guide/09-Storage and the filesystem/01-data-stores.md",sourceDirName:"09-Storage and the filesystem",slug:"/data-stores",permalink:"/developer-guide/data-stores",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Data stores in the Pioreactor",slug:"/data-stores"},sidebar:"tutorialSidebar",previous:{title:"Custom & additional pumps for dosing automations",permalink:"/developer-guide/writing-pump-software"},next:{title:"Important locations on the filesystem",permalink:"/developer-guide/filesystem-locations"}},d={},l=[{value:"SQLite3",id:"sqlite3",level:2},{value:"Backups of the database",id:"backups-of-the-database",level:4},{value:"Key-value datastore",id:"key-value-datastore",level:4},{value:"MQTT",id:"mqtt",level:2},{value:"Serialization of MQTT messages",id:"serialization-of-mqtt-messages",level:4},{value:"Authentication",id:"authentication",level:4}];function c(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The Pioreactor has a few different ways to store data (depending on the requirements). They are:"}),"\n",(0,s.jsx)(t.h2,{id:"sqlite3",children:"SQLite3"}),"\n",(0,s.jsxs)(t.p,{children:["The most important datastore is the SQLite3 database on the ",(0,s.jsx)(t.em,{children:"leader"}),", located at ",(0,s.jsx)(t.code,{children:"/home/pioreactor/.pioreactor/storage/"}),". This database stores historical data, jobs changes, logs, experiments, etc. The background job ",(0,s.jsx)(t.code,{children:"mqtt_to_database_streaming"})," picks up data from MQTT (like OD readings), and puts them into the database."]}),"\n",(0,s.jsxs)(t.p,{children:["The CLI command ",(0,s.jsx)(t.code,{children:"pio db"})," will open up the SQLite terminal to query the database directly."]}),"\n",(0,s.jsx)(t.h4,{id:"backups-of-the-database",children:"Backups of the database"}),"\n",(0,s.jsxs)(t.p,{children:["The Pioreactor software will automatically backup the SQLite database via a scheduale ",(0,s.jsx)(t.code,{children:"cron"})," job. The backup is hosted locally on the Raspberry Pi, however if there if the cluster has active worker Pioreactors, the database backup is duplicated to (at most) two workers as well. This level of redundancy means that if the leader's microSD card fails, the database can be recovered from backups stored off the card."]}),"\n",(0,s.jsx)(t.h4,{id:"key-value-datastore",children:"Key-value datastore"}),"\n",(0,s.jsxs)(t.p,{children:["SQLite3 is also used by the library ",(0,s.jsx)(t.em,{children:"diskcache"}),'. This is essentially a fast key-value store on the Raspberry Pi. For Pioreactor, we use it to store "machine-specific" data, like calibration curves, locks on GPIOs, state of LEDs, jobs running, etc. Instead of one large file containing all these keys, we have split them into multiple locations based on category and level of persistence. The persistent databases are stored in ',(0,s.jsx)(t.code,{children:"/home/pioreactor/.pioreactor/storage"})," and the temporary databases are in ",(0,s.jsx)(t.code,{children:"/tmp"}),". You can access them from Python using ",(0,s.jsx)(t.code,{children:"pioreactor.utils.local_persistant_storage"})," and ",(0,s.jsx)(t.code,{children:"pioreactor.utils.local_intermittent_storage"}),", respectively."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["What are temporary and persistent? Something like GPIO locks or LED state are physically reset between cycles of the Raspberry Pi. So when the Pi power-cycles, the state is wiped, and by have the database in ",(0,s.jsx)(t.code,{children:"/tmp"}),", the databases are wiped as well."]})}),"\n",(0,s.jsxs)(t.p,{children:["You can use ",(0,s.jsx)(t.code,{children:"pio view-cache <name>"})," to view the contents of ",(0,s.jsx)(t.code,{children:"<name>"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"mqtt",children:"MQTT"}),"\n",(0,s.jsxs)(t.p,{children:["The inter- and intra-Pioreactor communications are handled by MQTT, a pub/sub service. The MQTT broker is on the leader Pioreactor (",(0,s.jsx)(t.code,{children:"pio mqtt"})," will stream the latest messages to your terminal). MQTT is used to transfer data between workers and leader, and even between process on the workers (ex: OD readings are created on worker, send to leader, and then sent back to worker's growth_rate_calculating job. This does create minor latency, and certainly more risk of data loss, but simplifies the design of the system overall)."]}),"\n",(0,s.jsx)(t.p,{children:"A principle we have stood by is to not let MQTT turn into our database. That is,"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["we shouldn't store important information in MQTT ",(0,s.jsx)(t.em,{children:"only"}),","]}),"\n",(0,s.jsx)(t.li,{children:'we shouldn\'t store information in MQTT that is "machine-specific",'}),"\n",(0,s.jsx)(t.li,{children:"we shouldn't use MQTT as a source of truth."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"serialization-of-mqtt-messages",children:"Serialization of MQTT messages"}),"\n",(0,s.jsxs)(t.p,{children:["Every 25 minutes (set by the MQTT configuration file), MQTT will serialize its ",(0,s.jsx)(t.em,{children:"retained"})," messages to disk."]}),"\n",(0,s.jsx)(t.h4,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsxs)(t.p,{children:["The Mosquitto broker has a username/password of ",(0,s.jsx)(t.code,{children:"pioreactor"})," / ",(0,s.jsx)(t.code,{children:"raspberry"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>n,a:()=>r});var s=a(67294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);