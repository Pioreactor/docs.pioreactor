"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[5542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={title:"Turning your plugins into a Python package to share",slug:"/plugin-as-python-package"},l=void 0,r={unversionedId:"Plugins/plugin-as-python-package",id:"Plugins/plugin-as-python-package",title:"Turning your plugins into a Python package to share",description:"If you'd like to contribute your plugin to the community, this is done easily by creating a Python package and uploading to PyPI. Let's walk through this!",source:"@site/developer-guide/07-Plugins/03-plugin-as-python-package.md",sourceDirName:"07-Plugins",slug:"/plugin-as-python-package",permalink:"/developer-guide/plugin-as-python-package",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Turning your plugins into a Python package to share",slug:"/plugin-as-python-package"},sidebar:"tutorialSidebar",previous:{title:"Adding your plugins to the web interface",permalink:"/developer-guide/adding-plugins-to-ui"},next:{title:"Custom & additional pumps for dosing automations",permalink:"/developer-guide/writing-pump-software"}},p={},s=[{value:"Choosing a plugin name",id:"choosing-a-plugin-name",level:2},{value:"Organizing your files",id:"organizing-your-files",level:2},{value:"1. The subfolder <code>&lt;PLUGIN_NAME&gt;</code> containing your plugin&#39;s code",id:"1-the-subfolder-plugin_name-containing-your-plugins-code",level:4},{value:"2. A license text file, named <code>LICENSE.txt</code>",id:"2-a-license-text-file-named-licensetxt",level:4},{value:"3. A MANIFEST file, named <code>MANIFEST.in</code>",id:"3-a-manifest-file-named-manifestin",level:4},{value:"4. A <code>README.md</code>",id:"4-a-readmemd",level:4},{value:"5. A Python <code>setup.py</code> file",id:"5-a-python-setuppy-file",level:4},{value:"Contents of the subfolder, <code>&lt;PLUGIN_NAME&gt;</code>",id:"contents-of-the-subfolder-plugin_name",level:3},{value:"1. Your plugins Python files",id:"1-your-plugins-python-files",level:4},{value:"2. A Python <code>__init__.py</code> file",id:"2-a-python-__init__py-file",level:4},{value:"3. Optional: A configuration file, named <code>additional_config.ini</code>",id:"3-optional-a-configuration-file-named-additional_configini",level:4},{value:"4. Optional: Adding details for the UI",id:"4-optional-adding-details-for-the-ui",level:4},{value:"If implementing a job:",id:"if-implementing-a-job",level:5},{value:"If implementing an automation:",id:"if-implementing-an-automation",level:5},{value:"5. Optional: adding tables to the SQL store",id:"5-optional-adding-tables-to-the-sql-store",level:4},{value:"6. Optional: adding a custom chart to the UI",id:"6-optional-adding-a-custom-chart-to-the-ui",level:4},{value:"7. Optional: adding post_install and pre_uninstall bash scripts.",id:"7-optional-adding-post_install-and-pre_uninstall-bash-scripts",level:4},{value:"Create a Python package on PyPI",id:"create-a-python-package-on-pypi",level:2},{value:"Installing your Python package on your cluster",id:"installing-your-python-package-on-your-cluster",level:2},{value:"Sharing your plugin with the community",id:"sharing-your-plugin-with-the-community",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you'd like to contribute your plugin to the community, this is done easily by creating a Python package and uploading to PyPI. Let's walk through this!"),(0,i.kt)("h2",{id:"choosing-a-plugin-name"},"Choosing a plugin name"),(0,i.kt)("p",null,"Your plugin name should be ",(0,i.kt)("em",{parentName:"p"},"all lowercase"),", and have ",(0,i.kt)("em",{parentName:"p"},"underscores")," divide any words. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"pireactor_relay_plugin")," is fine, but ",(0,i.kt)("inlineCode",{parentName:"p"},"pioreactor-relay-plugin")," is not, nor is ",(0,i.kt)("inlineCode",{parentName:"p"},"Pioreactor-Relay-Plugin"),"."),(0,i.kt)("p",null,"However, your ",(0,i.kt)("em",{parentName:"p"},"distribution package")," name should be lowercase and have ",(0,i.kt)("em",{parentName:"p"},"dashes")," instead of underscores (it's a Python thing: I agree, this is confusing, I'll walk you through it). You can just replace any underscores with dashes: so our example distribution package name is ",(0,i.kt)("inlineCode",{parentName:"p"},"pioreactor-relay-plugin"),"."),(0,i.kt)("p",null,"Later in these steps, we'll reference these names as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PLUGIN_NAME"),": should be the name in all lowercase with underscores. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"pioreactor_relay_plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DISTRIBUTION-NAME"),": should be the name in all lowercase with dashes. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"pioreactor-relay-plugin"))),(0,i.kt)("h2",{id:"organizing-your-files"},"Organizing your files"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Note that the way files are organized may depend on if your plugin is an ",(0,i.kt)("strong",{parentName:"p"},"automation")," or a ",(0,i.kt)("strong",{parentName:"p"},"background job"),". Plugins can install both automations and jobs.")),(0,i.kt)("p",null,"Consider an example plugin: a plugin named ",(0,i.kt)("inlineCode",{parentName:"p"},"pioreactor_relay_plugin")," that implements a ",(0,i.kt)("em",{parentName:"p"},"background job")," which just turns on or off a PWM channel. Follow the file organization here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CamDavidsonPilon/pioreactor-relay-plugin"},"CamDavidsonPilon/pioreactor-relay-plugin"),"."),(0,i.kt)("p",null,"Here's a general directory outline of how your files should be organized for a job:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83d\udcc1 <DISTRIBUTION-NAME (with dashes)>\n\u251c\u2500 \ud83d\udcc1 <PLUGIN_NAME>\n\u2502  \u251c\u2500 \ud83d\udcc1 ui\n\u2502  \u2502  \u251c\u2500 \ud83d\udcc1 contrib\n\u2502  \u2502  \u2502  \u251c\u2500 \ud83d\udcc1 jobs\n\u2502  \u2502  \u2502  \u2502  \u251c\u2500 \ud83d\udcdd <PLUGIN_NAME>.yaml\n\u2502  \u251c\u2500 \ud83d\udcdd __init__.py\n\u2502  \u251c\u2500 \ud83d\udcdd additional_config.ini\n\u2502  \u251c\u2500 \ud83d\udcdd my_plugin_code.py\n\u251c\u2500 \ud83d\udcdd LICENSE.txt\n\u251c\u2500 \ud83d\udcdd MANIFEST.in\n\u251c\u2500 \ud83d\udcdd README.md\n\u251c\u2500 \ud83d\udcdd setup.py\n")),(0,i.kt)("p",null,"The directory outline is very similar for an ",(0,i.kt)("strong",{parentName:"p"},"automation plugin")," ","\u2014"," the only difference is the location of the ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83d\udcc1 <DISTRIBUTION-NAME with dashes>\n\u251c\u2500 \ud83d\udcc1 <PLUGIN_NAME>\n\u2502  \u251c\u2500 \ud83d\udcc1 ui\n\u2502  \u2502  \u251c\u2500 \ud83d\udcc1 contrib\n\u2502  \u2502  \u2502  \u251c\u2500 \ud83d\udcc1 automations\n\u2502  \u2502  \u2502  \u2502  \u251c\u2500 \ud83d\udcc1 <AUTOMATION TYPE (one of {dosing, led, temperature})>\n\u2502  \u2502  \u2502  \u2502  \u2502  \u251c\u2500 \ud83d\udcdd <PLUGIN_NAME>.yaml\n\u2502  \u251c\u2500 \ud83d\udcdd __init__.py\n\u2502  \u251c\u2500 \ud83d\udcdd additional_config.ini\n\u2502  \u251c\u2500 \ud83d\udcdd my_plugin_code.py\n\u251c\u2500 \ud83d\udcdd LICENSE.txt\n\u251c\u2500 \ud83d\udcdd README.md\n\u251c\u2500 \ud83d\udcdd MANIFEST.in\n\u251c\u2500 \ud83d\udcdd setup.py\n")),(0,i.kt)("p",null,"Start by creating a new folder for your plugin, equal to the distribution name (the name with dashes). In our case, we named it ",(0,i.kt)("inlineCode",{parentName:"p"},"pioreactor-relay-plugin"),". This ",(0,i.kt)("strong",{parentName:"p"},"top level folder")," will contain five important parts:"),(0,i.kt)("h4",{id:"1-the-subfolder-plugin_name-containing-your-plugins-code"},"1. The subfolder ",(0,i.kt)("inlineCode",{parentName:"h4"},"<PLUGIN_NAME>")," containing your plugin's code"),(0,i.kt)("p",null,"Within the top level directory, we created a sub-directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"<PLUGIN_NAME>"),"."),(0,i.kt)("h4",{id:"2-a-license-text-file-named-licensetxt"},"2. A license text file, named ",(0,i.kt)("inlineCode",{parentName:"h4"},"LICENSE.txt")),(0,i.kt)("p",null,"A common license for software is the ",(0,i.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},"MIT license"),"."),(0,i.kt)("h4",{id:"3-a-manifest-file-named-manifestin"},"3. A MANIFEST file, named ",(0,i.kt)("inlineCode",{parentName:"h4"},"MANIFEST.in")),(0,i.kt)("p",null,"When creating a Python package, there's a default set of files that are included. To assure that our additional configuration and yaml files are included, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"MANIFEST.in")," file and paste the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"recursive-include <PLUGIN_NAME>/ui/ *.yaml\ninclude <PLUGIN_NAME>/additional_config.ini\n")),(0,i.kt)("h4",{id:"4-a-readmemd"},"4. A ",(0,i.kt)("inlineCode",{parentName:"h4"},"README.md")),(0,i.kt)("p",null,"Write a few notes with general information on your plugin to guide users. Call out any additional installation steps, or hardware required. This is a markdown document."),(0,i.kt)("h4",{id:"5-a-python-setuppy-file"},"5. A Python ",(0,i.kt)("inlineCode",{parentName:"h4"},"setup.py")," file"),(0,i.kt)("p",null,"Create a Python file called ",(0,i.kt)("inlineCode",{parentName:"p"},"setup.py")," and copy & paste the following. Make changes based on your own plugin information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\nfrom setuptools import setup, find_packages\n\nsetup(\n    name="<DISTRIBUTION-NAME (with dashes)>",\n    version="<VERSION>",\n    license_files = (\'LICENSE.txt\',),\n    description="<DESCRIPTION OF PLUGIN>",\n    long_description=open("README.md").read(),\n    long_description_content_type="text/markdown",\n    author_email="<EMAIL>",\n    author="<NAME>",\n    url="<A HOMEPAGE>",\n    packages=find_packages(),\n    include_package_data=True,\n    install_requires=[], # PROVIDE OTHER PYTHON REQUIREMENTS, ex: "pioreactor>=23.6.0", "numpy>=1.0"\n    entry_points={\n        "pioreactor.plugins": "<PLUGIN_NAME> = <PLUGIN_NAME>"\n    },\n)\n')),(0,i.kt)("h3",{id:"contents-of-the-subfolder-plugin_name"},"Contents of the subfolder, ",(0,i.kt)("inlineCode",{parentName:"h3"},"<PLUGIN_NAME>")),(0,i.kt)("h4",{id:"1-your-plugins-python-files"},"1. Your plugins Python files"),(0,i.kt)("p",null,"This Python file contains the core code for your plugin. If your plugin is implementing a background job, then there should be a\nfunction decorated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@click.command")," at the bottom of the file. See example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CamDavidsonPilon/pioreactor-relay-plugin/blob/e25b46997d6e6b3b1b2e2bf1141299ddba4eaa49/pioreactor_relay_plugin/relay.py#L79-L93"},"here"),". For discovery reasons, this function's name ",(0,i.kt)("strong",{parentName:"p"},"should start with ",(0,i.kt)("inlineCode",{parentName:"strong"},"click_")),"."),(0,i.kt)("h4",{id:"2-a-python-__init__py-file"},"2. A Python ",(0,i.kt)("inlineCode",{parentName:"h4"},"__init__.py")," file"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"If implementing an automation:"),"\nImport the Class of your automation file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from <SUBFOLDER CONTAINING PLUGIN>.<PYTHON FILE NAME> import <CLASS NAME>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"If implementing a job:"),"\nThis will contain an ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," statement such as the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from <PLUGIN_NAME>.<PYTHON FILE NAME> import <PLUGIN CLICK FUNCTION>\n")),(0,i.kt)("p",{parentName:"li"},"This imports the function within our plugin file that executes our plugin action."),(0,i.kt)("p",{parentName:"li"},"Example for the relay plugin:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from pioreactor_relay_plugin.relay import click_relay\n")),(0,i.kt)("p",{parentName:"li"},"where ",(0,i.kt)("inlineCode",{parentName:"p"},"click_relay")," is the function decorated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@click.command"),"."))),(0,i.kt)("h4",{id:"3-optional-a-configuration-file-named-additional_configini"},"3. Optional: A configuration file, named ",(0,i.kt)("inlineCode",{parentName:"h4"},"additional_config.ini")),(0,i.kt)("p",null,"This configuration file will contain additional configs that we want to add to our list of existing Configurations on the Pioreactor web interface. This file will be merged with the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"config.ini")," when the plugin is installed. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(44636).Z,width:"951",height:"557"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A convention we've tried to follow is to use the section name convention of ",(0,i.kt)("inlineCode",{parentName:"p"},"[<job_name>.config]")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"[<automation_name>.config]")," in the configuration files. For example, our relay job has ",(0,i.kt)("inlineCode",{parentName:"p"},"[relay.config]")," in its ",(0,i.kt)("inlineCode",{parentName:"p"},"additional_config.ini")," and settings under it.")),(0,i.kt)("h4",{id:"4-optional-adding-details-for-the-ui"},"4. Optional: Adding details for the UI"),(0,i.kt)("h5",{id:"if-implementing-a-job"},"If implementing a job:"),(0,i.kt)("p",null,"Within ",(0,i.kt)("inlineCode",{parentName:"p"},"<PLUGIN_NAME>")," folder, create subfolders named ",(0,i.kt)("inlineCode",{parentName:"p"},"ui/contrib/jobs"),". For a job, create a ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml")," file that looks like the following format. The name of the yaml can be anything, but convention is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"<job_name>.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"---\ndisplay_name:  # human readable name\njob_name: # `job_name` as defined in your Python file\ndisplay: # bool; true to display on the /Pioreactors card\nsource: # name of your plugin\ndescription: # description of what your plugin does\npublished_settings:\n  - key:  # as defined in Python\n    unit: # unit (ml, lux, AU, etc.)\n    label: # human readable name\n    description: # description of your setting\n    type:  # one of numeric, boolean, string, json\n    default: # provide a default value, often null\n    display: # bool; true to display on the /Pioreactors card\n  - key: ...\n    unit: ...\n  ...\n")),(0,i.kt)("p",null,"There are lots of examples of job yaml files ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/pioreactorui/tree/master/contrib/jobs"},"here"),"."),(0,i.kt)("h5",{id:"if-implementing-an-automation"},"If implementing an automation:"),(0,i.kt)("p",null,"In the case of creating an ",(0,i.kt)("strong",{parentName:"p"},"automation plugin"),", create subfolder(s) with ",(0,i.kt)("inlineCode",{parentName:"p"},"ui/contrib/automations/<AUTOMATION TYPE>"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTOMATION TYPE")," is one of ",(0,i.kt)("inlineCode",{parentName:"p"},"dosing"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"led"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"temperature")," depending on your automation type. Create a yaml file with the following convention. The name of the yaml file can be anything, but by convention it's ",(0,i.kt)("inlineCode",{parentName:"p"},"<automation_name>.yaml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"---\ndisplay_name:  # human readable name\nautomation_name: # automation name as defined in your Python files\nsource: # name of your plugin\ndescription: # description of your plugin\nfields:\n  - key:  # as defined in Python\n    unit: # unit of your key\n    label: # human readable name\n    description: # description of your key\n  - key: ...\n    unit: ...\n")),(0,i.kt)("p",null,"There are lots of examples of automation yaml files ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/pioreactorui/tree/master/contrib/automations"},"here"),"."),(0,i.kt)("h4",{id:"5-optional-adding-tables-to-the-sql-store"},"5. Optional: adding tables to the SQL store"),(0,i.kt)("p",null,"You can also add a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"additional_sql.sql")," that will run against the SQLite database. For example, a CO\u2082 sensor may want to create a new table in the database to store its sensor data. It's ",(0,i.kt)("inlineCode",{parentName:"p"},"additional_sql.sql")," may look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS co2_readings (\n    experiment               TEXT NOT NULL,\n    pioreactor_unit          TEXT NOT NULL,\n    timestamp                TEXT NOT NULL,\n    co2_reading_ppm          REAL\n);\n")),(0,i.kt)("p",null,"You also need to tell Pioreactor software how to populate this table from your source of data. Include the following in your code such that it executes when the plugin is loaded:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"a parser function that accepts a MQTT topic and payload, and returns a dictionary that maps to the new tables schema.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"a ",(0,i.kt)("inlineCode",{parentName:"p"},"TopicToParserToTable")," object is created with the MQTT topics to listen to, the parser, and the table name to load to. This ",(0,i.kt)("inlineCode",{parentName:"p"},"TopicToParserToTable")," is provided to ",(0,i.kt)("inlineCode",{parentName:"p"},"register_source_to_sink"),"."),(0,i.kt)("p",{parentName:"li"},"Example below for a CO2 sensor:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'...\nfrom pioreactor.background_jobs.leader.mqtt_to_db_streaming import produce_metadata\nfrom pioreactor.background_jobs.leader.mqtt_to_db_streaming import register_source_to_sink\nfrom pioreactor.background_jobs.leader.mqtt_to_db_streaming import TopicToParserToTable\n\n...\n\ndef parser(topic, payload) -> dict:\n    metadata = produce_metadata(topic)\n    return {\n        "experiment": metadata.experiment,\n        "pioreactor_unit": metadata.pioreactor_unit,\n        "timestamp": timing.current_utc_timestamp(),\n        "co2_reading_ppm": float(payload),\n    }\n\n\nregister_source_to_sink(\n    TopicToParserToTable(\n        ["pioreactor/+/+/scd_reading/co2", "pioreactor/+/+/co2_reading/co2"],\n        parser,\n        "co2_readings",\n    )\n)\n\n...\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You also need to add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"MANIFEST.in"),":"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"...\ninclude <PLUGIN_NAME>/additional_sql.sql\n"))),(0,i.kt)("p",null,"See an example plugin that uses this idea ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/co2-reading-plugin"},"here"),"."),(0,i.kt)("h4",{id:"6-optional-adding-a-custom-chart-to-the-ui"},"6. Optional: adding a custom chart to the UI"),(0,i.kt)("p",null,"To add a chart that display real-time and historical data (provided by MQTT and SQL store respectively), you can do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In a new folder named ",(0,i.kt)("inlineCode",{parentName:"li"},"ui/contrib/charts")," in your project, add a YAML file as described ",(0,i.kt)("a",{parentName:"li",href:"/developer-guide/chart-to-ui"},"here"),". The name of the file can by the ",(0,i.kt)("inlineCode",{parentName:"li"},"chart_key")," field, append with ",(0,i.kt)("inlineCode",{parentName:"li"},".yaml"),"."),(0,i.kt)("li",{parentName:"ol"},"In your ",(0,i.kt)("inlineCode",{parentName:"li"},"additional_config.ini"),", add a new entry to be merged:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[ui.overview.charts]\n<your chart key>=1\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You'll need to make sure your database table has the necessary fields. See details under ",(0,i.kt)("inlineCode",{parentName:"p"},"data_source")," in the ",(0,i.kt)("a",{parentName:"p",href:"/developer-guide/chart-to-ui"},"docs here"),".")),(0,i.kt)("p",null,"See an example plugin that uses this idea ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/co2-reading-plugin"},"here"),"."),(0,i.kt)("h4",{id:"7-optional-adding-post_install-and-pre_uninstall-bash-scripts"},"7. Optional: adding post_install and pre_uninstall bash scripts."),(0,i.kt)("p",null,"If your plugin needs to edit the operating system, you can include either of the following files: ",(0,i.kt)("inlineCode",{parentName:"p"},"post_install.sh"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"pre_uninstall.sh"),". We have used these files to enable systemd services such that the job being installed will start at startup. Example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/pioreactor-logs2slack/blob/master/pioreactor_logs2slack/post_install.sh"},"post_install.sh")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/pioreactor-logs2slack/blob/master/pioreactor_logs2slack/pre_uninstall.sh"},"pre_uninstall.sh"),"."),(0,i.kt)("p",null,"You'll need to modify your MANIFEST.in, too:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"include <PLUGIN_NAME>/post_install.sh\ninclude <PLUGIN_NAME>/pre_uninstall.sh\n")),(0,i.kt)("h2",{id:"create-a-python-package-on-pypi"},"Create a Python package on PyPI"),(0,i.kt)("p",null,"Create an account on ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/"},"https://pypi.org/"),". Make sure to verify your email."),(0,i.kt)("p",null,"On your command line, type the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install twine\npip install --upgrade build\npython -m build --wheel     \n")),(0,i.kt)("p",null,"This creates a ",(0,i.kt)("inlineCode",{parentName:"p"},".whl")," file in a ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/")," folder (that will be created). Next, we upload the ",(0,i.kt)("inlineCode",{parentName:"p"},"whl")," file to PyPI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"twine upload dist/<THE .WHL FILE>\n")),(0,i.kt)("p",null,"You will then be prompted for a username and password. Use the credentials for your PyPI account. Then, your package is uploaded and viewable at the link provided in the output!"),(0,i.kt)("admonition",{title:"Note",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Before you build a new wheel, it's good practice to clean up your previous build.",(0,i.kt)("br",{parentName:"p"}),"\n","This can be done using ",(0,i.kt)("inlineCode",{parentName:"p"},"python setup.py clean --all")," on the command line. ")),(0,i.kt)("h2",{id:"installing-your-python-package-on-your-cluster"},"Installing your Python package on your cluster"),(0,i.kt)("p",null,"A plugin can be installed through the command line on a leader using ",(0,i.kt)("inlineCode",{parentName:"p"},"pio"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pio install-plugin <DISTRIBUTION-NAME OR PLUGIN_NAME>\n")),(0,i.kt)("p",null,"To install a given plugin on the leader and all workers connected to the leader in a cluster, ",(0,i.kt)("inlineCode",{parentName:"p"},"pios install-plugin")," can be used. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pios install-plugin <DISTRIBUTION-NAME OR PLUGIN_NAME>\n")),(0,i.kt)("h2",{id:"sharing-your-plugin-with-the-community"},"Sharing your plugin with the community"),(0,i.kt)("p",null,"To give your plugin further reach, we've provided an option to add it to the web interface. You will need to edit the ",(0,i.kt)("strong",{parentName:"p"},"plugins.json")," file within our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/list-of-plugins"},"Pioreactor repository, list-of-plugins"),"."),(0,i.kt)("p",null,"There are two ways to do this: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create an issue to have us edit the plugins.json file for you. "),(0,i.kt)("li",{parentName:"ol"},"Fork from our repository to edit the plugins.json file, then create a pull request. ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(25178).Z,width:"1896",height:"798"})),(0,i.kt)("p",null,"In both cases, we will evaluate your plugin to ensure code quality and all requirements are met."),(0,i.kt)("p",null,"Once your plugin is accepted, it will appear on the Plugins tab on the Pioreactor web interface. Users in the community can now easily click ",(0,i.kt)("em",{parentName:"p"},"Install")," to download your plugin onto their Pioreactors!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(77503).Z,width:"1893",height:"925"})))}c.isMDXComponent=!0},44636:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/python-package-new-config-fc1c3fe6948cde33a3e00db59cf98588.png"},77503:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/python-package-plugins-b119d590d45ad781923cd0f333bdfc96.png"},25178:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/python-package-pull-or-issue-050b26469751ff2da3986a6c75cbfb58.png"}}]);