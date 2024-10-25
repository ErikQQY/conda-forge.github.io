"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[3572],{16112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453);const a={title:"2019-07-24"},o="2019-07-24 conda-forge core meeting",l={id:"minutes/2019-07-24",title:"2019-07-24",description:"HackMD link",source:"@site/community/minutes/2019-07-24.md",sourceDirName:"minutes",slug:"/minutes/2019-07-24",permalink:"/community/minutes/2019-07-24",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2019-07-24.md",tags:[],version:"current",lastUpdatedAt:1729853633e3,frontMatter:{title:"2019-07-24"},sidebar:"community",previous:{title:"2019-08-07",permalink:"/community/minutes/2019-08-07"},next:{title:"2019-06-26",permalink:"/community/minutes/2019-06-26"}},r={},c=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Scipy Sprints",id:"scipy-sprints",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Please add your name here if you would like to stick something on the agenda",id:"please-add-your-name-here-if-you-would-like-to-stick-something-on-the-agenda",level:3},{value:"Eric",id:"eric",level:3},{value:"Marius",id:"marius",level:3},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"New Action items",id:"new-action-items",level:2}];function d(e){const t={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"2019-07-24-conda-forge-core-meeting",children:"2019-07-24 conda-forge core meeting"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://hackmd.io/P8on5P8wR3q3WslwrJzOEg",children:"HackMD link"})}),"\n",(0,i.jsx)(t.h2,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsx)(t.p,{children:"List the attendees for the meeting"}),"\n",(0,i.jsx)(t.h2,{id:"agenda",children:"Agenda"}),"\n",(0,i.jsx)(t.p,{children:"Please add new items to the meeting Agenda"}),"\n",(0,i.jsx)(t.h3,{id:"scipy-sprints",children:"Scipy Sprints"}),"\n",(0,i.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," Update from conda-forge Sprint (Filipe / Marius / Lori)\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Mugs next year?"}),"\n",(0,i.jsx)(t.li,{children:"No one really wanted to work on infrastructure."}),"\n",(0,i.jsxs)(t.li,{children:["Turned into more of a helpdesk -- Still a lot of issues out there. Mostly around documentation.\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"How do I handle strict?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," Migration of Robot Operating System (ROS?) packaging ecosystem to conda-forge? Wolf Volprecht -- Who talked to him about this? I just overheard it. Maybe that was Anthony / Michael?\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Wolf is interested in adding these packages to conda-forge. Will probably be handled the same way as "r", so put a "ros-" prefix on the packages. Marius to reach out.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," Pypy implementation proposal: ",(0,i.jsx)(t.a,{href:"https://docs.google.com/document/d/1DdOEwmG3pr4m9kIktc1crp3dJPdvJjbPvidmEclpuCA/edit",children:"https://docs.google.com/document/d/1DdOEwmG3pr4m9kIktc1crp3dJPdvJjbPvidmEclpuCA/edit"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We have the CI bandwidth to build up the pypy ecosystem -- that's not a particularly painful thing to do. It's mostly around getting these things to even build. pypy has internal versions (6, 7, 8, etc.) that have compatibilities with specific versions of CPython, but the versioning scheme is different."}),"\n",(0,i.jsx)(t.li,{children:"Q: How will the pypy variant interact with other variants? It'll be another top-level variant that has to be mutually exclusive with the CPython variant."}),"\n",(0,i.jsxs)(t.li,{children:["pypy has a different directory structure -- there may need to be changes on the conda side to support ",(0,i.jsx)(t.code,{children:"noarch: pypy"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Next steps: Say yes / no to the spec, point out potential pitfalls, give it back to (Matti?) and say here's the work that needs to be done."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Marius did a vague hack at scipy to get stuff building on k8s on Azure. We can probably build anything that is Linux-like for things that take too long for CI. Things TODO: Grab the artifacts and upload them to anaconda.org. This is likely in a state that someone else can pick up and run with."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,i.jsx)(t.h4,{id:"bot",children:"Bot"}),"\n",(0,i.jsx)(t.h4,{id:"arm",children:"ARM"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["aarch64/ppc64le ",(0,i.jsx)(t.a,{href:"https://conda-forge.org/status/",children:"migration"})," is nearly complete"]}),"\n",(0,i.jsxs)(t.li,{children:["still missing a handful of key packages:\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"matplotlib"}),"\n",(0,i.jsxs)(t.li,{children:["notebook (requires pandoc)\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Jonathan: Trying to build a pandoc package for ARM. Right now we've been repackaging a binary. Required for notebook. Might need to convert nbformat back to an arch package"}),"\n",(0,i.jsx)(t.li,{children:"use matplotlib-core and avoid the qt dep that matplotlib pulls in?"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"opencv"}),"\n",(0,i.jsx)(t.li,{children:"qt"}),"\n",(0,i.jsx)(t.li,{children:"pyarrow"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"CDTs needed for many of these"}),"\n",(0,i.jsxs)(t.li,{children:["possibility of supporting a 32-bit ARM platform, ",(0,i.jsx)(t.a,{href:"https://github.com/conda-forge/conda-smithy/pull/1115",children:"linux-armv7l"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"blocked on llvm-dev packages -- can use build-locally.py but someone just has to do it."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Jonathan: built out compiler packages for arm7. Now smithy & pinnings have the right stuff. There's a couple more things but we can start a migrator soon."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"docs",children:"Docs"}),"\n",(0,i.jsx)(t.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,i.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(t.a,{href:"https://github.com/conda-forge/staged-recipes/pull/8764",children:"PR #8764 (sextractor)"}),". Very widely used program in astronomy, the name of the program is ",(0,i.jsx)(t.code,{children:"sextractor"}),", the command line to run it is ",(0,i.jsx)(t.code,{children:"sex"}),". Potential Code of Conduct violation in the name. Proposed alternatives are a different name for the conda-forge package ",(0,i.jsx)(t.code,{children:"astromatic-sextractor"})," or ",(0,i.jsx)(t.code,{children:"astromatic-source-extractor"}),". Even if the name of the package is not ",(0,i.jsx)(t.code,{children:"sextractor"}),", the page on anaconda.org for the package would look something like this, i.e. still several references to ",(0,i.jsx)(t.code,{children:"sextractor"}),":\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"widely used, been around forever -- renaming is probably not a good path to pursue"}),"\n",(0,i.jsx)(t.li,{children:'NumFocus says: The name is bad and it\'s a possible breaking of the code of conduct. If upstream agrees that it\'s a bad name and has a commitment to change the name. An issue was opened upstream and the community agreed to change the name of the binary from "sex" -> "sextractor" but not to change the name of the project.'}),"\n",(0,i.jsx)(t.li,{children:"Matt: Follow up with Anthony on this."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/S6aYP9r.png",alt:"Screenshot of sextractor page"})}),"\n",(0,i.jsx)(t.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,i.jsx)(t.h3,{id:"please-add-your-name-here-if-you-would-like-to-stick-something-on-the-agenda",children:"Please add your name here if you would like to stick something on the agenda"}),"\n",(0,i.jsx)(t.h3,{id:"eric",children:"Eric"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Anaconda.org maintenance is slow. How can CF push it forward or help maintain it? What are acceptable alternatives if Anaconda.org continues to have slow maintenance and there\u2019s no pathway for CF to contribute to the maintenance?"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"TO DISCUSS: Who would want access to anaconda.org? Anaconda is going to require an external contractor agreement in place that transfers all IP to Anaconda. You will also need to get a statement from your employer that states that they recognize Anaconda's IP ownership of all contributions you make to the anaconda.org code base. Without both of these documents in place we will not be able to give individuals access to the anaconda.org code base."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"* As long as there is a path forward with the new platform that Anaconda is building. \n    * label management aspect is an important feature for conda-forge.\n    * working with Anaconda on ensuring whatever feature set exists for the new anaconda.org still matches what the conda-forge community needs. \n    * TODO: Eric to set up a meeting to document feature set for anaconda.org\n"})}),"\n",(0,i.jsx)(t.p,{children:"2. Switch to Anaconda's webex -- Thanks to Marius / Flatiron Health for all the usage. The 45 minute time limit is something that we should work around.\nMarius: To ping IT and fix the zoom meeting ends in 40 minutes issue."}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Making meetings public?\na. Publish this meeting agenda on the Monday before the Wednesday meeting and request for community members to attend / add notes to this doc in hackmd?\nb. Open issue on github.com/conda-forge.github.io asking for feedback from the community?\nc. I guess we get everyone's email from their git commits and email blast the whole community, but that seems like it should be reserved for emergencies\nd. Post to public gitter"}),"\n",(0,i.jsx)(t.p,{children:'a. Minutes should be public, meetings should be invite.\nb. Alternatively: Give people "read-only" access to the live meeting.\nc. Filipe: Research software for audio listen only access for other members of the community that want to attend but aren\'t part of core.'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Update meeting invite list. Here are some folks that are on the invite list but do not regularly show up. Should we drop them? Anyone who is a Yes / maybe / probably, I'll email as a group and let them know that we're going to drop them from the invite, but that it's not to be exclusive, just to keep communication lean. They're 100% always welcome to re-join!"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"mailto:jdblischak@gmail.com",children:"jdblischak@gmail.com"})}),"\n",(0,i.jsx)(t.li,{children:"Kai Tietz (Anaconda) - probably"}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"mailto:joshua.adelman@gmail.com",children:"joshua.adelman@gmail.com"})}),"\n",(0,i.jsx)(t.li,{children:"Lars Ewe (Anaconda) - yes"}),"\n",(0,i.jsx)(t.li,{children:"Bj\xf6rn Gr\xfcning (emeritus)"}),"\n",(0,i.jsx)(t.li,{children:"Kale Franz (Anaconda) - yes"}),"\n",(0,i.jsx)(t.li,{children:"Phil Elson (emeritus)"}),"\n",(0,i.jsx)(t.li,{children:"Michael Wendt (nvidia)"}),"\n",(0,i.jsx)(t.li,{children:"Adam Beberg (nvidia)"}),"\n",(0,i.jsx)(t.li,{children:"Raymond Douglass (nvidia)"}),"\n",(0,i.jsxs)(t.li,{children:["Sophia Parafina (Anaconda) ",(0,i.jsx)(t.del,{children:"maybe"})," checked with her and she wants to stay involved"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Make the core meeting longer?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Change to 45 minutes for next meeting."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"marius",children:"Marius"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Intel compiler update.\na. Spoke with David Liu at SciPy about how to use compilers safely. There's a bit of admin involved with the licensing.\nb. Marius has a repo that he's working on that outlines this architecture. Will post that soon-ish"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(t.p,{children:"Notes from todays core meeting"}),"\n",(0,i.jsx)(t.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,i.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," Eric to take over organizing the dev meetings, making notes available, etc."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"new-action-items",children:"New Action items"}),"\n",(0,i.jsx)(t.p,{children:"Copy new action items to next meetings agenda so we can check in.\nMake sure each action item is assigned to someone or it will likely not get done."}),"\n",(0,i.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," Filipe to open issue about fixing docs -- there were some issues that came up at the sprints."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," Marius to reach out to Wolf about robot operating systems making it to conda-forge"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," Mike:  pypy Next steps: Say yes / no to the spec, point out potential pitfalls, give it back to (Matti?) and say here's the work that needs to be done."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," Open issue on conda-forge.github.io noting work done on the kubernetes cluster"]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," Filipe: Research software for audio listen only access for other members of the community that want to attend but aren't part of core."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," Marius - reach out to internal IT to clean up some Zoom hiccups."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",disabled:!0})," Marius: intel compiler architecture repo update."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);