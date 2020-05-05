/** 
 * 过滤重复watcher
*/
import nextTick from './next-tick'

let has = {}       // watcher.id map 唯一值
let queue = []     // watcher map 唯一值
let waiting = false // 标记位

export default function queueWatcher (watcher) {
  const id = watcher.id
  if (!has[id]) {
    has[id] = true
    queue.push(watcher)
    if (!waiting) {
      waiting = true
      nextTick(flushSchedulerQueue)
    }
  }
}

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