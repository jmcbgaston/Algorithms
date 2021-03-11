
function returnSmallestNum(arr) {
    
    let set = new Set()
    
    // O(n)
    arr.forEach(num => {
        if (num > 0) {
            set.add(num)
        }
    })
    
    // O(1) time
    for (let i = 1; i < Infinity; i++) {
        if (!set.has(i)) {
            return i
        }
    }
}

// O(n) time
// O(n) worst case space

let arr = [5, 7, 9, -1]

console.log(returnSmallestNum(arr))