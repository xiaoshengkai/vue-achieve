import Dep from './dep'
import { complieHTML } from './app'
import queueWatcher from './queueWatcher'

let id = 0

export default class watcher {
  constructor () {
    Dep.target = this;
    this.id = ++id; // 唯一值，更新的时候过滤重复
  }

  // 更新视图
  update () {
    queueWatcher(this)
  }

  run () {
    console.log(this)
    complieHTML()
  }
}
