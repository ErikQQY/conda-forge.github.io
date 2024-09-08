"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[9568],{26697:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(74848),t=i(28453);const r={title:"2016-05-13"},l="2016-05-13",o={id:"minutes/2016-05-13",title:"2016-05-13",description:"14:00 UTC",source:"@site/community/minutes/2016-05-13.md",sourceDirName:"minutes",slug:"/minutes/2016-05-13",permalink:"/community/minutes/2016-05-13",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2016-05-13.md",tags:[],version:"current",lastUpdatedAt:1725831725e3,frontMatter:{title:"2016-05-13"},sidebar:"community",previous:{title:"2016-06-03",permalink:"/community/minutes/2016-06-03"},next:{title:"2016-05-09",permalink:"/community/minutes/2016-05-09"}},c={},d=[];function h(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2016-05-13",children:"2016-05-13"})}),"\n",(0,s.jsx)(n.p,{children:"14:00 UTC"}),"\n",(0,s.jsxs)(n.p,{children:["Hangout link: ",(0,s.jsx)(n.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"}),(0,s.jsx)(n.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie",children:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Attendees"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Jonathan Helmus"}),"\n",(0,s.jsx)(n.li,{children:"Michael Sarahan"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://conda-forge.hackpad.com/ep/profile/wv6uvIZX6h0",children:"John Kirkham"})}),"\n",(0,s.jsx)(n.li,{children:"Phil Elson"}),"\n",(0,s.jsx)(n.li,{children:"Eric Dill"}),"\n",(0,s.jsx)(n.li,{children:"Anthony Scopatz"}),"\n",(0,s.jsx)(n.li,{children:"Filipe Fernandes"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"** Agenda**"}),"\n",(0,s.jsxs)(n.ul,{children:[(0,s.jsxs)(n.li,{children:["PyPI metadata redundancy\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Prototype tool to convert pure Python wheels directly to conda packages: ",(0,s.jsx)(n.a,{href:"https://github.com/takluyver/wheel2conda"}),(0,s.jsx)(n.a,{href:"https://github.com/takluyver/wheel2conda",children:"https://github.com/takluyver/wheel2conda"})]}),"\n",(0,s.jsx)(n.li,{children:"Automated feedstock maintenance."}),"\n",(0,s.jsx)(n.li,{children:'URL to use for source. (this is kind of tied in with this so I added it here. though a longer topic is present for it below, "Link preference with packages...".)'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Python3 vs Python==3\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How to depend (inc build depend) on applications which require Python 3, from a Python==2 env"}),"\n",(0,s.jsx)(n.li,{children:"'Subenvironment dependencies' are a possible alternative"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Low level packaging"}),"\n",(0,s.jsx)(n.li,{children:"NetCDF (also curl/ca-certificates and Perl packages)"}),"\n",(0,s.jsx)(n.li,{children:"MSYS2 integrated into conda. How do we want to use this? Do we still want VC?"}),"\n",(0,s.jsx)(n.li,{children:"GitHub rate limitations. How can we further mitigate these?"}),"\n",(0,s.jsx)(n.li,{children:"Add namespace to packages `node-`, `ruby-`, `perl-`, `why not python-` ;-)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"'Practicality beats purity' ;-)"}),"\n",(0,s.jsx)(n.li,{children:"At least at first, but i don't find this generally true."}),"\n",(0,s.jsx)(n.li,{children:"One  of the things proposed at continuum is the notion of primary  namespaces  - ones that effectively defined a default prefix of the  namespaced for  the package. This might be the best of both worlds. You  could have  ordered priority, too: search python-* first, then node-*   next, then finally the full package name with no prefix.  This priority  would be defined by per-environment condarc perhaps, with initial   saying  depending on what packages get installed. For example, creating  an env with python installed first would make python primary env."}),"\n",(0,s.jsx)(n.li,{children:"I  can understand the attraction of that, but it seems like a potential  source of considerable confusion (e.g. why does installing x work  differently in this environment to that one?). Maybe this would be more  workable if namespaces were actually part of a new syntax, rather than  just prefixes on package names."}),"\n",(0,s.jsx)(n.li,{children:"Sure,  that's reasonable - have the namespace search thing be a user-defined  convenience thing, rather than an automatically determined thing."}),"\n",(0,s.jsx)(n.li,{children:"It  is worth keeping in mind that the Python naming change would be a big break from existing Continuum packages. So, this decision should not be taken lightly."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Another thing to consider here might be a new piece of metadata. For instance, we could specify the primary language of a package. We could then specify to ",(0,s.jsx)(n.code,{children:"conda install"}),"  that we want this language of a package. Possible syntax might include something that looks like that of the above. Not sure how we want to handled conflicts if we want to error, warn and install everything, or something else."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Dropping py34 ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/pull/465",children:"conda forge/staged recipes#465"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Link preference with packages options below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Prefer close to source (e.g. GitHub tarballs)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Package management sites (e.g. PyPI)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    *   No matter where the source lives an installable package will be on PyPI.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Easier to incorporate into automated maintenance (however we do that)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sometimes includes important pre-build steps."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Avoids any rate limiting that a GitHub download might incur."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Avoids redoing any steps that developers have done for us."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Other options?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Celebrating supporters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Some supporters\n\n        *   AppVeyor\n*   Continuum\n*   Others?\n\n*   Splash page like Jupyter has? Something else.\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Variants. ( ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/pull/525",children:"conda forge/staged recipes#525 )"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"PR reviews"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Treat every PR as a Work in Progress. At least let PRs sit for a few hours before merging them.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Wait for answers when we ask clarification questions and avoid acting before we have them."}),"\n",(0,s.jsx)(n.li,{children:"Respect the first reviewer by not repeating her/his review comments with another words. That is also bad for the person submitting the PR as it is confusing."}),"\n",(0,s.jsx)(n.li,{children:'Avoid the death by a thousand cuts: Many small "nit" comments that might scare new contributors ( ping Mike S ;-)'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Community presence."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Twitter ( [conda forge/conda forge.github.io#114](https://github.com/conda-forge/conda-forge.github.io/issues/114) )\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Stackoverflow (e.g. ",(0,s.jsx)(n.a,{href:"http://stackoverflow.com/questions/36838181/how-can-i-start-building-universal-conda-packages"}),(0,s.jsx)(n.a,{href:"http://stackoverflow.com/questions/36838181/how-can-i-start-building-universal-conda-packages",children:"http://stackoverflow.com/questions/36838181/how-can-i-start-building-universal-conda-packages"})," )"]}),"\n",(0,s.jsx)(n.li,{children:"Others?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Standardization of toolchain configuration ( ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/pull/578",children:"conda forge/staged recipes#578"})," )."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"** Notes**"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Next meeting, have one next week?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Wednesday/Thursday, 1400 UTC \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"New release of conda-build coming, recipe is in the works and will be submitted soon."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   cmake has issues with VC2008 express, AppVeyor.yaml may need to be updated\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"scikit-build"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/scikit-build/scikit-build"}),(0,s.jsx)(n.a,{href:"https://github.com/scikit-build/scikit-build",children:"https://github.com/scikit-build/scikit-build"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"John/Michael will create/reopen AppVeyor PR to address this issue"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    *   staged-recipe PR ( [conda forge/staged recipes#607](https://github.com/conda-forge/staged-recipes/pull/607) )\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["conda-smithy PR ( ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-smithy/pull/107",children:"conda forge/conda smithy#107"})," )"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Celebrating supporters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Splash page, networkx widget to show who is contributing\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Monetary support, have been approached by NumFocus"}),"\n",(0,s.jsx)(n.li,{children:"Needs someone (?) to do some web design for page on logos"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Dropping py34 ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/pull/465",children:"conda forge/staged recipes#465"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Requires move to VS2015, mingw-64 still has issues\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"~50% of Python 3 users are 3.4"}),"\n",(0,s.jsx)(n.li,{children:"Python 3.6 final is to be released in 12/16/2016"}),"\n",(0,s.jsx)(n.li,{children:"Would be fine to support only 2.7 and 3.5"}),"\n",(0,s.jsx)(n.li,{children:"What do download counts show?  Issues with CI consuming"}),"\n",(0,s.jsx)(n.li,{children:"Drop 3.4 when Python 3.6 is released"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"req = urllib.Request(url, headers={'User-Agent': 'Mozilla/5.0'})"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/pyne/pyne/blob/4ddb759afce46e278d8f8a79fc4b96d58334d0a2/tests/utils.py#L20"}),(0,s.jsx)(n.a,{href:"https://github.com/pyne/pyne/blob/4ddb759afce46e278d8f8a79fc4b96d58334d0a2/tests/utils.py#L20",children:"https://github.com/pyne/pyne/blob/4ddb759afce46e278d8f8a79fc4b96d58334d0a2/tests/utils.py#L20"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Mirror tarball as a release in the feedstock repository"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Variants."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Use features, end up making meta-packages, pain to maintain\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"BLAS variant package?"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Have multiple branches on Numpy, each would have a different BLAS variant, maybe even play with build matrix to simpify."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Michael more interested in sub-environments."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"How would these interplay with the packages provided by defaults?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    *   Don't use features? Would this work?  Solved may be trying to minimize number of features, needs some testing.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Likely best solution for short term, longer term it would be nice if conda/conda-build supports this."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For time being use OpenBLAS for NumPy build"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Messes with the build string, no build number"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Community presence."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Twitter, set up twitter bot to post about when packages get added... which ones?\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Stack overflow.  Should we be monitoring SO to recommend and help folks with conda-forge."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    *   Anthony will add Google alerts to monitor, other should also\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Others should considering doing this too."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Phil has script to re-render feedstocks, but currently only he can execute."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Set up Heroku account which run this\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Can select feedstocks be re-rendeded?  PR needed for this feature"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sometimes connection to anaconda fail, especially on AppVeyor."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Maybe need a better error message from AppVeyor"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["appveyor cache info: ",(0,s.jsx)(n.a,{href:"https://www.appveyor.com/docs/build-cache"}),(0,s.jsx)(n.a,{href:"https://www.appveyor.com/docs/build-cache",children:"https://www.appveyor.com/docs/build-cache"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'    *   "Resulting archive should not exceed 100 MB."\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Conda-forge presentation slides from Filipe for SciPyLA"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Next meeting in three weeks, Friday June 3, 1400 UTC"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Merging PR from staged-recipes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   `make check`\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'or other "meaningful" tests'}),"\n",(0,s.jsx)(n.li,{children:'avoid "hit and run" merged where additional work will be needed.'}),"\n",(0,s.jsxs)(n.li,{children:["PR template ( ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/pull/550",children:"conda forge/staged recipes#550"})," )"]}),"\n",(0,s.jsxs)(n.li,{children:["Guidelines ( ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/blob/master/docs/guidelines.md"}),(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/blob/master/docs/guidelines.md",children:"https://github.com/conda-forge/conda-forge.github.io/blob/master/docs/guidelines.md"})," )"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Adding people to have rights on staged-recipes will be decided upon each meeting."}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(96540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);