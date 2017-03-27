var Node = require('./treeNode')
var SinglyLinkList = require('./singlyLinkList')
var LinkedNode = require('./linkedNode')
var Stack=require('./stack')
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
            let last = 0
            let readLeft = false
            let back
            //   console.log('deep is', deep,'last is',last)
            while (true) {
                if (target.getLeft() === undefined) {
                    //   console.log('in left', target.getData(), 'new node is', newNode.getData())
                    newNode.setParent(target)
                    target.setLeft(newNode)
                    length++
                    deep++
                    break
                } else if (target.getRight() === undefined) {
                    //   console.log('in right', target.getData(), 'new node is', newNode.getData())
                    newNode.setParent(target)
                    target.setRight(newNode)
                    length++
                    break
                } else {
                    if (!readLeft) {
                        target = target.getLeft();
                        console.log('get left Child..', target.getData(), 'new node is', newNode.getData())
                        readLeft = true
                    } else {
                        target = target.getParent().getRight()
                        console.log('get right Child....', target.getData(), 'new node is', newNode.getData())
                        readLeft = false
                    }

                    //use array[index] index=action count
                    // if(last<1){
                    //     target=target.getLeft()
                    // }else{
                    //     if(last %2===1){}
                    // }
                    // last++

                    //   last++
                    //   if (last == deep) {
                    //     if (target.getLeft() == undefined) {
                    //       target = target.getLeft()
                    //       console.log('get leftChild..', target.getData(), 'new node is', newNode.getData(),deep,last)
                    //     }else {
                    //       target = target.getRight()
                    //       console.log('get right Child....', target.getData(), 'new node is', newNode.getData(),deep,last)
                    //     }
                    //   }else {
                    //     target = target.getLeft()
                    //     console.log('get leftChild', target.getData(), 'new node is', newNode.getData(),deep,last)
                    //     deep++
                    //   }
                }
            }
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
            let stack=new Stack(200);
            stack.push(targetNode)
            while(!stack.isEmpty()){
                let node=stack.pop()
                console.log("targetNode.data=",node.getData())
                if(node.getRight()!=undefined){
                    stack.push(node.getRight())
                }
                if(node.getLeft()!=undefined){
                    stack.push(node.getLeft())
                }
            }
        },
        perOrderNonRecursive2(targetNode, side) {
            let stack=new Stack(200);
            // stack.push(targetNode)
            let node=targetNode
            while(node!==undefined ||!stack.isEmpty()){
                while(node!==undefined){
                    console.log("targetNode.data=",node.getData())
                    stack.push(node)
                    node=node.getLeft()
                }
                if(!stack.isEmpty()){
                    node=stack.pop().getRight()
                }
            }
        },
        inOrderNonRecursive(targetNode) {
            
        },
        postOrderNonRecursive(targetNode) {
            // console.log(target)
            if (undefined === targetNode) {
                return
            }
            // console.log("----->",targetNode.getData(),targetNode.getLeft())
            this.postOrder(targetNode.getLeft())
            this.postOrder(targetNode.getRight())
            console.log('targetNode.data=', targetNode.getData())
        },

    }
}
