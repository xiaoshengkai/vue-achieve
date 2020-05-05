import Watcher from './watcher'
import complie from './complie'
import observer from './observer'

// 模拟编译 -> html
export let complieHTML = () => {}

function Vue (options) {
  // 判断 data 是否为函数
  this._data = typeof options.data === 'function' ? options.data() : options.data || {}
  // 观察所有属性
  observer(this, '_data')
  // 将当前的对象指向Dep.target
  new Watcher()
  // 挂载
  complieHTML = complie.bind(this, this, options)
  complie(this, options)
}



export default Vue
