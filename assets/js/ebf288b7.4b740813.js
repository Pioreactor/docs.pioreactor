"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[3797],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=r,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7783:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r="tableOfContentsInline_0DDH",o=a(5002);var i=function(e){var t=e.toc,a=e.minHeadingLevel,i=e.maxHeadingLevel;return n.createElement("div",{className:r},n.createElement(o.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},5002:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),r=a(3366),o=a(7294),i=a(3616),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function l(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?o.createElement("ul",{className:r?void 0:a},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(l,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function d(e){var t=e.toc,a=e.className,d=void 0===a?"table-of-contents table-of-contents__left-border":a,h=e.linkClassName,c=void 0===h?"table-of-contents__link":h,u=e.linkActiveClassName,p=void 0===u?void 0:u,m=e.minHeadingLevel,g=e.maxHeadingLevel,y=(0,r.Z)(e,s),f=(0,i.LU)(),b=null!=m?m:f.tableOfContents.minHeadingLevel,v=null!=g?g:f.tableOfContents.maxHeadingLevel,w=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:v}),k=(0,o.useMemo)((function(){if(c&&p)return{linkClassName:c,linkActiveClassName:p,minHeadingLevel:b,maxHeadingLevel:v}}),[c,p,b,v]);return(0,i.Si)(k),o.createElement(l,(0,n.Z)({toc:w,className:d,linkClassName:c},y))}},199:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return h},toc:function(){return c},default:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(7783),s=["components"],l={},d="Common questions",h={unversionedId:"Common questions",id:"Common questions",title:"Common questions",description:"Pioreactor operation",source:"@site/user_guide/99-Common questions.mdx",sourceDirName:".",slug:"/Common questions",permalink:"/user_guide/Common questions",tags:[],version:"current",sidebarPosition:99,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing Pioreactor scripts with Python",permalink:"/user_guide/Advanced/Simple scripting with Python"}},c=[{value:"Pioreactor operation",id:"pioreactor-operation",children:[{value:"Why does the onboard blue LED keep flashing?",id:"why-does-the-onboard-blue-led-keep-flashing",children:[],level:4},{value:"What does the onboard button do?",id:"what-does-the-onboard-button-do",children:[],level:4}],level:2},{value:"Optical density and LEDs",id:"optical-density-and-leds",children:[{value:"Why does the intensity for LED A turn on &amp; off during an experiment?",id:"why-does-the-intensity-for-led-a-turn-on--off-during-an-experiment",children:[],level:4},{value:"Why does my optical density flatten, or even decrease? What is a saturation point?",id:"why-does-my-optical-density-flatten-or-even-decrease-what-is-a-saturation-point",children:[],level:4},{value:"What does the effect of the scatter angle have on optical density?",id:"what-does-the-effect-of-the-scatter-angle-have-on-optical-density",children:[],level:4},{value:"Can I use my own LEDs and photodiodes for optical density?",id:"can-i-use-my-own-leds-and-photodiodes-for-optical-density",children:[],level:4}],level:2},{value:"Heating and Temperature control",id:"heating-and-temperature-control",children:[{value:"Why does the Pioreactor only provide a temperature reading every 4 minutes?",id:"why-does-the-pioreactor-only-provide-a-temperature-reading-every-4-minutes",children:[],level:4},{value:"Why does the Pioreactor&#39;s heating keep shutting off?",id:"why-does-the-pioreactors-heating-keep-shutting-off",children:[],level:4},{value:"How does heating work on the Pioreactor",id:"how-does-heating-work-on-the-pioreactor",children:[],level:4}],level:2},{value:"Mixing and stirring in the Pioreactor",id:"mixing-and-stirring-in-the-pioreactor",children:[{value:"How is mixing / stirring performed in the Pioreactor?",id:"how-is-mixing--stirring-performed-in-the-pioreactor",children:[],level:4},{value:"How can I improve mixing and aeration?",id:"how-can-i-improve-mixing-and-aeration",children:[],level:4}],level:2},{value:"Raspberry Pi Hardware",id:"raspberry-pi-hardware",children:[{value:"What Raspberry Pi hardware can I use? I see Raspberry Pi 1, 2, 3, 4, A, B, +, Zero - it&#39;s confusing!",id:"what-raspberry-pi-hardware-can-i-use-i-see-raspberry-pi-1-2-3-4-a-b--zero---its-confusing",children:[],level:4},{value:"Do I need any cooling for the Raspberry Pi?",id:"do-i-need-any-cooling-for-the-raspberry-pi",children:[],level:4},{value:"Could a Raspberry Pi-compatible board work, like Rock Pi 4?",id:"could-a-raspberry-pi-compatible-board-work-like-rock-pi-4",children:[],level:4},{value:"Why are the Raspberry Pi LEDs/USB/Ethernet/etc. turned off?",id:"why-are-the-raspberry-pi-ledsusbethernetetc-turned-off",children:[],level:4}],level:2},{value:"Dosing",id:"dosing",children:[{value:"Why does the Media card in the UI not update when I run a dosing command?",id:"why-does-the-media-card-in-the-ui-not-update-when-i-run-a-dosing-command",children:[],level:4}],level:2},{value:"Data storage, access and recovery",id:"data-storage-access-and-recovery",children:[{value:"Where are logs stored?",id:"where-are-logs-stored",children:[],level:4},{value:"How do I access raw experiment data?",id:"how-do-i-access-raw-experiment-data",children:[],level:4},{value:"My microSD card is corrupted - what can I do?",id:"my-microsd-card-is-corrupted---what-can-i-do",children:[],level:4}],level:2}],u={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-questions"},"Common questions"),(0,o.kt)(i.Z,{toc:c,mdxType:"TOCInline"}),(0,o.kt)("h2",{id:"pioreactor-operation"},"Pioreactor operation"),(0,o.kt)("h4",{id:"why-does-the-onboard-blue-led-keep-flashing"},"Why does the onboard blue LED keep flashing?"),(0,o.kt)("p",null,"There may be a problem. You can diagnose the problem by ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/Advanced/Flashing%20blue%20led"},"counting the number of flashes observed")),(0,o.kt)("h4",{id:"what-does-the-onboard-button-do"},"What does the onboard button do?"),(0,o.kt)("p",null,'The button on the Pioreactor HAT It sends a signal to the web UI to display a "hello" message. This is useful to know which Pioreactor in a cluster you are interacting with.'),(0,o.kt)("h2",{id:"optical-density-and-leds"},"Optical density and LEDs"),(0,o.kt)("h4",{id:"why-does-the-intensity-for-led-a-turn-on--off-during-an-experiment"},"Why does the intensity for LED A turn on & off during an experiment?"),(0,o.kt)("p",null,"You may have noticed that the LED labelled A turns on & off every 5 seconds or so. This is (normally) the channel for the infrared (IR) LED, which is used in the optical density measurements. Since we only take reading every 5 seconds (normally, this can be changed), we don't need the IR LED on all the time. The Pioreactor will only turn on LED when needed. This preserves the strength of the LED over longer periods of time. For more advanced use cases, it also allows other optical measurements to take place without the IR LED interfering with them."),(0,o.kt)("h4",{id:"why-does-my-optical-density-flatten-or-even-decrease-what-is-a-saturation-point"},"Why does my optical density flatten, or even decrease? What is a saturation point?"),(0,o.kt)("p",null,"For some experiments, especially when using a scatter angle of 135\xb0, you may notice that the optical density starts to flatten, and even decrease, ",(0,o.kt)("em",{parentName:"p"},"when you know the culture should still be growing"),". This is not a property of the culture, but occurs because the culture is getting too dense, and light is now being interrupted before it reaches the photodiodes. Prior to this point, called the saturation point, the relationship between culture density and optical density is nearly linear. But after this point, there is a flattening, even negative, relationship between culture density and optical density. For all analysis, we recommend only studying when the culture is in the linear regime. You can mitigate the problem by choosing a smaller scatter angle (like 90\xb0 or 45\xb0), diluting the culture using an automation like the turbidostat, or using a lower concentration of nutrient(s) in the media. Read more about Pioreactor's optical system ",(0,o.kt)("a",{parentName:"p",href:"https://pioreactor.com/blogs/pioreactor-blog/estimating-growth-rates-with-kalman-filters"},"here"),"."),(0,o.kt)("h4",{id:"what-does-the-effect-of-the-scatter-angle-have-on-optical-density"},"What does the effect of the scatter angle have on optical density?"),(0,o.kt)("p",null,"The scatter angle is the angle between the IR LED and a photodiode. This angle can be 45\xb0, 90\xb0, or 135\xb0  (although 180\xb0 is possible, we don't consider it here). What is there to consider when choosing an angle. In general, the trend is shorter angles => less sensitive at low densities, but higher saturation point. By default, we suggest 45\xb0 as a good trade off between sensitivity and saturation. You can mix angles, and the Pioreactor's internal algorithm will still combine them into a single growth rate. Read more about Pioreactor's optical system ",(0,o.kt)("a",{parentName:"p",href:"https://pioreactor.com/blogs/pioreactor-blog/estimating-growth-rates-with-kalman-filters"},"here"),"."),(0,o.kt)("h4",{id:"can-i-use-my-own-leds-and-photodiodes-for-optical-density"},"Can I use my own LEDs and photodiodes for optical density?"),(0,o.kt)("p",null,"Of course! The only two requirements are that the spectrum of the LED overlaps with the spectrum of the photodiode, and that the LED light won't be absorbed by media/culture, nor damage the media/culture. Thus, the often-used 600nm light source works in the Pioreactor. None of our internal algorithms or analytics are dependent on the wavelength of light chosen."),(0,o.kt)("p",null,"When you are using additional LEDs outside of the optical density LED & photodiode pair, you may worry that your additional LEDs will interfere with the optical density measurement. This won't happen, as we turn off all non-optical density LEDs before taking an optical density measurement."),(0,o.kt)("h2",{id:"heating-and-temperature-control"},"Heating and Temperature control"),(0,o.kt)("h4",{id:"why-does-the-pioreactor-only-provide-a-temperature-reading-every-4-minutes"},"Why does the Pioreactor only provide a temperature reading every 4 minutes?"),(0,o.kt)("p",null,"We made a design choice early on to make preparation as error-free as possible. This involved thinking about sensors being ",(0,o.kt)("em",{parentName:"p"},"in situ")," (in place), versus the sensors being on the outside of the vial. The temperature sensor in the Pioreactor is outside the vial, which means less chance of contamination, but there's a tradeoff (as you could guess): we have to rely on an estimation algorithm that requires 4 minutes to gather data on. We think this is a fair trade-off, as high frequency temperature readings are not that important in an experiment that lasts 12 hours or more."),(0,o.kt)("h4",{id:"why-does-the-pioreactors-heating-keep-shutting-off"},"Why does the Pioreactor's heating keep shutting off?"),(0,o.kt)("p",null,"If you find that the Pioreactor's heating is shutting off, typically with an accompanying error and flashing blue light, then likely the temperature is becoming too high for safe handling. We restrict the onboard PCB's temperature to be no higher than 63\u2103. Temperature's higher than this can deform the plastic, and possibly cause burns. If the Pioreactor detects a temperature near or above this value, the software will shut off the heating, and possible the entire Raspberry Pi in extreme cases."),(0,o.kt)("p",null,"To avoid this occurring, we suggest not setting the target temperature too high - not more than 20\u2103 above ambient temperature. Also, reducing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kd")," parameter in ",(0,o.kt)("inlineCode",{parentName:"p"},"[temperature_automation.stable]")," section in the config.ini would help."),(0,o.kt)("h4",{id:"how-does-heating-work-on-the-pioreactor"},"How does heating work on the Pioreactor"),(0,o.kt)("p",null,"The Pioreactor has an onboard PCB, called the heating PCB, that sits below the glass vial. On the PCB are resistors that convert current from PWM outputs into heat. By varying the duty cycle of the PWM, we vary the amount of heat converted."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If using an external power supply that's more than 5V, this will create more heat than the Pioreactor is tuned for. You may want to tune the PID controls in ",(0,o.kt)("inlineCode",{parentName:"p"},"[temperature_automation.stable]")," section in the config.ini"))),(0,o.kt)("h2",{id:"mixing-and-stirring-in-the-pioreactor"},"Mixing and stirring in the Pioreactor"),(0,o.kt)("h4",{id:"how-is-mixing--stirring-performed-in-the-pioreactor"},"How is mixing / stirring performed in the Pioreactor?"),(0,o.kt)("p",null,"Stirring is performed with a 15mm stir bar inside the vial, controlled by a pair of magnets spinning below the vial. The rotation speed, RPM, of the vial can be controlled using the Pioreactor software. This stirring is also how aeration is done."),(0,o.kt)("h4",{id:"how-can-i-improve-mixing-and-aeration"},"How can I improve mixing and aeration?"),(0,o.kt)("p",null,"If the standard mixing and aeration with the stir bar is not enough for your application, you can do a few things, in increasing order of complication:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Increase the RPM of the stirring. This will increase the surface area exposed to the air. Be warned though: too high of an RPM will cause either a large enough vortex to interfere with the optical systems, or will causing the stir bar to fall out of sync."),(0,o.kt)("li",{parentName:"ol"},"Add a baffle to the vial cap. A simple cylinder that sticks into the liquid causes enough disturbance in the rotating liquid that both mixing and aeration are significantly improved. A tube can be removed from the cap, and a autoclavable rod can be inserted such that it enters the media, but won't interfere with the optics."),(0,o.kt)("li",{parentName:"ol"},"Adding external aeration to your Pioreactor. In the simplest case, using an air pump.")),(0,o.kt)("h2",{id:"raspberry-pi-hardware"},"Raspberry Pi Hardware"),(0,o.kt)("h4",{id:"what-raspberry-pi-hardware-can-i-use-i-see-raspberry-pi-1-2-3-4-a-b--zero---its-confusing"},"What Raspberry Pi hardware can I use? I see Raspberry Pi 1, 2, 3, 4, A, B, +, Zero - it's confusing!"),(0,o.kt)("p",null,"We've designed the hardware and software to be compatible with any Raspberry Pi that has onboard Wifi. That includes (at the time of writing):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Raspberry Pi 3"),(0,o.kt)("li",{parentName:"ul"},"Raspberry Pi 3 B+"),(0,o.kt)("li",{parentName:"ul"},"Raspberry Pi 3 Model A+"),(0,o.kt)("li",{parentName:"ul"},"Raspberry Pi 4 B"),(0,o.kt)("li",{parentName:"ul"},"Raspberry Pi Zero W (with header) ","*"),(0,o.kt)("li",{parentName:"ul"},"Raspberry Pi Zero 2 W")),(0,o.kt)("p",null,"Although you can use any above, we like the Raspberry Pi 3 Model A+ because of its low power consumption, slim build, and low price. It has the necessary CPU power and memory for the Pioreactor workload, and is generally the cheapest on the list above (see note on Zero W below)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"*")," ",(0,o.kt)("em",{parentName:"p"},"Raspberry Pi Zero W")," is on the list above, and is very low cost compared to the others. They can absolutely be used for Pioreactors ",(0,o.kt)("em",{parentName:"p"},"as workers")," - we don't recommend them to be your ",(0,o.kt)("em",{parentName:"p"},"leader")," (note sure what these terms mean? Here's an introduction to ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/Extending%20your%20Pioreactor/Creating%20a%20Pioreactor%20cluster"},"leader and workers"),"). As workers, Raspberry Pi Zero W perform just fine, but will respond slower to commands. Note that this does not include the Raspberry Pi Zero ",(0,o.kt)("em",{parentName:"p"},"2")," W model, which is fine for all jobs."),(0,o.kt)("h4",{id:"do-i-need-any-cooling-for-the-raspberry-pi"},"Do I need any cooling for the Raspberry Pi?"),(0,o.kt)("p",null,"Nope, you shouldn't, unless you are connecting an external monitor."),(0,o.kt)("h4",{id:"could-a-raspberry-pi-compatible-board-work-like-rock-pi-4"},"Could a Raspberry Pi-compatible board work, like Rock Pi 4?"),(0,o.kt)("p",null,"Probably. We haven't tested them, but so long as i) the GPIO pins are identical, and ii) Raspberry Pi OS can be installed, it should work."),(0,o.kt)("h4",{id:"why-are-the-raspberry-pi-ledsusbethernetetc-turned-off"},"Why are the Raspberry Pi LEDs/USB/Ethernet/etc. turned off?"),(0,o.kt)("p",null,'We turn off the "activity" LED (usually the green one) to save some power for the Pioreactor\'s peripherals. We do the same for USB and Ethernet. You can turn these back on by editing the ',(0,o.kt)("inlineCode",{parentName:"p"},"/boot/config.txt")," file on the RPi."),(0,o.kt)("h2",{id:"dosing"},"Dosing"),(0,o.kt)("h4",{id:"why-does-the-media-card-in-the-ui-not-update-when-i-run-a-dosing-command"},"Why does the Media card in the UI not update when I run a dosing command?"),(0,o.kt)("p",null,"The Media card will ",(0,o.kt)("em",{parentName:"p"},"only")," update when an ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/Automations/Dosing%20Automations"},"Dosing Automation")," is active (even the ",(0,o.kt)("inlineCode",{parentName:"p"},"Silent")," automation). Why is it done this way? Often, you don't want volumes to be recorded there: during cleaning, during testing, etc. Often you only want volumes associated with the experiment to be there."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'All dosing events ares recorded to the database however, and with a record of when the event occurred, and source of action. This data is available in the "Export data" web page, under ',(0,o.kt)("inlineCode",{parentName:"p"},"Dosing event log"),"."))),(0,o.kt)("h2",{id:"data-storage-access-and-recovery"},"Data storage, access and recovery"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 For any important project, we suggest manually exporting or backing up critical data multiple different places. This doesn't just apply to using the Pioreactor, but is good advice in general.")),(0,o.kt)("h4",{id:"where-are-logs-stored"},"Where are logs stored?"),(0,o.kt)("p",null,"For the logs that you see in the Log Table in the ",(0,o.kt)("em",{parentName:"p"},"Experiment Overview")," page, these can be download on the ",(0,o.kt)("em",{parentName:"p"},"Download experiment data")," page in the Pioreactor web interface. Other logs are also available, including dosing event and algorithm change-logs."),(0,o.kt)("p",null,"More granular logs per Pioreactor are available in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/pioreactor.log")," on the Raspberry Pis."),(0,o.kt)("h4",{id:"how-do-i-access-raw-experiment-data"},"How do I access raw experiment data?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("em",{parentName:"li"},"Download experiment data")," page in the Pioreactor web interface provides CSV exports of common datasets from a pre-selected experiment."),(0,o.kt)("li",{parentName:"ol"},"All data eventually lands in a SQLite3 database on the leader Pioreactor, by default located in ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/pi/.pioreactor/storage/pioreactor.sqlite"),". This can be download using a tool like ",(0,o.kt)("inlineCode",{parentName:"li"},"scp"),"."),(0,o.kt)("li",{parentName:"ol"},"To access the SQLite3 database from the command line, try ",(0,o.kt)("inlineCode",{parentName:"li"},"pio db"),".")),(0,o.kt)("h4",{id:"my-microsd-card-is-corrupted---what-can-i-do"},"My microSD card is corrupted - what can I do?"),(0,o.kt)("p",null,"Unfortunately, the microSD card becoming corrupted or damaged is an infrequent but possible risk with using Raspberry Pis."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the microSD card was inside a non-leader Pioreactor, it's best to try to reformat the microSD card and start fresh (i.e. ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/Getting%20Started/Raspberry%20Pi%20set%20up%20and%20software%20installation#adding-workers-to-your-cluster"},"reinstall the Pioreactor software and reintroduce it to the cluster"),"). This is usually okay as no critical data is stored locally in workers, except for some log files and hardware calibrations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the microSD was inside the leader Raspberry Pi, this is a bigger problem. Likely any running experiment will have to be restarted. Fortunately, if you have more than one Pioreactor in your cluster, then the leader's SQLite database has been periodically backing itself up to other Pioreactors in the cluster every few days. Using the command line, check other Pioreactors' ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor/storage")," directory for the ",(0,o.kt)("em",{parentName:"p"},"latest")," backup named ",(0,o.kt)("inlineCode",{parentName:"p"},"pioreactor.sqlite.backup")," (should be from within the past few days hours). You can use this database to restart a new leader."))))}p.isMDXComponent=!0}}]);