arr=[
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1]
]

targ = [
    [1,1],
    [1,2]
]




function mSearch(arr,targ){
    for(let i = 0; i<arr.length - targ.length +1; i++){
        for(let j = 0; j < arr[i].length - targ[0].length +1; j++){
            if(arr[i][j] == targ[0][0]){
                if(mMatch(arr,targ,i,j)){
                    //return true
                    return [i,j]
                }
            }
        }
    }
    //return false
    return [-1,-1]
}

function mMatch(arr,targ,i,j){
    console.log('attempting match at: ',i,j)
    for(let y = 0; y < targ.length; y++){
        for(let x = 0; x < targ[y].length; x++){
            if(targ[y][x] != arr[y+i][x+j]){
                return false
            }
        }
    }
    return true
}

console.log(mSearch(arr,targ))