"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[4583],{49148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(85893),s=n(11151);const o={title:"Running a self-test",slug:"/running-self-test"},r=void 0,a={id:"Experiment basics/running-self-test",title:"Running a self-test",description:"To get the best results and confirm your Pioreactor is working as expected, it's advisable to run a self-test on your Pioreactor after setting it up initially. The self-test routine can catch common errors that may compromise your data collection.",source:"@site/user-guide/02-Experiment basics/11-running-self-test.md",sourceDirName:"02-Experiment basics",slug:"/running-self-test",permalink:"/user-guide/running-self-test",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Running a self-test",slug:"/running-self-test"},sidebar:"tutorialSidebar",previous:{title:"Dosing and LED updates",permalink:"/user-guide/manual-dosing-leds"},next:{title:"Creating a Pioreactor cluster",permalink:"/user-guide/create-cluster"}},h={},c=[{value:"How to run the self-test routine",id:"how-to-run-the-self-test-routine",level:3},{value:"Explanation of each test",id:"explanation-of-each-test",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"To get the best results and confirm your Pioreactor is working as expected, it's advisable to run a self-test on your Pioreactor after setting it up initially. The self-test routine can catch common errors that may compromise your data collection."}),"\n",(0,i.jsx)(t.h3,{id:"how-to-run-the-self-test-routine",children:"How to run the self-test routine"}),"\n",(0,i.jsxs)(t.p,{children:["Start on the ",(0,i.jsx)(t.em,{children:"Pioreactors"})," page:"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:n(29569).Z+"",width:"2966",height:"1530"}),"\n",(0,i.jsx)(t.img,{src:n(80492).Z+"",width:"2966",height:"1530"})]}),"\n",(0,i.jsx)(t.p,{children:'Insert a closed vial with water and stir bar into the Pioreactor, and click "Start". The Pioreactor will start running tests against expected output and report back to you success and failures of those tests.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(18170).Z+"",width:"2966",height:"1530"})}),"\n",(0,i.jsx)(t.p,{children:"Depending on the results of each test, you'll see success and failures:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(17004).Z+"",width:"2656",height:"1362"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"The self-test routine is optional. Even with test failures, the Pioreactor is still operational (perhaps not where the test failed though!). We highly recommend a self-test at least after your initial setup."})}),"\n",(0,i.jsx)(t.h3,{id:"explanation-of-each-test",children:"Explanation of each test"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Pioreactor HAT is detected"})," checks if the Pioreactor HAT is correctly placed on top of the Raspberry Pi. A non-trivial failure here suggests a problem connection between the HAT and the RPi, a failure with the i2c channel, or a failure with the RP2040 chip on the HAT. If ",(0,i.jsx)(t.strong,{children:"Heating PCB is detected"})," also fails, try disconnecting the Heater PCB flat-flex cable from the HAT (unlock and pull straight out), and trying the test again."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Photodiodes are responsive to IR LED"})," checks to ensure that the IR photodiode(s) have a linear relationship with the IR LED's output. The linear relationship is important. Common reasons why this test fails include:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The IR LED connected to the the wrong LED output. Make sure that the IR LED is identified correctly in the config.ini"}),"\n",(0,i.jsx)(t.li,{children:"A loose (or absent) connection to the Pioreactor HAT, either in the photodiode(s) or the IR LED."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The test will also report any valid IR LED & photodiode relationships in the dialog box. For example, ",(0,i.jsx)(t.code,{children:"IR \u21dd REF"})," means that the REF photodiode has a linear relationship with the IR LED. Similarly, ",(0,i.jsx)(t.code,{children:"IR \u21dd 45"})," means the the photodiode in the 45\xb0 pocket has a linear relationship with the IR LED. The absence of a relationship here can tell you about what might be wrong."]}),"\n",(0,i.jsx)(t.p,{children:"Try running this test again if it fails. If it continues to fail, contact us."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"No ambient IR light detected"})," checks that the photodiodes are detecting a near-0 signal when the IR LED is completely off. This test may fail if a powerful IR signal is shining into or onto the Pioreactor's body (aka the Sun - don't put the Pioreactor in direct sunlight and avoid windows). Also make sure that the caps are on all the Pioreactor's LED pockets."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Reference photodiode is the correct magnitude"})," checks, if using the reference photodiode (REF), that the REF signal is less than 0.256 volts when the IR LED is at the level specified in the config.ini's ",(0,i.jsx)(t.code,{children:"[od_config].[ir_led_intensity]"})," section. If this test fails,"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["confirm that in your config.ini that ",(0,i.jsx)(t.code,{children:"REF"})," is present for one of the channels under ",(0,i.jsx)(t.code,{children:"[od_config.photodiode_channel]"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"check the positioning of the REF photodiode (should be adjacent the the IR LED, snugly inserted, and with a cap)."}),"\n",(0,i.jsxs)(t.li,{children:["If still failing, try reducing the value in ",(0,i.jsx)(t.code,{children:"[od_config].[ir_led_intensity]"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Reference photodiode is in the correct position"})," checks, if using the reference photodiode (REF), that the REF cable is inserted into the correct photodiode position (channel 1 or 2). The correct position is provided in the config.ini's ",(0,i.jsx)(t.code,{children:"[od_config.photodiode_channel]"})," section. ",(0,i.jsx)(t.strong,{children:"Note: this is a flakey test, and can fail even when positioned correctly"}),". The test compares the variances of the two signals (from photodiode channels 1 and 2), and the lower variance one is usually the REF.  If this test fails,"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Is your vial in the Pioreactor? Does your vial have water and a stirbar in it?"}),"\n",(0,i.jsxs)(t.li,{children:["Confirm that in your config.ini that ",(0,i.jsx)(t.code,{children:"REF"})," is present for one of the channels under ",(0,i.jsx)(t.code,{children:"[od_config.photodiode_channel]"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Photodiode measures near zero signal for clear water"})," checks that a non turbid liquid, like water, doesn't produce a signal (since there is no scatter). ",(0,i.jsx)(t.strong,{children:"This is a new test, and may fail even if everything is okay."})," Check the following: confirm that your vial contains water (or any very clear liquid) and that your signal photodiode is positioned in 45\xb0, 90\xb0, or 135\xb0. This test won't work for 180\xb0."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Heating PCB is detected"})," checks that the heating PCB is correctly attached to the Pioreactor HAT. A non-trivial failure here suggests a problem when the i2c channel, a loose connection, or damage to the heating PCB. See notes for ",(0,i.jsx)(t.strong,{children:"Pioreactor HAT is detected"}),", too."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Heating is responsive"})," checks for a linear relationship between the temperature sensor and the PWM heating system."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Stirring RPM is responsive"})," checks for a linear relationship between PWM stirring system and the Hall sensor that measure's RPM. If this fails, check that the stirring power is connected correctly (and in the location specified in config.ini's ",(0,i.jsx)(t.code,{children:"[PWM]"})," section). Another reason for failure is that the magnets are too far away from the base of the vial. See ",(0,i.jsx)(t.a,{href:"/user-guide/troubleshooting-stirring",children:"stirring troubleshooting"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"AUX power supply is appropriate value"})," checks that the AUX power voltage is between 0V and 18V. If no AUX power is connected to the Pioreactor, the default voltage is 5V."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},29569:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pioreactors_page_self_test-4e30b063187118d7aeba696ee2573de0.png"},80492:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/self_test_pre-deb40b86a47cef652bf26681acaad41f.png"},17004:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/self_test_results-1d0b585ef408fdb300664775b14c34b7.png"},18170:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/self_test_running-23c15b459ae252d1731eb66ad06b33d4.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(67294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);