"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[6300],{99106:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=n(85893),r=n(11151),a=n(52991);const c={title:"Maintainer Documentation"},s="Maintainer Documentation",o={id:"maintainer/index",title:"Maintainer Documentation",description:"",source:"@site/docs/maintainer/index.mdx",sourceDirName:"maintainer",slug:"/maintainer/",permalink:"/docs/maintainer/",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/docs/maintainer/index.mdx",tags:[],version:"current",lastUpdatedAt:1712837600,formattedLastUpdatedAt:"Apr 11, 2024",frontMatter:{title:"Maintainer Documentation"},sidebar:"docs",previous:{title:"Talks and resources",permalink:"/docs/user/talks"},next:{title:"Infrastructure",permalink:"/docs/maintainer/infrastructure"}},d={},l=[];function u(t){const e={h1:"h1",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{id:"maintainer-documentation"}),"\n",(0,i.jsx)(e.h1,{id:"maintainer-documentation",children:"Maintainer Documentation"}),"\n","\n","\n",(0,i.jsx)(a.Z,{})]})}function m(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},52991:(t,e,n)=>{n.d(e,{Z:()=>j});n(67294);var i=n(36905),r=n(53438),a=n(33692),c=n(13919),s=n(95999),o=n(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(85893);function u(t){let{href:e,children:n}=t;return(0,l.jsx)(a.Z,{href:e,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:r,description:a}=t;return(0,l.jsxs)(u,{href:e,children:[(0,l.jsxs)(o.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),a&&(0,l.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function f(t){let{item:e}=t;const n=(0,r.LM)(e);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function p(t){let{item:e}=t;const n=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(e.docId??void 0);return(0,l.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??i?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,l.jsx)(p,{item:e});case"category":return(0,l.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,r.jA)();return(0,l.jsx)(j,{items:n.items,className:e})}function j(t){const{items:e,className:n}=t;if(!e)return(0,l.jsx)(x,{...t});const a=(0,r.MN)(e);return(0,l.jsx)("section",{className:(0,i.Z)("row",n),children:a.map(((t,e)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:t})},e)))})}},11151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>c});var i=n(67294);const r={},a=i.createContext(r);function c(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);