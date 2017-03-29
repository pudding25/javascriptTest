module.exports = function (maxLength = 10) {
    var first = 0
    var rear = 0
    var length = 0
    var max = maxLength
    var queue = new Array(max)
    return {
        enqueue(element) {
            queue[rear++] = element
            length++
        },
        dequeue() {
            var result = queue[first]
            queue[first++] = null
            length--
            return result
        },
        peek() {
            return queue[first]
        },
        size() {
            return length
        },
        print() {
            queue.forEach(console.log)
        },
        isEmpty() {
            return length === 0
        }
    }
}