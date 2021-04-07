function productSum(array, multi = 1) {
    let sum = 0
    for (const ele of array) {
        if (Array.isArray(ele)) {
            sum += productSum(ele, multi+1)
        } else {
            sum += ele
        }
    }
    return multi * sum
}

let array = [5,2,[7,-1],3,[6,[-13,8],4]]
// 5 + 2 + 2*[6]=12 + 3 + 
console.log(productSum(array))
// 