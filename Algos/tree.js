function bstNode(val){
    this.val = val
    this.left = null
    this.right = null
}

function bsTree(){
    this.head = null

    this.add = function(val){
        if (this.head == null){
            this.head = new bstNode(val)
            return this
        }

        let runner = this.head
        while(true){
            if (val < runner.val){
                if(!runner.left){
                    runner.left = new bstNode(val)
                    break
                }
                runner = runner.left
                continue
            }
            if (val > runner.val){
                if(!runner.right){
                    runner.right = new bstNode(val)
                    break
                }
                runner = runner.right
                continue
            }

        }
    }

    this.contains = function(val){
        let runner = this.head
        while (runner!=null){
            if(runner.val == val){
                return true
            }
            if (val < runner.val){
            
                runner = runner.left
                continue
            }
            if (val > runner.val){
            
                runner = runner.right
                continue
            }
            
        }
        return false
    }

    this.min = function(){
        let runner = this.head
        while(runner.left != null){
            runner = runner.left
        }
        return (runner.val)
    }


}



tree = new bsTree()

tree.add(50)

tree.add(45)
tree.add(75)
tree.add(49)
tree.add(60)
tree.add(10)
console.log(tree.min())

