var Node = require('./linkedNode')

module.exports = function (deep = 10) {
  var head = new Node()
  var length = 0
  var last

  var findNode = (index) => {
    let tmp = head.getNext()
    for (var i = 0;i < length;i++) {
      if (index === i) {
        return tmp
      }
      tmp = tmp.getNext()
    }
  }

  return {
    add(node, index) {
      if (length === 0) {
        node.setPrev(head)
        head.setNext(node)
        last = node
        length++
        return
      }

      if (index === length) {
        node.setPrev(last)
        last.setNext(node)
        last = node
        length++
        return
      }

      let target = findNode(index)
      let oldNext = target.getNext()
      oldNext.setPrev(node)
      node.setNext(oldNext)
      node.setPrev(target)
      target.setNext(node)
      length++
    },
    remove(index) {
      if (length === 0) {
        return
      }

      let target

      if (index === 0) {
        target = head
      }else {
        target = findNode(index - 1)
      }

      // target=findNode(index-1) 
      if (index === length - 1) {
        target.setNext(null)
        length--
        return
      }

      let oldNext = target.getNext().getNext()
      oldNext.setPrev(target)
      target.setNext(oldNext)
      length--
    },
    modify(data, index) {
      if (length === 0) {
        return
      }

      let target = findNode(index)
      if (target === undefined) {
        throw 'index off'
      }
      target.setData(data)
    },
    get(index) {
      if (length === 0) {
        return undefined
      }
      return findNode(index)
    },
    size() {
      return length
    },
    print() {
      let tmp = head.getNext()
      for (var i = 0;i < length;i++) {
        console.log(tmp.getData())
        tmp = tmp.getNext()
      }
    }
  }
}
