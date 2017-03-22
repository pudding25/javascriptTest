var Node=require('./treeNode')
var SinglyLinkList=require('./singlyLinkList')
var LinkedNode=require('./linkedNode')
module.exports=function(){
    var root
    var length
    var deep
    return {
        buildTree(){
            
        },
        addNode(newNode){
            if(root===undefined){
                root=newNode
                length++
                return
            }
            let target=root

            while(true){
                if(!target.getLeft()){
                    target.setLeft(newNode)
                    length++
                    break
                }else if(!target.getRight()){
                    target.setRight(newNode)
                    length++
                    break
                }else{
                    target=target.getLeft()
                    deep++
                }
            }
        },
        print(targetNode){
            // console.log(target)
            if(undefined===targetNode){
                return
            }
            // console.log("----->",targetNode.getData(),targetNode.getLeft())
            console.log("targetNode.data=",targetNode.getData());
            this.print(targetNode.getLeft());
            this.print(targetNode.getRight())

        }
    }
}

