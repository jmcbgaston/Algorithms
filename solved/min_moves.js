function minimumMoves(arr1, arr2) {
    
    let i = 0
    let moves = 0
    arr1.forEach(num1 => {
        let num2 = arr2[i]
        moves += calculateDiff(num1, num2)
        i++
    })
    return moves

}

function calculateDiff(num1, num2) {
    let n1 = JSON.stringify(num1).split('')
    let n2 = JSON.stringify(num2).split('')
    
    let i = 0
    let sum = 0
    n1.forEach(ele => {
        let p1 = parseInt(ele)
        let p2 = parseInt(n2[i])
        let temp = p2 - p1
        sum += Math.abs(temp)
        i++
    })

    return sum
}

// let num1 = 123
// let num2 = 321
// console.log(calculateDiff(num1, num2))

let arr1 = [123, 543]
let arr2 = [321, 279]
console.log(minimumMoves(arr1, arr2))