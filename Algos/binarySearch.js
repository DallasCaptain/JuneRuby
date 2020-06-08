arr = [1,2,3,4,5,6,7,8,9,10]
arr2 = [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


function binSearch(arr,target){
    let start = 0
    let end = arr.length - 1
    while(true){
        let i = Math.floor(start + (end - start)/2)
        if (arr[i] == target){
            return true
        }
        else{
            (arr[i] < target) ? start = i+1 : end = i - 1
            console.log(start,end,i)
        }
        if (start == end && arr[start] != target){
            return false
        }
    }
}

//console.log(binSearch(arr2,3))


function recBin(arr,target,start=0,end = null){
    console.log(start,end)
    if (end == null){
        end = arr.length-1
    }
    mid = Math.floor(start + (end - start)/2)
    if (arr[mid] == target){
        return true
    }
    if(start == end){
        return false
    }
    return (arr[mid] > target) ? recBin(arr,target,start,mid-1) : recBin(arr,target,mid+1,end)

}

console.log(recBin(arr2,9))