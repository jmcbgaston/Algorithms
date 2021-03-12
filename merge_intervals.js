var merge = function(intervals) { // [ [1,4] [2,3] ]
    
    let sortedIntervals = intervals.sort((a,b) => a[0] - b[0]) // 04 14
    
    let outputArr = [] // []
    let tempInt = [] // 
    
    for (let i = 0; i < sortedIntervals.length; i++) {
        let currInt = sortedIntervals[i] // [0,4]
        let nextInt = sortedIntervals[i+1] // [1,4]

        if (outputArr.length > 0 && currInt[0] < outputArr[outputArr.length-1][1]) {
            continue
        }

        if (nextInt && currInt[1] >= nextInt[0]) {
            if (currInt[1] <= nextInt[1]) {
                tempInt = [ currInt[0], nextInt[1] ] // [1,5]
                outputArr.push(tempInt)
            }
        } else {
            outputArr.push(currInt)
        }
    }
    
    return outputArr
};

let intervals = [ [1,3], [2,4] ]
console.log(merge(intervals))