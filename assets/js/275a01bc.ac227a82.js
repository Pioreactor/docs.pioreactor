"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[935],{10425:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=t(85893),r=t(11151);const s={title:"Adding basic time series charts",slug:"/chart-to-ui"},a=void 0,o={id:"User interface/adding-charts",title:"Adding basic time series charts",description:"You can add custom charts to the UI. Below is an example of adding a chart that displays historical and real-time CO2 sensor data.",source:"@site/developer-guide/20-User interface/04-adding-charts.md",sourceDirName:"20-User interface",slug:"/chart-to-ui",permalink:"/developer-guide/chart-to-ui",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Adding basic time series charts",slug:"/chart-to-ui"},sidebar:"tutorialSidebar",previous:{title:"Examples of using the API",permalink:"/developer-guide/examples-api"},next:{title:"Adding a new calibration type",permalink:"/developer-guide/adding-calibration-type"}},c={},d=[{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}];function l(e){const i={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"You can add custom charts to the UI. Below is an example of adding a chart that displays historical and real-time CO2 sensor data."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"custom chart of CO2 reading",src:t(89255).Z+"",width:"1444",height:"754"})}),"\n",(0,n.jsx)(i.h3,{id:"step-1",children:"Step 1"}),"\n",(0,n.jsxs)(i.p,{children:["Create a yaml file with the following fields, and place it in ",(0,n.jsx)(i.code,{children:"/home/pioreactor/.pioreactor/plugins/ui/contrib/charts"}),". (Plugins can put the yaml file under ",(0,n.jsx)(i.code,{children:"ui/contrib/charts"})," in there project folder - it will be added upon installation.)"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"chart_key"}),": a unique identifier for the chart being added, string."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"data_source"}),": the SQL table to read historical data from. The data source must have a ",(0,n.jsx)(i.code,{children:"timestamp"}),", ",(0,n.jsx)(i.code,{children:"pioreactor_unit"}),", and ",(0,n.jsx)(i.code,{children:"experiment"})," column, along with a numeric column to plot (see below), string."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"data_source_column"}),": the column in ",(0,n.jsx)(i.code,{children:"data_source"})," to read and display, string."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"title"}),": title on the chart, string"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"y_axis_label"}),": the y-axis label, string"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"fixed_decimals"}),": How many decimals to display, integer."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"mqtt_topic"}),": a truncated MQTT topic to read live data from - stripped of the ",(0,n.jsx)(i.code,{children:"pioreactor/<unit>/<experiment>"})," part. Ex: ",(0,n.jsx)(i.code,{children:"co2_readings/ppm"})," if the entire MQTT topic is ",(0,n.jsx)(i.code,{children:"pioreactor/<unit>/<experiment>/co2_readings/ppm"}),", string."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"payload_key"}),": (Optional) If the MQTT topic is json blobs, use the ",(0,n.jsx)(i.code,{children:"payload_key"})," to retrieve the data from the blob, string."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"interpolation"}),": (Optional) the interpolation to use between points, default is ",(0,n.jsx)(i.code,{children:"stepAfter"}),", string."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"y_axis_domain"}),": (Optional) specify a starting y-axis domain. Must be an array, like ",(0,n.jsx)(i.code,{children:"[0.0, 0.5]"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"y_transformation"}),": (Optional) an inline JS function to transform the y data. Default is the identity function, string."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["See examples of yaml files ",(0,n.jsx)(i.a,{href:"https://github.com/Pioreactor/pioreactorui/tree/master/contrib/charts",children:"here"})," and ",(0,n.jsx)(i.a,{href:"https://forum.pioreactor.com/t/creating-stirring-rpm-and-pwm-duty-cycle-charts-on-the-ui/339",children:"here"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"step-2",children:"Step 2"}),"\n",(0,n.jsxs)(i.p,{children:["In your config.ini, add your chart key under ",(0,n.jsx)(i.code,{children:"[ui.overview.charts]"})," and assign it 1. Example:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"[ui.overview.charts]\n# show/hide charts on the PioreactorUI dashboard\n# 1 is show, 0 is hide\n...\nco2_readings=1\n...\n"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:t(71539).Z+"",width:"1168",height:"942"})}),"\n",(0,n.jsx)(i.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"If the UI stops displaying data, you may have introduced a yaml file that is not being read correctly. Check out the Pioreactor UI logs by sshing into the leader, and running:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"tail /var/log/pioreactorui.log\n"})}),"\n",(0,n.jsx)(i.p,{children:"The last few lines should tell you about if a field is missing, a wrong type, etc."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"There is a 30sec cache, so it may take up to 30sec to see new changes in the UI."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},71539:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/adding_chart_to_config-0a40556bd41c8cd70abdf292e4f2ef52.png"},89255:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/custom_chart-483a2cbf50e927eda0208ebab3521cae.png"},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>a});var n=t(67294);const r={},s=n.createContext(r);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);