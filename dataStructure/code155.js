var Stack=require('./stack');
var MinStack=function(){
    var stack=new Stack(100);
    var min;
    return {
        push:(target)=>{
            if(min===undefined){
                min=target;
            }else if(target<=min){
                stack.push(min);
                min=target;
            }
            stack.push(target);
        },
        pop:()=>{
            let result=stack.pop();
            if(result===min){
                min=stack.pop();
            }
            return result;
        },
        top:()=>{
            return stack.peek();
        },
        getMin:()=>{return min}
    };
}


var  minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   //--> Returns -3.
console.log(minStack.pop());
console.log(minStack.top());      //--> Returns 0.
console.log(minStack.getMin());   //--> Returns -2.