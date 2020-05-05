/**
 * 批量异步策略
 */
let pedding = false
let callbacks = []

export default function nextTick (cb) {
  callbacks.push(cb)

  if (!pedding) {
    pedding = true
    setTimeout(flushCallbacks, 0)
  }
}

function flushCallbacks () {
  pedding = false
  const copies = callbacks.slice(0) // 浅拷贝
  callbacks.length = 0 // 清空
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}