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

    this.contains = function(val,rn = false){
        let runner = this.head
        while (runner!=null){
            if(runner.val == val){
                if(rn){
                    return runner
                }
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

    this.all = function(val){
        let runner = this.head
        console.log(runner.val)

        return (1 + nsize(runner.left) + nsize(runner.right))


        function nsize(node){
            if(node == null){
                return 0
            }
            if(node.left == null && node.right == null){
                console.log(node.val)
                return 1
            }
            console.log(node.val)
            return(1+ nsize(node.left) + nsize(node.right))

        }
    }



    this.remove = function(val){
        
        let runner = this.head
        console.log(this.head.val,val)
        if(this.head.val == val){

            let lc = this.head.left
            let rc = this.head.right
            this.head = null
            
            storeAdd(this, lc)
            
            storeAdd(this, rc)
            return this
        }
        while (runner!=null){
            if(runner.left.val == val){

                    let lc = runner.left.left
                    let rc = runner.left.right
                    runner.left = null
                    
                    storeAdd(this, lc)
                    
                    storeAdd(this, rc)
                    return this
                
                
            }
            if(runner.right.val == val){
                    let lc = runner.right.left
                    let rc = runner.right.right
                    runner.right = null
                    storeAdd(this, lc)
                    storeAdd(this, rc)
                    return this
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
    }

    function storeAdd(list, node){
        if (node == null){
            return
        }
        let lc = node.left
        let rc = node.right
        
        list.add(node.val)
        if(lc){
            storeAdd(list,lc)
        }
        if(rc){
            storeAdd(list,rc)
        }
    }


    this.isComplete = function(lastchild = false){
        let row = [this.head]
        let children = []
        let runner 
        while(row.length){
            runner = row.shift()

            if(runner.left){
                children.push(runner.left)
            }
            if(runner.right){
                children.push(runner.right)
            }
            if (lastchild && (runner.right || runner.left)){
                return false
            }
            if (!runner.right || !runner.left){
                lastchild = true
            }
            if (row.length == 0){
                row = children
                children = []
            }
        }
        return true


    }

}



tree = new bsTree()

tree.add(50)

tree.add(45)
tree.add(75)
// tree.add(49)
tree.add(60)
tree.add(47)
 tree.add(9)



console.log("*********************")
tree.all()
console.log(tree.isComplete())



/*
tree = new bsTree()
n1 = new bsNode(56)
tree.head = n1

n2 = new bsNode(76)
n3 = new bsNode(78)
n1.left = n2
n1.right = n3


*/
