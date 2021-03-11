function sortedSquaredArray(array) {
    return array.map(ele => ele*ele).sort((a,b) => a-b);
}

let array = [1, 2, 3]
console.log(sortedSquaredArray(array))