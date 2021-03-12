function moves(arr) {
    
    let left = 0
    let right = arr.length - 1
    let moves = 0

    while (left < Math.floor(arr.length/2)) {
        let leftVal = arr[left]
        let rightVal = arr[right]

        if (even(leftVal) && odd(rightVal)) {
            left++
            right--

        } else if (odd(leftVal) && odd(rightVal)) {
            left++

        } else if (even(leftVal) && even(rightVal)) {
            right--

        } else if (odd(leftVal) && even(rightVal) && left !== right) {
            let savedL = leftVal
            let savedR = rightVal

            arr[left] = savedR
            arr[right] = savedL

            left++
            right--
            moves += 1
        }
    }

    return moves
}

function even(num) {
    return num%2 === 0
}
function odd(num) {
    return num%2 !== 0
}

let arr = [
    82921272,
    110219722,
    162495938,
    470311130,
    583170602,

    329963077,

    403414481,
    437623101,
    485366585,
    599466263,
    959094281]
console.log(moves(arr))