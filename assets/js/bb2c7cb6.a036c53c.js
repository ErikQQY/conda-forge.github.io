"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[29332],{35043:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var i=n(74848),t=n(28453);const l={title:"2020-09-16"},a="2020-09-16 conda-forge core meeting",c={id:"minutes/2020-09-16",title:"2020-09-16",description:"Zoom link",source:"@site/community/minutes/2020-09-16.md",sourceDirName:"minutes",slug:"/minutes/2020-09-16",permalink:"/community/minutes/2020-09-16",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2020-09-16.md",tags:[],version:"current",lastUpdatedAt:173200824e4,frontMatter:{title:"2020-09-16"},sidebar:"community",previous:{title:"2020-09-30",permalink:"/community/minutes/2020-09-30"},next:{title:"2020-09-09",permalink:"/community/minutes/2020-09-09"}},o={},r=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Standing items",id:"standing-items",level:3},{value:"Your new agenda items",id:"your-new-agenda-items",level:3},{value:"From last meeting",id:"from-last-meeting",level:4},{value:"Active votes",id:"active-votes",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"POWER",id:"power",level:4},{value:"CUDA",id:"cuda",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"security+systems",id:"securitysystems",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"Open PRs",id:"open-prs",level:4},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"This meeting",id:"this-meeting",level:3},{value:"Last meeting",id:"last-meeting",level:3},{value:"2 meetings ago",id:"2-meetings-ago",level:3},{value:"Move to Issue Tracker",id:"move-to-issue-tracker",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"2020-09-16-conda-forge-core-meeting",children:"2020-09-16 conda-forge core meeting"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://flatiron.zoom.us/j/93242638216?pwd=bjRCWmVJRW1oTGJhN09VUmxtTTJOUT09",children:"Zoom link"}),"\n",(0,i.jsx)(s.a,{href:"https://arewemeetingyet.com/UTC/2020-08-26/17:00/w/Conda-forge%20dev%20meeting#eyJ1cmwiOiJodHRwczovL2hhY2ttZC5pby9wUk15dFVKV1FmU3NJM2xvMGlqQzJRP2VkaXQifQ==",children:"What time is the meeting in my time zone"}),"\n",(0,i.jsx)(s.a,{href:"https://hackmd.io/ZyhvUPC-S0iIje3CAdhx1w",children:"last weeks meeting"})]}),"\n",(0,i.jsx)(s.h2,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"CJ Wright"}),"\n",(0,i.jsx)(s.li,{children:"Geoffrey Garret"}),"\n",(0,i.jsx)(s.li,{children:"Filipe Fernandes"}),"\n",(0,i.jsx)(s.li,{children:"Uwe Korn"}),"\n",(0,i.jsx)(s.li,{children:"Keith Kraus"}),"\n",(0,i.jsx)(s.li,{children:"John Kirkham"}),"\n",(0,i.jsx)(s.li,{children:"Wolf Vollprecht"}),"\n",(0,i.jsx)(s.li,{children:"Cheng Lee"}),"\n",(0,i.jsx)(s.li,{children:"Sylvain Corlay"}),"\n",(0,i.jsx)(s.li,{children:"Anthony Scopatz"}),"\n",(0,i.jsx)(s.li,{children:"Matt Becker"}),"\n",(0,i.jsx)(s.li,{children:"Lori Burns"}),"\n",(0,i.jsx)(s.li,{children:"Eric Dill"}),"\n",(0,i.jsx)(s.li,{children:"Michael Sarahan"}),"\n",(0,i.jsx)(s.li,{children:"Isuru Fernando"}),"\n",(0,i.jsx)(s.li,{children:"Crystal Soja"}),"\n",(0,i.jsx)(s.li,{children:"Ray Douglass"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"agenda",children:"Agenda"}),"\n",(0,i.jsx)(s.h3,{id:"standing-items",children:"Standing items"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," intros for new folks on the call"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (CJ) budget"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"current approvals?"}),"\n",(0,i.jsxs)(s.li,{children:["First meeting of the month, screenshare and show the budget?\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Link is in Keybase (numfocus_spreadsheets.txt)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"your-new-agenda-items",children:"Your new agenda items"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (UK) Kaleido PR"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/staged-recipes/pull/12093",children:"https://github.com/conda-forge/staged-recipes/pull/12093"})}),"\n",(0,i.jsxs)(s.li,{children:["Objections\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Need to inspect dependencies and make sure they're compatible with the rest of CF"}),"\n",(0,i.jsx)(s.li,{children:"Should build all of the non-chromium parts in CF"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"dynamically get chromium if it doesn't find it"}),"\n",(0,i.jsx)(s.li,{children:"need licenses for all statically linked packages"}),"\n",(0,i.jsx)(s.li,{children:"shared libs with libstdc++ symbols might be an issue, check with 'nm \u2026 | grep \" T \"'"}),"\n",(0,i.jsxs)(s.li,{children:["(Eric) TODO: Get a call set up with Jon Mease\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"scopatz, wolf, marcel"}),"\n",(0,i.jsx)(s.li,{children:"Uwe to comment on issue"}),"\n",(0,i.jsx)(s.li,{children:"(Isuru) they're vendoring a lot of libraries in the wheel"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (CJ) Adding information to extras to state what the package provides as import names (for python packages). This will help with future inspection work."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/regro/cf-scripts/blob/master/conda_forge_tick/pypi_name_mapping.py#L47",children:"https://github.com/regro/cf-scripts/blob/master/conda_forge_tick/pypi_name_mapping.py#L47"})}),"\n",(0,i.jsxs)(s.li,{children:["libcfgraph might have a list of the imports used inside of each library?\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/regro/libcfgraph/blob/master/artifacts/google-cloud-storage/conda-forge/linux-64/google-cloud-storage-1.24.1-py37_1.json",children:"https://github.com/regro/libcfgraph/blob/master/artifacts/google-cloud-storage/conda-forge/linux-64/google-cloud-storage-1.24.1-py37_1.json"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"valuable to possibly call out who's vendoring what"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (MB) Python 3.9 rc2 (final RC before release?) should be released around these days"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Has anyone look at this yet? What's to prepare?"}),"\n",(0,i.jsx)(s.li,{children:"Final release in about a month"}),"\n",(0,i.jsx)(s.li,{children:"(Crystal) Anaconda hasn't gotten to it yet"}),"\n",(0,i.jsxs)(s.li,{children:["(CJ) When 3.8 appeared, we didn't prep at all. There were about 3-4 weeks of lead time before we were able to produce 3.9 packages\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["This is not true:\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/python-feedstock/pull/258",children:"https://github.com/conda-forge/python-feedstock/pull/258"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/python-feedstock/pull/271",children:"https://github.com/conda-forge/python-feedstock/pull/271"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/python-feedstock/pull/274",children:"https://github.com/conda-forge/python-feedstock/pull/274"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["(Filipe) ",(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/python-feedstock/issues/270",children:"https://github.com/conda-forge/python-feedstock/issues/270"})]}),"\n",(0,i.jsxs)(s.li,{children:["TODO: Should do the simplest thing first: open up a PR and see what fails.\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Rebase the patches, if the patch doesn't apply then open an issue about it."}),"\n",(0,i.jsx)(s.li,{children:"Semi-related: How do we get our patches into the CPython code base?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (MRB) @ggarrett13 has some interest in helping with vs2019 transition"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"What do we need to do to get this done?"}),"\n",(0,i.jsxs)(s.li,{children:["(Isuru) Is this going to be global or just for a few feedstocks?\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"If it's global, that's going to be a bit of a problem. you can link libs with 2017 and 2019 together, but you need 2019 to do the linking. This will require people building conda packages locally to update to vs2019. Uwe was cross-compiling but we only have vs2017."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Which feedstocks need to be updated? Just the vc one"}),"\n",(0,i.jsxs)(s.li,{children:["new universal runtime which adds new DLLs\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"not on windows 10"}),"\n",(0,i.jsx)(s.li,{children:"can download it from windows update"}),"\n",(0,i.jsx)(s.li,{children:"make a new runtime package"}),"\n",(0,i.jsx)(s.li,{children:"jjhelmus posted a note on the filename in gitter"}),"\n",(0,i.jsxs)(s.li,{children:["try and use paul's PR for vc for 2019\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"do that PR for 2017 and try it on vc_dev channel"}),"\n",(0,i.jsx)(s.li,{children:"then do for 2019"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"keep track of where version numbers come from"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"from-last-meeting",children:"From last meeting"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (ED) Anything we need to discuss re: computer for Isuru?"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Going to try the OVH cloud route for now."}),"\n",(0,i.jsx)(s.li,{children:"We've approved this for up to 12 months for now."}),"\n",(0,i.jsx)(s.li,{children:"TODO: Note that future spending proposals should include a TTL"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (MRB) GCC 9.3.0 migration"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"I want to make sure I understand the list of things to do"}),"\n",(0,i.jsx)(s.li,{children:"we've built all of the compilers AFAIK"}),"\n",(0,i.jsx)(s.li,{children:"need to do a direct migration in the bot of the gfortran stack"}),"\n",(0,i.jsx)(s.li,{children:"do we want to change the libgfortran libs on linux to have the SO version in the library?"}),"\n",(0,i.jsx)(s.li,{children:"What am I missing?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0}),' (MRB) github user @jan-janssen wants to list us in the "affiliated projects" section here ',(0,i.jsx)(s.a,{href:"https://pyiron.org/collaborators/",children:"https://pyiron.org/collaborators/"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'numfocus trademark guidelines are: "allow most uses as long as it is clear the person using the mark does not appear to be the project or endorsed by the project (without specific permission to do so)"'}),"\n",(0,i.jsx)(s.li,{children:"they say ultimately it is up to us"}),"\n",(0,i.jsxs)(s.li,{children:['are we ok with this user displaying our logo and calling us an "affiliated project"?\n',(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"enthusiastic yes!"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["PR for this: ",(0,i.jsx)(s.a,{href:"https://github.com/pyiron/pyiron.github.io/pull/77",children:"https://github.com/pyiron/pyiron.github.io/pull/77"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (MRB) github docker images"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"AFAICT we cannot host public docker images on github unless we let anyone in conda-forge make images and push them"}),"\n",(0,i.jsxs)(s.li,{children:["quote from docs (",(0,i.jsx)(s.a,{href:"https://docs.github.com/en/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images#configuring-visibility-of-container-images-for-an-organization",children:"https://docs.github.com/en/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images#configuring-visibility-of-container-images-for-an-organization"}),")\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"'For organization image containers, organizations admins must enable public packages before you can set the visibility to public. For more information, see \"Enabling GitHub Container Registry for your organization.\"'"}),"\n",(0,i.jsx)(s.li,{children:"(IF) -  from the docs it looks like we can't control them adding new packages, but we can control who have access to existing packages."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"I tried pushing an image and could not make it public."}),"\n",(0,i.jsx)(s.li,{children:"thus we need a separate org"}),"\n",(0,i.jsxs)(s.li,{children:["I propose ",(0,i.jsx)(s.code,{children:"conda-forge-docker"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"active-votes",children:"Active votes"}),"\n",(0,i.jsx)(s.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,i.jsx)(s.h4,{id:"bot",children:"Bot"}),"\n",(0,i.jsx)(s.h4,{id:"arm",children:"ARM"}),"\n",(0,i.jsx)(s.h4,{id:"power",children:"POWER"}),"\n",(0,i.jsx)(s.h4,{id:"cuda",children:"CUDA"}),"\n",(0,i.jsx)(s.h4,{id:"docs",children:"Docs"}),"\n",(0,i.jsx)(s.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,i.jsx)(s.h4,{id:"website",children:"website"}),"\n",(0,i.jsx)(s.h4,{id:"securitysystems",children:"security+systems"}),"\n",(0,i.jsx)(s.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,i.jsx)(s.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,i.jsx)(s.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,i.jsx)(s.h4,{id:"open-prs",children:"Open PRs"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/7",children:"cfep-04"})," X11 and CDT policy"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Needs new champion. Thanks for your work on this pkgw! Has unaddressed comments from pkgw as from Jan 10, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/9",children:"cfep-06"})," Staged-recipes review lifecycle"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Lingering comment from @saraedum. @jakirkham, can you reply? Has unadressed comment from @saraedum from Jan 8, 2020"}),"\n",(0,i.jsx)(s.li,{children:"(MRB) The stalebot has solved the worst of the issues here. I think we could defer this one permanently."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"cfep-10"})," Feedstock statuses, unmaintained"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"INACTIVE - Merge in with some inactive-esque status?"}),"\n",(0,i.jsx)(s.li,{children:"Needs another review. Has unaddressed updates from pkgw as of Jan 11, 2020"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/cfep/pull/23",children:"cfep-12"})," Removing packages that violate the terms of the source package"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Stalled since May 26, 2020"}),"\n",(0,i.jsx)(s.li,{children:'Active debate about moving to "broken" vs deleting from conda-forge channel'}),"\n",(0,i.jsx)(s.li,{children:"Active vote, ends on 2020-03-11"}),"\n",(0,i.jsx)(s.li,{children:"What were the results of the vote?"}),"\n",(0,i.jsx)(s.li,{children:"Did we hear back from NumFOCUS?"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/cfep/pull/32",children:"cfep-17"})," Handling pin backports and dependency rebuilds"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Stalled debate about implementation details between Isuru, CJ and Matt"}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"UPDATE 2020-07-22"}),": We in principle have agreement to render the extra pinnings needed directly in the feedstock\non a temporary basis (i.e., until the migration has ended)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(s.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,i.jsx)(s.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,i.jsx)(s.h3,{id:"this-meeting",children:"This meeting"}),"\n",(0,i.jsx)(s.p,{children:"2020-09-16"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," Get a call set up with Jon Mease about the kaleido staged recipes PR\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Emailed on 2020-09-16"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (FF) Open up a PR on the python feedstock for python 3.9 and see what fails"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"last-meeting",children:"Last meeting"}),"\n",(0,i.jsx)(s.p,{children:"2020-09-09"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (ED) Update governance docs with similar voting model as what got put into conda-tools (+3 with no -1 is a pass)"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (SC) Write jinja template to turn institutional partners yaml into a website ",(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge.github.io/blob/2a2d3caaf7d74eb370ac40c679ba337a73d15c8a/src/inst_partners.yaml",children:"https://github.com/conda-forge/conda-forge.github.io/blob/2a2d3caaf7d74eb370ac40c679ba337a73d15c8a/src/inst_partners.yaml"})]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (SC) Document what needs to be done to create an OVH account and get access"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"2-meetings-ago",children:"2 meetings ago"}),"\n",(0,i.jsx)(s.h3,{id:"move-to-issue-tracker",children:"Move to Issue Tracker"}),"\n",(0,i.jsxs)(s.p,{children:["2020-08-26\n",(0,i.jsx)(s.strong,{children:"Docker hub"})]}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (JK) Check in on Azure build workers to see if they have the docker hub limitation. Maybe Azure and docker hub"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (JK) Check in on Azure build workers and see if they have the docker hub limitation"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (JK) work with dockerhub to see if we can get OSS status"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," (MRB) start pushing images to quay (",(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/docker-images/pull/152",children:"https://github.com/conda-forge/docker-images/pull/152"}),")"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"OVH"})}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (???) build webpage to credit them (and others)"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," If we're adding a logo, will want to make sure that we have permission to use it."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0}),' Shout-out on twitter at some point. "Thanks forOVHCloud for providing a VM", etc. (maybe after we ship qt on windows with it?)']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Figure out how to communicate breaking changes to users. Likely should open up an issue immediately for futher discussion. Ping @kkraus, plus capture notes from further up in these meeting notes"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," John K. will update the cuda toolkit feedstock on the git repo to note the NVBug link to the internal NVIDIA issue tracker"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Jonathan will update docs to note that some non-exhaustive list of packages (like cuda-toolkit, MKL, etc.)"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Jonathan will review this ",(0,i.jsx)(s.a,{href:"https://github.com/AnacondaRecipes/cudatoolkit-feedstock/pull/7",children:"PR"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Kale) schedule conda working group"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," cfep-10 next steps: CJ to call a vote for feedback"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," cfep-06 next steps: Ask staged recipes team to champion this CFEP and move it forward"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," jakirkham & CJ-wright to sync on adding CUDA to the migration bot"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Will try and get this scheduled in the next month."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) check internally for funding levels for hotels & flying folks from the community in?"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (Eric) Figure out finances of conda-forge to support themselves?"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jjhelmus) Open up CFEP for which python's we're going to support"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) write a blog post on CUDA stuff we discussed today"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) update docs on how to add CUDA support to feedstocks"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (jakirkham) will open an issue on conda-smithy to investigate Drone issues. (ping the aarch team)"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/954",children:"https://github.com/conda-forge/conda-forge.github.io/issues/954"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (ED) Who we are page? Some combination of a FAQ and a who is everyone. FAQ things like:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"who's the POC for CF <> Anaconda, CF <> NumFocus, CF <> Azure"}),"\n",(0,i.jsx)(s.li,{children:"who's the POC for the various subteams?"}),"\n",(0,i.jsx)(s.li,{children:"Informal information: roles, day jobs, bios, the whole nine yards, why you're here, etc."}),"\n",(0,i.jsx)(s.li,{children:"Public or internal? I don't really care either way. Anyone feel strongly one way or the other?"}),"\n",(0,i.jsx)(s.li,{children:"opt-in to public bios"}),"\n",(0,i.jsxs)(s.li,{children:["software carpentry has a large number of instructors and has ",(0,i.jsx)(s.a,{href:"https://carpentries.org/instructors",children:"https://carpentries.org/instructors"})]}),"\n",(0,i.jsx)(s.li,{children:'some concern about "yet another place to keep stuff up to date"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (ED) document strategies for reproducible environments using conda-forge"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," (UK) Static libraries stuff"]}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," Add linting hints to builds to find them"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," Recommend how to package them -> CFEP-18"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," We should write docs saying we don't provide support and this is a bad idea. -> CFEP-18"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var i=n(96540);const t={},l=i.createContext(t);function a(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);