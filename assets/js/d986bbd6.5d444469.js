"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1549:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:3},c="Format of Returned Data",u={unversionedId:"Data Retrieval/Returned Data Format",id:"Data Retrieval/Returned Data Format",title:"Format of Returned Data",description:"The API returns data in JSON format.",source:"@site/docs/Data Retrieval/Returned Data Format.md",sourceDirName:"Data Retrieval",slug:"/Data Retrieval/Returned Data Format",permalink:"/docs/Data Retrieval/Returned Data Format",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HTTP Requests",permalink:"/docs/Data Retrieval/HTTP Requests"}},p={},m=[{value:"Form Object Format",id:"form-object-format",level:2}],s={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"format-of-returned-data"},"Format of Returned Data"),(0,o.kt)("p",null,"The API returns data in JSON format."),(0,o.kt)("p",null,"The GET by ID returns a single JSON object."),(0,o.kt)("p",null,"Filtered GET returns a JSON array of objects."),(0,o.kt)("h2",{id:"form-object-format"},"Form Object Format"),(0,o.kt)("p",null,"An example of a returned form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{   \n    "_id": "618bb32b0223e00009c1bb1c",\n    "startTime": 658238060.788467,\n    "endTime": 658238079.126968,\n    "cTime": "2021-11-10T11:55:23.360Z",\n    "mTime": "2021-11-10T11:55:23.360Z",\n    "createdBy": "someone@gmail.com",\n    "updatedBy": "someone@gmail.com",\n    "formId": "60b673a1a483f467b4c1244d",\n    "location": {\n        "latitude": "38.865142822265625",\n        "longitude": "-94.74552286255881"\n    },\n    "owner": "AgVoiceDevTeam",\n    "projectName": "Project1",\n    "subproject": "Test form",\n    "subSubproject": "",\n    "traits": {\n        "Comments": [\n            "THIS IS MY COMMENT"\n        ],\n        "Plot Info": "4",\n        "Row": "100",\n        "Count": "10"\n    }\n}\n')),(0,o.kt)("p",null,"Fields in the returned object:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"_id:"),(0,o.kt)("p",{parentName:"li"},"The database ID of the record.  This value can be used in an ID-based GET.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"formId, owner:"),(0,o.kt)("p",{parentName:"li"},"AgVoice internal values.  Should these be removed from the data returned to the customer?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"startTime, endTime:"),(0,o.kt)("p",{parentName:"li"},"Define the time span during which the record was collected by the inspector in the field.\nThese values are milliseconds since the Posix epoch (00:00:00 UTC on 1 January 1970).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"cTime, mTime:"),(0,o.kt)("p",{parentName:"li"},"The time when the record was uploaded to AgVoice, and the time of the last modification to the record.  Currently modification is not supported, so these will be the same time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"createdBy, updatedBy:"),(0,o.kt)("p",{parentName:"li"},"The username of the user who created and most-recently updated the record.  Currently modification is not supported, so these will be the same.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"location:"),(0,o.kt)("p",{parentName:"li"},"If available, the physical location at which the record was created in the field.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"projectName, subproject, subSubproject:"),(0,o.kt)("p",{parentName:"li"},"Identify the form template used to create the record.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"traits:"),(0,o.kt)("p",{parentName:"li"},"Customer-specific traits gathered in the field."))))}d.isMDXComponent=!0}}]);