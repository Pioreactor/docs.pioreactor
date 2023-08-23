"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2084],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},_="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),_=s(i),d=r,g=_["".concat(l,".").concat(d)]||_[d]||u[d]||a;return i?n.createElement(g,o(o({ref:t},c),{},{components:i})):n.createElement(g,o({ref:t},c))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[_]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<a;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},44645:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=i(87462),r=(i(67294),i(3905));const a={title:"API",slug:"/web-ui-api"},o=void 0,p={unversionedId:"User interface/api",id:"User interface/api",title:"API",description:"All endpoints",source:"@site/developer-guide/20-User interface/02-api.md",sourceDirName:"20-User interface",slug:"/web-ui-api",permalink:"/developer-guide/web-ui-api",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"API",slug:"/web-ui-api"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/developer-guide/web-ui-introduction"},next:{title:"Adding basic time series charts",permalink:"/developer-guide/chart-to-ui"}},l={},s=[{value:"All endpoints",id:"all-endpoints",level:3}],c={toc:s},_="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(_,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"all-endpoints"},"All endpoints"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Endpoint                                 Methods  Rule\n---------------------------------------  -------  -------------------------------------------------------------------------\nadd_new_pioreactor                       POST     /api/add_new_pioreactor\nget_app_version                          GET      /api/app_version\ncreate_new_calibrations                  PUT      /api/calibrations\nget_available_calibrations_type_by_unit  GET      /api/calibrations/<pioreactor_unit>\nget_available_calibrations_of_type       GET      /api/calibrations/<pioreactor_unit>/<calibration_type>\nget_calibrations_of_type                 GET      /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>\npatch_calibrations                       PATCH    /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>\nget_current_calibrations_of_type         GET      /api/calibrations/<pioreactor_unit>/<calibration_type>/current\nget_configs                              GET      /api/configs\nget_config                               GET      /api/configs/<filename>\ndelete_config                            DELETE   /api/configs/<filename>\nupdate_new_config                        PATCH    /api/configs/<filename>\nget_automation_contrib                   GET      /api/contrib/automations/<automation_type>\nget_charts_contrib                       GET      /api/contrib/charts\nget_job_contrib                          GET      /api/contrib/jobs\nget_experiments                          GET      /api/experiments\ncreate_experiment                        POST     /api/experiments\nupdate_experiment_description            PATCH    /api/experiments/<experiment>\nget_latest_experiment                    GET      /api/experiments/latest\nexport_datasets                          POST     /api/export_datasets\nget_historical_config_for                GET      /api/historical_configs/<filename>\nget_historical_media_used                GET      /api/historical_media\nget_historical_organisms_used            GET      /api/historical_organisms\ninstall_plugin                           POST     /api/install_plugin\nget_installed_plugins                    GET      /api/installed_plugins\nget_plugin                               GET      /api/installed_plugins/<filename>\nis_local_access_point_active             GET      /api/is_local_access_point_active\nget_logs                                 GET      /api/logs/<experiment>\nget_recent_logs                          GET      /api/logs/recent\nget_current_media_rates                  GET      /api/media_rates/current\nreboot_unit                              POST     /api/reboot/<unit>\nrun_job_on_unit                          POST     /api/run/<unit>/<job>\nstop_job_on_unit                         POST     /api/stop/<unit>/<job>\nstop_all                                 POST     /api/stop_all\nget_fallback_time_series                 GET      /api/time_series/<data_source>/<experiment>/<column>\nget_growth_rates                         GET      /api/time_series/growth_rates/<experiment>\nget_od_readings                          GET      /api/time_series/od_readings/<experiment>\nget_od_readings_filtered                 GET      /api/time_series/od_readings_filtered/<experiment>\nget_temperature_readings                 GET      /api/time_series/temperature_readings/<experiment>\nget_ui_version                           GET      /api/ui_version\nuninstall_plugin                         POST     /api/uninstall_plugin\nget_current_unit_labels                  GET      /api/unit_labels/<experiment>\nupsert_current_unit_labels               PUT      /api/unit_labels/current\nupdate_app                               POST     /api/update_app\nstatic                                   GET      /static/<path:filename>\n")),(0,r.kt)("p",null,"From ",(0,r.kt)("inlineCode",{parentName:"p"},"python3 -m flask --debug --app main routes -s rule")))}u.isMDXComponent=!0}}]);