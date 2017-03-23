var Node = require('./treeNode')
var SinglyLinkList = require('./singlyLinkList')
var LinkedNode = require('./linkedNode')
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
            let readLeft=false
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
                    if(!readLeft){
                        target=target.getLeft();
                        readLeft=true
                    }else{
                        target=target.getParent().getRight()
                        readLeft=false
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
        perPrint(targetNode,side) {
            // console.log(target)
            if (undefined === targetNode) {
                console.log("node undifined....",side)
                return
            }
            // console.log("----->",targetNode.getData(),targetNode.getLeft())
            console.log('targetNode.data=', targetNode.getData())
            this.perPrint(targetNode.getLeft(),"left")
            console.log("process node right when node is--->",targetNode.getData())
            this.perPrint(targetNode.getRight(),"right")
        },
        inPrint(targetNode) {
            // console.log(target)
            if (undefined === targetNode) {
                return
            }
            // console.log("----->",targetNode.getData(),targetNode.getLeft())
            this.inPrint(targetNode.getLeft())
            console.log('targetNode.data=', targetNode.getData())
            this.inPrint(targetNode.getRight())
        },
        postPrint(targetNode) {
            // console.log(target)
            if (undefined === targetNode) {
                return
            }
            // console.log("----->",targetNode.getData(),targetNode.getLeft())
            this.postPrint(targetNode.getLeft())
            this.postPrint(targetNode.getRight())
            console.log('targetNode.data=', targetNode.getData())
        }

    }
}
