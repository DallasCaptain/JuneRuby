function SLNode(val){
    this.val = val
    this.next = null
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
}


let list = new SLList()
let node1 = new SLNode(1)
let node2 = new SLNode(2)
let node3 = new SLNode(3)

list.head = node1
node1.next = node2
node2.next = node3

list.display()
console.log('*********')
list.reverse()
list.display()

