function minimumWaitingTime(queries) {
    queries.sort((a,b) => a-b) // [1,2,2,3,6]
    let sum = 0 // 9
    let tempSum = 0 // 8

    for (let i = 0; i < queries.length - 1; i++) {
        tempSum += queries[i] // 5+3
        sum += tempSum // 9+8
    }
    return sum;
}

let queries = [3,2,1,2,6]
// 63221 = 0+6=6 + 6+3=9 + 3+2=5 + 2+2=4 = 24 
// 12236 = 0+1=1 + 1+2=3 + 3+2=5 + 5+3=8 = 17
// sum = 1

// order 5,1,4
// 0+5 + 5+1 = 11
console.log(minimumWaitingTime(queries))