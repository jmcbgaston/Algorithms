function minStart(arr) {
  for (let n = 1; n < Infinity; n++) {
    if (runTest(arr, n)) {
      return n
    }
  }
}

function runTest(arr, testNum) {
  let runningSum = testNum
  let bool = true
  arr.forEach(num => {
    runningSum += num
    if (runningSum < 1) {
      bool = false
    }
  })
  return bool
}



let arr = [-4, 3, 2, 1]
console.log(minStart(arr))