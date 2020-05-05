class Dep {
  constructor () {
    this.subs = []
  }

  // 添加依赖
  addSub (sub) {
    this.subs.push(sub)
  }

  // 通知watcher更新视图
  notify () {
    for (let i = 0, l = this.subs.length; i < l; i++) {
      this.subs[i].update()
    }
  }
}
Dep.target = null
export default Dep