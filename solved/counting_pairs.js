function countPairs(numbers, k) {

    let count = 0
    let pairs = []
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let n1 = numbers[i]
            let n2 = numbers[j]
            let pairStr = JSON.stringify(n1) + JSON.stringify(n2)

            if (n1 + k === n2) {
                if (!pairs.includes(pairStr)) {
                    pairs.push(pairStr)
                    count += 1
                }
            }

        }
    }

    console.log(pairs)
    return count
}

let numbers = [24, 64, 66, 26, 32, 84]
let k = 2
console.log(countPairs(numbers, k))

// too slow