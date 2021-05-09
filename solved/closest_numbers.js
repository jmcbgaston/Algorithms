
function closestNumbers(numbers) {
  numbers.sort((a,b) => a-b)
  let diffs = {}
  
  for (let i = 1; i < numbers.length; i++) {
      let firstNum = numbers[i-1];
      let secNum = numbers[i];
      let absDiff = Math.abs(firstNum - secNum);
      
      if (diffs[absDiff]) {
          diffs[absDiff].push([firstNum, secNum]); 
      } else {
          diffs[absDiff] = []
          diffs[absDiff].push([firstNum, secNum]); 
      }
      
  }
  
  let answer = Object.values(diffs)[0];
  answer.forEach(ele => console.log(ele[0], ele[1]));
}

let input = [-4, 2, 1, -1, 7, 3];
console.log(closestNumbers(input));