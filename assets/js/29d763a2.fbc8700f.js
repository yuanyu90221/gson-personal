"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[7203],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7211:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(8028),a=(r(9496),r(9613));const i={sidebar_position:1,description:"\u8a2d\u8a08\u6a21\u5f0f\u7b46\u8a18",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},o="\ud83d\udca1 \u8a2d\u8a08\u6a21\u5f0f\u6982\u8ff0(\u4e00)",l={unversionedId:"designPattern/overview1",id:"designPattern/overview1",title:"\ud83d\udca1 \u8a2d\u8a08\u6a21\u5f0f\u6982\u8ff0(\u4e00)",description:"\u8a2d\u8a08\u6a21\u5f0f\u7b46\u8a18",source:"@site/docs/designPattern/overview1.md",sourceDirName:"designPattern",slug:"/designPattern/overview1",permalink:"/docs/designPattern/overview1",draft:!1,editUrl:"https://github.com/yuanyu90221/gson-personal/tree/main/docs/designPattern/overview1.md",tags:[{label:"\u8a2d\u8a08\u6a21\u5f0f",permalink:"/docs/tags/\u8a2d\u8a08\u6a21\u5f0f"},{label:"Design Pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1700154434,formattedLastUpdatedAt:"2023\u5e7411\u670816\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u8a2d\u8a08\u6a21\u5f0f\u7b46\u8a18",key:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"],tags:["\u8a2d\u8a08\u6a21\u5f0f","Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"\u5169\u5c64\u8cc7\u6599\u593e\u7bc4\u4f8b",permalink:"/docs/category/\u5169\u5c64\u8cc7\u6599\u593e\u7bc4\u4f8b"},next:{title:"\u7b2c\u4e8c\u5c64\u7bc4\u4f8b",permalink:"/docs/category/\u7b2c\u4e8c\u5c64\u7bc4\u4f8b"}},s={},p=[{value:"\u8a2d\u8a08\u6a21\u5f0f\u7684\u8d77\u6e90",id:"\u8a2d\u8a08\u6a21\u5f0f\u7684\u8d77\u6e90",level:2},{value:"\u8a2d\u8a08\u6a21\u5f0f\u601d\u60f3\u7684\u5f15\u7528",id:"\u8a2d\u8a08\u6a21\u5f0f\u601d\u60f3\u7684\u5f15\u7528",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u8a2d\u8a08\u6a21\u5f0f\u6982\u8ff0\u4e00"},"\ud83d\udca1 \u8a2d\u8a08\u6a21\u5f0f\u6982\u8ff0(\u4e00)"),(0,a.kt)("h2",{id:"\u8a2d\u8a08\u6a21\u5f0f\u7684\u8d77\u6e90"},"\u8a2d\u8a08\u6a21\u5f0f\u7684\u8d77\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8a2d\u8a08\u6a21\u5f0f\u7684\u8a95\u751f : \u51fa\u81ea\u65bc Christopher Alexander<\u54c8\u4f5b\u5927\u5b78\u5efa\u7bc9\u5b78\u535a\u58eb>\uff0c\u865f\u7a31 The father of patterns"),(0,a.kt)("li",{parentName:"ul"},"Christopher Alexander \u8207\u5176\u5718\u968a\u7528\u4e86\u5c07\u8fd1 20 \u5e74\u7684\u6642\u9593\uff0c\u8abf\u67e5\u4f4f\u5b85\u5468\u908a\u74b0\u5883"),(0,a.kt)("li",{parentName:"ul"},"\u4ed6\u5011\u767c\u73fe\u4eba\u5011\u5c0d\u8212\u9069\u7684\u4f4f\u5b85\u8207\u57ce\u5e02\u74b0\u5883\u4e4b\u9593\u5b58\u5728\u8457\u4e00\u4e9b\u5171\u540c\u7684\u8a8d\u540c\u5b9a\u5f8b"),(0,a.kt)("li",{parentName:"ul"},"Christopher Alexander \u5728\u8457\u4f5c A Pattern Language: Towns, Buildings, Construction \u4e2d\u628a\u9019\u4e9b\u8a8d\u540c\u898f\u5f8b\u6b78\u7d0d\u70ba 253 \u4e2a\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u6a21\u5f0f\u90fd\u662f\u5f9e",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Context(\u524d\u63d0\u689d\u4ef6)"),(0,a.kt)("li",{parentName:"ol"},"Theme \u6216 Problem\uff08\u76ee\u6a19\u554f\u984c\uff09"),(0,a.kt)("li",{parentName:"ol"},"Solution\uff08\u89e3\u6c7a\u65b9\u6848\uff09")))),(0,a.kt)("p",null,"\u5f8c\u4f86 Christopher Alexander \u7d66\u51fa\u4e86\u4e00\u500b\u5efa\u8b70:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"A pattern is a successful or efficient solution to a recurring  problem within a context\n\u6a21\u5f0f\u662f\u5728\u7279\u5b9a\u74b0\u5883\u4e0b\u4eba\u5011\u89e3\u6c7a\u67d0\u985e\u91cd\u8907\u51fa\u73fe\u554f\u984c\u7684\u4e00\u5957\u6210\u529f\u7372\u6709\u6548\u7684\u89e3\u6c7a\u65b9\u6848\n")),(0,a.kt)("h2",{id:"\u8a2d\u8a08\u6a21\u5f0f\u601d\u60f3\u7684\u5f15\u7528"},"\u8a2d\u8a08\u6a21\u5f0f\u601d\u60f3\u7684\u5f15\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1990 \u5e74\uff0c\u8edf\u9ad4\u5de5\u7a0b\u754c\u958b\u59cb\u95dc\u6ce8 Christopher Alexander \u5728\u4f4f\u5b85\u9818\u57df\u7684\u7a81\u7834"),(0,a.kt)("li",{parentName:"ul"},"\u5728 1991~1992 \u5e74\u9593\u7531\u56db\u4f4d\u8edf\u9ad4\u5de5\u7a0b\u7684\u5b78\u8005\uff0c\u5c07\u5176\u5f15\u5165\u7a0b\u5f0f\u958b\u767c\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u5728 1994 \u5e74\u6b78\u7d0d\u4e26\u767c\u8868\u51fa 23 \u7a2e\u5e38\u7528\u7684\u8a2d\u8a08\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u6a21\u5f0f\u4f86\u7d71\u4e00\u6e9d\u901a\u7269\u4ef6\u5c0e\u5411\u5728 1. \u6e9d\u901a 2. \u8a2d\u8a08 3.\u958b\u767c\u4e4b\u9593\u7684\u4ee3\u6e9d")),(0,a.kt)("p",null,"\u8edf\u9ad4\u6a21\u5f0f(Software Patterns)\u5c31\u6b64\u8a95\u751f\uff0c\u8edf\u9ad4\u958b\u767c\u7684\u751f\u547d\u9031\u671f\u4e0a\u90fd\u5b58\u5728\u8457\u4e00\u4e9b\u88ab\u8a8d\u540c\u7684\u6a21\u5f0f\n\u8edf\u9ad4\u6a21\u5f0f\u793a\u5716:\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/designPattern/orverviewP1.png?raw=true",alt:"mdImg"})))}d.isMDXComponent=!0}}]);