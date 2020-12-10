
import nextTick from './next-tick'

let has = {}       // watcher.id map 唯一值
let queue = []     // watcher map 唯一值
let waiting = false // 标记位

export default function queueWatcher (watcher) {
  /** 
   * 过滤重复watcher
  */
  const id = watcher.id
  if (!has[id]) {
    has[id] = true
    queue.push(watcher)
    if (!waiting) {
      waiting = true
      // 上述操作完成后，走异步解析
      nextTick(flushSchedulerQueue)
    }
  }
}

// 异步完之后，数据整理好了（这里简单去重），然后去跑run渲染
function flushSchedulerQueue () {
  let watcher, id
  for (let i = 0; i < queue.length; i++) {
    watcher = queue[i]
    id = watcher.id
    has[id] = null
    watcher.run()
  }
  waiting = false
}
