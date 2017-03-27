module.exports = function (maxLength = 10) {
  var top = -1
  var length = 0
  var max = maxLength
  var stack = new Array(max)
  return {
    push(element) {
      if (length === max) {
        throw 'stack full!'
      }
      stack[++top] = element
      length++
    },
    pop() {
      if (length === 0) {
        stack = new Array(max)
        throw 'stack overflow!'
      }
      let result = stack[top]
      stack[top--] = undefined
      length--
      return result
    },
    peek() {
      return stack[top]
    },
    size() {
      return length
    },
    print() {
      // stack.forEach((value,index,array))
      stack.forEach(console.log)
    },
    isEmpty(){
      return length ===0
    }
  }
}
