function SLNode(val){
    this.val = val
    this.next = null
    this.child = null
}

function SLList(){
    this.head = null

    this.reverse = function(){
        let runner = this.head
        let prev = null
        let after = runner.next

        while(runner != null){
            runner.next = prev
            prev = runner
            runner = after
            if( runner != null){
                after = runner.next
            }
        }
        this.head = prev
    }

    this.display = function(){
        let runner = this.head
        while(runner != null){
            console.log(runner.val)
            runner = runner.next
        }
    
    }

    this.flattenChildren = function(){
        let stack = []
        let runner = this.head
        while(runner != null || stack.length){
            if( runner.next == null && stack.length){
                runner.next = stack.pop()
            } 
            if (runner.child){
                stack.push(runner.next)
                runner.next = runner.child
            }
            
            
            runner = runner.next
        }



    }

    this.hasLoop = function(){
        return true
    }


    this.breakLoop = function(){
        let counter = 0
        if(this.hasLoop()){
            let runner = this.head.next
            let follower = this.head
            
            
            while(runner != follower){
                runner = runner.next.next
                follower = follower.next
                counter += 2
            }
            //console.log('counter is:',counter)

            runner = this.head.next
            follower = this.head
            found = false
            while( !found){

                for(let i = counter; i >= 0; i--){
                    runner = runner.next
                    if ( runner.next == follower){
                        runner.next = null
                        

                        found = true
                        break
                    }
                }
                

                follower = follower.next
                runner = follower.next
            }
            
            
        }
    }



}


let list = new SLList()
let node1 = new SLNode(1)
let node2 = new SLNode(2)
let node3 = new SLNode(3)
let node4 = new SLNode(4)
let node5 = new SLNode(5)
let node6 = new SLNode(6)

let node7 = new SLNode(7)
let node8 = new SLNode(8)
let node9 = new SLNode(9)

list.head = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
//LOOOPING
node6.next = node3





//list.display()
list.breakLoop()
list.display()
console.log('*********')
// list.flattenChildren()
// list.reverse()
//list.display()



function DlNode(val){
    this.val = val
    this.next = null
    this.prev = null
}

function DlList(){
    this.head = null
    this.tail = null

    this.push= function(){
        
    }

    this.pop()

    this.front()

    this.back()

    this.contains()

    this.size()
}