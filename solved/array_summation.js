function arraySum(inputs, tests) {
  let sortedInputs = inputs.sort((a,b) => a-b); // -1 3 8
  let sortedTests = tests.sort((a,b) => a-b); // 2 3 7

  for(let i = 0; i < inputs.length-1; i++) {
    for (let j = 1; j < inputs.length; j++) {

      let pairSum = sortedInputs[i] + sortedInputs[j];

      for (let k = 0; k < tests.length; k++) {

        if (pairSum === sortedTests[k]) {
          return true;
        } else if (pairSum > sortedTests[k]) {
          continue
        } else if (pairSum < sortedTests) {
          break
        }

      }
    }
  }

  return false;
}

console.log(arraySum([22, 66, 72, 85, 94], [72, 34, 85]))