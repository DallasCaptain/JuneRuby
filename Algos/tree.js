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


    this.size = function(){

        let runner = this.head

        return (1 + nsize(runner.left) + nsize(runner.right))


        function nsize(node){
            if(node == null){
                return 0
            }
            if(node.left == null && node.right == null){
                return 1
            }
            return(1+ nsize(node.left) + nsize(node.right))

        }

    }


    this.height = function(){
        let runner = this.head

        return (1 + Math.max(nheight(runner.left) , nheight(runner.right)))


        function nheight(node){
            if(node == null){
                return 0
            }
            if(node.left == null && node.right == null){
                return 1
            }
            lh = nheight(node.left)
            rh = nheight(node.right)
            if(lh >= rh){
                return (1 + lh)
            }
            return (1+rh)

        }
    }


}



tree = new bsTree()

tree.add(50)

tree.add(45)
tree.add(75)
tree.add(49)
tree.add(60)
tree.add(10)
tree.add(9)
console.log(tree.height())

