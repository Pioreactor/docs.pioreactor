"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[8909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Local development of Pioreactor",slug:"/local-development"},i=void 0,l={unversionedId:"Local development/local-development",id:"Local development/local-development",title:"Local development of Pioreactor",description:"Local development",source:"@site/developer-guide/30-Local development/01-local-development.md",sourceDirName:"30-Local development",slug:"/local-development",permalink:"/developer-guide/local-development",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Local development of Pioreactor",slug:"/local-development"},sidebar:"tutorialSidebar",previous:{title:"Adding basic time series charts",permalink:"/developer-guide/chart-to-ui"},next:{title:"The Big Architecture Picture",permalink:"/developer-guide/architecture"}},p={},c=[{value:"Local development",id:"local-development",level:3},{value:"MQTT",id:"mqtt",level:3},{value:"Running jobs locally",id:"running-jobs-locally",level:3},{value:"Testing",id:"testing",level:3},{value:"Plugins development",id:"plugins-development",level:3},{value:"Raspberry Pi Images",id:"raspberry-pi-images",level:3}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"local-development"},"Local development"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Confirm that Python3 is installed, and is greater or equal to version 3.9. ",(0,o.kt)("inlineCode",{parentName:"li"},"python3 --version")," will print the version."),(0,o.kt)("li",{parentName:"ol"},"To install the Pioreactor codebase locally, it should be enough to clone the repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pioreactor/pioreactor"},"pioreactor/pioreactor"),".",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/Pioreactor/pioreactor.git && cd pioreactor\n"))),(0,o.kt)("li",{parentName:"ol"},"Install the core software are necessary packages (useful to do this in a virtualenv!):",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"pip3 install -e .\npip3 install -r requirements/requirements_dev.txt\n"))),(0,o.kt)("li",{parentName:"ol"},"In the pioreactor folder, create a folder called ",(0,o.kt)("inlineCode",{parentName:"li"},".pioreactor/")," and ",(0,o.kt)("inlineCode",{parentName:"li"},".pioreactor/storage"),".",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mkdir .pioreactor\nmkdir .pioreactor/storage\n"))),(0,o.kt)("li",{parentName:"ol"},"The configuration file that is used is ",(0,o.kt)("inlineCode",{parentName:"li"},"config.dev.ini"),", and is provided  in the repository.")),(0,o.kt)("h3",{id:"mqtt"},"MQTT"),(0,o.kt)("p",null,"You will need to install MQTT and have a broker running locally. On OSX, homebrew can be used to install the MQTT broker ",(0,o.kt)("em",{parentName:"p"},"mosquitto"),". On Windows, it can be installed ",(0,o.kt)("a",{parentName:"p",href:"https://mosquitto.org/download/"},"from this download page"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("em",{parentName:"p"},"mosquitto")," broker should be running whenever you invoke the Pioreactor software locally, else you'll likely get some ",(0,o.kt)("em",{parentName:"p"},"connection refused")," error.")),(0,o.kt)("p",null,"The CLI tools ",(0,o.kt)("inlineCode",{parentName:"p"},"mosquitto_pub")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mosquitto_sub")," should work as well."),(0,o.kt)("h3",{id:"running-jobs-locally"},"Running jobs locally"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"With ",(0,o.kt)("inlineCode",{parentName:"strong"},"pio"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TESTING=1 pio run <job name>\n")),(0,o.kt)("p",null,"You can also modify to hostname and experiment with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TESTING=1 \\\nHOSTNAME=<whatever> \\\nEXPERIMENT=<up to you> \\\npio run <job name>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"With ",(0,o.kt)("inlineCode",{parentName:"strong"},"python"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TESTING=1 python <your script>.py\n")),(0,o.kt)("p",null,"You can also modify to hostname and experiment with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TESTING=1 \\\nHOSTNAME=<whatever> \\\nEXPERIMENT=<up to you> \\\npython <your script>.py\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If invoking from a different directory from ",(0,o.kt)("inlineCode",{parentName:"p"},"pioreactor/"),", you'll need to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.dev.ini")," file locally. I usually copy my ",(0,o.kt)("inlineCode",{parentName:"p"},"pioreactor/config.dev.ini")," to wherever I am working.")),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"py.test pioreactor/tests\n")),(0,o.kt)("h3",{id:"plugins-development"},"Plugins development"),(0,o.kt)("p",null,"Create a folder in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pioreactor")," folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins_dev"),". In this folder, you can place python files that will run whenever ",(0,o.kt)("inlineCode",{parentName:"p"},"pio")," is invoked (similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," folder at ",(0,o.kt)("inlineCode",{parentName:"p"},".pioreactor/plugins")," on the Raspberry Pi, see ",(0,o.kt)("a",{parentName:"p",href:"/developer-guide/intro-plugins#1-adding-python-files-to-plugins-folder"},"docs here"),")"),(0,o.kt)("h3",{id:"raspberry-pi-images"},"Raspberry Pi Images"),(0,o.kt)("p",null,"Raspberry Pi images are built in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/CustoPiZer/tree/pioreactor"},"Pioreactor/CustoPizer")," repo, though these aren't needed for development."))}s.isMDXComponent=!0}}]);