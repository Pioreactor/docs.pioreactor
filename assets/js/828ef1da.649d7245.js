"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[977],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,r[1]=u;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3691:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],u={},s="Adding your custom automation to the web interface",l={unversionedId:"Plugins/Adding your custom automation to the web interf",id:"Plugins/Adding your custom automation to the web interf",title:"Adding your custom automation to the web interface",description:"With custom background jobs or automations, the end-game is really to have it available in the web interface, so you and your users don't need to use the command line at all. We've built support for easily adding to the web interface.",source:"@site/developer_guide/04-Plugins/02-Adding your custom automation to the web interf.md",sourceDirName:"04-Plugins",slug:"/Plugins/Adding your custom automation to the web interf",permalink:"/developer_guide/Plugins/Adding your custom automation to the web interf",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to plugins",permalink:"/developer_guide/Plugins/Introduction to plugins"},next:{title:"Turning your automation in a Python package to share",permalink:"/developer_guide/Plugins/Turning your automation into a plugin"}},d=[{value:"Adding a custom automation to the drop-down of automations",id:"adding-a-custom-automation-to-the-drop-down-of-automations",children:[],level:3},{value:"Adding a custom background job to the list of activities",id:"adding-a-custom-background-job-to-the-list-of-activities",children:[],level:3}],c={toc:d};function p(e){var t=e.components,u=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adding-your-custom-automation-to-the-web-interface"},"Adding your custom automation to the web interface"),(0,a.kt)("p",null,"With custom background jobs or automations, the end-game is really to have it available in the web interface, so you and your users don't need to use the command line at all. We've built support for easily adding to the web interface."),(0,a.kt)("h3",{id:"adding-a-custom-automation-to-the-drop-down-of-automations"},"Adding a custom automation to the drop-down of automations"),(0,a.kt)("p",null,"Suppose we wish to add our new automation, either installed from a package or via the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," folder, to the drop-down list of automations users can choose from:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5395).Z})),(0,a.kt)("p",null,"This list is sourced from yaml files located on the leader's Raspberry Pi, under ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/pi/pioreactorui/backend/contrib/automations/"),". Placing a new yaml file in the correct folder there will populate the list with your new automation. Here's an example ",(0,a.kt)("inlineCode",{parentName:"p"},"example.yaml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ndisplay_name: My Automations Name  # human readable name\nautomation_name: my_automations_name   # the corresponding name of the automation from the Python code.\ndescription: Provide a meaningful description of what the automation does, when to use it, how it works...\nfields:\n  - key: duration  # key is the same as the keyword in the Python code.\n    default: 30\n    unit: min\n    label: Duration between events\n  - key: target_od\n    default: 1.5\n    unit: AU\n    label: Target OD\n  - key: volume\n    default: 0.75\n    unit: mL\n    label: Max volume\n  - key: intensity\n    default: 50\n    unit: "%"  # note: percent signs needs to be quoted.\n    label: Intensity of PWM\n')),(0,a.kt)("p",null,"If this file was saved to the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/pi/pioreactorui/backend/contrib/automations/dosing"),", we would see the following in the web interface (after refreshing):"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2355).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3547).Z})),(0,a.kt)("h3",{id:"adding-a-custom-background-job-to-the-list-of-activities"},"Adding a custom background job to the list of activities"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1366).Z})),(0,a.kt)("p",null,"The list of activities, among other things, is sourced from  ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/pi/pioreactorui/backend/contrib/jobs/")," on the leader's Raspberry Pi. Placing a new yaml file here will populate the list with your new automation. Here's an example ",(0,a.kt)("inlineCode",{parentName:"p"},"example.yaml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nname: Name\njob_name: job_name_as_defined_in_Python\ndisplay: true  # true to display on the /Pioreactors card\nsource: your_plugin_name\ndescription: This description is displayed with the start/stop buttons in Manage / Activities.\neditable_settings:\n  - key: rpm   # as defined in Python\n    unit: RPM  #\n    label: Stirring speed # human readable name\n    description: This description is displayed with an editable field in Manage / Settings.\n    type: numeric  # not used atm, but one of numeric, bool, text\n    default: null\n    display: true # true to display on the /Pioreactors card\n  - key: something_else\n    unit: lb\n    label: Something else\n    description: This description is displayed with an editable field in Manage / Settings.\n    type: numeric # not used atm, but one of numeric, bool, text\n    default: null\n    display: true # true to display on the /Pioreactors card\n")),(0,a.kt)("p",null,"Saving it to this folder, and refreshing the page:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9277).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9438).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(578).Z})))}p.isMDXComponent=!0},1366:function(e,t,n){t.Z=n.p+"assets/images/activities-5d341f64a5d9ebcc0b558948fc9b98de.png"},9277:function(e,t,n){t.Z=n.p+"assets/images/activities_with_example-d119be228fdbbd58acce37ab1fbaf129.png"},3547:function(e,t,n){t.Z=n.p+"assets/images/automations_example-ce1734e24dd5d12c39533e911ab76c46.png"},578:function(e,t,n){t.Z=n.p+"assets/images/card_with_example-94398f0ba8b44158bf500784ed96bfc4.png"},5395:function(e,t,n){t.Z=n.p+"assets/images/dropdown_automations-c18aa39556f74acbf8b92088b6e36348.png"},2355:function(e,t,n){t.Z=n.p+"assets/images/dropdown_automations_with_example-6faf53d348f7dc3b5d7be98a79263c98.png"},9438:function(e,t,n){t.Z=n.p+"assets/images/settings_with_example-e8cb50818e918606931a292e2b3eef97.png"}}]);