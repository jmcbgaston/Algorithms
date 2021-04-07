
function degreeOfArray(arr) {
    // Write your code here

    let importantNums = findNums(arr)

    let tempSubArr = []
    let smallestLength = Infinity
    let tempLength

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (importantNums.has(num)) {
            
        }
    }

    return smallestLength
}

function findNums(arr) {
    let hash = {}

    arr.forEach(num => {
        if (hash[num]) {
            hash[num] += 1
        } else {
            hash[num] = 1
        }
    })

    let sorted = Object.entries(hash).sort((a,b) => b[1] - a[1])
    let keepers = new Map()
    let currBest = sorted[0][1]
    
    sorted.forEach(subs => {
        if (subs[1] === currBest) {
            keepers.set(parseInt(subs[0]), subs[1])
        }
    })

    return keepers
}

let arr = [1,2,1,3,2]
console.log(findNums(arr))

// degree of arr
// length of shortest subarr that shares that degree