function TrieSet(){
    this.root = null

    this.insert = function(word){
        //loop over the letters of the word
        //check if each node has children for
        //those letters

        runner = this.root
        pword = ""
        // console.log("inserting: ",word )
        for(let i = 0; i < word.length; i++){
            pword += word[i]
            childPresent = false
            // console.log(i)
            for(let y = 0; y < runner.children.length; y++){
                if(pword == runner.children[y].node){
                    runner = runner.children[y]
                    childPresent = true
                    break
                }
            }
            if(!childPresent){
                // console.log(runner)
                runner.children.push(new TrieNode(pword))
                runner = runner.children[runner.children.length-1]
                // console.log(runner)
            }
        }
        runner.isWord = true
    }

    this.contains = function(word){
        

        runner = this.root
        pword = ""
        console.log("contains?: ",word )
        for(let i = 0; i < word.length; i++){
            pword += word[i]
            childPresent = false
            // console.log(i)
            for(let y = 0; y < runner.children.length; y++){
                if(pword == runner.children[y].node){
                    runner = runner.children[y]
                    childPresent = true
                    break
                }
            }
            if(!childPresent){
                console.log(runner)
                return false
            }
        }
        return true
    }

    this.autocomplete = function(word){
        let words = []

        runner = this.root
        pword =""
        for(let i = 0; i < word.length; i++){
            pword += word[i]
            childPresent = false
            for(let y = 0; y < runner.children.length; y++){
                if(pword == runner.children[y].node){
                    runner = runner.children[y]
                    childPresent = true
                    break
                }
            }
            if(!childPresent){
                // console.log(runner)
                return words
            }
        }
        // console.log(runner)
        let targets = runner.children
       
        // console.log(targets)
        while(targets.length > 0){
            if(runner.isWord){
                words.push(runner.node)
            }
            // words.push(runner.node)
            runner = targets.pop()
            // console.log(runner)
            for(let z = 0; z < runner.children.length; z++){
                targets.push(runner.children[z])
            }


        }
        if(runner.isWord){
            words.push(runner.node)
        }
        return words
    }
}

function TrieNode(val=null){
    this.node = val
    this.isWord = false
    this.children = []
}




ts = new TrieSet()
head = new TrieNode()
ts.root = head
ts.insert("car")
ts.insert("cart")
ts.insert("caravan")
ts.insert("carpet")
ts.insert("cartography")
ts.insert('bee')
ts.insert('between')
ts.insert('zebra')
console.log(ts.autocomplete('c'))


