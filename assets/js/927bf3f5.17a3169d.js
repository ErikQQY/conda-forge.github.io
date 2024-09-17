"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[9279],{25828:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=o(74848),a=o(28453);const s={title:"Transitioning from defaults"},t="Transitioning from Anaconda's defaults channels",r={id:"user/transitioning_from_defaults",title:"Transitioning from defaults",description:"Users wishing to transition from Anaconda's defaults (i.e. those hosted under",source:"@site/docs/user/transitioning_from_defaults.md",sourceDirName:"user",slug:"/user/transitioning_from_defaults",permalink:"/docs/user/transitioning_from_defaults",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/docs/user/transitioning_from_defaults.md",tags:[],version:"current",lastUpdatedAt:1726583189e3,frontMatter:{title:"Transitioning from defaults"},sidebar:"docs",previous:{title:"Using conda-smithy to manage your CI",permalink:"/docs/user/ci-skeleton"},next:{title:"FAQ",permalink:"/docs/user/faq"}},l={},c=[{value:"Trying conda-forge in an isolated environment",id:"trying-conda-forge-in-an-isolated-environment",level:2},{value:"Uninstalling Anaconda and installing Miniforge",id:"uninstalling-anaconda-and-installing-miniforge",level:2},{value:"A historical note",id:"a-historical-note",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsxs)(e.h1,{id:"transitioning-from-anacondas-defaults-channels",children:["Transitioning from Anaconda's ",(0,i.jsx)(e.code,{children:"defaults"})," channels"]})}),"\n",(0,i.jsxs)(e.p,{children:["Users wishing to transition from Anaconda's ",(0,i.jsx)(e.code,{children:"defaults"})," (i.e. those hosted under\n",(0,i.jsx)(e.a,{href:"https://repo.anaconda.com/pkgs",children:"https://repo.anaconda.com/pkgs"}),") channels should do so with care so as not to\nbreak their working environments. The first thing to realize\nis that in 2024 conda-forge is incompatible with the packages provided in\n",(0,i.jsx)(e.code,{children:"defaults"}),". Often, the packages on conda-forge will require\nnewer versions of a particular package, or, may simply be organized in a\ndifferent fashion. The only workflow we can support as a community is one where\nthe conda-forge channel takes priority over all other channels."]}),"\n",(0,i.jsx)(e.p,{children:"If you were using Miniconda or Anaconda Distribution and wish to move to use\nconda-forge, we outline two workflows. The first allows you to try packages from\nconda-forge without uninstalling your previous installation, the second\ninvolves uninstalling Miniconda or Anaconda Distribution, and then installing\nMiniforge."}),"\n",(0,i.jsx)(e.h2,{id:"trying-conda-forge-in-an-isolated-environment",children:"Trying conda-forge in an isolated environment"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Create a conda environment with very few dependencies. The following\ncommand will only use packages from ",(0,i.jsx)(e.code,{children:"conda-forge"})," to install Python 3.11. You\nmay adjust the version of Python to the one of your liking:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"conda create --name conda-forge-env python=3 --channel conda-forge --override-channels\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Activate your environment and add ",(0,i.jsx)(e.code,{children:"conda-forge"})," with strict priority to\nthat particular environment:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"conda activate conda-forge-env\nconda config --env --add channels conda-forge\n# optional:\n# conda config --env --remove channels defaults\nconda config --env --set channel_priority strict\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Check the configuration of your conda environment:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"conda config --show\n"})}),"\n",(0,i.jsxs)(e.p,{children:["This should report that ",(0,i.jsx)(e.code,{children:"conda-forge"})," is the top most channel in your list."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"You are now in a position to use command like:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"conda install my_desired_package_from_conda_forge\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"uninstalling-anaconda-and-installing-miniforge",children:"Uninstalling Anaconda and installing Miniforge"}),"\n",(0,i.jsxs)(e.p,{children:["If you are ready to fully switch to conda-forge, we recommend uninstalling\nAnaconda / Miniconda and then installing ",(0,i.jsx)(e.a,{href:"/download",children:"Miniforge"}),". The following steps\nare guidelines on how to go about this, while backing up your work and your environments."]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Clean your existing conda installation. This should remove unused files from\nyour Anaconda / Miniconda installation and make for smaller sized backup."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"# The conda build purge command may fail if you don't have conda-build installed.\n# this is expected\nconda build purge\nconda clean --all\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Create a zip archive of your conda installation. Use your favorite graphical tool\nto right click on the Anaconda / Miniconda installation folder. Check if you have\ncreated additional environments outside the installation root by running\n",(0,i.jsx)(e.code,{children:"conda info --envs"}),". Back those up too, if necessary."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Alternatively, you can also export lockfiles for all your environments, if preferred:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"conda list --explicit --md5 --prefix /path/to/environment-name > environment-name.txt\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Note these lockfiles will only include the conda packages. If you ",(0,i.jsx)(e.code,{children:"pip install"}),"ed packages\non top, those won't be captured. Check ",(0,i.jsx)(e.a,{href:"https://conda.github.io/conda-lock/",children:(0,i.jsx)(e.code,{children:"conda-lock"})}),"\nfor those use cases."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Another useful file to create is the input ",(0,i.jsx)(e.code,{children:"environment.yml"})," for each environment:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"conda env export --from-history --prefix --prefix /path/to/environment-name > environment-name.yml\n"})}),"\n",(0,i.jsxs)(e.p,{children:["This file won't capture the exact same state you had in your environment. Instead it\nwill tell ",(0,i.jsx)(e.code,{children:"conda"})," what packages to look for and then find a solution that satisfies\nthe request."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["On Windows, use the uninstaller suggested by the system control panel.\nOn Linux and macOS, you can delete the folder called ",(0,i.jsx)(e.code,{children:"anaconda3"}),", or ",(0,i.jsx)(e.code,{children:"miniconda3"}),"\n(usually located in your home directory)."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Find the file called ",(0,i.jsx)(e.code,{children:".condarc"})," in your home directory, and back it up somewhere safe.\nThen, delete your old ",(0,i.jsx)(e.code,{children:".condarc"})," file. A new one specific to conda-forge will be\ncreated when we install Miniforge."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["On Linux and macOS, your shell profile (",(0,i.jsx)(e.code,{children:"~/.bashrc"}),") might contain initialization code\nfrom the previous installation. Locate the block guarded by ",(0,i.jsx)(e.code,{children:"# >>> conda initialize >>>"}),"\ncomments and delete it."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Download and install the Miniforge installer that matches your platform from\nthe ",(0,i.jsx)(e.a,{href:"/download",children:"Miniforge download"})," page."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Once installed, you should be able to use the ",(0,i.jsx)(e.code,{children:"Miniforge3 Prompt"})," on\nWindows, or the terminal on Linux and macOS, to run the command:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"conda info\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Notice that the conda-forge is the channel with the topmost priority."}),"\n",(0,i.jsx)(e.p,{children:"You should now be in a position to use conda-forge packages."}),"\n",(0,i.jsx)(e.h2,{id:"a-historical-note",children:"A historical note"}),"\n",(0,i.jsxs)(e.p,{children:["Until roughly 2021, conda-forge held strong compatibility with Anaconda's\ndefault channel. However, as ",(0,i.jsx)(e.a,{href:"/news/2021/09/30/defaults-channel-is-now-dropped-when-building-conda-forge-packages/",children:"announced in September 2021"}),",\nwe decided toultimately move away from dependency on Anaconda's ",(0,i.jsx)(e.code,{children:"defaults"})," packages.\nOver the years, this has led for more divergence between package versions, and names\nbetween conda-forge and Anaconda's ",(0,i.jsx)(e.code,{children:"defaults"})," channel."]}),"\n",(0,i.jsx)(e.p,{children:"In 2024, the workflow that has packages co-installed from Anaconda's channel and\nconda-forge is no longer supported."}),"\n",(0,i.jsx)(e.p,{children:"To check if you have packages installed from both sources, use the command"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"conda list --show-channel-urls\n"})}),"\n",(0,i.jsx)(e.p,{children:"All packages should specify that they have been installed from the conda-forge\nchannel. In 2024, there still exist a few bugs where conda packages will\nclaim that they have been installed from PyPI even though they have been\ninstalled from conda-forge."})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>t,x:()=>r});var i=o(96540);const a={},s=i.createContext(a);function t(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);