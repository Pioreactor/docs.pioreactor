"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"API",slug:"/web-ui-api"},o=void 0,p={unversionedId:"User interface/api",id:"User interface/api",title:"API",description:"From python3 -m flask --debug --app main routes -s methods",source:"@site/developer-guide/20-User interface/02-api.md",sourceDirName:"20-User interface",slug:"/web-ui-api",permalink:"/developer-guide/web-ui-api",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"API",slug:"/web-ui-api"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/developer-guide/web-ui-introduction"},next:{title:"Adding basic time series charts",permalink:"/developer-guide/chart-to-ui"}},s={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Methods  Rule\n-------  ------------------------------------------------------\nDELETE   /api/configs/<filename>\nGET      /static/<path:filename>\nGET      /api/recent_logs\nGET      /api/time_series/growth_rates/<experiment>\nGET      /api/time_series/temperature_readings/<experiment>\nGET      /api/time_series/od_readings_filtered/<experiment>\nGET      /api/time_series/od_readings/<experiment>\nGET      /api/time_series/alt_media_fractions/<experiment>\nGET      /api/recent_media_rates\nGET      /api/calibration_types\nGET      /api/calibrations/<pioreactor_unit>/<calibration_type>\nGET      /api/installed_plugins\nGET      /api/contrib/automations/<automation_type>\nGET      /api/contrib/jobs\nGET      /api/contrib/charts\nGET      /api/app_version\nGET      /api/ui_version\nGET      /api/experiments\nGET      /api/experiments/latest\nGET      /api/current_unit_labels\nGET      /api/historical_organisms\nGET      /api/historical_media\nGET      /api/configs/<filename>\nGET      /api/configs\nGET      /api/historical_configs/<filename>\nGET      /api/is_local_access_point_active\nPOST     /api/stop_all\nPOST     /api/stop/<job>/<unit>\nPOST     /api/run/<job>/<unit>\nPOST     /api/reboot/<unit>\nPOST     /api/install_plugin\nPOST     /api/uninstall_plugin\nPOST     /api/update_app\nPOST     /api/export_datasets\nPOST     /api/experiments\nPOST     /api/add_new_pioreactor\nPUT      /api/current_unit_labels\nPUT      /api/experiment_desc\nPUT      /api/configs/<filename>\n")),(0,i.kt)("p",null,"From ",(0,i.kt)("inlineCode",{parentName:"p"},"python3 -m flask --debug --app main routes -s methods")))}u.isMDXComponent=!0}}]);