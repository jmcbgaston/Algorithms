// Smallest Difference

// Naive approach
    // have a preset arr starting with the first ele's in each resArr = [-1, 26]
    // calculate the diff and save the answer; currDiff = 26
    // use nested for loop to compare first arr ele with every ele in second arr
    // for i for j
    // if diff < currDiff, update i, j
    // return resArr

// function smallestDifference(arrayOne, arrayTwo) {      
//     let resArr = [arrayOne[0], arrayTwo[0]]
//     let currDiff = Math.abs(resArr[0] - resArr[1])
//     for (let i = 0; i < arrayOne.length; i++) {
//         for (let j = 0; j < arrayTwo.length; j++) {
//             if (Math.abs(arrayOne[i] - arrayTwo[j]) < currDiff) {
//                 currDiff = Math.abs(arrayOne[i] - arrayTwo[j])
//                 resArr = [arrayOne[i], arrayTwo[j]]
//             }
//         }
//     }
//     return resArr
// }

// ----------------------------------------------------------------------------------------

// Optimal solution

function smallestDifference(arrayOne, arrayTwo) {      
    
    arrayOne.sort((a,b) => a - b);
    arrayTwo.sort((a,b) => a - b);
    
    let idxOne = 0;
    let idxTwo = 0;
    
    let smallest = Infinity;
    let current = Infinity;
    
    let smallestPair = [];

    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        
        let firstNum = arrayOne[idxOne];
        let secondNum = arrayTwo[idxTwo];
        
        if (firstNum < secondNum) {
            current = secondNum - firstNum;
            idxOne++;
        } else if (secondNum < firstNum) {
            current = firstNum - secondNum;
            idxTwo++;
        } else {
            return [firstNum, secondNum];
        }
        
        if (smallest > current) {
            smallest = current;
            smallestPair = [firstNum, secondNum];
        }
    }
    
    return smallestPair;
}

exports.smallestDifference = smallestDifference;