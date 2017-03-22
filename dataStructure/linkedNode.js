module.exports=function(newData=-1){
    var data=newData
    var prev
    var next
    return {
        setData(newData){
            data=newData
        },
        getData(){
            return data
        },
        setPrev(newPrev){
            prev=newPrev
        },
        getPrev(){
            return prev
        },
        setNext(newNext){
            next=newNext
        },
        getNext(){
            return next
        }
    }
}