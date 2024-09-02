"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[8420],{10264:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var s=i(74848),o=i(28453);const l={title:"2016-11-24"},r="2016-11-24: General Discussion",t={id:"minutes/2016-11-24",title:"2016-11-24",description:"Time00 (UTC)",source:"@site/community/minutes/2016-11-24.md",sourceDirName:"minutes",slug:"/minutes/2016-11-24",permalink:"/community/minutes/2016-11-24",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2016-11-24.md",tags:[],version:"current",lastUpdatedAt:1725264655e3,frontMatter:{title:"2016-11-24"},sidebar:"community",previous:{title:"2017-01-06",permalink:"/community/minutes/2017-01-06"},next:{title:"2016-11-17",permalink:"/community/minutes/2016-11-17"}},c={},d=[];function a(n){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",s:"s",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2016-11-24-general-discussion",children:"2016-11-24: General Discussion"}),"\n",(0,s.jsx)(e.p,{children:"Time: 20:00 (UTC)"}),"\n",(0,s.jsxs)(e.p,{children:["Hangout link: ",(0,s.jsx)(e.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"}),(0,s.jsx)(e.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie",children:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Attendees"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Filipe"}),"\n",(0,s.jsx)(e.li,{children:"Mike"}),"\n",(0,s.jsx)(e.li,{children:"Phil"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Standing Items"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"How many repos? ~1400"}),"\n",(0,s.jsx)(e.li,{children:"How many contributors? ~300"}),"\n",(0,s.jsx)(e.li,{children:"CFEP status"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Notes"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Action: Phil to take a look at ",(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge.github.io/pull/256",children:"conda forge/conda forge.github.io#256"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Filipe will ask Carlos whether he is prepared to build qt"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Binary data (repacking)"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'*   Currently done with "low hanging fruit" or difficult packages\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"CFEP would be helpful to give clear guidance"}),"\n",(0,s.jsx)(e.li,{children:"What does it take to merge repackaging stuff?  At what point does it become painful enough to allow repackaging?"}),"\n",(0,s.jsxs)(e.li,{children:["MSYS2 - ",(0,s.jsx)(e.a,{href:"https://conda-forge.hackpad.com/ep/profile/yHQTJXZ4gyS",children:"Michael Sarahan"})," to ask Ray about build infrastructure for MSYS2 and perhaps unification with conda/conda-forge"]}),"\n",(0,s.jsx)(e.li,{children:"Git  for windows as example to avoid (Large agglomeration of individual  projects - prefer to build individual projects).  If MSYS2 were not  available, this would be an OK candidate for repackaging, because it is  such a huge pain.  Because MSYS2 is available, we should avoid  repackaging git for windows."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"conda-build 2"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"*   bldpkg_path also takes a config argument. See [](https://circleci.com/gh/conda-forge/texinfo-feedstock/24)[https://circleci.com/gh/conda-forge/texinfo-feedstock/24](https://circleci.com/gh/conda-forge/texinfo-feedstock/24)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["There is very little that needs to be done. See ",(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge-build-setup-feedstock/issues/38",children:"conda forge/conda forge build setup feedstock#38"}),"#issuecomment-262931757"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"(It is a matter of merging PRs now :-)"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"can we just disable symlinks for environments when building to fix the CMAKE issue? Phil: I believe so. MS +1"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"    *   [](http://conda.pydata.org/docs/config.html#disallow-soft-linking-allow-softlinks)[http://conda.pydata.org/docs/config.html#disallow-soft-linking-allow-softlinks](http://conda.pydata.org/docs/config.html#disallow-soft-linking-allow-softlinks)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ACTION: Let's get rid of softlinks when using conda-build"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Handling broken packages"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"*   Hotfix  capability: we will never have control of the channel index, so we must  rebuild or modify existing packages. MS: There should be a preference  for rebuild vs modify. CFEP (policy) would be helpful.\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:'Generally,  moving broken packages to a "broken" channel is preferable to deleting  them. We can consider purging these after a period of time.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Agenda"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.s,{children:"Binary data in recipes "}),"Repackaging existing executables"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"conda-forge installer (our own Miniconda)"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://conda-forge.hackpad.com/DZNKZdgiMbF",children:"Staged Releases"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Smoothly handling CI registration failures during conversion - ",(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/staged-recipes/pull/1466",children:"conda forge/staged recipes#1466"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Handling broken packages"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Mention ",(0,s.jsx)(e.a,{href:"https://conda-forge.hackpad.com/N5evEX7bZAf",children:"conda forge upload service"})," idea"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Build infrastructure status - ",(0,s.jsx)(e.a,{href:"https://github.com/conda/build_infrastructure/issues/1",children:"conda/build_infrastructure#1"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Team update web service - ",(0,s.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge-webservices/issues/63",children:"conda forge/conda forge webservices#63"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Windows BLAS Solutions"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Build/Upload Qt"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Move to conda-build 2!"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"conda-forge.org"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"pycon 2017"}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>t});var s=i(96540);const o={},l=s.createContext(o);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);