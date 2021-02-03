function minSetSize(array) {
    // arr.length/2
    let minSize = Math.ceil(arr.length/2) // 5

    // go through an array and storing the elements into a hash with values equivalent to their occurrences
    //[11112222] = length 8 | half is 4
    //{1: 4, 2: 4}

    Let hashMap = [ [3, 4] [5, 3] [2, 2] [7, 1] ]
    Let tempArr = []
    Let counter = 1

    for (let i = 1; i < array.length; i++) {
        Let currEle = array[i] 
        Let prevEle = array[i-1]

    While (currEle === prevEle) {
        Counter += 1
    }

    tempArr = [prevEle, counter]
    hashMap.push(tempArr)
    }

    // In the hash, we want to find a collection of elements values that are closest to the minSize

    // Return value is the num of keys

    return findLowestAmtOfKeys(hashMap, minSize)
}

function findLowestAmtOfKeys(hashMap, minSize) {
    
}
