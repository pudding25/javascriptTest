var Stack = require('./stack')
var Queue = require('./queue')
var SinglyLinkedList = require('./singlyLinkList')
var DoublyLikedList = require('./doublyLinkList')
var LinkedNode = require('./linkedNode')

var BinaryTree = require('./binaryTree')
var TreeNode = require('./treeNode')

var args = process.argv.slice(process.execArgv.length + 2)
if (args.length == 0) {
  args[0] = 'stack'
}

var $ = methods = (command) => {
  let methods = {
    stack: () => {
      let test = new Stack(20)
      for (var i = 0; i < 10; i++) {
        test.push(i + 1)
      }
      test.print()
      for (var i = 0; i < 10; i++) {
        console.log(test.peek())
      }
      for (var i = 0; i < 20; i++) {
        try {
          console.log(test.pop())
        } catch (error) {
          console.log(error)
        }
      }
      test.print()
      for (var i = 0; i < 10; i++) {
        test.push(i + 1)
      }
      test.print()
    },
    queue: () => {
      var test = new Queue(20)

      for (var i = 0; i < 10; i++) {
        test.enqueue(i + 1)
      }
      test.print()
      // console.log(t.size())

      for (var i = 0; i < 3; i++) {
        var tmp = test.dequeue()
        console.log(tmp ? tmp : 'is empty')
      }
      test.print()
      try {
        for (var i = 0; i < 5; i++) {
          test.enqueue(i + 1)
        }
      } catch (err) {
        console.log(err)
      }
    },
    sll: () => {
      var t = SinglyLinkedList()
      for (var i = 0; i < 10; i++) {
        t.add(new LinkedNode(i + 21), i)
      }


      t.print()
      t.reverse()
      console.log("---------")
      t.print()
      // for (var i = 0; i < 5; i++) {
      //   t.remove(0)
      // }
      // console.log("----------------------")
      // t.print()
      // try {
      //   t.modify(99, 100)
      // } catch (err) {
      //   console.error('--->', err)
      // }

      // console.log("----------------------")

      // t.print()
    },
    dll: () => {
      var t = DoublyLikedList()
      for (var i = 0; i < 10; i++) {
        t.add(new LinkedNode(i + 1), i)
      }
      t.print()
      t.remove(0)
      t.print()
      try {
        t.modify(99, 0)
      } catch (err) {
        console.error(err)
      }
      try {
        t.modify(99, 100)
      } catch (err) {
        console.error(err)
      }
      t.print()
    }
  }
  methods[command]()
}

// $(args[0])


console.time("time")
var test = new BinaryTree()
var root = new TreeNode(0)
// console.log(root)
// var tmp=root;
// tmp.setLeft(new TreeNode(1,tmp))
// tmp.setRight(new TreeNode(2,tmp))

// tmp=root.getLeft()
// tmp.setLeft(new TreeNode(3,tmp))
// tmp.setRight(new TreeNode(4,tmp))

// tmp=root.getRight()
// tmp.setLeft(new TreeNode(5,tmp))
// tmp.setRight(new TreeNode(6,tmp))

// test.addNode(root)

// test.postOrder(root)
// console.log("-----------------------")
// test.postOrderNonRecursive(root)
// console.log("-----------------------")
// test.inOrderNonRecursive1(root)
// console.log("-----------------------")



/*
        0
    1      2
  3  4   5   6

                          0
              1                         2
        3          4             5             6
    7     8     9     10     11     12     13     14 
 */
// test.addNode(root)
// for(let i =1;i<15;i++){
//   test.addNode(new TreeNode(i));
// }
// test.levelTraverse(root)
var code461 = function (n, m) {
  var a = (n ^ m).toString(2)
  console.log('n=[%d,%s],m=[%d,%s],a=[%d,%s]', n, n.toString(2), m, m.toString(2), n ^ m, a);
  return (n ^ m).toString(2).replace(/0/g, '').length;
};

var code500 = (words) => {
  var tmp = { a: 2, b: 3, c: 3, d: 2, e: 1, f: 2, g: 2, h: 2, i: 1, j: 2, k: 2, l: 2, m: 3, n: 3, o: 1, p: 1, q: 1, r: 1, s: 2, t: 1, u: 1, v: 3, w: 1, x: 3, y: 1, z: 3 }
  let last = 0;
  let result = []
  words.forEach((word, ind) => {
    last = tmp[word[0].toLowerCase()];
    for (var index = 1; index < word.length; index++) {
      if (last != tmp[word[index].toLowerCase()]) {
        return;
      }
      if (index === word.length - 1) {
        result.push(word);
      }
    }
  });
  return result;
};


var code344 = function (s) {
  //1.loop end to start
  //2.reduceRight
  return s.split("").reduceRight((previous, current) => {
    return previous + current;
  });

};

var code496 = function (findNums, nums) {
  let result = [];
  findNums.forEach((value, index) => {
    let tmp = -1;
    for (let i = index ; i < nums.length; i++) {
      if (value < nums[i]) {
        tmp = nums[i];
        break;
      }
    }
    result.push(tmp);
  });
  return result;
};

var code476 =function(num){
  console.log((1<<num),(1<<num).toString(2),((1<<num) -1 ),((1<<num) -1 ).toString(2));
  console.log('a=[%s],b=[%s],a & b =[%s],a | b =[%s],a ^ b =[%s],~a =[%s]',(num & 0).toString(2),num.toString(2),0..toString(2),(num ^ 0).toString(2),(num ^ 0).toString(2),(~ num).toString(2));
  return num ^ 0;
};
// console.log(code500(["Hello", "Alaska", "Dad", "Peace"]));
// console.log(code344("Hello"));
console.log(code476(5));
// console.log("----------------------------")

// test.inOrder(root)
// console.timeEnd("time")

// {
//         sll:()=>{
//         var t = SinglyLinkedList()
//         for (var i = 0; i < 10; i++) {
//             t.add(new LinkedNode(i + 21), i)
//         }
//             t.print()
//             t.remove(0)
//             t.print()
//         try {
//             t.modify(99, 100)
//         } catch(err) {
//             console.error(err)
//         }
//         t.print() 
//     },
//     dll:()=>{
//         var t = DoublyLikedList()
//             for (var i = 0; i < 10; i++) {
//                 t.add(new LinkedNode(i + 1), i)
//             }
//             t.print()
//             t.remove(0)
//             t.print()
//             try {
//                 t.modify(99, 0)
//             } catch(err) {
//                 console.error(err)
//             }
//             try {
//                 t.modify(99, 100)
//             } catch(err) {
//                 console.error(err)
//             }
//             t.print()
//     },
//     stack:()=>{
//         var t = new Stack(12)
//         var e = new Stack()

//         console.log(t.size())

//         for (var i = 0;i < 10;i++) {
//         t.push(i + 1)
//         }

//         console.log(t.size())

//         console.log(e.size())

//         for (var i = 0;i < 20;i++) {
//         var tmp=t.pop(i)
//         console.log(tmp?tmp:"is empty")
//         }

//         console.log(t.size())

//         console.log(e.size())
//     },
//     queue:()=>{
//         var t = new Queue(13)

//         for (var i = 0;i < 10;i++) {
//             t.enqueue(i + 1)
//         }

//         // console.log(t.size())

//         for (var i = 0;i < 3;i++) {
//             var tmp = t.dequeue(i)
//             console.log(tmp ? tmp : 'is empty')
//         }
//         try{
//             for (var i = 0;i < 5;i++) {
//                 t.enqueue(i + 1)
//             }
//         }catch(err){
//             console.log(err)
//         }
//     }
// }
