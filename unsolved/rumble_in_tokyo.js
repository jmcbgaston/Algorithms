function getMinimumBlows(height) {
    // Write your code here
}

function createLeft(height) {
    // let lefts = []

    // let startingPointer = 0
    // let endingPointer = 0
    // for (let i = 1; i < height.length; i++) {
    //     while (height[i-1] < height[i]) {
    //         endingPointer = i
    //     }
    // }
}

function createRight(height) {
    let reversed = []
    for (let i = height.length - 1; i >= 0; i--) {
        reversed.push(height[i])
    }
    return createdLeft(reversed)
}

let height = [1,2,3,4,3,2,3,2,1]
console.log(createRight(height))

// from left = [1234] [3] [23] [2] [1]
// from right = [123] [23] [4] [3] [2] [1]