"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[4066],{8858:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=o(85893),t=o(11151);const r={title:"Working with plugins",slug:"/intro-plugins"},s=void 0,a={id:"Plugins/intro-plugins",title:"Working with plugins",description:"Pioreactor plugins are a way to distribute code to others (or yourself), and avoid having to use the command line each time you invoke your custom code - you should be able to just use the web interface.",source:"@site/developer-guide/07-Plugins/01-intro-plugins.md",sourceDirName:"07-Plugins",slug:"/intro-plugins",permalink:"/developer-guide/intro-plugins",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Working with plugins",slug:"/intro-plugins"},sidebar:"tutorialSidebar",previous:{title:"Writing scripts",permalink:"/developer-guide/writing-scripts"},next:{title:"Adding your plugins to the web interface",permalink:"/developer-guide/adding-plugins-to-ui"}},l={},d=[{value:"1. Adding Python files to <code>plugins</code> folder",id:"1-adding-python-files-to-plugins-folder",level:2},{value:"Custom background jobs",id:"custom-background-jobs",level:3},{value:"Custom scripts",id:"custom-scripts",level:3},{value:"Custom automations",id:"custom-automations",level:3},{value:"2. <code>pip</code>-installable plugins",id:"2-pip-installable-plugins",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Pioreactor plugins are a way to distribute code to others (or yourself), and avoid having to use the command line each time you invoke your custom code - you should be able to just use the web interface."}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to distribute a plugin:"}),"\n",(0,i.jsxs)(n.h2,{id:"1-adding-python-files-to-plugins-folder",children:["1. Adding Python files to ",(0,i.jsx)(n.code,{children:"plugins"})," folder"]}),"\n",(0,i.jsxs)(n.p,{children:["On each Pioreactor's Raspberry Pi is a folder at ",(0,i.jsx)(n.code,{children:"/home/pioreactor/.pioreactor/plugins"}),". When the Pioreactor software starts, any Python files in this folder are read and loaded into memory. If you were to include an automation in here, or a background job (with the ",(0,i.jsx)(n.code,{children:"click"})," CLI component), they would be available globally."]}),"\n",(0,i.jsx)(n.p,{children:"Why would you want to distribute code this way? It's a great way to test or develop your code instead of committing to other distribution methods: short iterations times, tight feedback loop, and code runs in the production environment. Two downsides are that it's harder to distribute your code to the rest of the community, and that it doesn't have the same deployment pipeline (adding configs, etc.)"}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsxs)(n.p,{children:["The Pioreactor software will load and run each Python file in ",(0,i.jsx)(n.code,{children:"/plugins"})," on each invocation of ",(0,i.jsx)(n.code,{children:"pio"}),". Don't have long-running or blocking code without wrapping it in a function or ",(0,i.jsx)(n.code,{children:'if __name__ == "__main__"'}),". For example:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# my plugin code.py\n#\u274c don't do this\nimport time\n\ntime.sleep(100)\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# \u2705 this is okay\nimport time\n\ndef sleep():\n    time.sleep(100)\n\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# \u2705 also is okay\nimport time\n\nif __name__ == "__main__":\n    time.sleep(100)\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"custom-background-jobs",children:"Custom background jobs"}),"\n",(0,i.jsxs)(n.p,{children:["Here's an example: place the following code into the file ",(0,i.jsx)(n.code,{children:"/home/pioreactor/.pioreactor/plugins/demo_job.py"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="/home/pioreactor/.pioreactor/plugins/demo_job.py"',children:'# -*- coding: utf-8 -*-\nimport click\nfrom pioreactor.whoami import get_unit_name, get_assigned_experiment_name\nfrom pioreactor.background_jobs.base import BackgroundJob\n\n__plugin_summary__ = "Just a demo job"\n__plugin_version__ = "0.0.1"\n__plugin_name__ = "Demo job"\n__plugin_author__ = "Cam Davidson-Pilon"\n__plugin_homepage__ = "https://docs.pioreactor.com"\n\n\nclass DemoJob(BackgroundJob):\n\n    job_name="demo_job"\n\n    def __init__(self, unit, experiment, **kwargs):\n        super().__init__(unit=unit, experiment=experiment)\n\n    def on_ready(self):\n        self.logger.debug("Hello, world!")\n\n    def on_disconnected(self):\n        self.logger.debug("Goodbye, world!")\n\n\n@click.command(name="demo_job", help=__plugin_summary__)\ndef click_demo_job():\n\n    unit = get_unit_name()\n    experiment = get_assigned_experiment_name(unit)\n    job = DemoJob(\n        unit=unit,\n        experiment=experiment,\n    )\n    job.block_until_disconnected()\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You should be able to execute the following from the command line now: ",(0,i.jsx)(n.code,{children:"pio run demo_job"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Finally, in your ",(0,i.jsx)(n.a,{href:"http://pioreactor.local/plugins",children:"web interface under plugins"}),', you should see "Demo Job" installed.']}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/developer-guide/writing-background-jobs",children:"A full introduction to writing jobs"})," is available."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["How do you add this to your /pioreactors page in the UI? See ",(0,i.jsx)(n.a,{href:"/developer-guide/adding-plugins-to-ui",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"custom-scripts",children:"Custom scripts"}),"\n",(0,i.jsxs)(n.p,{children:["If you are interested in creating a Python script to control multiple jobs, like in a ",(0,i.jsx)(n.a,{href:"/user-guide/intro-python-scripting",children:"previous Python scripting example"}),", you can create a file called ",(0,i.jsx)(n.code,{children:"example_script.py"})," in the ",(0,i.jsx)(n.code,{children:"/home/pioreactor/.pioreactor/plugins/"})," folder:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="/home/pioreactor/.pioreactor/plugins/example_script.py"',children:'import time\nimport click\nfrom pioreactor.background_jobs.stirring import start_stirring\nfrom pioreactor.background_jobs.od_reading import start_od_reading\nfrom pioreactor.actions.led_intensity import led_intensity\nfrom pioreactor.background_jobs.temperature_automation import start_temperature_automation\n\n\n__plugin_summary__ = "My example script to control stirring, OD and temperature"\n__plugin_version__ = "0.0.1"\n__plugin_name__ = "Example Script"\n__plugin_author__ = "Cam Davidson-Pilon"\n__plugin_homepage__ = "https://docs.pioreactor.com"\n\n\n@click.command(name="my_script", help=__plugin_summary__) # the name field is used in the invocation `pio run X`\ndef click_my_script():\n\n    led_intensity({"B": 50})\n\n    stirrer = start_stirring(target_rpm=400)\n    od_reader = start_od_reading("90", "REF")\n    temp_automation = start_temperature_automation("thermostat", target_temperature=32)\n\n    time.sleep(10)\n    stirrer.set_target_rpm(300)\n\n    stirrer.block_until_disconnected()\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You should be able to execute the following from the command line now: ",(0,i.jsx)(n.code,{children:"pio run my_script"}),". (The ",(0,i.jsx)(n.code,{children:"my_script"})," is from the ",(0,i.jsx)(n.code,{children:"@click.command"})," line, you can change it there)."]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["The function that ",(0,i.jsx)(n.code,{children:"click.command"})," wraps should have it's name prepended by ",(0,i.jsx)(n.code,{children:"click_"}),". Ex: ",(0,i.jsx)(n.code,{children:"def click_my_script"})," is okay, but ",(0,i.jsx)(n.code,{children:"def my_script"})," is not."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["How do you add this to your /pioreactors page in the UI? See ",(0,i.jsx)(n.a,{href:"/developer-guide/adding-plugins-to-ui",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"custom-automations",children:"Custom automations"}),"\n",(0,i.jsxs)(n.p,{children:["Here's an example of adding a custom automation: place the following code into the file ",(0,i.jsx)(n.code,{children:"/home/pioreactor/.pioreactor/plugins/demo_automation.py"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="/home/pioreactor/.pioreactor/plugins/demo_automation.py"',children:'# -*- coding: utf-8 -*-\nfrom pioreactor.automations.dosing.base import DosingAutomationContrib\n\n__plugin_summary__ = "A demo dosing automation"\n__plugin_version__ = "0.0.1"\n__plugin_name__ = "Demo Dosing Automation"\n__plugin_author__ = "Cam Davidson-Pilon"\n__plugin_homepage__ = "https://docs.pioreactor.com"\n\nclass DemoAutomation(DosingAutomationContrib):\n\n    automation_name = "demo"\n\n    def __init__(self, volume, **kwargs):\n        super().__init__(**kwargs)\n        self.volume = volume\n\n    def execute(self):\n        self.logger("Here I would execute...")\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"You should be able to execute the following from the command line now:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pio run dosing_automation --automation-name demo --volume 10\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/developer-guide/writing-automations-1",children:"A full introduction to writing automations"})," is available."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["How do you add this to your /pioreactors page in the UI? See ",(0,i.jsx)(n.a,{href:"/developer-guide/adding-plugins-to-ui",children:"here"}),"."]})}),"\n",(0,i.jsxs)(n.h2,{id:"2-pip-installable-plugins",children:["2. ",(0,i.jsx)(n.code,{children:"pip"}),"-installable plugins"]}),"\n",(0,i.jsxs)(n.p,{children:["An alternative to placing Python files in the ",(0,i.jsx)(n.code,{children:"plugins"})," folder is to bundle your code into a Python package that can be installed over the internet. This is the best way to ship your code to many users, and is pretty easy! We have a full guide on how to ",(0,i.jsx)(n.a,{href:"/developer-guide/plugin-as-python-package",children:"create a Pioreactor Python package"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var i=o(67294);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);