var Node = require('./treeNode')
var SinglyLinkList = require('./singlyLinkList')
var LinkedNode = require('./linkedNode')
var Stack = require('./stack')
var Queue = require('./queue')

module.exports = function () {
    var root
    var length = 0
    var deep = 0
    return {
        buildTree() { },
        addNode(newNode) {
            if (root === undefined) {
                root = newNode
                length++
                // deep++ 
                return
            }
            let target = root
            let queue = new Queue(100)
            queue.enqueue(root)
            while (!queue.isEmpty()) {
                target = queue.dequeue()
                // console.log("get target[%d]", target.getData())

                if (target.getLeft() === undefined) {
                    console.log("set [%d] to [%d] left", newNode.getData(), target.getData())
                    target.setLeft(newNode)
                    return
                }
                if (target.getRight() === undefined) {
                    console.log("set [%d] to [%d] right", newNode.getData(), target.getData())
                    target.setRight(newNode)
                    return
                }
                queue.enqueue(target.getLeft())
                queue.enqueue(target.getRight())
            }

            // let target = root
            // let last = 0
            // let readLeft = false
            // let back
            // let stack = new Stack(100)
            //   console.log('deep is', deep,'last is',last)
            // while (true) {
            //     if (target.getLeft() === undefined) {
            //         //   console.log('in left', target.getData(), 'new node is', newNode.getData())
            //         newNode.setParent(target)
            //         target.setLeft(newNode)
            //         length++
            //         deep++
            //         break
            //     } else if (target.getRight() === undefined) {
            //         //   console.log('in right', target.getData(), 'new node is', newNode.getData())
            //         newNode.setParent(target)
            //         target.setRight(newNode)
            //         length++
            //         break
            //     } else {
            //         if (!readLeft) {
            //             target = target.getLeft();
            //             console.log('get left Child..', target.getData(), 'new node is', newNode.getData())
            //             readLeft = true
            //         } else {
            //             target = target.getParent().getRight()
            //             console.log('get right Child....', target.getData(), 'new node is', newNode.getData())
            //             readLeft = false
            //         }
            //     }
            // }
        },
        perOrder(targetNode, side) {
            // console.log(target)
            if (undefined === targetNode) {
                // console.log("node undifined....",side)
                return
            }
            // console.log("----->",targetNode.getData(),targetNode.getLeft())
            console.log('targetNode.data=', targetNode.getData())
            this.perOrder(targetNode.getLeft(), "left")
            // console.log("process node right when node is--->",targetNode.getData())
            this.perOrder(targetNode.getRight(), "right")
        },
        inOrder(targetNode) {
            // console.log(target)
            if (undefined === targetNode) {
                return
            }
            // console.log("----->",targetNode.getData(),targetNode.getLeft())
            this.inOrder(targetNode.getLeft())
            console.log('targetNode.data=', targetNode.getData())
            this.inOrder(targetNode.getRight())
        },
        postOrder(targetNode) {
            // console.log(target)
            if (undefined === targetNode) {
                return
            }
            // console.log("----->",targetNode.getData(),targetNode.getLeft())
            this.postOrder(targetNode.getLeft())
            this.postOrder(targetNode.getRight())
            console.log('targetNode.data=', targetNode.getData())
        },
        perOrderNonRecursive(targetNode, side) {
            let stack = new Stack(200);
            stack.push(targetNode)
            while (!stack.isEmpty()) {
                let node = stack.pop()
                console.log("targetNode.data=", node.getData())
                if (node.getRight() != undefined) {
                    stack.push(node.getRight())
                }
                if (node.getLeft() != undefined) {
                    stack.push(node.getLeft())
                }
            }
        },
        perOrderNonRecursive2(targetNode, side) {
            let stack = new Stack(200);
            // stack.push(targetNode)
            let node = targetNode
            while (node !== undefined || !stack.isEmpty()) {
                while (node !== undefined) {
                    console.log("targetNode.data=", node.getData())
                    stack.push(node)
                    node = node.getLeft()
                }
                if (!stack.isEmpty()) {
                    node = stack.pop().getRight()
                }
            }
        },
        inOrderNonRecursive(targetNode) {
            let stack = new Stack(100)
            let node = targetNode
            while (node !== undefined || !stack.isEmpty()) {
                while (node !== undefined) {
                    stack.push(node)
                    node = node.getLeft()
                }

                node = stack.pop()
                console.log("targetNode.data=", node.getData())
                node = node.getRight()

            }
        },
        inOrderNonRecursive(targetNode) {
            let stack = new Stack(100)
            let node = targetNode
            while (node !== undefined || !stack.isEmpty()) {
                while (node !== undefined) {
                    stack.push(node)
                    node = node.getLeft()
                }

                node = stack.pop()
                console.log("targetNode.data=", node.getData())
                node = node.getRight()

            }
        },
        inOrderNonRecursive1(targetNode) {
            let stack = new Stack(100)
            let node = targetNode
            while (node !== undefined) {
                while (node !== undefined) {
                    if (node.getRight() !== undefined) {
                        stack.push(node.getRight())
                    }
                    stack.push(node)
                    node = node.getLeft()
                    // console.log("targetNode.data=", node ? node.getData() : -1)
                }

                node = stack.pop()
                // console.log("targetNode.data=", node ? node.getData() : -1)

                while (!stack.isEmpty() && node.getRight() === undefined) {
                    console.log("targetNode.data=", node.getData())
                    node = stack.pop();
                }
                // node = stack.pop()
                console.log("targetNode.data=", node.getData())
                // node=node.getRight()
                if (!stack.isEmpty()) {
                    node = stack.pop()
                } else {
                    node = undefined
                }
            }
        },
        postOrderNonRecursive(targetNode) {
            let stack = new Stack(100)
            let lastNode
            let node = targetNode
            while (node !== undefined) {
                // for (; node.getLeft() !== undefined; node = node.getLeft()) {
                //     stack.push(node);

                // }
                while (node.getLeft() !== undefined) {
                    stack.push(node)
                    node = node.getLeft()
                }

                while (node !== undefined && (node.getRight() === undefined || node.getRight() === lastNode)) {
                    console.log("targetNode.data=", node.getData())
                    lastNode = node
                    if (stack.isEmpty()) {
                        return
                    }
                    node = stack.pop()

                }
                stack.push(node)
                node = node.getRight()



            }
        }
        ,
        levelTraverse(targetNode) {
            let queue = new Queue(2)
            queue.enqueue(targetNode)
            let node
            while (!queue.isEmpty()) {

                node = queue.dequeue()

                console.log("targetNode.data=", node.getData())
                // console.log("data=[%d],queue.size=[%d]",node.getData(),queue.size())
                if (node.getLeft() !== undefined) {
                    // console.log("set [%d] left in queue",node.getData())
                    queue.enqueue(node.getLeft())
                }
                if (node.getRight() !== undefined) {
                    // console.log("set [%d] right in queue",node.getData())

                    queue.enqueue(node.getRight())
                }
                // console.log("data=[%d],queue.size=[%d]",node.getData(),queue.size())
                // queue.print()
            }
        }
    }
}
