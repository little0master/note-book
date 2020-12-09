(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{1418:function(s,t,a){"use strict";a.r(t);var e=a(20),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"远程仓库的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库的使用"}},[s._v("#")]),s._v(" 远程仓库的使用")]),s._v(" "),a("p",[s._v("为了能在任意 Git 项目上协作，你需要知道如何管理自己的远程仓库。 远程仓库是指托管在因特网或其他网络中的你的项目的版本库。 你可以有好几个远程仓库，通常有些仓库对你只读，有些则可以读写。 与他人协作涉及管理远程仓库以及根据需要推送或拉取数据。 管理远程仓库包括了解如何添加远程仓库、移除无效的远程仓库、管理不同的远程分支并定义它们是否被跟踪等等。 在本节中，我们将介绍一部分远程管理的技能。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("特别注意一个概念：大部分的配置都是针对你项目目录下的 "),a("code",[s._v("./git/config")]),s._v(" 文件进行操作，并不是根据字面意思上的在操作远程服务器上的资源")])]),s._v(" "),a("h2",{attrs:{id:"查看远程仓库-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库-remote"}},[s._v("#")]),s._v(" 查看远程仓库 "),a("code",[s._v("remote")])]),s._v(" "),a("p",[s._v("如果想 "),a("strong",[s._v("查看你已经配置的远程仓库服务器")]),s._v("，可以运行 git remote 命令。 它会列出你指定的每一个远程服务器的简写。 如果你已经克隆了自己的仓库，那么至少应该能看到 "),a("strong",[s._v("origin")]),s._v(" ：这是 Git 给你克隆的 "),a("strong",[s._v("仓库服务器的默认名字")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git clone https://github.com/schacon/ticgit\nCloning into 'ticgit'...\nremote: Reusing existing pack: 1857, done.\nremote: Total 1857 (delta 0), reused 0 (delta 0)\nReceiving objects: 100% (1857/1857), 374.35 KiB | 268.00 KiB/s, done.\nResolving deltas: 100% (772/772), done.\nChecking connectivity... done.\n$ cd ticgit\n$ git remote\norigin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("你也可以指定选项  "),a("code",[s._v("-v")]),s._v("，会显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git remote -v\norigin\thttps://github.com/schacon/ticgit (fetch)\norigin\thttps://github.com/schacon/ticgit (push)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果你的远程仓库不止一个，该命令会将它们全部列出。 例如，与几个协作者合作的，拥有多个远程仓库的仓库看起来像下面这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ cd grit\n$ git remote -v\nbakkdoor  https://github.com/bakkdoor/grit (fetch)\nbakkdoor  https://github.com/bakkdoor/grit (push)\ncho45     https://github.com/cho45/grit (fetch)\ncho45     https://github.com/cho45/grit (push)\ndefunkt   https://github.com/defunkt/grit (fetch)\ndefunkt   https://github.com/defunkt/grit (push)\nkoke      git://github.com/koke/grit.git (fetch)\nkoke      git://github.com/koke/grit.git (push)\norigin    git@github.com:mojombo/grit.git (fetch)\norigin    git@github.com:mojombo/grit.git (push)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("这样我们可以轻松拉取其中任何一个用户的贡献。 此外，我们大概还会有某些远程仓库的推送权限，虽然我们目前还不会在此介绍。")]),s._v(" "),a("p",[s._v("注意这些远程仓库使用了不同的协议；我们将会在 "),a("RouterLink",{attrs:{to:"/git-scm/04/02.html"}},[s._v("在服务器上搭建 Git")]),s._v(" 中了解关于它们的更多信息。")],1),s._v(" "),a("h2",{attrs:{id:"添加远程仓库-remote-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库-remote-add"}},[s._v("#")]),s._v(" 添加远程仓库 "),a("code",[s._v("remote add")])]),s._v(" "),a("p",[s._v("我在之前的章节中已经提到并展示了如何添加远程仓库的示例，不过这里将告诉你如何明确地做到这一点。 运行 "),a("code",[s._v("git remote add <shortname> <url>")]),s._v(" 添加一个新的远程 Git 仓库，同时指定一个你可以轻松引用的简写：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git remote\norigin\n$ git remote add pb https://github.com/paulboone/ticgit\n$ git remote -v\norigin\thttps://github.com/schacon/ticgit (fetch)\norigin\thttps://github.com/schacon/ticgit (push)\npb\thttps://github.com/paulboone/ticgit (fetch)\npb\thttps://github.com/paulboone/ticgit (push)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("现在你可以在命令行中使用字符串 pb 来 "),a("strong",[s._v("代替整个 URL")]),s._v("。 例如，如果你想拉取 Paul 的仓库中有但你没有的信息，可以运行 git fetch pb：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git fetch pb\nremote: Counting objects: 43, done.\nremote: Compressing objects: 100% (36/36), done.\nremote: Total 43 (delta 10), reused 31 (delta 5)\nUnpacking objects: 100% (43/43), done.\nFrom https://github.com/paulboone/ticgit\n * [new branch]      master     -> pb/master\n * [new branch]      ticgit     -> pb/ticgit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("现在 Paul 的 master 分支可以在本地通过 pb/master 访问到 – 你可以将它合并到自己的某个分支中，或者如果你想要查看它的话，可以检出一个指向该点的本地分支。 （我们将会在 "),a("RouterLink",{attrs:{to:"/git-scm/03/"}},[s._v("Git 分支")]),s._v(" 中详细介绍什么是分支以及如何使用分支。）")],1),s._v(" "),a("h2",{attrs:{id:"从远程仓库中抓取-pull-与拉取-fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从远程仓库中抓取-pull-与拉取-fetch"}},[s._v("#")]),s._v(" 从远程仓库中抓取(pull)与拉取(fetch)")]),s._v(" "),a("p",[s._v("就如刚才所见，从远程仓库中获得数据，可以执行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git fetch [remote-name]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个命令会访问远程仓库，从中 "),a("strong",[s._v("拉取所有你还没有的数据")]),s._v("。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。")]),s._v(" "),a("p",[s._v("如果你使用 clone 命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 “origin” 为简写。 所以，"),a("code",[s._v("git fetch origin")]),s._v(" 会抓取克隆（或上一次抓取）后 "),a("strong",[s._v("新推送的所有工作")]),s._v("。 必须注意 "),a("code",[s._v("git fetch")]),s._v(" 命令会将数据拉取到你的本地仓库 – "),a("strong",[s._v("它并不会自动合并或修改你当前的工作")]),s._v("。 当准备好时你必须手动将其合并入你的工作。")]),s._v(" "),a("p",[s._v("如果你有一个分支设置为跟踪一个远程分支（阅读下一节与 "),a("RouterLink",{attrs:{to:"/git-scm/03/"}},[s._v("Git 分支")]),s._v("  了解更多信息），可以使用 "),a("code",[s._v("git pull")]),s._v(" 命令来 "),a("strong",[s._v("自动的抓取然后合并远程分支到当前分支")]),s._v("。 这对你来说可能是一个更简单或更舒服的工作流程；默认情况下，git clone 命令会自动设置本地 master 分支跟踪克隆的远程仓库的 master 分支（或不管是什么名字的默认分支）。 运行 git pull 通常会从最初克隆的服务器上抓取数据并自动尝试合并到当前所在的分支。")],1),s._v(" "),a("h2",{attrs:{id:"推送到远程仓库-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送到远程仓库-push"}},[s._v("#")]),s._v(" 推送到远程仓库（push）")]),s._v(" "),a("p",[s._v("当你想分享你的项目时，必须将其推送到上游。 这个命令很简单：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git push [remote-name] [branch-name]\n\n# remote-name：远程服务器别名\n# branch-name：推送到哪一个分支\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("当你想要将 master 分支推送到 origin 服务器时（再次说明，克隆时通常会自动帮你设置好那两个名字），那么运行这个命令就可以将你所做的备份到服务器：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git push origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("只有当你有所克隆服务器的 "),a("strong",[s._v("写入权限")]),s._v("，并且之前没有人推送过时，这条命令才能生效。 当你和其他人在同一时间克隆，他们先推送到上游然后你再推送到上游，你的推送就会毫无疑问地被拒绝。 你必须先将他们的工作拉取下来并将其合并进你的工作后才能推送。 阅读 "),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/_git_branching",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 分支"),a("OutboundLink")],1),s._v(" 了解如何推送到远程仓库服务器的详细信息。")]),s._v(" "),a("h2",{attrs:{id:"查看远程仓库-remote-show"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库-remote-show"}},[s._v("#")]),s._v(" 查看远程仓库(remote show)")]),s._v(" "),a("p",[s._v("如果想要查看某一个远程仓库的更多信息，可以使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git remote show [remote-name]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("命令。 如果想以一个特定的缩写名运行这个命令，例如 origin，会得到像下面类似的信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git remote show origin\n* remote origin\n  Fetch URL: https://github.com/schacon/ticgit\n  Push  URL: https://github.com/schacon/ticgit\n  HEAD branch: master\n  Remote branches:\n    master                               tracked\n    dev-branch                           tracked\n  Local branch configured for 'git pull':\n    master merges with remote master\n  Local ref configured for 'git push':\n    master pushes to master (up to date)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("它同样会列出远程仓库的 URL 与跟踪分支的信息。 这些信息非常有用，它告诉你正处于 master 分支，并且如果运行 "),a("code",[s._v("git pull")]),s._v("，就会抓取所有的远程引用，然后将远程 master 分支合并到本地 master 分支。 它也会列出拉取到的所有远程引用。")]),s._v(" "),a("p",[s._v("这是一个经常遇到的简单例子。 如果你是 Git 的重度使用者（你的分支很多的话），那么还可以看到更多的信息。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote show origin\n* remote origin\n  URL: https://github.com/my-org/complex-project\n  Fetch URL: https://github.com/my-org/complex-project\n  Push  URL: https://github.com/my-org/complex-project\n  HEAD branch: master\n  Remote branches:\n    master                           tracked\n    dev-branch                       tracked\n    markdown-strip                   tracked  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个应该")]),s._v("\n    issue-43                         new "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("next fetch will store "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" remotes/origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    issue-45                         new "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("next fetch will store "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" remotes/origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    refs/remotes/origin/issue-11     stale "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git remote prune'")]),s._v(" to remove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Local branches configured "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git pull'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 pull 时本地分支与远程分支自动合并配置")]),s._v("\n    dev-branch merges with remote dev-branch\n    master     merges with remote master\n  Local refs configured "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git push'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 push 时，本地分支与远程分支的引用")]),s._v("\n    dev-branch                     pushes to dev-branch                     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("up to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    markdown-strip                 pushes to markdown-strip                 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("up to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    master                         pushes to master                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("up to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("这个命令列出了当你在特定的分支上执行 "),a("code",[s._v("git push")]),s._v(" 会自动地推送到哪一个远程分支。 它也同样地 "),a("strong",[s._v("列出了哪些远程分支不在你的本地")]),s._v("，"),a("strong",[s._v("哪些远程分支已经从服务器上移除了")]),s._v("，还有当你执行 "),a("code",[s._v("git pull")]),s._v(" 时哪些分支会自动合并。")]),s._v(" "),a("h2",{attrs:{id:"远程仓库的移除与重命名-remote-rename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库的移除与重命名-remote-rename"}},[s._v("#")]),s._v(" 远程仓库的移除与重命名("),a("code",[s._v("remote rename")]),s._v(")")]),s._v(" "),a("p",[s._v("如果想要 "),a("strong",[s._v("重命名引用的名字")]),s._v(" 可以运行 "),a("code",[s._v("git remote rename")]),s._v(" 去修改一个远程仓库的简写名。 例如，想要将 pb 重命名为 paul，可以用 git remote rename 这样做：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git remote rename pb paul\n$ git remote\norigin\npaul\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("值得注意的是这 "),a("strong",[s._v("同样也会修改你的远程分支名字")]),s._v("。 那些过去引用  "),a("code",[s._v("pb/master")]),s._v("  的现在会引用 "),a("code",[s._v("paul/master")]),s._v("。如果因为一些原因想要移除一个远程仓库 – 你已经从服务器上搬走了或不再想使用某一个特定的镜像了，又或者某一个贡献者不再贡献了 – 可以使用 git remote rm ：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git remote rm paul\n$ git remote\norigin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"迁移代码到新的服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迁移代码到新的服务器"}},[s._v("#")]),s._v(" 迁移代码到新的服务器")]),s._v(" "),a("p",[s._v("当你想把一个仓库的代码完全迁移到新的 Git 服务器时，可以用如下的命令，完整的迁移（代码，分支，提交记录）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone --mirror <URL to my OLD repo location>\ncd <New directory where your OLD repo was cloned>\ngit remote set-url origin <URL to my NEW repo location>\ngit push -f origin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这个原理也很好解读：")]),s._v(" "),a("ol",[a("li",[s._v("下载原始仓库")]),s._v(" "),a("li",[s._v("更改远程仓库地址到新的仓库地址")]),s._v(" "),a("li",[s._v("强制推送上去")])]),s._v(" "),a("p",[s._v("附上一个小脚本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROJECT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("项目1.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'正在处理 '")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone --mirror  git@旧仓库:组/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin git@新仓库:组/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f origin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("另外当你项目很多的时候，要挨个的换掉本地项目的 git 地址（注意，手动更改配置文件是有问题的，需要使用命令更改地址），可以使用如下的小脚本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里的项目名不带 git，是因为默认 clone 下来的仓库所在目录是没有 git 后缀的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROJECT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("项目1\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'正在处理 '")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROJECT")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file is not exist'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin git@新仓库地址:组/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PROJECT}")]),s._v(".git\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);