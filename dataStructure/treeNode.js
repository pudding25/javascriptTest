module.exports=function(newData=-1){
    var data=newData
    var left
    var right
    var parent
    return {
        setData(newData){
            data=newData
        },
        getData(){
            return data
        },
        setLeft(newLeft){
            left=newLeft
        },
        getLeft(){
            return left
        },
        setRight(newRight){
            right=newRight
        },
        getRight(){
            return right
        },
        setParent(newParent){
            parent=newParent
        },
        getParent(){
            return parent
        }
    }
}