/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack=new Array();
    this.length=0;
    this.min;
    this.minStack=new Array();
    this.minLength=0;
        
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.min===undefined){
        this.min=x;
        this.minStack[this.minLength]=this.min;        
        this.minLength++;
    }else if(this.min>=x){
        this.min=x;
        this.minStack[this.minLength]=this.min;
        this.minLength++;
    }

    this.stack.push(x);
    this.length++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let result=this.stack[this.length-1];
    let minTmp=this.minStack[this.minLength-1];

    if(minTmp===result){
        this.minStack[this.minLength-1]=undefined;
        this.minLength--;
        this.min= this.minStack[this.minLength-1];
        console.log(this.minStack,this.minLength)
    }

    this.stack[this.length-1]=undefined;
    this.length--;
    // console.log(this.stack,this.length);
    return result;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
/**
 * code155
 */
var  minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   //--> Returns -3.
console.log(minStack.pop());
console.log(minStack.top());      //--> Returns 0.
console.log(minStack.getMin());   //--> Returns -2.
