var Node = require('./linkedNode')

module.exports = function (deep = 10) {
  var head = new Node()
  var length = 0
  var last

  var findNode = (index) => {
    let tmp = head.getNext()
    for (var i = 0; i < length; i++) {
      if (index === i) {
        return tmp
      }
      tmp = tmp.getNext()
    }
  }

  return {
    add(node, index) {
      if (length === 0) {
        head.setNext(node)
        last = node
        length++
        return
      }

      if (index === length || index === undefined) {
        last.setNext(node)
        last = node
        length++
        return
      }

      let target = findNode(index)
      let oldNext = target.getNext()
      node.setNext(oldNext)
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
      } else {
        target = findNode(index - 1)
      }

      // target=findNode(index-1) 
      if (index === length - 1) {
        target.setNext(null)
        length--
        return
      }
      let oldNext = target.getNext().getNext()
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
      // let tmp = head.getNext()
      // for (var i = 0;i < length;i++) {
      //   console.log(tmp.getData())
      //   tmp = tmp.getNext()
      // }
      let tmp = head
      while ((tmp = tmp.getNext()) != undefined) {
        console.log(tmp.getData())
      }
    },
    reverse() {
      let oldNext
      let oldPrev
      let node = head.getNext()
      while (node !== undefined) {
        oldNext = node.getNext()
        // console.log(node.getData(),"   ",node.getNext()?node.getNext().getData():-1)
        node.setNext(oldPrev);
        // console.log(node.getData()," - ",node.getNext()?node.getNext().getData():-1)
        oldPrev = node
        node = oldNext
        
      }
      head.setNext(node?node:oldPrev)
    }
  }
}
