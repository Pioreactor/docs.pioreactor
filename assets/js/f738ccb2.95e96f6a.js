"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[3073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const a={title:"Adding your plugins to the web interface",slug:"/adding-plugins-to-ui"},r=void 0,s={unversionedId:"Plugins/adding-plugins-to-ui",id:"Plugins/adding-plugins-to-ui",title:"Adding your plugins to the web interface",description:"With custom background jobs or automations, the goal is to have it available in the web interface, so you and your users don't need to use the command line at all. We've built support for easily adding to the web interface.",source:"@site/developer-guide/07-Plugins/02-adding-plugins-to-ui.md",sourceDirName:"07-Plugins",slug:"/adding-plugins-to-ui",permalink:"/developer-guide/adding-plugins-to-ui",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Adding your plugins to the web interface",slug:"/adding-plugins-to-ui"},sidebar:"tutorialSidebar",previous:{title:"Working with plugins",permalink:"/developer-guide/intro-plugins"},next:{title:"Turning your plugins into a Python package to share",permalink:"/developer-guide/plugin-as-python-package"}},l={},u=[{value:"Background jobs and scripts",id:"background-jobs-and-scripts",level:2},{value:"Adding a custom background job to the list of activities",id:"adding-a-custom-background-job-to-the-list-of-activities",level:3},{value:"Adding a custom Python script to the list of activities",id:"adding-a-custom-python-script-to-the-list-of-activities",level:3},{value:"Automations",id:"automations",level:2},{value:"Adding a custom automation to the drop-down of automations",id:"adding-a-custom-automation-to-the-drop-down-of-automations",level:3},{value:"Charts",id:"charts",level:2},{value:"Adding a chart to display a new data source",id:"adding-a-chart-to-display-a-new-data-source",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With custom background jobs or automations, the goal is to have it available in the web interface, so you and your users don't need to use the command line at all. We've built support for easily adding to the web interface."),(0,o.kt)("p",null,"Based on whether your have created a background job, a script, or an automation, adding it to the UI only involves creating a yaml file and placing it in the correct directory."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You should have already added your plugin's Python code to your Pioreactor by some method presented ",(0,o.kt)("a",{parentName:"p",href:"/developer-guide/intro-plugins"},"here"),".")),(0,o.kt)("h2",{id:"background-jobs-and-scripts"},"Background jobs and scripts"),(0,o.kt)("h3",{id:"adding-a-custom-background-job-to-the-list-of-activities"},"Adding a custom background job to the list of activities"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(12713).Z,width:"1850",height:"1084"})),(0,o.kt)("p",null,"The list of activities, among other things, is sourced from either of two directories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/var/www/pioreactorui/contrib/jobs/"),', is the source of the "default" jobs'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/home/pioreactor/.pioreactor/plugins/ui/contrib/jobs"),", is a directory to put custom yaml files for jobs.")),(0,o.kt)("p",null,"Placing a new yaml file in either of these folders will populate the page with your new job. Here's an example ",(0,o.kt)("inlineCode",{parentName:"p"},"example.yaml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ndisplay_name: Name\njob_name: job_name_as_defined_in_Python\ndisplay: true  # true to display on the /Pioreactors card\nsource: your_plugin_name\ndescription: This description is displayed with the start/stop buttons in Manage / Activities.\npublished_settings:\n  - key: rpm   # as defined in Python\n    unit: RPM  #\n    label: Stirring speed # human readable name\n    description: This description is displayed with an editable field in Manage / Settings.\n    type: numeric  # one of numeric, bool, string, json\n    default: null\n    display: true # true to display on the /Pioreactors card\n  - key: something_else\n    unit: lb\n    label: Something else\n    description: This description is displayed with an editable switch in Manage / Settings.\n    type: bool # one of numeric, bool, string, json\n    default: null\n    display: true # true to display on the /Pioreactors card\n")),(0,o.kt)("p",null,"Saving it to either directory above, and refreshing the page:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(13527).Z,width:"1844",height:"1088"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3234).Z,width:"1838",height:"1080"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(63628).Z,width:"2010",height:"440"})),(0,o.kt)("h3",{id:"adding-a-custom-python-script-to-the-list-of-activities"},"Adding a custom Python script to the list of activities"),(0,o.kt)("p",null,"Placing a new yaml file in either of the following folders will populate the UI with your new job."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/var/www/pioreactorui/contrib/jobs/"),', is the source of the "default" jobs'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/home/pioreactor/.pioreactor/plugins/ui/contrib/jobs/"),", is a directory to put custom plugins.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ndisplay_name: Example Script\ndisplay: true\njob_name: my_script\nsource: Example Script\ndescription: Run my custom script.\npublished_settings: []\n")),(0,o.kt)("p",null,"See more information on the structure of your script ",(0,o.kt)("a",{parentName:"p",href:"/developer-guide/intro-plugins#scripts"},"here")),(0,o.kt)("h2",{id:"automations"},"Automations"),(0,o.kt)("h3",{id:"adding-a-custom-automation-to-the-drop-down-of-automations"},"Adding a custom automation to the drop-down of automations"),(0,o.kt)("p",null,"Suppose we wish to add our new automation, either installed from a package or via the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," folder, to the drop-down list of automations users can choose from:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(71753).Z,width:"1286",height:"1122"})),(0,o.kt)("p",null,"This list is sourced from yaml files located on the leader's Raspberry Pi, in either of two directories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/var/www/pioreactorui/contrib/automations/"),", is the source of the our built-in automations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/home/pioreactor/.pioreactor/plugins/ui/contrib/automations/{led,dosing,temperature}"),", is a directory to put yaml files for custom automations.")),(0,o.kt)("p",null,"Placing your yaml file in either folder above will populate the dropdown list in the UI with your new automation. Here's an example ",(0,o.kt)("inlineCode",{parentName:"p"},"example.yaml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ndisplay_name: My Automations Name  # human readable name\nautomation_name: my_automations_name   # the corresponding name of the automation from the Python code.\nsource: my_plugin_name\ndescription: Provide a meaningful description of what the automation does, when to use it, how it works...\nfields:\n  - key: duration  # key is the same as the keyword in the Python code.\n    default: 30\n    unit: min\n    label: Duration between events\n  - key: target_od\n    default: 1.5\n    unit: AU\n    label: Target OD\n  - key: volume\n    default: 0.75\n    unit: mL\n    label: Max volume\n  - key: intensity\n    default: 50\n    unit: "%"  # note: percent signs needs to be quoted.\n    label: Intensity of PWM\n')),(0,o.kt)("p",null,"If this file was saved to the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/pioreactor/.pioreactor/plugins/ui/automations/dosing"),", we would see the following in the web interface (after refreshing):"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(11667).Z,width:"1314",height:"1096"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1805).Z,width:"1280",height:"1098"})),(0,o.kt)("p",null,"More examples of automation ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/pioreactorui/tree/master/contrib/automations"},"yaml files here"),"."),(0,o.kt)("h2",{id:"charts"},"Charts"),(0,o.kt)("h3",{id:"adding-a-chart-to-display-a-new-data-source"},"Adding a chart to display a new data source"),(0,o.kt)("p",null,"If your plugin produces data (or is some novel transformation of existing data), you can also add a new chart to the Overview page. See documentation ",(0,o.kt)("a",{parentName:"p",href:"/developer-guide/chart-to-ui"},"here"),"."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the UI isn't display the data from your yaml, you may have introduced a yaml file that is not being read correctly. Look for error logs on the Overview page."),(0,o.kt)("li",{parentName:"ul"},"There is a 30sec cache, so it may take up to 30sec to see new changes in the UI.")))}c.isMDXComponent=!0},12713:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/activities-5d341f64a5d9ebcc0b558948fc9b98de.png"},13527:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/activities_with_example-d119be228fdbbd58acce37ab1fbaf129.png"},1805:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/automations_example-ce1734e24dd5d12c39533e911ab76c46.png"},63628:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/card_with_example-94398f0ba8b44158bf500784ed96bfc4.png"},71753:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dropdown_automations-c18aa39556f74acbf8b92088b6e36348.png"},11667:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dropdown_automations_with_example-6faf53d348f7dc3b5d7be98a79263c98.png"},3234:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/settings_with_example-e8cb50818e918606931a292e2b3eef97.png"}}]);