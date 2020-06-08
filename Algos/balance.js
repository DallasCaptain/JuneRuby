// //balance point

// [2,7,9,5,7,4,5] => false

// [1,2,3,4,10] => true


// //balance index

// [5,5,2,5,5] => 2

// [1,2,3,4,567,10] => 4

[1,3,1,1,1,1,1,1,1,1,9,1,1,1,1,-10,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1]




function balancePoint(arr) {
    for (i = 0; i < arr.length; i++) {
        leftSide = 0
        rightSide = 0
        for (x = 0; x <= i; x++) {
            leftSide += arr[x]
        }
        for (y = i+1; y < arr.length; y++) {
            rightSide += arr[y]
        }
        if (leftSide == rightSide) {
            return True
        }
    }
    return False
    
}
