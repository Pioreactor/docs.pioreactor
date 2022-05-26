"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[5377],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(d,o(o({ref:e},l),{},{components:n})):r.createElement(d,o({ref:e},l))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8718:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],u={title:"Activities",slug:"/activities"},s=void 0,p={unversionedId:"Experiment preparation/Activities",id:"Experiment preparation/Activities",title:"Activities",description:"Below is a list of activities that come available with the Pioreactor. Activities can be added with plugins, as well. Read more about using plugins.",source:"@site/user-guide/02-Experiment preparation/07-Activities.md",sourceDirName:"02-Experiment preparation",slug:"/activities",permalink:"/user-guide/activities",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Activities",slug:"/activities"},sidebar:"tutorialSidebar",previous:{title:"Running a self-test",permalink:"/user-guide/running-self-test"},next:{title:"Exporting data",permalink:"/user-guide/export-data"}},l={},c=[],m={toc:c};function g(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Below is a list of activities that come available with the Pioreactor. Activities can be added with plugins, as well. ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/using-community-plugins"},"Read more about using plugins"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Stirring"),": this starts the stirring in the Pioreactor. After starting stirring, you can change the stirring speed in the Settings tab. The default stirring speed can be changed in the configuration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optical density"),": this turns on the system that measures culture density. Readings will start to populate the ",(0,i.kt)("em",{parentName:"p"},"Experiment Overview")," page. It's useful to inspect the first few minutes of readings to ensure things look okay (ex: nothing appears too wild, stirring is not too fast or slow, etc.).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Growth Rate"),": this activity requires that stirring and optical density be running as well. This starts the calculation of a normalized optical density, and the implied growth rate. Both calculations will populate the ",(0,i.kt)("em",{parentName:"p"},"Experiment Overview")," page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Temperature automation"),": turning on a temperature automation will start collecting temperature readings. For example, the ",(0,i.kt)("strong",{parentName:"p"},"Stable")," automation will use a feedback loop to stabilize the Pioreactor to a set temperature. Pausing an automation will stop any active heating ",(0,i.kt)("em",{parentName:"p"},"and"),' stop temperature data collection. Stopping an automation will stop the heating and temperature collection. To change a running temperature automation, use the "Change Temperature Automation" button. Read more about specific ',(0,i.kt)("a",{parentName:"p",href:"/user-guide/temperature-automations"},"temperature automations"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dosing automation"),": turning on a dosing automation to start listening periodically for dosing triggers. A dosing automation requires at least 1 pump to be available and calibrated. ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/using-pumps"},"More about using pumps"),". Pausing a dosing automation will stop any currently, and future, dosing occurring until the automation is unpaused. Read more about the different types of ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/dosing-automations"},"dosing automations"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"LED automation"),": turning on a LED automation to start listening periodically for LED change triggers. Read more about ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/led-automations"},"LED automations"),"."))))}g.isMDXComponent=!0}}]);