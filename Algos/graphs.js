

// function dAMGraph(){
    //     this.vertList =[x,y,z]
    //     this.adjMap = [ [0,1,1],
    //                     [1,0,-1],
    //                     [-1,1,0]]
    
    // }
    
    // function dALGraph(){
        //     this.vertList =[x,y,z]
        //     this.adjList = [[y,z],[x],[y]]
        // }
function vertex(val){
    this.val = val
}

function dELGraph(){
    this.vertList = []
    this.edgeList = [] //[vert1,vert2,weight]

    this.addVertex = function(val){
        vert = new vertex(val)
        this.vertList.push(vert)
        return vert
    }


    this.removeVertex = function(vert){
        
        for(let i = 0; i < this.vertList.length; i++){
            if(this.vertList[i] == vert){
                [this.vertList[i],this.vertList[this.vertList.length -1]] = [this.vertList[this.vertList.length -1],this.vertList[i]]
                this.vertList.pop()

                for(let y = 0; y < this.edgeList.length; y++){
                    if (this.edgeList[y][0] == vert || this.edgeList[y][1] == vert){
                        [this.edgeList[y],this.edgeList[this.edgeList.length -1]] = [this.edgeList[this.edgeList.length -1],this.edgeList[y]]
                        this.edgeList.pop()
                    }
                }
                return true
            }
            return false
        }

    }

    this.getVertexValue = function(vert){
        return vert.val
    }

    this.setVertexValue = function(vert, val){
        vert.val = val
        return true
    }

    this.addEdge = function(vert1, vert2, val){
        this.edgeList.push([vert1, vert2, val])
    }

    this.removeEdges = function(vert){
        for(let i = 0; i < this.edgeList.length; i++){
            if(this.edgeList[i][0] == vert || this.edgeList[i][1] == vert){
                this.removeEdge(this.edgeList[i][0], this.edgeList[i][1])
                i--
            }
            
        }
    }

    this.removeEdge = function(vert1, vert2){
        for(let i = 0; i < this.edgeList.length; i++){
            
            if(this.edgeList[i][0] == vert1 && this.edgeList[i][1] == vert2){
                [this.edgeList[i],this.edgeList[this.edgeList.length -1]] = [this.edgeList[this.edgeList.length -1],this.edgeList[i]]
                this.edgeList.pop()
                return true
            }
        }
        return false
    }

    this.getEdgeValue = function(vert1,vert2){
        for(let i = 0; i < this.edgeList.length; i++){
            
            if(this.edgeList[i][0] == vert1 && this.edgeList[i][1] == vert2){
                return this.edgeList[i][2]
                
            }
        }
        return undefined
    }


    this.setEdgeValue = function(vert1, vert2, val){
        for(let i = 0; i < this.edgeList.length; i++){
            
            if(this.edgeList[i][0] == vert1 && this.edgeList[i][1] == vert2){
                
                this.edgeList[i][2] = val
                return true
            }
        }
        return false
    }

    this.adjacent = function(vert1, vert2){
        for(let i = 0; i < this.edgeList.length; i++){
            
            if( (this.edgeList[i][0] == vert1 && this.edgeList[i][1] == vert2) || (this.edgeList[i][0] == vert2 && this.edgeList[i][1] == vert1) ){
                return true
            }

        }
        return false
    }

    this.neighbors = function(vert){
        let neighbors = []
        for(let i = 0; i < this.edgeList.length; i++){
            
            if(this.edgeList[i][0] == vert || this.edgeList[i][1] == vert ){
                let found = false
                let target = this.edgeList[i][0] == vert ? this.edgeList[i][1] : this.edgeList[i][0]
                for(let y = 0; y<neighbors.length; y++){
                    if(neighbors[y] == target){
                        found = true
                        break
                    }
                }
                if(!found){
                    neighbors.push( target )
                }
            }
        }
        return neighbors
    }

}


graph = new dELGraph()
let e = graph.addVertex(89)
let a = graph.addVertex('apple')
let b = graph.addVertex(44)
let c = graph.addVertex(67)
graph.addEdge(e,a, 1)
graph.addEdge(e,b, 1)
graph.addEdge(c,b, 1)
graph.addEdge(a,b, 1)
console.log(graph.neighbors(a))


