function maxProfit(costPerCut, salePrice, lengths) {

    // set up base point
    let maxProfit = 0

    // get largest length
    let max = Math.max(...lengths)

    let test;
    for (let i = 1; i <= max; i++) {

        // run helper to get max profit
        test = helper(i, costPerCut, salePrice, lengths)

        // update max profit with result
        maxProfit = Math.max(maxProfit, test)
    }
    return maxProfit
}


function helper(currLength, costPerCut, salePrice, lengths) {

    // count total rods
    let totalUniformRods = 0;

    // count total cuts for cost (price*rods - costs)
    let totalCuts = 0

    // itterate through lengths
    for (let i = 0; i < lengths.length; i++) {  //[20, 59, 110] - currLength =2

        // instantiate ele
        let currRod = lengths[i]; //20

        if (currLength > currRod) continue

        let tempCut = 0
        let tempTotalUniformRods = 0

        // 20 % 1
        if (currRod % currLength === 0) {

            // 1
            tempCut = Math.floor(currRod / currLength) - 1

        } else {

            tempCut = Math.floor(currRod / currLength)
        }

        // 2
        tempTotalUniformRods = Math.floor(currRod / currLength)

        // 2*10*10 . 200  - 1*30 . 30
        if (tempTotalUniformRods * currLength * salePrice - tempCut * costPerCut > 0) {
            totalCuts += tempCut
            totalUniformRods += tempTotalUniformRods
        }
    }

    return totalUniformRods * currLength * salePrice - totalCuts * costPerCut
}

const costPerCut = 30
const salePrice = 10
const lengths = [30, 100, 120]

console.log(maxProfit(costPerCut, salePrice, lengths))