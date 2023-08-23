"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[1158],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11932:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const r={title:"Adding basic time series charts",slug:"/chart-to-ui"},o=void 0,l={unversionedId:"User interface/adding-charts",id:"User interface/adding-charts",title:"Adding basic time series charts",description:"You can add custom charts to the UI. Below is an example of adding a chart that displays historical and real-time CO2 sensor data.",source:"@site/developer-guide/20-User interface/03-adding-charts.md",sourceDirName:"20-User interface",slug:"/chart-to-ui",permalink:"/developer-guide/chart-to-ui",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Adding basic time series charts",slug:"/chart-to-ui"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/developer-guide/web-ui-api"},next:{title:"Adding a new calibration type",permalink:"/developer-guide/adding-calibration-type"}},s={},p=[{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can add custom charts to the UI. Below is an example of adding a chart that displays historical and real-time CO2 sensor data."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"custom chart of CO2 reading",src:a(89255).Z,width:"1444",height:"754"})),(0,n.kt)("h3",{id:"step-1"},"Step 1"),(0,n.kt)("p",null,"Create a yaml file with the following fields, and place it in ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/pioreactor/.pioreactor/plugins/ui/charts"),". (Plugins can put the yaml file under ",(0,n.kt)("inlineCode",{parentName:"p"},"ui/contrib/charts")," in there project folder - it will be added upon installation.)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chart_key"),": a unique identifier for the chart being added, string."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"data_source"),": the SQL table to read historical data from. The data source must have a ",(0,n.kt)("inlineCode",{parentName:"li"},"timestamp"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"pioreactor_unit"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"experiment")," column, along with a numeric column to plot (see below), string."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"data_source_column"),": the column in ",(0,n.kt)("inlineCode",{parentName:"li"},"data_source")," to read and display, string."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"title"),": title on the chart, string"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y_axis_label"),": the y-axis label, string"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fixed_decimals"),": How many decimals to display, integer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mqtt_topic"),": a truncated MQTT topic to read live data from - stripped of the ",(0,n.kt)("inlineCode",{parentName:"li"},"pioreactor/<unit>/<experiment>")," part. Ex: ",(0,n.kt)("inlineCode",{parentName:"li"},"co2_readings/ppm")," if the entire MQTT topic is ",(0,n.kt)("inlineCode",{parentName:"li"},"pioreactor/<unit>/<experiment>/co2_readings/ppm"),", string."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"payload_key"),": (Optional) If the MQTT topic is json blobs, use the ",(0,n.kt)("inlineCode",{parentName:"li"},"payload_key")," to retrieve the data from the blob, string."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"interpolation"),": (Optional) the interpolation to use between points, default is ",(0,n.kt)("inlineCode",{parentName:"li"},"stepAfter"),", string."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y_axis_domain"),": (Optional) specify a starting y-axis domain. Must be an array, like ",(0,n.kt)("inlineCode",{parentName:"li"},"[0.0, 0.5]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"y_transformation"),": (Optional) an inline JS function to transform the y data. Default is the identity function, string.")),(0,n.kt)("p",null,"See examples of yaml files ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/pioreactorui/tree/master/contrib/charts"},"here"),"."),(0,n.kt)("h3",{id:"step-2"},"Step 2"),(0,n.kt)("p",null,"In your config.ini, add your chart key under ",(0,n.kt)("inlineCode",{parentName:"p"},"[ui.overview.charts]")," and assign it 1. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[ui.overview.charts]\n# show/hide charts on the PioreactorUI dashboard\n# 1 is show, 0 is hide\n...\nco2_readings=1\n...\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(71539).Z,width:"1168",height:"942"})),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the UI stops displaying data, you may have introduced a yaml file that is not being read correctly. Check out the Pioreactor UI logs by sshing into the leader, and running:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"tail /var/log/pioreactorui.log\n")),"The last few lines should tell you about if a field is missing, a wrong type, etc."),(0,n.kt)("li",{parentName:"ul"},"There is a 30sec cache, so it may take up to 30sec to see new changes in the UI.")))}u.isMDXComponent=!0},71539:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/adding_chart_to_config-0a40556bd41c8cd70abdf292e4f2ef52.png"},89255:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom_chart-483a2cbf50e927eda0208ebab3521cae.png"}}]);