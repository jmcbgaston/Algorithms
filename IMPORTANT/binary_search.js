function binarySearch(array, target) {
    return binarySearchHelper(array, target, 0, array.length-1);
}
function binarySearchHelper(array, target, left, right) {
    if (left > right) return -1
    const mid = Math.floor((left+right) / 2)
    const potMatch = array[mid]

    if (target === potMatch) {
        return mid
    } else if (target < potMatch) {
        return binarySearchHelper(array, target, left, mid-1)
    } else {
        return binarySearchHelper(array, target, mid+1, right)
    }
}

let array = [0,1,2,3,4,5,6]
let target = 4
console.log(binarySearch(array, target))