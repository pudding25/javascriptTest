var Stack = require('./stack')
var Queue = require('./queue')
var SinglyLinkedList = require('./singlyLinkList')
var DoublyLikedList=require('./doublyLinkList')
var LinkedNode = require('./linkedNode')

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
      for (var i = 0; i < 5; i++) {
        t.remove(0)
      }
      console.log("----------------------")
      t.print()
      try {
        t.modify(99, 100)
      } catch (err) {
        console.error('--->', err)
      }

      console.log("----------------------")

      t.print()
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

$(args[0])

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
