(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{1383:function(_,v,t){"use strict";t.r(v);var s=t(20),a=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_069-缓存预热解决方案-基于-storm-实时热点统计的分布式并行缓存预热"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_069-缓存预热解决方案-基于-storm-实时热点统计的分布式并行缓存预热"}},[_._v("#")]),_._v(" 069. 缓存预热解决方案：基于 storm 实时热点统计的分布式并行缓存预热")]),_._v(" "),t("h2",{attrs:{id:"缓存预热基本思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存预热基本思路"}},[_._v("#")]),_._v(" 缓存预热基本思路")]),_._v(" "),t("p",[_._v("由于缓存冷启动问题，redis 启动后，一点数据都没有，直接就对外提供服务了，mysql 裸奔")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("提前给 redis 中灌入部分数据，再提供服务")])]),_._v(" "),t("li",[t("p",[_._v("数据量太大的话，无法将所有数据放入 redis 中")]),_._v(" "),t("ul",[t("li",[_._v("耗费时间过长")]),_._v(" "),t("li",[_._v("或 redis 根本无法容纳下所有的数据")])])]),_._v(" "),t("li",[t("p",[_._v("需要根据当天的具体访问情况，实时统计出访问频率较高的热数据")]),_._v(" "),t("p",[_._v("然后将访问频率较高的热数据写入 redis 中，肯定数据也比较多，\n我们也得多个服务并行读取数据去写，并行的分布式缓存预热")])]),_._v(" "),t("li",[t("p",[_._v("都准备好后，在对外服务，就不至于冷启动，让数据库裸奔了")])])]),_._v(" "),t("h2",{attrs:{id:"缓存预热具体实现思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存预热具体实现思路"}},[_._v("#")]),_._v(" 缓存预热具体实现思路")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("nginx +lua 将访问流量上报到 kafka 中")]),_._v(" "),t("p",[_._v("要统计出当前最新的实时的热数据是那些，我们就得将商品详情页访问的请求对应的流量\n日志实时上报到 kafka 中")])]),_._v(" "),t("li",[t("p",[_._v("storm 从 kafka 中消费数据，实时统计访问次数")]),_._v(" "),t("p",[_._v("访问次数基于 LRU 内存数据结构的存储方案；")]),_._v(" "),t("p",[_._v("为什么要基于 LRU 内存方案？")]),_._v(" "),t("ol",[t("li",[_._v("storm 中读写数据频繁")]),_._v(" "),t("li",[_._v("数据量大")])]),_._v(" "),t("p",[_._v("所以不适合依赖 redis 或者 mysql：")]),_._v(" "),t("ul",[t("li",[_._v("redis 可能出现故障，会导致 storm 的稳定性")]),_._v(" "),t("li",[_._v("mysql：扛不住高并发读写")]),_._v(" "),t("li",[_._v("hbase：hadoop 生态组合还是不错的，但是对于非专业大数据方向来说，维护太重了")])]),_._v(" "),t("p",[_._v("我之前做过的一些项目，一些广告计费类的系统也是用这种方案，有人就直接往 mysql 中去写，\n流量上来之后 mysql 直接被打死了")]),_._v(" "),t("p",[_._v("其实我们的需求就是：统计出最近一段时间访问最频繁的商品，进行访问计数，\n同时维护出一个前 N 个访问最多的商品 list 即可")]),_._v(" "),t("p",[_._v("也就是热数据：最近一段时间（如最近 1 小时、5 分钟），1 万个商品请求，\n统计这段时间内每个商品的访问次数，排序后做出一个 top n 列表")]),_._v(" "),t("p",[_._v("计算好每个 task 大致要存放的商品访问次数的数量，计算出大小，\n然后构建一个 LRU MAP，它能够给你一个剩下访问次数最多的商品列表，访问高的才能存活")]),_._v(" "),t("p",[_._v("LRU MAP 有开源的实现，apach commons collections 中有提供，设置好 map 的最大大小，\n就会自动根据 LRU 算法去剔除多余的数据，保证内存使用限制，\n即时有部分数据被干掉了，下次会从 0 开始统计，也没有关系，因为被 LRU 算法干掉了，\n就表示它不是热数据，说明最近一段时间都很少访问了，热度下降了")])]),_._v(" "),t("li",[t("p",[_._v("每个 Storm task 启动时，基于 zk 分布式锁，将自己的 ID 写入 zk 同一个节点中")]),_._v(" "),t("p",[_._v("这个 id 写到一个固定节点中，形成一个 task id 列表，\n后续可以通过这个 id 列表去拿到对于 task 存储在 zk node 上的 topn 列表")])]),_._v(" "),t("li",[t("p",[_._v("每个 Storm task 负责完成自己这里的热数据统计")]),_._v(" "),t("p",[_._v("比如每隔一段时间，就遍历下这个 map，维护并更新一个前 n 个商品的 list")])]),_._v(" "),t("li",[t("p",[_._v("定时同步到 zk 中去")]),_._v(" "),t("p",[_._v("写一个后台线程，每隔一段时间，比如 1 分钟，将这个 task 所有的商品排名算一次\n将排名前 n 的热数据 list 同步到 zk 中去")])]),_._v(" "),t("li",[t("p",[_._v("需要一个服务，根据 top n 列表在 mysql 中获取数据往 redis 中存")]),_._v(" "),t("p",[_._v("这个服务有会部署多个实例，在启动时会拉取 storm task id 列表，\n然后通过 zk 分布式锁，基于 id 去加锁，获取到这个 task id 节点中存储的 topn 列表，\n然后读取 mysql 中的数据，存储在 redis 中")]),_._v(" "),t("p",[_._v("这个服务可以是单独的服务，本课程为了方便会放在缓存服务中")])])]),_._v(" "),t("p",[_._v("这整个方案就是分布式并行缓存预热")]),_._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),t("p",[_._v("思路总结：")]),_._v(" "),t("ol",[t("li",[_._v("使用 stom 实时计算出最近一段时间内的 n 个 topn 列表，并存储在 zk task id 节点上")]),_._v(" "),t("li",[_._v("多服务通过 task id 进行分布式锁，获取 topn 列表，去 mysql 拉取数据放入 redis 中")])]),_._v(" "),t("p",[_._v("由于对 storm 不熟悉，这里的思路看来，只是利用了 storm 能创建大量并行的 task 和数据分组策略，\n来让大量的访问日志分发到 n 个 task 中，让 storm 这种抗住大量并发访问量的计算能力，\n注意这里是计算出 n 个 topn 列表，也就是大量的热数据。而不是唯一的一份 topn 列表，\n而且是最近一段时间内的（之前一直想不通 storm 怎么能达到实时计算？原来是通过这种分而治之方式 +\n分段时间来重复计算自己负责的部分结果数据实现的，就是不知道 storm 其他的使用场景也是这样的吗？）")]),_._v(" "),t("p",[_._v("也想知道如果想维护一个全局的排行榜名单的话，用 storm 应该怎么做？这个数据量就很大了，\n比如淘宝的双 11 的秒级统计成交金额")])])}),[],!1,null,null,null);v.default=a.exports}}]);