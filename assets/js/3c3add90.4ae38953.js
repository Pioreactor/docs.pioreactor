"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2084],{71279:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>_});var n=t(85893),r=t(11151);const a={title:"API",slug:"/web-ui-api"},p=void 0,o={id:"User interface/api",title:"API",description:"All endpoints",source:"@site/developer-guide/20-User interface/02-api.md",sourceDirName:"20-User interface",slug:"/web-ui-api",permalink:"/developer-guide/web-ui-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"API",slug:"/web-ui-api"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/developer-guide/web-ui-introduction"},next:{title:"Adding basic time series charts",permalink:"/developer-guide/chart-to-ui"}},s={},_=[{value:"All endpoints",id:"all-endpoints",level:3}];function l(e){const i={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"all-endpoints",children:"All endpoints"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"Endpoint                                 Methods      Rule\n---------------------------------------  -----------  -------------------------------------------------------------------------\nable_to_install_plugins_from_ui          GET          /api/allow_ui_installs\ncreate_or_update_new_calibrations        PUT          /api/calibrations\nget_available_calibrations_type_by_unit  GET          /api/calibrations/<pioreactor_unit>\nget_available_calibrations_of_type       GET          /api/calibrations/<pioreactor_unit>/<calibration_type>\nget_calibration_by_name                  GET          /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>\npatch_calibrations                       PATCH        /api/calibrations/<pioreactor_unit>/<calibration_type>/<calibration_name>\nget_current_calibrations_of_type         GET          /api/calibrations/<pioreactor_unit>/<calibration_type>/current\nget_custer_time                          GET          /api/cluster_time\nset_cluster_time                         POST         /api/cluster_time\nget_configs                              GET          /api/configs\nget_config                               GET          /api/configs/<filename>\nupdate_config                            PATCH        /api/configs/<filename>\nget_automation_contrib                   GET          /api/contrib/automations/<automation_type>\nget_charts_contrib                       GET          /api/contrib/charts\ncreate_experiment_profile                POST         /api/contrib/experiment_profiles\nedit_experiment_profile                  PATCH        /api/contrib/experiment_profiles\nget_experiment_profiles                  GET          /api/contrib/experiment_profiles\nget_experiment_profile                   GET          /api/contrib/experiment_profiles/<filename>\ndelete_experiment_profile                DELETE       /api/contrib/experiment_profiles/<filename>\nget_job_contrib                          GET          /api/contrib/jobs\nget_experiments                          GET          /api/experiments\ncreate_experiment                        POST         /api/experiments\ndelete_experiment                        DELETE       /api/experiments/<experiment>\nupdate_experiment                        PATCH        /api/experiments/<experiment>\nget_logs                                 GET          /api/experiments/<experiment>/logs\nget_media_rates                          GET          /api/experiments/<experiment>/media_rates\nget_fallback_time_series                 GET          /api/experiments/<experiment>/time_series/<data_source>/<column>\nget_growth_rates                         GET          /api/experiments/<experiment>/time_series/growth_rates\nget_od_readings                          GET          /api/experiments/<experiment>/time_series/od_readings\nget_od_readings_filtered                 GET          /api/experiments/<experiment>/time_series/od_readings_filtered\nget_temperature_readings                 GET          /api/experiments/<experiment>/time_series/temperature_readings\nget_unit_labels                          GET          /api/experiments/<experiment>/unit_labels\nupsert_unit_labels                       PUT          /api/experiments/<experiment>/unit_labels\nget_list_of_workers_for_experiment       GET          /api/experiments/<experiment>/workers\nadd_worker_to_experiment                 PUT          /api/experiments/<experiment>/workers\nremove_workers_from_experiment           DELETE       /api/experiments/<experiment>/workers\nremove_worker_from_experiment            DELETE       /api/experiments/<experiment>/workers/<pioreactor_unit>\nstop_all_in_experiment                   POST         /api/experiments/<experiment>/workers/stop\nget_experiments_worker_assignments       GET          /api/experiments/assignment_count\nget_latest_experiment                    GET          /api/experiments/latest\nexport_datasets                          POST         /api/export_datasets\nget_historical_config_for                GET          /api/historical_configs/<filename>\nget_historical_media_used                GET          /api/historical_media\nget_historical_organisms_used            GET          /api/historical_organisms\nis_local_access_point_active             GET          /api/is_local_access_point_active\ninstall_plugin                           POST         /api/plugins/install\nget_installed_plugins                    GET          /api/plugins/installed\nget_plugin                               GET          /api/plugins/installed/<filename>\nuninstall_plugin                         POST         /api/plugins/uninstall\nreboot_unit                              POST         /api/units/<pioreactor_unit>/reboot\nshutdown_unit                            POST         /api/units/<pioreactor_unit>/shutdown\nupdate_app                               POST         /api/update_app\nupdate_app_from_release_archive          POST         /api/update_app_from_release_archive\nupdate_app_to_develop                    POST         /api/update_app_to_develop\nupload                                   POST         /api/upload\nget_app_version                          GET          /api/versions/app\nget_ui_version                           GET          /api/versions/ui\nget_list_of_workers                      GET          /api/workers\nadd_worker                               PUT          /api/workers\ndelete_worker                            DELETE       /api/workers/<pioreactor_unit>\nget_worker                               GET          /api/workers/<pioreactor_unit>\nget_experiment_assignment_for_worker     GET          /api/workers/<pioreactor_unit>/experiment\nrun_job_on_unit                          PATCH, POST  /api/workers/<pioreactor_unit>/experiments/<experiment>/jobs/<job>/run\nstop_job_on_unit                         PATCH        /api/workers/<pioreactor_unit>/experiments/<experiment>/jobs/<job>/stop\nupdate_job_on_unit                       PATCH        /api/workers/<pioreactor_unit>/experiments/<experiment>/jobs/<job>/update\nget_logs_for_unit_and_experiment         GET          /api/workers/<pioreactor_unit>/experiments/<experiment>/logs\nstop_all_jobs_on_worker                  POST         /api/workers/<pioreactor_unit>/experiments/<experiment>/stop\nchange_worker_status                     PUT          /api/workers/<pioreactor_unit>/is_active\nget_workers_and_experiment_assignments   GET          /api/workers/assignments\nsetup_worker_pioreactor                  POST         /api/workers/setup\nstatic                                   GET          /static/<path:filename>\n"})}),"\n",(0,n.jsxs)(i.p,{children:["From ",(0,n.jsx)(i.code,{children:"python3 -m flask --debug --app main routes -s rule"})]})]})}function c(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>p});var n=t(67294);const r={},a=n.createContext(r);function p(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:p(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);