"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[5671],{33590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(74848),r=n(28453);const s={},i="Removing build in favor of python-build",a={permalink:"/news/2024/08/21/remove-build",source:"@site/news/2024-08-21-remove-build.md",title:"Removing build in favor of python-build",description:"For nearly two years now, we have favored the use python-build as the package name for the PyPA build",date:"2024-08-21T00:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Changes Feedstock Output Validation Procedure",permalink:"/news/2024/09/08/output-validation-changes"},nextItem:{title:"Removing wheel and setuptools as Dependencies for pip",permalink:"/news/2024/08/21/sunsetting-pip-deps"}},c={authorsImageUrls:[]},d=[];function u(e){const t={a:"a",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(t.p,{children:["For nearly two years now, we have favored the use ",(0,o.jsx)(t.code,{children:"python-build"})," as the package name for the PyPA ",(0,o.jsx)(t.a,{href:"https://github.com/pypa/build",children:(0,o.jsx)(t.code,{children:"build"})}),"\nproject over ",(0,o.jsx)(t.code,{children:"build"}),". In fact, the ",(0,o.jsx)(t.code,{children:"build"})," feedstock on ",(0,o.jsx)(t.code,{children:"conda-forge"})," is archived and has not had its version\nupdated. To complete this transition, we are going to mark all existing ",(0,o.jsx)(t.code,{children:"build"})," packages as broken, provide\na more detailed linter hint, and turn off the migration infrastructure we've been using to help move feedstocks.\nAny questions or comments can be directed to the ",(0,o.jsx)(t.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/2269",children:"GitHub issue"})," on this work."]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);