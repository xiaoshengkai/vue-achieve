import Dep from './dep'

export default function observer (vm, sourceKey) {
  let data = vm._data
  Object.keys(data).forEach(key => {
    proxy(vm, sourceKey, key)
  })
}

// 通过 Object.defineProperty 来实现对对象的「 响应式」
function proxy (target, sourceKey, key) {
  const dep = new Dep()

  Object.defineProperty(target, key, {
    enumerable: true, /**可以被枚举 */
    configurable: true, /**可以被修改，删除 */
    get: function reactiveGetter () {
      // 每次获取的时候，添加一个watcher到subs里
      dep.addSub(Dep.target)
      return target[sourceKey][key];
    },
    set: function reactiveSetter (val) {
      if (target[sourceKey][key] === val) return
      target[sourceKey][key] = val
      dep.notify()
    }
  })
}