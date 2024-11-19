"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[38766],{28008:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(74848),s=i(28453);const o={title:"Maintaining packages"},a="Maintaining packages",r={id:"maintainer/updating_pkgs",title:"Maintaining packages",description:"Important notes",source:"@site/docs/maintainer/updating_pkgs.md",sourceDirName:"maintainer",slug:"/maintainer/updating_pkgs",permalink:"/docs/maintainer/updating_pkgs",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/docs/maintainer/updating_pkgs.md",tags:[],version:"current",lastUpdatedAt:173200824e4,frontMatter:{title:"Maintaining packages"},sidebar:"docs",previous:{title:"Contributing packages",permalink:"/docs/maintainer/adding_pkgs"},next:{title:"Pinned dependencies",permalink:"/docs/maintainer/pinning_deps"}},c={},d=[{value:"Important notes",id:"important-notes",level:2},{value:"Packages on conda-forge are immutable",id:"packages-on-conda-forge-are-immutable",level:3},{value:"Forking and pull requests",id:"forking-and-pull-requests",level:3},{value:"Pushing to regro-cf-autotick-bot branch",id:"pushing-to-regro-cf-autotick-bot-branch",level:4},{value:"<strong>How does regro-cf-autotick-bot create automatic version updates?</strong>",id:"how-does-regro-cf-autotick-bot-create-automatic-version-updates",level:5},{value:"Example workflow for updating a package",id:"example-workflow-for-updating-a-package",level:4},{value:"Updating recipes",id:"updating-recipes",level:2},{value:"Rerendering feedstocks",id:"rerendering-feedstocks",level:2},{value:"Rerendering with conda-smithy locally",id:"rerendering-with-conda-smithy-locally",level:3},{value:"When to rerender",id:"when-to-rerender",level:3},{value:"Updating for newly released Python version",id:"updating-for-newly-released-python-version",level:2},{value:"Testing changes locally",id:"testing-changes-locally",level:2},{value:"Downloading prebuilt packages from CI",id:"downloading-prebuilt-packages-from-ci",level:2},{value:"Removing broken packages",id:"removing-broken-packages",level:2},{value:"Archiving feedstocks",id:"archiving-feedstocks",level:2},{value:"Updating the maintainer list",id:"updating-the-maintainer-list",level:2},{value:"Maintaining several versions",id:"maintaining-several-versions",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",feedstock:"feedstock",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"maintaining-pkgs"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"maintaining-packages"})}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"maintaining-packages",children:"Maintaining packages"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"important-notes"})}),"\n",(0,t.jsx)(n.h2,{id:"important-notes",children:"Important notes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"packages-on-conda-forge-are-immutable"})}),"\n",(0,t.jsx)(n.h3,{id:"packages-on-conda-forge-are-immutable",children:"Packages on conda-forge are immutable"}),"\n",(0,t.jsxs)(n.p,{children:["As a matter of policy, we do not allow edits or the deletion of packages on conda-forge. This\npolicy is very important as it increases the reliability and reproducibility of ",(0,t.jsx)(n.code,{children:"conda"})," environments\nmade with the ",(0,t.jsx)(n.code,{children:"conda-forge"})," channel. Note that because of this policy, our upload scripts will refuse to\nupload packages which already exist on the ",(0,t.jsx)(n.code,{children:"conda-forge"})," channel."]}),"\n",(0,t.jsxs)(n.p,{children:["If you need to remove a package, please see the ",(0,t.jsx)(n.a,{href:"#maint-fix-broken-packages",children:"section"})," on marking packages broken."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"forking-and-pull-requests"})}),"\n",(0,t.jsx)(n.h3,{id:"forking-and-pull-requests",children:"Forking and pull requests"}),"\n",(0,t.jsx)(n.p,{children:"All maintainers are given push access to the feedstocks that they maintain.\nThis means that a maintainer can create branches in the main repo.\nFor updates, using a branch in the main repo is discouraged because,"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/glossary#ci",children:"CI"})," is run on both the branch and the PR."]}),"\n",(0,t.jsxs)(n.p,{children:["This wastes ",(0,t.jsx)(n.a,{href:"/docs/glossary#ci",children:"CI"})," resources"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Branches are automatically published."}),"\n",(0,t.jsxs)(n.p,{children:["This means if you push a version update to a branch and then create a ",(0,t.jsx)(n.a,{href:"/docs/glossary#pr",children:"PR"}),", conda packages will be published to anaconda.org before the PR is merged."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,t.jsx)(n.p,{children:"For these reasons, maintainers are asked to fork the feedstock to their personal account, push to a branch in the fork and then open a PR to the conda-forge repo."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"pushing-to-regro-cf-autotick-bot-branch"})}),"\n",(0,t.jsx)(n.h4,{id:"pushing-to-regro-cf-autotick-bot-branch",children:"Pushing to regro-cf-autotick-bot branch"}),"\n",(0,t.jsx)(n.p,{children:"When a new version of a package is released on PyPI/CRAN/.., we have a bot that automatically creates version updates for the feedstock. In most cases you can simply merge this PR and it should include all changes. When certain things have changed upstream, e.g. the dependencies, you will still have to do changes to the created PR. As feedstock maintainer, you don't have to create a new PR for that but can simply push to the branch the bot created. There are two alternatives to push to the branch of the bot:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Manually setting up git remotes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the conda-forge feedstock repository"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the remote of the bot: ",(0,t.jsx)(n.code,{children:"git remote add regro-cf-autotick-bot git@github.com:regro-cf-autotick-bot/<package>-feedstock.git"})]}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,t.jsxs)(n.p,{children:["It is not possible to push to a GitHub repository using the\n",(0,t.jsx)(n.code,{children:"git://"})," protocol. See ",(0,t.jsx)(n.a,{href:"https://help.github.com/en/github/using-git/which-remote-url-should-i-use",children:"Which remote URL should I use?"}),"\nfor instructions on using the ",(0,t.jsx)(n.code,{children:"https://"})," protocol if you have\nenabled ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa",children:"two-factor authentication"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fetch the remote: ",(0,t.jsx)(n.code,{children:"git fetch regro-cf-autotick-bot"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Checkout the branch of the PR, git should automatically link it to the regro-cf-autotick-bot remote if this is the only remote with a branch of that name."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If there are multiple remotes with this branch name, you need to first checkout the remote branch and then turn it into a local branch: ",(0,t.jsx)(n.code,{children:"git checkout regro-cf-autotick-bot/<branch> && git checkout -b <branch>"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Commit and push on that branch, if the remote was not correctly setup, use ",(0,t.jsx)(n.code,{children:"git push -u regro-cf-autotick-bot <branch>"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Using Github's ",(0,t.jsx)(n.a,{href:"https://github.com/github/hub",children:"hub"})," tool (which conda-forge ships! ",(0,t.jsx)(n.code,{children:"conda install hub -c conda-forge"}),"):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Clone the conda-forge feedstock repository"}),"\n",(0,t.jsxs)(n.li,{children:["Checkout the correct branch with remote: ",(0,t.jsx)(n.code,{children:"hub pr checkout 12"})," where ",(0,t.jsx)(n.code,{children:"12"})," is the ID of the PR."]}),"\n",(0,t.jsx)(n.li,{children:"Commit and push on this branch, the remote is automatically set up to push to regro-cf-autotick-bot's fork."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"how-does-regro-cf-autotick-bot-create-automatic-version-updates"})}),"\n",(0,t.jsx)(n.h5,{id:"how-does-regro-cf-autotick-bot-create-automatic-version-updates",children:(0,t.jsx)(n.strong,{children:"How does regro-cf-autotick-bot create automatic version updates?"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/regro/autotick-bot",children:"regro-cf-autotick-bot"})," continuously searches on a loop for any PyPI releases, GitHub releases, and any other sources of versions when any updates are released. The source code that gets executed in the loop comes from the ",(0,t.jsx)(n.a,{href:"https://github.com/regro/cf-scripts",children:"cf-scripts repository"}),", which contains the code to detect versions and submit PRs. Visit ",(0,t.jsx)(n.a,{href:"https://github.com/regro/cf-scripts/blob/master/README.md",children:"cf-scripts"})," to read more about it."]}),"\n",(0,t.jsxs)(n.p,{children:["The bot creates updates via inspection of the upstream release and will always update the ",(0,t.jsx)(n.code,{children:"source"})," section and build version in the ",(0,t.jsx)(n.a,{href:"https://docs.conda.io/projects/conda-build/en/stable/resources/define-metadata.html#",children:"recipe metadata"}),".\nAs an experimental feature, the autotick bot can also be configured to verify or update the recipe's requirements for ",(0,t.jsx)(n.a,{href:"https://github.com/conda-incubator/grayskull",children:"Grayskull"}),"-compatible recipes.\nThis may help maintain packages with frequent requirements changes or specific requirements version pins, however this feature is not as extensively verified and proposed updates should be reviewed.\n(See the ",(0,t.jsx)(n.a,{href:"/docs/maintainer/conda_forge_yml#bot",children:"bot"})," section in ",(0,t.jsx)(n.code,{children:"conda-forge.yml"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes the bot may take several hours to search for these updates. You can also check ",(0,t.jsx)(n.a,{href:"https://conda-forge.org/status/#version_updates",children:"status of version updates"})," for all the pending version updates. These version updates are pending either because an updated version was found, but a PR wasn't opened yet, or because the bot might have had an error while making the PR.\nIf you can't find a version here, then the chances are that the bot couldn't find it either."]}),"\n",(0,t.jsx)(n.p,{children:"The bot stops making version update PRs when the package feedstock has three or more open version update PRs. The package's maintainer should close or merge those PRs for the bot to work correctly for future version updates."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"example-workflow-for-updating-a-package"})}),"\n",(0,t.jsx)(n.h4,{id:"example-workflow-for-updating-a-package",children:"Example workflow for updating a package"}),"\n",(0,t.jsxs)(n.p,{children:["Here we assume that you would like to update the feedstock ",(0,t.jsx)(n.code,{children:"<feedstock>"}),". Feedstock is a placeholder and can e.g. be replaced by ",(0,t.jsx)(n.code,{children:"numpy-feedstock"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Forking the feedstock"}),"\n",(0,t.jsx)(n.p,{children:"Before you can submit your first PR, you have to fork conda-forge's feedstock."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge",children:"https://github.com/conda-forge"}),"/",(0,t.jsxs)(n.feedstock,{children:[" in your favorite web browser and click the ",(0,t.jsx)(n.code,{children:"fork"})," button."]})]}),"\n",(0,t.jsxs)(n.li,{children:["You now have a clone of the feedstock in ",(0,t.jsx)(n.code,{children:"https://github.com/<your-github-id>/<feedstock>"})," under your control."]}),"\n",(0,t.jsxs)(n.li,{children:["Connect to the feedstock from your computer by using ",(0,t.jsx)(n.code,{children:"git clone https://github.com/<your-github-id>/<feedstock>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Syncing your fork with conda-forge's feedstock"}),"\n",(0,t.jsx)(n.p,{children:"This step is only required if you have forked some time ago and your fork is missing commits from the feedstock at conda-forge."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Make sure you are on the main branch: ",(0,t.jsx)(n.code,{children:"git checkout main"})]}),"\n",(0,t.jsxs)(n.li,{children:["Register conda-forge's feedstock with ",(0,t.jsx)(n.code,{children:"git remote add upstream https://github.com/conda-forge/<feedstock>"})]}),"\n",(0,t.jsxs)(n.li,{children:["Fetch the latest updates with ",(0,t.jsx)(n.code,{children:"git fetch upstream"})]}),"\n",(0,t.jsxs)(n.li,{children:["Pull in the latest changes into your main branch: ",(0,t.jsx)(n.code,{children:"git rebase upstream/main"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Creating your changes in a new branch"}),"\n",(0,t.jsx)(n.p,{children:"Now you are ready to update the recipe"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create and switch to a new branch: ",(0,t.jsx)(n.code,{children:"git checkout -b <branch-name>"}),". ",(0,t.jsx)(n.code,{children:"<branch-name>"})," can be e.g. ",(0,t.jsx)(n.code,{children:"update_1_0_1"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Make your changes locally"}),"\n",(0,t.jsxs)(n.li,{children:["Review your changes then use ",(0,t.jsx)(n.code,{children:"git add <changed-files>"}),". Where ",(0,t.jsx)(n.code,{children:"<changed-files>"})," are a whitespace separated list of filenames you changed."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a commit by ",(0,t.jsx)(n.code,{children:"git commit -m <commit-msg>"}),", where ",(0,t.jsx)(n.code,{children:"<commit-msg>"})," can be ",(0,t.jsx)(n.code,{children:"updated feedstock to version 1.0.1"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Pushing your changes to GitHub and propose a PR"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Push the branch with changes to your fork on GitHub: ",(0,t.jsx)(n.code,{children:"git push origin <branch-name>"})]}),"\n",(0,t.jsxs)(n.li,{children:["Create a pull request via the web interface by navigating to ",(0,t.jsx)(n.code,{children:"https://github.com/<your-github-id>/<feedstock>"})," with your web browser and clicking the button ",(0,t.jsx)(n.code,{children:"create pull request"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"updating-recipes"})}),"\n",(0,t.jsx)(n.h2,{id:"updating-recipes",children:"Updating recipes"}),"\n",(0,t.jsx)(n.p,{children:"Please follow the following guidelines while updating recipes:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Always use a fork of the feedstock while updating the recipe."}),"\n",(0,t.jsxs)(n.li,{children:["When a package's version is not changed, but other metadata or parts of the recipe are changed, increase the build number by ",(0,t.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["While shipping a new version of your package, reset the build number to ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"dev-update-rerender"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"rerendering-feedstocks"})}),"\n",(0,t.jsx)(n.h2,{id:"rerendering-feedstocks",children:"Rerendering feedstocks"}),"\n",(0,t.jsxs)(n.p,{children:["Rerendering is conda-forge's way to update the files common to all feedstocks (e.g. README, ",(0,t.jsx)(n.a,{href:"/docs/glossary#ci",children:"CI"})," configuration, pinned dependencies)."]}),"\n",(0,t.jsx)(n.p,{children:"Rerendering can be done in two ways:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Using the webservice to run conda-smithy on the cloud by adding the comment ",(0,t.jsx)(n.code,{children:"@conda-forge-admin please rerender"})," (See ",(0,t.jsx)(n.a,{href:"/docs/maintainer/infrastructure#admin-web-services",children:"Admin web services"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Run conda-smithy locally on your machine (See ",(0,t.jsx)(n.a,{href:"#dev-rerender-local",children:"Rerendering with conda-smithy locally"}),")."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"dev-rerender-local"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"rerendering-with-conda-smithy-locally"})}),"\n",(0,t.jsx)(n.h3,{id:"rerendering-with-conda-smithy-locally",children:"Rerendering with conda-smithy locally"}),"\n",(0,t.jsxs)(n.p,{children:["The first step is to install ",(0,t.jsx)(n.code,{children:"conda-smithy"})," in your root environment."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"conda install -c conda-forge conda-smithy\n"})}),"\n",(0,t.jsx)(n.p,{children:"Commit all changes and from the root directory of the feedstock, type:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"conda smithy rerender -c auto\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Optionally one can commit the changes manually.\nTo do this drop ",(0,t.jsx)(n.code,{children:"-c auto"})," from the command."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"when-to-rerender"})}),"\n",(0,t.jsx)(n.h3,{id:"when-to-rerender",children:"When to rerender"}),"\n",(0,t.jsx)(n.p,{children:"We need to re-render when there are changes in the following parts of the feedstock:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Platform configuration (",(0,t.jsx)(n.code,{children:"skip"})," sections)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"yum_requirements.txt"})," or ",(0,t.jsx)(n.code,{children:"conda-forge.yml"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Updates in the build matrix due to new versions of Python, NumPy, PERL, R, etc."}),"\n",(0,t.jsx)(n.li,{children:"Updates in conda-forge pinning that affect the feedstock."}),"\n",(0,t.jsxs)(n.li,{children:["Build issues that a feedstock configuration update will fix (follow us on ",(0,t.jsx)(n.a,{href:"https://conda-forge.zulipchat.com/",children:"Zulip"})," to know about those)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"updating-for-newly-released-python-version"})}),"\n",(0,t.jsx)(n.h2,{id:"updating-for-newly-released-python-version",children:"Updating for newly released Python version"}),"\n",(0,t.jsxs)(n.p,{children:["When a new Python version is released (e.g. ",(0,t.jsx)(n.code,{children:"3.11"}),"), an automatic migration process is triggered that will have ",(0,t.jsx)(n.code,{children:"@regro-cf-autotick-bot"})," eventually automatically open pull requests to all feedstocks, updating their CI setup to include the new Python version in the build matrix. After veryfing that the PR build passes, that automatic PR can simply be merged to roll out packages for new Python version.\nThis process takes time, though, and pull requests will not be opened to all feedstocks at the same time to not overload CI. The current status of the migration can be tracked on the ",(0,t.jsx)(n.a,{href:"https://conda-forge.org/status/#big_migrations",children:"migration status page"})," and there maintainers can verify that their feedstock is listed under the ",(0,t.jsx)(n.code,{children:"AWAITING-PR"})," dropdown list."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"testing-changes-locally"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"id1"})}),"\n",(0,t.jsx)(n.h2,{id:"testing-changes-locally",children:"Testing changes locally"}),"\n",(0,t.jsxs)(n.p,{children:["If you have docker installed on your system, you can test builds locally on your machine under the same settings as it is built by our ",(0,t.jsx)(n.a,{href:"/docs/glossary#ci",children:"CI"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If you want to build and test updates to a feedstock locally, go to the root\nfeedstock directory and run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"python build-locally.py\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will prompt you to choose one of the ",(0,t.jsx)(n.code,{children:"*.yaml"})," config files in ",(0,t.jsx)(n.code,{children:".ci_support/"}),". Note that ",(0,t.jsx)(n.code,{children:"shyaml"})," is needed to parse the ",(0,t.jsx)(n.code,{children:"docker_image"})," from these files. Otherwise the build will use the default ",(0,t.jsx)(n.code,{children:"docker_image"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can specify ahead which config to use with e.g. (assuming you wish to build and test python 3.6 on Linux, and such a config file exists at ",(0,t.jsx)(n.code,{children:".ci_support/linux_python3.6.yaml"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"python build-locally.py linux_python3.6\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note that for long build logs one can do"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:"python build-locally.py 2>&1 | tee log.txt\n"})}),"\n",(0,t.jsx)(n.p,{children:"to save it in a text file for future inspection."}),"\n",(0,t.jsxs)(n.p,{children:["Once built, you can find the finished package in the ",(0,t.jsx)(n.code,{children:"build_artifacts"})," directory in your feedstock, which can be used as a channel."]}),"\n",(0,t.jsxs)(n.p,{children:["To create a new environment ",(0,t.jsx)(n.code,{children:"my-new-env"})," using conda, and which will contain the new built package ",(0,t.jsx)(n.code,{children:"my-package"}),", run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'conda create -n my-new-env -c "file://${PWD}/build_artifacts" my-package\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If the new built package depends on another one to be working, i.e. ",(0,t.jsx)(n.code,{children:"other-package"}),", and which is available on ",(0,t.jsx)(n.code,{children:"conda-forge"})," channel for example, you can run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell-session",children:'conda create -n my-new-env -c "file://${PWD}/build_artifacts" -c conda-forge my-package other-package\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"downloading-prebuilt-packages-from-ci"})}),"\n",(0,t.jsx)(n.h2,{id:"downloading-prebuilt-packages-from-ci",children:"Downloading prebuilt packages from CI"}),"\n",(0,t.jsxs)(n.p,{children:["A neat feature that feedstocks have is the ability to ",(0,t.jsx)(n.a,{href:"/docs/maintainer/conda_forge_yml#azure",children:"upload packages to the CI provider for testing"}),".\nThis is useful when trying out packages built in a PR. But you first need to download these prebuilt packages."]}),"\n",(0,t.jsx)(n.p,{children:"To download prebuilt packages follow the steps below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Starting from your PR, navigate to the CI."}),"\n",(0,t.jsx)(n.li,{children:"Open the log corresponding to the package you want to download."}),"\n",(0,t.jsxs)(n.li,{children:["In this log find a link to the ",(0,t.jsx)(n.code,{children:"artifacts produced"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"From the list of published artifacts that appears download your required archive."}),"\n",(0,t.jsx)(n.li,{children:"Unarchive and extract the required package."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"maint-fix-broken-packages"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"removing-broken-packages"})}),"\n",(0,t.jsx)(n.h2,{id:"removing-broken-packages",children:"Removing broken packages"}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes mistakes happen and a broken package ends up being uploaded to the ",(0,t.jsx)(n.code,{children:"conda-forge"})," channel."]}),"\n",(0,t.jsxs)(n.p,{children:["If the only issue is in the package metadata, we can directly patch it using\nthe ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-repodata-patches-feedstock",children:"repo data patches feedstock"}),".\nIf this is the case, the following general guidelines should be followed:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Update the feedstocks recipe to ensure future builds do not propagate the issue with a new build number."}),"\n",(0,t.jsx)(n.li,{children:"Please make a PR there to add a patch. The patch should specify as much has possible the versions and times when the packages were generated. It may use the following information"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The current timestamp, you may generate it with ",(0,t.jsx)(n.code,{children:"python -c \"import time; print(f'{time.time():.0f}000')\""}),"."]}),"\n",(0,t.jsx)(n.li,{children:"The problematic version and build numbers of the packages to affect."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If instead the actual contents of the package are broken, the following steps will\nremove broken packages from the ",(0,t.jsx)(n.code,{children:"main"})," channel:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Locate the paths to broken files on ",(0,t.jsx)(n.a,{href:"https://anaconda.org",children:"anaconda.org"}),", by searching for the conda-forge package and switching to the files tab."]}),"\n",(0,t.jsxs)(n.li,{children:["Fork ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/admin-requests",children:"conda-forge/admin-requests"})," and add a new YML file in the ",(0,t.jsx)(n.code,{children:"requests"})," directory."]}),"\n",(0,t.jsxs)(n.li,{children:["Add the broken files to the new YML document.See ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/admin-requests/blob/main/examples/example-broken.yml",children:"examples/example-broken.yml"})," for an example file."]}),"\n",(0,t.jsx)(n.li,{children:"Open a new PR. Once merged, a bot will label all listed files as broken, thus effectively removing them from the channel."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"archiving-feedstocks"})}),"\n",(0,t.jsx)(n.h2,{id:"archiving-feedstocks",children:"Archiving feedstocks"}),"\n",(0,t.jsxs)(n.p,{children:["If a package is no longer maintained conda-forge will ",(0,t.jsx)(n.em,{children:"archive"}),"\nthe repository. An archived repository can no longer accept PRs and issues, which prevents people and ",(0,t.jsx)(n.code,{children:"regro-cf-autotick-bot"})," from updating the\npackage (an example would be to re-render the feedstock to support new Python versions). Note that this ",(0,t.jsx)(n.strong,{children:"does not"})," remove the existing packages, those will still be available."]}),"\n",(0,t.jsx)(n.p,{children:"If you believe a feedstock should be archived, please do the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Raise an issue on the feedstock asking if it can be archived (CC the maintainer team and @conda-forge/core)"}),"\n",(0,t.jsxs)(n.li,{children:["Fork ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/admin-requests",children:"conda-forge/admin-requests"})," and add a new text file in the ",(0,t.jsx)(n.code,{children:"archive"})," directory with the repo name."]}),"\n",(0,t.jsx)(n.li,{children:"Open a PR and cross-reference the issue raised in step 1."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"maint-updating-maintainers"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"updating-the-maintainer-list"})}),"\n",(0,t.jsx)(n.h2,{id:"updating-the-maintainer-list",children:"Updating the maintainer list"}),"\n",(0,t.jsx)(n.p,{children:"The list of maintainers of a feedstock is recorded in the recipe itself. A new maintainer can be added by opening\nan issue in the feedstock repository with the following title:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"@conda-forge-admin, please add user @username"})}),"\n",(0,t.jsxs)(n.p,{children:["where ",(0,t.jsx)(n.code,{children:"username"})," is the username of the new maintainer to be added.\nA PR will be automatically created and a maintainer or a member of the ",(0,t.jsx)(n.code,{children:"core"})," team, in case no maintainer is active anymore, can then merge this PR to add the user.\nTo contact core, ping them by mentioning @conda-forge/core in a comment or, if you haven't heard back in a while or are new to conda-forge, contact them through the community ",(0,t.jsx)(n.a,{href:"https://conda-forge.zulipchat.com/",children:"Zulip chatroom"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This PR is designed to skip building the package. Please do ",(0,t.jsx)(n.strong,{children:"not"})," modify it or adjust the commit message."]})}),"\n",(0,t.jsxs)(n.p,{children:["For an example see ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/cudnn-feedstock/issues/20",children:"this"})," issue."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{id:"maintaining-several-versions"})}),"\n",(0,t.jsx)(n.h2,{id:"maintaining-several-versions",children:"Maintaining several versions"}),"\n",(0,t.jsx)(n.p,{children:"If you'd like to maintain more than one version of your package, you can use branches on the feedstock. To do this:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fork your feedstock and make a meaningful branch name (e.g., v1.X or v1.0)."}),"\n",(0,t.jsx)(n.li,{children:"Make the required changes to the recipe and rerender the feedstock."}),"\n",(0,t.jsx)(n.li,{children:"Then push this branch from your fork to the upstream feedstock. Our CI services will automatically build any branches in addition to the default branch."}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);