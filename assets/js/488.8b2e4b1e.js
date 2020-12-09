(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{1810:function(s,a,n){"use strict";n.r(a);var t=n(20),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"交互式暂存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#交互式暂存"}},[s._v("#")]),s._v(" 交互式暂存")]),s._v(" "),n("p",[s._v("Git 自带的一些脚本可以使 "),n("strong",[s._v("在命令行下工作更容易")]),s._v("。 本节的几个互交命令 "),n("strong",[s._v("可以帮助你将文件的特定部分组合成提交")]),s._v("。 当你修改一组文件后，希望这些改动能放到若干提交而不是混杂在一起成为一个提交时，这几个工具会非常有用。 通过这种方式，可以确保提交是逻辑上独立的变更集，同时也会使其他开发者在与你工作时很容易地审核。 如果运行 "),n("code",[s._v("git add")]),s._v(" 时使用  "),n("code",[s._v("-i")]),s._v("  或者  "),n("code",[s._v("–interactive")]),s._v("  选项，Git 将会进入一个交互式终端模式，显示类似下面的东西：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -i\n           staged     unstaged path\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":    unchanged        +0/-1 TODO\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":    unchanged        +1/-1 index.html\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\n\n*** Commands ***\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": status     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": update      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": revert     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" untracked\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": patch      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": quit       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\nWhat now"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("可以看到这个命令以非常不同的视图显示了暂存区 – 基本上与 "),n("code",[s._v("git status")]),s._v("  是相同的信息，但是更简明扼要一些。 它将 "),n("strong",[s._v("暂存的修改列在左侧")]),s._v("，"),n("strong",[s._v("未暂存的修改列在右侧")]),s._v("。")]),s._v(" "),n("p",[s._v("在这块区域后是 "),n("strong",[s._v("命令区域")]),s._v("。 在这里你可以做一些工作，包括暂存文件、取消暂存文件、暂存文件的一部分、添加未被追踪的文件、查看暂存内容的区别。")]),s._v(" "),n("h2",{attrs:{id:"暂存与取消暂存文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#暂存与取消暂存文件"}},[s._v("#")]),s._v(" 暂存与取消暂存文件")]),s._v(" "),n("p",[s._v("如果在 "),n("code",[s._v("What now>")]),s._v("  提示符后键入 2 或 u，脚本将会提示想要暂存哪个文件：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("What now"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n           staged     unstaged path\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":    unchanged        +0/-1 TODO\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":    unchanged        +1/-1 index.html\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\nUpdate"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("要暂存 TODO 与 index.html 文件，可以输入数字：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("Update"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),s._v("\n           staged     unstaged path\n* "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":    unchanged        +0/-1 TODO\n* "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":    unchanged        +1/-1 index.html\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\nUpdate"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("每个文件前面的 "),n("code",[s._v("*")]),s._v("  意味着 "),n("strong",[s._v("选中的文件将会被暂存")]),s._v("。 如果在 "),n("code",[s._v("Update>>")]),s._v("  提示符后不输入任何东西并直接按回车，Git 将会暂存之前选择的文件：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("Update"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("\nupdated "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" paths\n\n*** Commands ***\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": status     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": update      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": revert     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" untracked\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": patch      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": quit       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\nWhat now"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n           staged     unstaged path\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":        +0/-1      nothing TODO\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":        +1/-1      nothing index.html\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("现在可以看到 TODO 与 index.html 文件已经被暂存而 simplegit.rb 文件还未被暂存。 如果这时想要取消暂存 TODO 文件，使用 3 或 r（撤消）选项：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("*** Commands ***\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": status     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": update      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": revert     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" untracked\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": patch      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": quit       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\nWhat now"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n           staged     unstaged path\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":        +0/-1      nothing TODO\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":        +1/-1      nothing index.html\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\nRevert"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n           staged     unstaged path\n* "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":        +0/-1      nothing TODO\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":        +1/-1      nothing index.html\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\nRevert"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("enter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nreverted one path\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("再次查看 Git 状态，可以看到已经取消暂存 TODO 文件：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("*** Commands ***\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": status     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": update      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": revert     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" untracked\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": patch      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": quit       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\nWhat now"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n           staged     unstaged path\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":    unchanged        +0/-1 TODO\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":        +1/-1      nothing index.html\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":    unchanged        +5/-1 lib/simplegit.rb\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("如果想要 "),n("strong",[s._v("查看已暂存内容的区别")]),s._v("，可以使用 6 或 d（区别）命令。 它 "),n("strong",[s._v("会显示暂存文件的一个列表")]),s._v("（使用 update 添加的文件），可以从中选择想要查看的暂存区别。 这跟你在命令行指定 "),n("code",[s._v("git diff –cached")]),s._v(" 非常相似：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("*** Commands ***\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": status     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": update      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": revert     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" untracked\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": patch      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(": quit       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\nWhat now"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n           staged     unstaged path\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":        +1/-1      nothing index.html\nReview diff"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --git a/index.html b/index.html\nindex 4d07108"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("4335f49 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\n--- a/index.html\n+++ b/index.html\n@@ -16,7 +16,7 @@ Date Finder\n\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"out"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"footer"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("contact "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" support@github.com"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n+"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"footer"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("contact "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" email.support@github.com"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("通过这些基本命令，可以使用交互式添加模式来轻松地处理暂存区。")]),s._v(" "),n("h2",{attrs:{id:"暂存补丁"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#暂存补丁"}},[s._v("#")]),s._v(" 暂存补丁")]),s._v(" "),n("p",[s._v("Git 也可以暂存文件的特定部分。 例如，如果在 simplegit.rb 文件中 "),n("strong",[s._v("做了两处修改，但只想要暂存其中的一个而不是另一个")]),s._v("，Git 会帮你轻松地完成。 从交互式提示符中，输入 5 或 p（补丁）。 Git 会询问你想要部分暂存哪些文件；然后，对已选择文件的每一个部分，它都会一个个地显示文件区别并询问你是否想要暂存它们：")]),s._v(" "),n("p",[s._v("这时有很多选项。 输入 "),n("code",[s._v("?")]),s._v(" 显示所有可以使用的命令列表：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("Stage this hunk "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("y,n,a,d,/,j,J,g,e,?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("? ?\ny - stage this hunk\nn - "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" not stage this hunk\na - stage this and all the remaining hunks "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\nd - "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" not stage this hunk nor any of the remaining hunks "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\ng - "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a hunk to go to\n/ - search "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" a hunk matching the given regex\nj - leave this hunk undecided, see next undecided hunk\nJ - leave this hunk undecided, see next hunk\nk - leave this hunk undecided, see previous undecided hunk\nK - leave this hunk undecided, see previous hunk\ns - "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" the current hunk into smaller hunks\ne - manually edit the current hunk\n? - print "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("通常情况下可以输入 y 或 n 来选择是否要暂存每一个区块，当然，暂存特定文件中的所有部分或为之后的选择跳过一个区块也是非常有用的。 如果你只暂存文件的一部分，状态输出可能会像下面这样：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("What now> 1\n           staged     unstaged path\n  1:    unchanged        +0/-1 TODO\n  2:        +1/-1      nothing index.html\n  3:        +1/-1        +4/-0 lib/simplegit.rb\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("simplegit.rb 文件的状态很有趣。 它 "),n("strong",[s._v("显示出若干行被暂存与若干行未被暂存")]),s._v("。 已经部分地暂存了这个文件。 在这时，可以退出交互式添加脚本并且运行 git commit 来提交部分暂存的文件。")]),s._v(" "),n("p",[s._v("也可以不必在交互式添加模式中做部分文件暂存 – 可以在命令行中使用 "),n("code",[s._v("git add -p")]),s._v("  或  "),n("code",[s._v("git add –patch")]),s._v("  来启动同样的脚本。")]),s._v(" "),n("p",[s._v("更进一步地，可以使用 "),n("code",[s._v("reset –patch")]),s._v("  命令的补丁模式来部分重置文件，通过 "),n("code",[s._v("checkout –patch")]),s._v(" 命令来部分检出文件与 "),n("code",[s._v("stash save –patch")]),s._v("  命令来部分暂存文件。 我们将会在接触这些命令的高级使用方法时了解更多详细信息。")])])}),[],!1,null,null,null);a.default=e.exports}}]);