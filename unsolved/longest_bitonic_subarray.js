
function longestBitonicSubarray(arr) {
    let currLongest = 0;
    let tempLongest;

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        let nextNum = arr[i+1];

        if (nextNum > currNum) {
            tempLongest = calcLongest(i, arr);
            // console.log('---')
            if (tempLongest > currLongest) currLongest = tempLongest;
        }
    }

    return currLongest;
}

function calcLongest(startI, arr) {
    let counter = 1;
    let bool = false
    for (let i = startI; i < arr.length; i++) {
        let currNum = arr[i];
        let nextNum = arr[i+1];

        if (nextNum > currNum && !bool) {
            // console.log([currNum, nextNum], bool)

            counter++
        } else if (nextNum < currNum && !bool) {
            // console.log([currNum, nextNum], bool)

            counter++
            bool = true
        } else if (nextNum < currNum) {
            // console.log([currNum, nextNum], bool)

            counter++
        } else if (nextNum > currNum && bool) {
            return counter
        } else if (!nextNum) {
            return counter
        }
    }
}


// let arr = [10,8,9,15,12,6,7]
// let arr = [6,5,1,2,1,4,5]
// let arr = [6,4,1,2,3,6,9]
let arr = [5,9,7,6,2,1]
console.log(longestBitonicSubarray(arr))