export default class Vnode {
  constructor (tag, data, children, text, ele) {
    // 标签
    this.tag = tag
    // 属性
    this.data = data
    // 子节点
    this.children = children
    // 文本
    this.text = text
    // 真实节点
    this.ele = ele
  }
}

// 创建空节点
export function createEmptyVNode () {
  const node = new Vnode()
  node.text = ''
  return node
}

// 创建文本节点
export function createTextNode (val) {
  return new Vnode(undefined, undefined, undefined, String(val))
}

// 克隆节点
export function cloneNode (node) {
  return new Vnode(node.tag, node.data, node.children, node.text)
}