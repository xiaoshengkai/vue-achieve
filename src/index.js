import Vue from './app'

// 使用vue
let app = new Vue({
  $el: '#app',
  data () {
    return {
      hello: 'hello',
      world: ' world'
    }
  },
  template: 
    `<div>
      {{ hello }}{{ world }}
    </div>`
})

setTimeout(() => {
  for (let i = 0; i < 10; i++) {
    app.hello = 'mmp'+i
  }
}, 2000)

/* 注意：过程到 更新视图的时候:
 * 第一次进入：queueWatcher.js 过滤掉重复id watcher,
 * 然后 -> next-tick.js(异步策略保证了视图不及时更新),
 * 也就不及时走dep.addSub -> 保证了subs还是只有一个watcher
 * 所以 for (let i = 0; i < 10; i++) 连续十次，触发
 * observer->setter,所以最后hello为mmp9,并且只有带id为1
 * 的watcher10次进入queueWatcher.js，过滤掉以后只有1个watcher
 * 所以保证了就更新一次视图。
*/
