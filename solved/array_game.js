function countMoves(numbers) {
  let arrSum = 0;
  let smallest = numbers[0];
  let arrSize = numbers.length;

  console.log(`arrSum = ${arrSum}`)
  console.log(`smallest = ${smallest}`)
  console.log(`arrSize = ${arrSize}`)
  
  for (let i = 0; i < numbers.length; i++) {
    let temp = numbers[i];
    console.log(`temp = ${temp}`)
    if (temp < smallest) {
      smallest = temp;
    }
    console.log(`new smallest = ${smallest}`)
    arrSum += temp;
    console.log(`new arrSum = ${arrSum}`)
    
    
    console.log(`------------------`)
  }
  
  let minOperation = arrSum-arrSize*smallest;
  console.log(`minOperation = ${arrSum} - ${arrSize} * ${smallest}`)
  return minOperation
}

console.log(countMoves([3,4,6,6,3]))