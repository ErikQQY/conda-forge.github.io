"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[1843],{79154:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=a(74848),i=a(28453);const s={sidebar_position:1},o="The life cycle of a package",r={id:"maintainer/understanding_conda_forge/life_cycle",title:"The life cycle of a package",description:"conda-forge implements a particular workflow for building, publishing and maintaining conda packages.",source:"@site/docs/maintainer/understanding_conda_forge/life_cycle.md",sourceDirName:"maintainer/understanding_conda_forge",slug:"/maintainer/understanding_conda_forge/life_cycle",permalink:"/docs/maintainer/understanding_conda_forge/life_cycle",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/docs/maintainer/understanding_conda_forge/life_cycle.md",tags:[],version:"current",lastUpdatedAt:1725264655e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Understanding conda-forge",permalink:"/docs/maintainer/understanding_conda_forge/"},next:{title:"Staged-recipes",permalink:"/docs/maintainer/understanding_conda_forge/staged_recipes"}},c={},d=[{value:"General concepts about conda packaging",id:"general-concepts-about-conda-packaging",level:2},{value:"Post-publication particularities",id:"post-publication-particularities",level:3},{value:"The life cycle on conda-forge",id:"the-life-cycle-on-conda-forge",level:2},{value:"Post-publication particularities",id:"post-publication-particularities-1",level:3},{value:"Summary of stages",id:"summary-of-stages",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"the-life-cycle-of-a-package",children:"The life cycle of a package"}),"\n",(0,t.jsx)(n.p,{children:"conda-forge implements a particular workflow for building, publishing and maintaining conda packages.\nHowever, the core concepts are the same for any conda packaging solution."}),"\n",(0,t.jsx)(n.h2,{id:"general-concepts-about-conda-packaging",children:"General concepts about conda packaging"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"conda"})," packages are built off ",(0,t.jsx)(n.code,{children:"conda"})," ",(0,t.jsx)(n.em,{children:"recipes"}),", which consist of a metadata file (like ",(0,t.jsx)(n.code,{children:"meta.yaml"})," or ",(0,t.jsx)(n.code,{children:"recipe.yaml"}),"), and optionally supporting scripts and data.\nA build tool (usually ",(0,t.jsx)(n.a,{href:"https://github.com/conda/conda-build",children:(0,t.jsx)(n.code,{children:"conda-build"})})," or ",(0,t.jsx)(n.a,{href:"https://github.com/prefix-dev/rattler-build/",children:(0,t.jsx)(n.code,{children:"rattler-build"})}),") takes the recipe and produces one or more packages (also referred to as ",(0,t.jsx)(n.em,{children:"outputs"})," and/or ",(0,t.jsx)(n.em,{children:"artifacts"}),", depending on the context)."]}),"\n",(0,t.jsxs)(n.p,{children:["While you can distribute the artifacts on your own, the conda packages are usually uploaded to a ",(0,t.jsx)(n.code,{children:"conda"})," ",(0,t.jsx)(n.em,{children:"channel"})," hosted in a server like ",(0,t.jsx)(n.a,{href:"https://anaconda.org/conda-forge",children:"Anaconda.org"}),".\nThis channel ",(0,t.jsx)(n.em,{children:"server"})," processes all uploaded packages and aggregates the metadata contained in the packages in a single ",(0,t.jsx)(n.code,{children:"repodata.json"})," file per platform or ",(0,t.jsx)(n.em,{children:"subdir"}),".\nFor example, this is a subset of the ",(0,t.jsx)(n.code,{children:"conda-forge"})," repodata for Linux x64 systems: ",(0,t.jsx)(n.a,{href:"https://conda.anaconda.org/conda-forge/linux-64/current_repodata.json",children:(0,t.jsx)(n.code,{children:"current_repodata.json"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["These are the metadata files that the ",(0,t.jsx)(n.code,{children:"conda"})," client fetches when the user types ",(0,t.jsx)(n.code,{children:"conda install ..."})," or similar commands.\nThe solver will process all the metadata and will provide the most adequate selection of packages to the user, which are then downloaded, extracted and linked into the target conda environment."]}),"\n",(0,t.jsx)(n.h3,{id:"post-publication-particularities",children:"Post-publication particularities"}),"\n",(0,t.jsx)(n.p,{children:"For most packages, the paragraphs above are enough to describe their life cycle.\nHowever, the repodata-first approach followed in the conda ecosystem allows for some unique features in the post-publication stages."}),"\n",(0,t.jsxs)(n.p,{children:["For large volume channels like conda-forge, Anaconda.org delivers the artifacts through a ",(0,t.jsx)(n.a,{href:"/docs/glossary#cdn",children:"CDN"})," network for faster access.\nThe CDN network is synced with the channels periodically.\nAs a result, packages take around 15 minutes to be available for installation after their publication."]}),"\n",(0,t.jsx)(n.p,{children:"This repodata-first approach offers a unique opportunity to post-process the repodata files.\nThis way, we can fix metadata issues without rebuilding packages.\nNote that these changes do not propagate back to the metadata contained in the packages."}),"\n",(0,t.jsxs)(n.p,{children:["Anaconda.org also offers the concept of ",(0,t.jsxs)(n.a,{href:"https://docs.anaconda.com/anacondaorg/user-guide/tutorials/",children:["channel ",(0,t.jsx)(n.em,{children:"labels"})]}),", which in practice\nbehave as ",(0,t.jsx)(n.em,{children:"subchannels"}),". The default label is ",(0,t.jsx)(n.code,{children:"main"}),". When a new label is added, the package is\nalso visible in the subchannel ",(0,t.jsx)(n.code,{children:"<channel>/label/<label>"}),". For example, a package uploaded to\nconda-forge and labeled as ",(0,t.jsx)(n.code,{children:"test"})," and ",(0,t.jsx)(n.code,{children:"main"})," will be available in the ",(0,t.jsx)(n.code,{children:"conda-forge"})," channel, but\nalso in the ",(0,t.jsx)(n.code,{children:"conda-forge/label/test"})," subchannel."]}),"\n",(0,t.jsx)(n.h2,{id:"the-life-cycle-on-conda-forge",children:"The life cycle on conda-forge"}),"\n",(0,t.jsxs)(n.p,{children:["Anyone can run ",(0,t.jsx)(n.code,{children:"conda-build"})," on their computer and manually upload their packages to Anaconda.org.\nHowever, that approach has a few problems:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It doesn't facilitate collaboration."}),"\n",(0,t.jsx)(n.li,{children:"There's no transparency in the process."}),"\n",(0,t.jsx)(n.li,{children:"Reproducibility is system-dependent."}),"\n",(0,t.jsx)(n.li,{children:"Compatibility across packages is not guaranteed."}),"\n",(0,t.jsx)(n.li,{children:"It doesn't scale well beyond a handful of packages."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"On conda-forge, most packages are built using public CI services and maintained by thousands of volunteers, which requires approaching the problem in a different way to guarantee fine-grained control of permissions, independent project management, and automated batch updates."}),"\n",(0,t.jsxs)(n.p,{children:["The main idea is that each conda recipe is processed by a separate GitHub repository.\nThese repositories, named ",(0,t.jsx)(n.em,{children:"feedstocks"})," in conda-forge, host the user-contributed conda recipe plus several auto-generated required scripts, configuration files, and CI pipelines to build and export the conda artifacts.\nUnder this setup, the conda-forge bots can traverse the conda-forge repositories to re-generate and update feedstocks as needed when a global change or fix needs to be issued."]}),"\n",(0,t.jsxs)(n.p,{children:["To be given a conda-forge feedstock, contributors must first submit their recipe for review to the ",(0,t.jsx)(n.a,{href:"/docs/maintainer/understanding_conda_forge/staged_recipes/",children:(0,t.jsx)(n.code,{children:"staged-recipes"})})," repository.\nOnce reviewed and approved, the PR is merged to ",(0,t.jsx)(n.code,{children:"main"}),", which triggers the feedstock creation."]}),"\n",(0,t.jsxs)(n.p,{children:["After accepting the invitations to the ",(0,t.jsx)(n.code,{children:"conda-forge"})," organization, the submitting contributor(s) will have been given commit rights to that repository.\nBy then, the ",(0,t.jsx)(n.a,{href:"/docs/maintainer/understanding_conda_forge/staged_recipes/",children:"feedstock creation machinery"})," will have registered the new repository with the required CI services and populated its contents with the submitted recipe, plus the supporting scripts, configuration files and CI pipelines."]}),"\n",(0,t.jsxs)(n.p,{children:["These pipelines will process the initial commits to produce and upload the conda artifacts to the ",(0,t.jsx)(n.code,{children:"cf-staging"})," channel.\nAny subsequent pushes to ",(0,t.jsx)(n.code,{children:"main"})," (e.g. merged PRs) or other enabled branches will undergo the same process."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For existing feedstocks, conda-forge bots will often send automated PRs for new project releases or maintenance tasks.\nYou can find more details about it in ",(0,t.jsx)(n.a,{href:"/docs/maintainer/infrastructure#automated-maintenance",children:"Automation & bots"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["The validation server will detect the new uploads on ",(0,t.jsx)(n.code,{children:"cf-staging"})," and will perform some checks on those artifacts.\nIf successful, the artifacts will then be copied to the actual ",(0,t.jsx)(n.code,{children:"conda-forge"})," channel."]}),"\n",(0,t.jsxs)(n.p,{children:["At this point, the channel server will process the contents of the new packages to retrieve their metadata and update the repodata files.\nOn the next CDN sync cycle, the artifacts will be distributed to the delivery network for faster access.\nValidation and CDN sync usually take around 15 minutes after the CI is passing on ",(0,t.jsx)(n.code,{children:"main"}),".\nFrom this moment on, users can install the new packages from the CLI."]}),"\n",(0,t.jsx)(n.h3,{id:"post-publication-particularities-1",children:"Post-publication particularities"}),"\n",(0,t.jsx)(n.p,{children:"In an ideal world, that would be the end of the life cycle. However, in some cases, some packages go through some post-publication stages."}),"\n",(0,t.jsxs)(n.p,{children:["If the package metadata is found to be wrong or out-of-date, it can be modified without rebuilding the package.\nThe channel server can apply patches to the repodata files directly, via instructions published in ",(0,t.jsx)(n.a,{href:"/docs/maintainer/infrastructure#conda-forge-repodata-patches",children:(0,t.jsx)(n.code,{children:"conda-forge-repodata-patches"})})," that are processed weekly."]}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes, there are issues with a published package that cannot be amended with a repodata patch (e.g. libraries were built wrong and segfault).\nIn these cases, the packages can be retired by labeling them as ",(0,t.jsx)(n.code,{children:"broken"}),".\nThis is done through the ",(0,t.jsxs)(n.a,{href:"/docs/maintainer/infrastructure#admin-requests",children:[(0,t.jsx)(n.code,{children:"admin-requests"})," repository"]}),".\nAs part of the CDN-driven metadata patching, packages labeled as ",(0,t.jsx)(n.code,{children:"broken"})," are not included in the final repodata index.\nHowever, they are still available via direct URL access.\nThis allows organizations to retire packages from normal, solver-driven installs without compromising the reproducibility offered by lock files."]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, a project might have reached a status where no further updates are needed or expected (e.g. it has been superseded by a new project).\nIf the maintainers want to, these feedstocks can be archived and marked as read-only, which is also done via ",(0,t.jsx)(n.a,{href:"/docs/maintainer/infrastructure#admin-requests",children:(0,t.jsx)(n.code,{children:"admin-requests"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"summary-of-stages",children:"Summary of stages"}),"\n",(0,t.jsx)(n.p,{children:"These stages are key concepts in the conda-forge documentation.\nFeel free to refer to this list at any time as you check the rest of the documentation."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"/docs/maintainer/understanding_conda_forge/staged_recipes",children:["Initial submission to ",(0,t.jsx)(n.code,{children:"staged-recipes"})]})}),"\n",(0,t.jsxs)(n.li,{children:["Feedstock changes:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A. Repository initialization"}),"\n",(0,t.jsx)(n.li,{children:"B. Automated maintenance updates"}),"\n",(0,t.jsx)(n.li,{children:"C. PRs submitted by users"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Package building"}),"\n",(0,t.jsx)(n.li,{children:"Package validation"}),"\n",(0,t.jsx)(n.li,{children:"Package publication"}),"\n",(0,t.jsxs)(n.li,{children:["Post-publication:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A. Repodata patch"}),"\n",(0,t.jsx)(n.li,{children:"B. Mark a package as broken"}),"\n",(0,t.jsx)(n.li,{children:"C. Archive the feedstock"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If you want to read more about the infrastructure details behind these stages,\nconsider reading our ",(0,t.jsx)(n.a,{href:"/docs/maintainer/infrastructure",children:"Infrastructure guide"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var t=a(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);