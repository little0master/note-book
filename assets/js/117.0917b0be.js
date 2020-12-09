(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1620:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"插件开发篇"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件开发篇"}},[t._v("#")]),t._v(" 插件开发篇")]),t._v(" "),n("h2",{attrs:{id:"插件入口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件入口"}},[t._v("#")]),t._v(" 插件入口")]),t._v(" "),n("p",[t._v("入口有两种方式：")]),t._v(" "),n("ul",[n("li",[t._v("使用本地插件：直接使用了一个纯函数")]),t._v(" "),n("li",[t._v("使用打包好的插件")])]),t._v(" "),n("h3",{attrs:{id:"使用本地插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用本地插件"}},[t._v("#")]),t._v(" 使用本地插件")]),t._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule.exports = "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      (pluginOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context) => ("),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'my-xxx-plugin'\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @1 这里挂载插件 API")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("以上代码是用在你的写作文档中的，这个入口的好处是，你使用 "),n("code",[t._v("yarn docs:dev")]),t._v(" 预览你的文档的时候，这里大部分的开发修改也可以热更新，就如果平时你开发 vue-cli 脚手架项目一样的感受。")]),t._v(" "),n("p",[t._v("在 "),n("code",[t._v("@1")]),t._v(" 处可以挂载这里的其他 "),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/plugin/option-api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Opetion API"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"使用打包好的插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用打包好的插件"}},[t._v("#")]),t._v(" 使用打包好的插件")]),t._v(" "),n("p",[t._v("这个就是普通的使用，需要你提前安装插件包，然后在这里配置。不好的就是开发调试不方便")]),t._v(" "),n("h2",{attrs:{id:"option-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#option-api"}},[t._v("#")]),t._v(" Option API")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/plugin/option-api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Opetion API"),n("OutboundLink")],1),t._v(" 这里面的每个 API 钩子都有他自己的含义。这里只介绍其中笔者使用的几种")]),t._v(" "),n("h3",{attrs:{id:"clientrootmixin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clientrootmixin"}},[t._v("#")]),t._v(" clientRootMixin")]),t._v(" "),n("p",[n("img",{attrs:{src:a(679),alt:"image-20200429131438249"}})]),t._v(" "),n("p",[t._v("记住这张图，clientRootMixin 让你可以控制根组件的生命周期，据笔者观察，该 mixin 应该是挂在这个 "),n("code",[t._v("GlobalLayout")]),t._v(" 组件上的，而该组件则是整个网站的布局实现了")]),t._v(" "),n("p",[n("img",{attrs:{src:a(680),alt:"image-20200429132023023"}})]),t._v(" "),n("p",[t._v("那么你可以认为，只要这个挂上去了，你就可以根据以前开发 vue 项目的方式，对该组件进行操控。当然目前笔者水平有限，能想到的操控方式也有限，都用在目前的插件写作上了")]),t._v(" "),n("p",[t._v("注：这里可以直接写一个文件夹中的 mixin，也就是说，插件开发，使用这种方式，可以实时调试了")])])}),[],!1,null,null,null);s.default=e.exports},679:function(t,s,a){t.exports=a.p+"assets/img/image-20200429131438249.03b61b22.png"},680:function(t,s,a){t.exports=a.p+"assets/img/image-20200429132023023.873aed04.png"}}]);