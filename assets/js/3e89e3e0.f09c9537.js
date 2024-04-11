"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[8590],{22103:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=s(85893),o=s(11151);const t={title:"2017-04-26"},r="2017-04-26: General Discussion",a={id:"minutes/2017-04-26",title:"2017-04-26",description:"Time00 (UTC)",source:"@site/community/minutes/2017-04-26.md",sourceDirName:"minutes",slug:"/minutes/2017-04-26",permalink:"/community/minutes/2017-04-26",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2017-04-26.md",tags:[],version:"current",lastUpdatedAt:1712837600,formattedLastUpdatedAt:"Apr 11, 2024",frontMatter:{title:"2017-04-26"},sidebar:"community",previous:{title:"2017-05-10",permalink:"/community/minutes/2017-05-10"},next:{title:"2017-01-06",permalink:"/community/minutes/2017-01-06"}},c={},l=[];function d(n){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",version:"version",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"2017-04-26-general-discussion",children:"2017-04-26: General Discussion"}),"\n",(0,i.jsx)(e.p,{children:"Time: 17:00 (UTC)"}),"\n",(0,i.jsxs)(e.p,{children:["Hangout link: ",(0,i.jsx)(e.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"}),(0,i.jsx)(e.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie",children:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Attendees"})}),"\n",(0,i.jsxs)(e.p,{children:["Jonathan Helmus, Eric Dill,  Filipe, Peter Williams, John Kirkham, ",(0,i.jsx)(e.a,{href:"https://conda-forge.hackpad.com/ep/profile/yBvjHx0Ad3Y",children:"Matt Craig"}),", ",(0,i.jsx)(e.a,{href:"https://conda-forge.hackpad.com/ep/profile/yHQTJXZ4gyS",children:"Michael Sarahan"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Standing Items"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Notes"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["conda-build-all conda 4.3 - ",(0,i.jsx)(e.a,{href:"https://github.com/SciTools/conda-build-all/pull/83",children:"SciTools/conda build all#83"})]}),"\n",(0,i.jsxs)(e.li,{children:["CFEP manual build and upload - ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/5",children:"conda forge/conda forge enhancement proposals#5"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Agenda"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Defaults   channel libpng and jpeg updates: scheduled for 1Q 2017.  Continuum   requests closer collaboration on future api/abi incompatible updates to   core libraries."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"One pinning scheme for both defaults and conda-forge?"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"That would be ideal.  Hopefully we can head that way."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"We missed the opportunity to coordinate libpng, I pinned to 1.6.28 and 1-day after I found out that defaults pinned to 1.6.27."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"We  should coordinate to move to icu 58.* together. I already pinned in the  script (which is broken BTW), but I will start sending PRs to use that  ICU soon."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Drop   Python 3.4. Now that conda-forge have Qt 4+jpeg9* on Windows the  Python  3.5+Windows users can migrate from Python 3.4 to 3.5."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Do MinGW compile things that play well with Python 3.5/MSVC 2015 yet? AFAICT this is still an ",(0,i.jsx)(e.a,{href:"http://bugs.python.org/issue4709",children:"issue"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Have a VM I'm willing to use to do this. Details ",(0,i.jsx)(e.a,{href:"https://github.com/boxcutter/macos",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Re-rendering channel improvements. ( ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/conda-smithy/pull/401",children:"conda forge/conda smithy#401"})," )"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["GSoC ",(0,i.jsx)(e.a,{href:"https://github.com/numfocus/gsoc"}),(0,i.jsx)(e.a,{href:"https://github.com/numfocus/gsoc",children:"https://github.com/numfocus/gsoc"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Build Qt 5 based on ",(0,i.jsx)(e.a,{href:"https://anaconda.org/qttesting/qt/files"}),(0,i.jsx)(e.a,{href:"https://anaconda.org/qttesting/qt/files",children:"https://anaconda.org/qttesting/qt/files"})," and manually upload it"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Document when should we use ",(0,i.jsx)(e.code,{children:"osx_is_app: True"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["should use this whenever a GUI is involved. This uses ",(0,i.jsx)(e.code,{children:"pythonw"})," on osx instead of ",(0,i.jsx)(e.code,{children:"python"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Status of Python 3.6 and Numpy 1.12 package: Discuss the ",(0,i.jsx)(e.code,{children:"MNT: Re-render the feedstock [ci skip]"})," issue for Linux Python 3.6 packages."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:['Take advantage of conda 4.3 new feature "Generic- and Python-Type Noarch/Universal Packages." ',(0,i.jsx)(e.a,{href:"https://www.continuum.io/blog/developer-blog/announcing-general-availability-conda-4-3"}),(0,i.jsx)(e.a,{href:"https://www.continuum.io/blog/developer-blog/announcing-general-availability-conda-4-3",children:"https://www.continuum.io/blog/developer-blog/announcing-general-availability-conda-4-3"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Example of how this could be done using the imagesize package: ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/imagesize-feedstock/pull/3",children:"conda forge/imagesize feedstock#3"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Break linter out of ",(0,i.jsx)(e.code,{children:"conda-smithy"})," into a new package (e.g. ",(0,i.jsx)(e.code,{children:"conda-lint"}),"). ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/conda-smithy/issues/386",children:"conda forge/conda smithy#386"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Perl silliness. Too many Perls showing up after re-rendering. How to fix? ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/conda-smithy/issues/415",children:"conda forge/conda smithy#415"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Use Travis-CI auto-cancel feature"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Discuss how to enable R builds. We do not have win32 builds of r-base and no way to deal with the CONDA_R=",(0,i.jsx)(e.version,{children:" yet."})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"When  building R packages, there is often a timeout when downloading the  sources from CRAN. Maybe the connect and read timeout in conda-build can  be made configurable?"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Manual upload of VTK due to CI limitation."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Discuss R migration effort"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Discuss staged-recipes/Travis CI failures."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Discuss revamping team update as a webservice ( ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/conda-forge-webservices/issues/63",children:"conda forge/conda forge webservices#63"})," )"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Note the current team update has been failing for months and only completes a little more than half the teams."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Adding other specialized teams."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:['consider  switching to dropbox paper (as the bar at the top of hackpad suggests).  I know that jupyter has switched to dropbox paper for their dev  meetings. (Apparently this is no longer optional) (admin of the  conda-forge group on hackpad can "migrate" these hackpads to paper: ',(0,i.jsx)(e.a,{href:"https://www.dropbox.com/help/9156#import"}),")",(0,i.jsx)(e.a,{href:"https://www.dropbox.com/help/9156#import",children:"https://www.dropbox.com/help/9156#import"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Guidance  for renaming conda packages and its impact on the feedstock. tl;dr do  you (a) submit a new recipe to staged recipes and deprecate the old one  or (b) update the feedstock in-place"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Discuss updated pinning handling ( ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/staged-recipes/pull/2267",children:"conda forge/staged recipes#2267"})," ) ( ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/conda-smithy/pull/482",children:"conda forge/conda smithy#482"})," )."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Suggestion: Match name the pinning file will have in conda build 3."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Dropping Obvious-CI from the docker image ( ",(0,i.jsx)(e.a,{href:"https://github.com/conda-forge/docker-images/pull/47",children:"conda forge/docker images#47"})," )."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"X11 CFEP"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Omnia moving to conda-forge"}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>a,a:()=>r});var i=s(67294);const o={},t=i.createContext(o);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);