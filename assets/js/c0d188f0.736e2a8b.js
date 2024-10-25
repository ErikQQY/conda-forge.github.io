"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[7161],{17870:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var i=n(74848),t=n(28453);const l={title:"2020-09-02"},a="2020-09-02 conda-forge core meeting",c={id:"minutes/2020-09-02",title:"2020-09-02",description:"Zoom link",source:"@site/community/minutes/2020-09-02.md",sourceDirName:"minutes",slug:"/minutes/2020-09-02",permalink:"/community/minutes/2020-09-02",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2020-09-02.md",tags:[],version:"current",lastUpdatedAt:1729853633e3,frontMatter:{title:"2020-09-02"},sidebar:"community",previous:{title:"2020-09-09",permalink:"/community/minutes/2020-09-09"},next:{title:"2020-08-26",permalink:"/community/minutes/2020-08-26"}},d={},r=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Standing items",id:"standing-items",level:3},{value:"Your new agenda items",id:"your-new-agenda-items",level:3},{value:"Active votes",id:"active-votes",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"POWER",id:"power",level:4},{value:"CUDA",id:"cuda",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"security+systems",id:"securitysystems",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"Open PRs",id:"open-prs",level:4},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"This meeting",id:"this-meeting",level:3},{value:"Last meeting",id:"last-meeting",level:3},{value:"3 meetings ago",id:"3-meetings-ago",level:3},{value:"Move to Issue Tracker",id:"move-to-issue-tracker",level:3}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"2020-09-02-conda-forge-core-meeting",children:"2020-09-02 conda-forge core meeting"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://flatiron.zoom.us/j/93242638216?pwd=bjRCWmVJRW1oTGJhN09VUmxtTTJOUT09",children:"Zoom link"}),"\n",(0,i.jsx)(s.a,{href:"https://arewemeetingyet.com/UTC/2020-08-26/17:00/w/Conda-forge%20dev%20meeting#eyJ1cmwiOiJodHRwczovL2hhY2ttZC5pby9wUk15dFVKV1FmU3NJM2xvMGlqQzJRP2VkaXQifQ==",children:"What time is the meeting in my time zone"}),"\n",(0,i.jsx)(s.a,{href:"https://hackmd.io/uoxd_bzSRie5Dq1ZrMSvhA",children:"last weeks meeting"})]}),"\n",(0,i.jsx)(s.h2,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Matt B."}),"\n",(0,i.jsx)(s.li,{children:"Crystal"}),"\n",(0,i.jsx)(s.li,{children:"Eric D."}),"\n",(0,i.jsx)(s.li,{children:"Marius"}),"\n",(0,i.jsx)(s.li,{children:"CJ"}),"\n",(0,i.jsx)(s.li,{children:"Anthony"}),"\n",(0,i.jsx)(s.li,{children:"Sylvain"}),"\n",(0,i.jsx)(s.li,{children:"Wolf"}),"\n",(0,i.jsx)(s.li,{children:"Cheng"}),"\n",(0,i.jsx)(s.li,{children:"Keith K."}),"\n",(0,i.jsx)(s.li,{children:"Mike S."}),"\n",(0,i.jsx)(s.li,{children:"few others that didn't get captured"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"agenda",children:"Agenda"}),"\n",(0,i.jsx)(s.h3,{id:"standing-items",children:"Standing items"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," intros for new folks on the call"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (CJ) budget\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"current approvals are all up to date."}),"\n",(0,i.jsxs)(s.li,{children:["screenshare and show the doc monthly?\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Link is in Keybase (numfocus_spreadsheets.txt)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Active Vote: ",(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/1150",children:"https://github.com/conda-forge/conda-forge.github.io/issues/1150"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"your-new-agenda-items",children:"Your new agenda items"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (MRB) AWS is going to pay our bill \ud83c\udf89 assuming we can move the account over"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (ED/WV) Machine for Isuru to do windows builds: ",(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/1150",children:"https://github.com/conda-forge/conda-forge.github.io/issues/1150"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (IF) Cross compiling python recipes."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"requirements:\n  build:\n    - cross-python    # [build_platform != target_platform]\n    - python          # [build_platform != target_platform]\n    - pip             # [build_platform != target_platform]\n    - cython          # [build_platform != target_platform]\n  host:\n    - python\n    - pip\n    - cython\n  run:\n    - python\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (CHL) Proposals to drop Python 2.7, < 3.6 support"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["conda: ",(0,i.jsx)(s.a,{href:"https://github.com/conda/conda/issues/10180",children:"https://github.com/conda/conda/issues/10180"})]}),"\n",(0,i.jsxs)(s.li,{children:["conda-build: ",(0,i.jsx)(s.a,{href:"https://github.com/conda/conda-build/issues/4024",children:"https://github.com/conda/conda-build/issues/4024"})]}),"\n",(0,i.jsx)(s.li,{children:"Looking at next major version release; ~2020-Q4 or 2020-Q1"}),"\n",(0,i.jsx)(s.li,{children:"Possibly consider 3.7 for encoding-related PEPs; choice will depend on how close we are to upstream EOL date for 3.6"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," OVH VM: created with the communicated specs. Need to follow up with OVH about getting access."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["People who need access need to create OVH accounts. Their accounts will be added as maintainers of that project.\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Should probably manage with terraform"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Add OVH to this yaml: ",(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge.github.io/blob/7f5c62c510104f78d8bd821ad8f34fced8c575c1/src/inst_partners.yaml",children:"https://github.com/conda-forge/conda-forge.github.io/blob/7f5c62c510104f78d8bd821ad8f34fced8c575c1/src/inst_partners.yaml"})]}),"\n",(0,i.jsx)(s.li,{children:"Render that yaml into jinja2"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["(SC) R bindings for mamba: ",(0,i.jsx)(s.a,{href:"https://github.com/marimeireles/rhumba",children:"https://github.com/marimeireles/rhumba"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Screencast: ",(0,i.jsx)(s.a,{href:"https://user-content.gitter-static.net/eb15dbe3c06bffa8af391f8f58f90240efd15cd5/68747470733a2f2f757365722d696d616765732e67697468756275736572636f6e74656e742e636f6d2f31373630303938322f38393636393235362d61376536626130302d643863652d313165612d383637362d3333313130386532386561322e676966",children:"https://user-content.gitter-static.net/eb15dbe3c06bffa8af391f8f58f90240efd15cd5/68747470733a2f2f757365722d696d616765732e67697468756275736572636f6e74656e742e636f6d2f31373630303938322f38393636393235362d61376536626130302d643863652d313165612d383637362d3333313130386532386561322e676966"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"(MVN)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/regro/cf-scripts/blob/master/conda_forge_tick/pypi_name_mapping.py",children:"mapping detector"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/regro/cf-graph-countyfair/tree/master/mappings/pypi",children:"mappings"})}),"\n",(0,i.jsx)(s.li,{children:"Mappings from conda <-> PyPi <-> import_name"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"active-votes",children:"Active votes"}),"\n",(0,i.jsx)(s.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,i.jsx)(s.h4,{id:"bot",children:"Bot"}),"\n",(0,i.jsx)(s.h4,{id:"arm",children:"ARM"}),"\n",(0,i.jsx)(s.h4,{id:"power",children:"POWER"}),"\n",(0,i.jsx)(s.h4,{id:"cuda",children:"CUDA"}),"\n",(0,i.jsx)(s.h4,{id:"docs",children:"Docs"}),"\n",(0,i.jsx)(s.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,i.jsx)(s.h4,{id:"website",children:"website"}),"\n",(0,i.jsx)(s.h4,{id:"securitysystems",children:"security+systems"}),"\n",(0,i.jsx)(s.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,i.jsx)(s.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,i.jsx)(s.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,i.jsx)(s.h4,{id:"open-prs",children:"Open PRs"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/7",children:"cfep-04"})," X11 and CDT policy"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Needs new champion. Thanks for your work on this pkgw! Has unaddressed comments from pkgw as from Jan 10, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/9",children:"cfep-06"})," Staged-recipes review lifecycle"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Lingering comment from @saraedum. @jakirkham, can you reply? Has unadressed comment from @saraedum from Jan 8, 2020"}),"\n",(0,i.jsx)(s.li,{children:"(MRB) The stalebot has solved the worst of the issues here. I think we could defer this one permanently."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"cfep-10"})," Feedstock statuses, unmaintained"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Needs another review. Has unaddressed updates from pkgw as of Jan 11, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/cfep/pull/23",children:"cfep-12"})," Removing packages that violate the terms of the source package"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Stalled since May 26, 2020"}),"\n",(0,i.jsx)(s.li,{children:'Active debate about moving to "broken" vs deleting from conda-forge channel'}),"\n",(0,i.jsx)(s.li,{children:"Active vote, ends on 2020-03-11"}),"\n",(0,i.jsx)(s.li,{children:"What were the results of the vote?"}),"\n",(0,i.jsx)(s.li,{children:"Did we hear back from NumFOCUS?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/cfep/pull/32",children:"cfep-17"})," Handling pin backports and dependency rebuilds"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Stalled debate about implementation details between Isuru, CJ and Matt"}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"UPDATE 2020-07-22"}),": We in principle have agreement to render the extra pinnings needed directly in the feedstock\non a temporary basis (i.e., until the migration has ended)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(s.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,i.jsx)(s.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,i.jsx)(s.h3,{id:"this-meeting",children:"This meeting"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (ED) Update governance docs with similar voting model as what got put into conda-tools (+3 with no -1 is a pass)"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (SC) Write jinja template to turn institutional partners yaml into a website ",(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge.github.io/blob/2a2d3caaf7d74eb370ac40c679ba337a73d15c8a/src/inst_partners.yaml",children:"https://github.com/conda-forge/conda-forge.github.io/blob/2a2d3caaf7d74eb370ac40c679ba337a73d15c8a/src/inst_partners.yaml"})]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (SC) Document what needs to be done to create an OVH account and get access"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"last-meeting",children:"Last meeting"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Docker hub"})}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (JK) Check in on Azure build workers to see if they have the docker hub limitation. Maybe Azure and docker hub"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (JK) Check in on Azure build workers and see if they have the docker hub limitation"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (JK) work with dockerhub to see if we can get OSS status"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (???) start pushing images to quay (github?)"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (???) put changes in smithy to make sure we can use those other image locations"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"OVH"})}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (???) build webpage to credit them (and others)"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," If we're adding a logo, will want to make sure that we have permission to use it."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0}),' Shout-out on twitter at some point. "Thanks forOVHCloud for providing a VM", etc. (maybe after we ship qt on windows with it?)']}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"3-meetings-ago",children:"3 meetings ago"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Figure out how to communicate breaking changes to users. Likely should open up an issue immediately for futher discussion. Ping @kkraus, plus capture notes from further up in these meeting notes"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"move-to-issue-tracker",children:"Move to Issue Tracker"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," John K. will update the cuda toolkit feedstock on the git repo to note the NVBug link to the internal NVIDIA issue tracker"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Jonathan will update docs to note that some non-exhaustive list of packages (like cuda-toolkit, MKL, etc.)"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Jonathan will review this ",(0,i.jsx)(s.a,{href:"https://github.com/AnacondaRecipes/cudatoolkit-feedstock/pull/7",children:"PR"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Kale) schedule conda working group"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," cfep-10 next steps: CJ to call a vote for feedback"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," cfep-06 next steps: Ask staged recipes team to champion this CFEP and move it forward"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," jakirkham & CJ-wright to sync on adding CUDA to the migration bot"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Will try and get this scheduled in the next month."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) check internally for funding levels for hotels & flying folks from the community in?"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) Figure out finances of conda-forge to support themselves?"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jjhelmus) Open up CFEP for which python's we're going to support"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) write a blog post on CUDA stuff we discussed today"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) update docs on how to add CUDA support to feedstocks"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) will open an issue on conda-smithy to investigate Drone issues. (ping the aarch team)"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/954",children:"https://github.com/conda-forge/conda-forge.github.io/issues/954"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (ED) Who we are page? Some combination of a FAQ and a who is everyone. FAQ things like:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"who's the POC for CF <> Anaconda, CF <> NumFocus, CF <> Azure"}),"\n",(0,i.jsx)(s.li,{children:"who's the POC for the various subteams?"}),"\n",(0,i.jsx)(s.li,{children:"Informal information: roles, day jobs, bios, the whole nine yards, why you're here, etc."}),"\n",(0,i.jsx)(s.li,{children:"Public or internal? I don't really care either way. Anyone feel strongly one way or the other?"}),"\n",(0,i.jsx)(s.li,{children:"opt-in to public bios"}),"\n",(0,i.jsxs)(s.li,{children:["software carpentry has a large number of instructors and has ",(0,i.jsx)(s.a,{href:"https://carpentries.org/instructors",children:"https://carpentries.org/instructors"})]}),"\n",(0,i.jsx)(s.li,{children:'some concern about "yet another place to keep stuff up to date"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (CJ) Form finance subteam"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (ED) document strategies for reproducible environments using conda-forge"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (UK) Static libraries stuff"]}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Add linting hints to builds to find them"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," Recommend how to package them -> CFEP-18"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," We should write docs saying we don't provide support and this is a bad idea. -> CFEP-18"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var i=n(96540);const t={},l=i.createContext(t);function a(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);