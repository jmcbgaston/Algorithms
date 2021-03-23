function chooseFlask(requirements, flaskTypes, markings) {
    
    // Sami's

    requirements = requirements.sort((a,b) => a-b)
    let minWaste = [Infinity, -1]
    let i = 0
    let j = 0
    while (i < flaskTypes) {
        let curraWasteSum = 0
        let reqNum = 0
        let currFlaskNum = i

        while (reqNum < requirements.length && j < markings.length && markings[j][0] === currFlaskNum) {
            if (requirements[reqNum] > markings[j][1]) {
                j++
            } else {
                curraWasteSum += markings[j][1] - requirements[reqNum]
                reqNum++
            }
        }
        i++

        while (j < markings.length && markings[j][0] === currFlaskNum) { j++ }
        if (reqNum !== requirements.length) continue

        if (curraWasteSum < minWaste[0]) {
            minWaste[0] = curraWasteSum
            minWaste[1] = currFlaskNum
        }
    }

    return minWaste[1]

}

let requirements = [4,6,6,7]
// let requirements = [4,6]
let flaskTypes = 3 // 3 types
// let flaskTypes = 2
let markings = [
    [0,3] , [0,5] , [0,7] , // t1 , m357 | 3
    [1,6] , [1,8] , [1,9] , // t2 , m689 | 3
    [2,3] , [2,5] , [2,6]   // t3 , m356 | 
]
// let markings = [
//     [0,5] , [0,7] , [0,10] , // t1 , m5,7,10 | 5
//     [1,4] , [1,10]   // t2 , m4,10 | 4
// ]

console.log(chooseFlask(requirements, flaskTypes, markings))
