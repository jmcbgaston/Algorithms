
function returnSmallestNum(arr) {
    
    let set = new Set()
    
    arr.forEach(num => {
        if (num > 0) {
            set.add(num)
        }
    })
    
    for (let i = 1; i < Infinity; i++) {
        if (!set.has(i)) {
            return i
        }
    }
}

let arr = [5, 7, 9, -1]

console.log(returnSmallestNum(arr))