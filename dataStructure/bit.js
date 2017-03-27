function test(a, b) {
    console.log("a=%d,b=%d,a=%s,b=%s",a,b,a.toString(2),b.toString(2))
    if (b === 0) {
        return a
    }
    console.log("a^b",(a^b).toString(2))
    console.log("a&b",(a&b).toString(2))    
    console.log("(a&b)<<1",((a&b)<<1).toString(2))
    
    
    return test(a^b,(a&b)<<1)
}

console.log(test(22,21))