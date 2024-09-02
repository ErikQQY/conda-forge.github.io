"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[9317],{43558:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var s=i(74848),t=i(28453);const l={title:"2020-04-01"},r="2020-04-01 conda-forge core meeting",a={id:"minutes/2020-04-01",title:"2020-04-01",description:"Attendees",source:"@site/community/minutes/2020-04-01.md",sourceDirName:"minutes",slug:"/minutes/2020-04-01",permalink:"/community/minutes/2020-04-01",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2020-04-01.md",tags:[],version:"current",lastUpdatedAt:1725264655e3,frontMatter:{title:"2020-04-01"},sidebar:"community",previous:{title:"2020-04-15",permalink:"/community/minutes/2020-04-15"},next:{title:"2020-03-18",permalink:"/community/minutes/2020-03-18"}},c={},o=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Your agenda items",id:"your-agenda-items",level:3},{value:"Active votes",id:"active-votes",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"POWER",id:"power",level:4},{value:"CUDA",id:"cuda",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"security+systems",id:"securitysystems",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"Open PRs",id:"open-prs",level:4},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"Last meeting",id:"last-meeting",level:3},{value:"2 meetings ago",id:"2-meetings-ago",level:3},{value:"3 meetings ago",id:"3-meetings-ago",level:3},{value:"Move to Issue Tracker",id:"move-to-issue-tracker",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2020-04-01-conda-forge-core-meeting",children:"2020-04-01 conda-forge core meeting"}),"\n",(0,s.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"MS, ED, LB, CJ, AS, MB, Matt B, FF, JH, Uwe"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"agenda",children:"Agenda"}),"\n",(0,s.jsx)(n.h3,{id:"your-agenda-items",children:"Your agenda items"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[Matt B]"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Should we have an official policy around updates/support for our compiler stack?\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"they are not interested in paid support."}),"\n",(0,s.jsxs)(n.li,{children:["If there is a switch they are going to get a loud alert? (YES!)\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The main problem that the LSST called out was the gcc 5 break."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"answer: no policy because we don't have the bandwidth - it is done adhoc, expect gcc9 in the next 2-3 years"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Also do we have a name for our compiler stack? (gcc7?)"}),"\n",(0,s.jsx)(n.li,{children:"For context, I got a query from a big scientific project (the data management team for the Vera Rubin Observatory).\nThey are moving their entire software stack to use conda-forge + it's compilers (based on work I did for them\nshowing them how to do it! yay!). They are wondering about how the compilers might change in the next 2-3 years and\nwhat label they might apply to their internal systems to track the compiler stack version as a whole. Note they\nonly use linux and osx AFAIK."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"We should publish the way that we decide what pinnings to use and when things change."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Update to gcc 9? jjhelmus wants it done soon, but definitely sometime in the next 2 years"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["gfortran compat break between 7 and 8.  9 is compatible with 8. Details at ",(0,s.jsx)(n.a,{href:"https://gcc.gnu.org/wiki/LibgfortranAbiCleanup",children:"https://gcc.gnu.org/wiki/LibgfortranAbiCleanup"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"active-votes",children:"Active votes"}),"\n",(0,s.jsx)(n.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,s.jsx)(n.h4,{id:"bot",children:"Bot"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"[CJ] Bot auto issues migrator PRs into pinnings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"What cadence do we want for these? Do maintainers decide? Where would this live?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["[CJ] Should we wait for a version beyond R ",(0,s.jsx)(n.code,{children:"4.0.0"})," for migration (mostly a question for the bioconda folks)?"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"What are we updating when?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"root break micro but we push everything"}),"\n",(0,s.jsx)(n.li,{children:"hdf5 breaks everything so we do that once a year"}),"\n",(0,s.jsx)(n.li,{children:"libnetcdf is pinned to micro version"}),"\n",(0,s.jsx)(n.li,{children:"boost pin to micro do every other"}),"\n",(0,s.jsx)(n.li,{children:"tiledb (3 breaks in 18 days, over pinned so should be at 'x.x' instead of 'x.x.x')"}),"\n",(0,s.jsx)(n.li,{children:"protobuf breaks at micro (~once a year)"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"proposed solution:"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"bot team put the rules of thumb above into some form in pinnings"}),"\n",(0,s.jsx)(n.li,{children:"will be documented"}),"\n",(0,s.jsx)(n.li,{children:"core will defer to maintainers"}),"\n",(0,s.jsx)(n.li,{children:"we'll see how this goes..."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"arm",children:"ARM"}),"\n",(0,s.jsx)(n.h4,{id:"power",children:"POWER"}),"\n",(0,s.jsx)(n.h4,{id:"cuda",children:"CUDA"}),"\n",(0,s.jsx)(n.h4,{id:"docs",children:"Docs"}),"\n",(0,s.jsx)(n.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,s.jsx)(n.h4,{id:"website",children:"website"}),"\n",(0,s.jsx)(n.h4,{id:"securitysystems",children:"security+systems"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CFEP was merged"}),"\n",(0,s.jsx)(n.li,{children:"if you want to join us (AS, CJ, Matt B.), please let me know!"}),"\n",(0,s.jsx)(n.li,{children:"currently merging a weekly meeting of this sub-team with the bot sub-team"}),"\n",(0,s.jsx)(n.li,{children:"no formal plans yet"}),"\n",(0,s.jsx)(n.li,{children:"CFEP-13 implementation is ongoing - blocked on appveyor+vs2017 deprecation right now"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,s.jsx)(n.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,s.jsx)(n.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/pull/25",children:"cfep-14"})," security and systems subteam"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Accepted"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/pull/26",children:"cfep-15"})," Deprecate Python 2.7 and vs2008"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Accepted"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"open-prs",children:"Open PRs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/7",children:"cfep-04"})," X11 and CDT policy"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,s.jsx)(n.li,{children:"Needs new champion. Thanks for your work on this pkgw! Has unaddressed comments from pkgw as from Jan 10, 2020"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/9",children:"cfep-06"})," Staged-recipes review lifecycle"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,s.jsx)(n.li,{children:"Lingering comment from @saraedum. @jakirkham, can you reply? Has unadressed comment from @saraedum from Jan 8, 2020"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"cfep-10"})," Feedstock statuses, unmaintained"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,s.jsx)(n.li,{children:"Needs another review. Has unaddressed updates from pkgw as of Jan 11, 2020"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/cfep/pull/23",children:"cfep-12"})," Removing packages that violate the terms of the source package"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Active debate about moving to "broken" vs deleting from conda-forge channel'}),"\n",(0,s.jsx)(n.li,{children:"Active vote, ends on 2020-03-11"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,s.jsx)(n.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,s.jsx)(n.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,s.jsx)(n.h3,{id:"last-meeting",children:"Last meeting"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (Matt Becker) Update the docs with our current thinking / principles."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-meetings-ago",children:"2 meetings ago"}),"\n",(0,s.jsx)(n.h3,{id:"3-meetings-ago",children:"3 meetings ago"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsx)(n.li,{children:"Remove conda forge readthedocs."}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) write a blog post on CUDA stuff we discussed today"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) update docs on how to add CUDA support to feedstocks"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (jakirkham) will open an issue on conda-smithy to investigate Drone issues. (ping the aarch team)\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/954",children:"https://github.com/conda-forge/conda-forge.github.io/issues/954"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"move-to-issue-tracker",children:"Move to Issue Tracker"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-10 next steps: CJ to call a vote for feedback"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," cfep-06 next steps: Ask staged recipes team to champion this CFEP and move it forward"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," jakirkham & CJ-wright to sync on adding CUDA to the migration bot"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Will try and get this scheduled in the next month."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) check internally for funding levels for hotels & flying folks from the community in?"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Figure out finances of conda-forge to support themselves?"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (jjhelmus) Open up CFEP for which python's we're going to support."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);