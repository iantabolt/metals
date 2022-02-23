"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||s;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9041:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>p});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={id:"test-explorer",title:"Test Explorer"},l=void 0,c={unversionedId:"integrations/test-explorer",id:"integrations/test-explorer",title:"Test Explorer",description:"Test Explorer is under active development, this page explain how it works under the hood.",source:"@site/target/docs/integrations/test-explorer.md",sourceDirName:"integrations",slug:"/integrations/test-explorer",permalink:"/metals/docs/integrations/test-explorer",editUrl:"https://github.com/scalameta/metals/edit/main/docs/integrations/test-explorer.md",tags:[],version:"current",frontMatter:{id:"test-explorer",title:"Test Explorer"},sidebar:"docs",previous:{title:"Integrating a new editor",permalink:"/metals/docs/integrations/new-editor"},next:{title:"Tree View Protocol",permalink:"/metals/docs/integrations/tree-view-protocol"}},d=[{value:"Test Discovery",id:"test-discovery",children:[],level:2},{value:"Integration",id:"integration",children:[],level:2},{value:"How it works under the hood",id:"how-it-works-under-the-hood",children:[{value:"Running and debugging",id:"running-and-debugging",children:[],level:3},{value:"Getting and analyzing results",id:"getting-and-analyzing-results",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,o=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Test Explorer is under active development, this page explain how it works under the hood."),(0,s.kt)("h2",{id:"test-discovery"},"Test Discovery"),(0,s.kt)("p",null,"Test Explorer (TE) provides two ways to interact with it:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The first one is based on notifications being sent from Metals to the client and doesn't require the client to do any actions except listen for the notifications. All necessary updates are being immediately sent to it.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(4322).Z,width:"504",height:"424"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The client can also manually ask Metals for test suites for the whole workspace, or for the test cases for a given file.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(3635).Z,width:"506",height:"316"})),(0,s.kt)("h2",{id:"integration"},"Integration"),(0,s.kt)("p",null,"In order to use TE, the client has to set ",(0,s.kt)("inlineCode",{parentName:"p"},"InitializationOptions.testExplorerProvider"),". This action will deactivate code lenses for test classes and enable TE to send updates."),(0,s.kt)("p",null,"The preferred way to implement TE is to implement client's command ",(0,s.kt)("inlineCode",{parentName:"p"},"metals-update-test-explorer"),". Using this request, Metals will push all necessary updates to the client."),(0,s.kt)("p",null,"It is also possible to depend on server command ",(0,s.kt)("inlineCode",{parentName:"p"},"metals.discover-tests"),", however this option is discouraged. In the future it may be deprecated and then removed. Currently it exists because VSCode allows users to choose Test UI and this request is used whenever such change in options occurs."),(0,s.kt)("h2",{id:"how-it-works-under-the-hood"},"How it works under the hood"),(0,s.kt)("p",null,"Test Explorer uses BSP's ",(0,s.kt)("a",{parentName:"p",href:"https://build-server-protocol.github.io/docs/specification.html#debug-request"},"debug request")," to run and debug test classes. TE reuses already available debug support in Metals and build servers such as Bloop or SBT.\nBoth run and debug under the hood use BSP's debug request."),(0,s.kt)("h3",{id:"running-and-debugging"},"Running and debugging"),(0,s.kt)("p",null,"Following diagram (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/bloop/blob/12bdc7f97cc3970d3e22a8b513f4b609c813f0a7/docs/assets/dap-example-metals.png"},"source"),") represents what communication between language client, language server and build server. ",(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/scalacenter/bloop/master/docs/assets/dap-example-metals.png",alt:null})),(0,s.kt)("p",null,"The current implementation of TE is a better version of code lenses, with more user friendly UX provided by the VSCode."),(0,s.kt)("h3",{id:"getting-and-analyzing-results"},"Getting and analyzing results"),(0,s.kt)("p",null,"After test run was finished TE analyzes execution results and sets proper statutes for each test included in run.\n",(0,s.kt)("img",{parentName:"p",src:"https://imgur.com/vop095s.png",alt:null}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://imgur.com/TLhwEtG.png",alt:null})),(0,s.kt)("p",null,"Such detailed information is available thanks to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sbt/test-interface"},"sbt-test-interface")," which abstracts over test framework internals, most important classes are: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sbt/test-interface/blob/17a94641942546e21f4c6b300a3360be2d2888f6/src/main/java/sbt/testing/Event.java"},"Event")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sbt/test-interface/blob/17a94641942546e21f4c6b300a3360be2d2888f6/src/main/java/sbt/testing/Status.java"},"Status")," which are used in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sbt/sbt/blob/50c3cf10825bae3e89af11b3a2c9741e6d98add5/testing/agent/src/main/java/sbt/ForkMain.java"},"sbt.ForkMain"),". Almost all of build servers (if not all of them) uses ",(0,s.kt)("inlineCode",{parentName:"p"},"ForkMain")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"sbt-test-interface")," to offload testing."),(0,s.kt)("p",null,"For each test, there is an ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sbt/sbt/blob/50c3cf10825bae3e89af11b3a2c9741e6d98add5/testing/agent/src/main/java/sbt/ForkMain.java#L394-L440"},"event")," fired which contains all necessary information about execution: fully qualified name of test, execution status and duration.\nThese events are captured by the BSP server (which runs ",(0,s.kt)("inlineCode",{parentName:"p"},"ForkMain")," on the behalf of DAP) and then forwarded to the DAP client as a custom event. Then, those events are captured by the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals-vscode/blob/4fb88f8fa6eacb89c6ce9bdc018b3cd7c2bf6f22/src/test-explorer/test-run-handler.ts#L18-L39"},"client")," and used to determine tests results, after debus session is ended."),(0,s.kt)("p",null,"An example request forwarded to the client looks like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "event",\n  "seq": 20,\n  "event": "testResult",\n  "body": {\n    "category": "testResult",\n    "data": {\n      "suiteName": "a.JunitTestSuite",\n      "duration": 195,\n      "tests": [\n        {\n          "kind": "failed",\n          "testName": "a.JunitTestSuite.test1",\n          "duration": 135,\n          "error": "* a.JunitTestSuite.test1 - java.lang.AssertionError: assertion failed: should equal be true"\n        },\n        {\n          "kind": "passed",\n          "testName": "a.JunitTestSuite.test2",\n          "duration": 60\n        }\n      ]\n    },\n    "type": "testResult"\n  }\n}\n')))}p.isMDXComponent=!0},3635:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/test-explorer-client-queries-6bd676b83c2bfc78fbaeaaed3b5d32f0.png"},4322:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/test-explorer-server-notifications-613f22336688191c84bb8876b3b8bf51.png"}}]);