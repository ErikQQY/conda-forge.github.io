"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[9430],{53651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(74848),o=t(28453),i=t(3514);const s={title:"Understanding conda-forge"},c="Understanding conda-forge",a={id:"maintainer/understanding_conda_forge/index",title:"Understanding conda-forge",description:"",source:"@site/docs/maintainer/understanding_conda_forge/index.mdx",sourceDirName:"maintainer/understanding_conda_forge",slug:"/maintainer/understanding_conda_forge/",permalink:"/docs/maintainer/understanding_conda_forge/",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/docs/maintainer/understanding_conda_forge/index.mdx",tags:[],version:"current",lastUpdatedAt:1725264655e3,frontMatter:{title:"Understanding conda-forge"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/maintainer/maintainer_faq"},next:{title:"The life cycle of a package",permalink:"/docs/maintainer/understanding_conda_forge/life_cycle"}},l={},d=[];function u(e){const n={h1:"h1",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"understanding-conda-forge",children:"Understanding conda-forge"}),"\n","\n",(0,r.jsx)(i.A,{})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3514:(e,n,t)=>{t.d(n,{A:()=>_});t(96540);var r=t(34164),o=t(84142),i=t(28774),s=t(53465),c=t(16654),a=t(21312),l=t(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=t(74848);function f(e){let{href:n,children:t}=e;return(0,u.jsx)(i.A,{href:n,className:(0,r.A)("card padding--lg",d.cardContainer),children:t})}function m(e){let{href:n,icon:t,title:o,description:i}=e;return(0,u.jsxs)(f,{href:n,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[t," ",o]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function g(e){let{item:n}=e;const t=(0,o.Nr)(n),r=function(){const{selectMessage:e}=(0,s.W)();return n=>e(n,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,u.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function h(e){let{item:n}=e;const t=(0,c.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(n.docId??void 0);return(0,u.jsx)(m,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function p(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(h,{item:n});case"category":return(0,u.jsx)(g,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const t=(0,o.$S)();return(0,u.jsx)(_,{items:t.items,className:n})}function _(e){const{items:n,className:t}=e;if(!n)return(0,u.jsx)(x,{...e});const i=(0,o.d1)(n);return(0,u.jsx)("section",{className:(0,r.A)("row",t),children:i.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(p,{item:e})},n)))})}},53465:(e,n,t)=>{t.d(n,{W:()=>l});var r=t(96540),o=t(44586);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((n=>e.includes(n)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:s(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=t.select(n),i=t.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(t,n,e)}}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);