// Dynamic Programming by Alvin
// - taking problems that have duplicated work and optimizing them

// MEMOIZATION

// time: O(2^n)
// space: O(n) - being height

// nthFib = (n) => {
//   if (n <= 2) return 1;
//   return nthFib(n-1) + nthFib(n-2);
// } 

// time: O(n) 
// space: O(n) - being height

nthFib = (n, memo={}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  
  memo[n] = nthFib(n-1) + nthFib(n-2);
  return memo[n];
} 
  
// console.log(nthFib(7))
// 1: 1
// 2: 1 1
// 3: 1 1 2
// 4: 1 1 2 3
// 5: 1 1 2 3 5
// 6: 1 1 2 3 5 8
// 7: 1 1 2 3 5 8 13

// how many way can you travel from top left to bottom right of m x n grid
// time O(2^n+m)
// space O(n+m)
// gridtaveler = (m,n) => {
//   if (m === 1 && n === 1) return 1;
//   if (m === 0 || n === 0) return 0;
//   return gridtaveler(m-1, n) + gridtaveler(m, n-1);
// }

gridtaveler = (m,n, memo={}) => {
  const key = m + "," + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridtaveler(m-1, n, memo) + gridtaveler(m, n-1, memo);
  return memo[key];
}

// console.log(gridtaveler(0,1)); // 0
// console.log(gridtaveler(1,0)); // 0
// console.log(gridtaveler(1,1)); // 1
// console.log(gridtaveler(1,2)); // 1
// console.log(gridtaveler(2,1)); // 1
console.log(gridtaveler(2,2)); // 2
//            2 2
//
//      1 2         2 1
//  
//   0 1   1 1   1 1   2 0 
//    0     1     1      0
// 0+1+1+0 = 2
// console.log(gridtaveler(2,3)); // 3
// console.log(gridtaveler(3,2)); // 3
// console.log(gridtaveler(3,3)); // 6
// console.log(gridtaveler(18,18)); // 2333606220

// DECISION PROBLEM
// can it be done?

// time: O(n^m)
// space: O(m)
// canSum = (targetSum, numbers) => {
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     if (canSum(remainder, numbers) === true) {
//       return true;
//     };
//   }

//   return false;
// }

// time: O(m*n)
// space: O(m)
canSum = (targetSum, numbers, memo={}) => {
  if (targetSum in memo) return memo[targetSum]; // memo fetch
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true; // store returnable in memo
      return true;
    };
  }

  memo[targetSum] = false; // store returnable in memo
  return false;
}

// console.log(canSum(7, [2,3])); // true
// console.log(canSum(7, [5,3,4,7])); // true
// console.log(canSum(7, [2,4])); // false
// console.log(canSum(8, [2,3,5])); // true
// console.log(canSum(300, [7,14])); // false

// COMBINATORIC PROBLEM
// how will you do it?

// time: O(n^m * m)
// space: O(m)
// howSum = (targetSum, numbers) => {
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remResult = howSum(remainder, numbers);
//     if (remResult) {
//       return [...remResult, num];
//     }
//   }

//   return null
// }

// time: O(n*m*m) = O(n*m^2)
// space: O(m*m) = O(m^2)
howSum = (targetSum, numbers, memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remResult = howSum(remainder, numbers, memo);
    if (remResult) {
      memo[targetSum] = [...remResult, num]
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null
}

// console.log(howSum(0, [1,2,3])) // []
// console.log(howSum(7, [2,4])) // null 
// console.log(howSum(7, [5,3,4,7])) // [4,3]
// console.log(howSum(8, [2,3,5])) // [2,2,2,2]
// console.log(howSum(300, [7,14])) // [2,2,2,2]

// OPTIMIZATION PROBLEM
// What is the best way to do it?

// return shortest combo of nums that sum to target
// time: O(n^m * m)
// space: O(m^2)
// bestSum = (targetSum, numbers) => {
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   let shortCombo = null;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remCombo = bestSum(remainder, numbers);
//     if (remCombo) {
//       const combo = [...remCombo, num]
//       if (!shortCombo || combo.length < shortCombo.length) {
//         shortCombo = combo;
//       }
//     }
//   }

//   return shortCombo;
// }

// time: O(m*n*m) = O(m^2 * n)
// space: O(m^2)
bestSum = (targetSum, numbers, memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortCombo = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remCombo = bestSum(remainder, numbers, memo);
    if (remCombo) {
      const combo = [...remCombo, num]
      if (!shortCombo || combo.length < shortCombo.length) {
        shortCombo = combo;
        memo[targetSum] = shortCombo
      }
    }
  }

  return memo[targetSum];
}

// console.log(bestSum(7, [5,3,4,7])) // [7]
// console.log(bestSum(8, [2,3,5])) // [5,3]
// console.log(bestSum(8, [1,4,5])) // [4,4]
// console.log(bestSum(100, [1,2,5,25])) // [25,25,25,25]


// Can I create the target string with the given wordbank?
// time: O(n^m * m) branch to height factor
// space: O(m^2)
// canConstruct = (target, wordBank) => {
//   if (target === '') return true;

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       // target = 'potato' | suffix = 'potato',slice('pot' => 3) => 'ato'
//       if (canConstruct(suffix, wordBank)) return true; 
//     }
//   }

//   return false;
// }

// m = target length
// n = wordbank length
// time: O(n * m^2) branch to height factor
// space: O(m^2)
canConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      // target = 'potato' | suffix = 'potato',slice('pot' => 3) => 'ato'
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true
      }
    }
  }

  memo[target] = false;
  return false;
}

// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
// //                abcdef
// //       -ab /      | -abc  \ -abcd
// //     [cdef]     [def]      [ef] => F
// //       | -cd      | -def
// //      [ef] => F [''] => T

// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
// //                skateboard
// //       -ska /             \ -sk
// //   [teboard]              [ateboard]
// //       | -t                    | - ate
// //      [eboard] => F         [board]
// //                        -bo /     \ -boar
// //                         [ard]    [d]
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['eee', 'eeeeeeeee', 'eeeee', 'eeeeeeeef', 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 'eeeeeeeeeee', 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'])) // false

// m = target length
// n = wordbank length
// time: O(n^m * m) branch to height factor
// space: O(m^2)
// countConstruct = (target, wordBank) => {
//   if (target === '') return 1;

//   let totalCount = 0;

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
//       totalCount += numWaysForRest;
//     }
//   }

//   return totalCount;
// }

// m = target length
// n = wordbank length
// time: O(n * m^2) branch to height factor
// space: O(m^2)
countConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
      totalCount += numWaysForRest;
    }
  }

  memo[target] = totalCount
  return totalCount;
}

// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
// //                abcdef
// //       -ab /      | -abc  \ -abcd
// //     [cdef]     [def]      [ef] => 0
// //       | -cd      | -def
// //      [ef] => 0 [''] => 1
// console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['eee', 'eeeeeeeeef', 'eeeee', 'eeeeeeee', 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 'eeeeeeeeeee', 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'])) // false

// m = target length
// n = wordbank length
// time: O(n^m)
// space: O(m)
allConstruct = (target, wordBank) => {
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank); // array of all the suffix ways to build the target
      const targetWays = suffixWays.map(way => [ word, ...way] );
      result.push(...targetWays);
    }
  }

  return result;
}

// m = target length
// n = wordbank length
// time: O(n^m)
// space: O(m)
// allConstruct = (target, wordBank, memo={}) => {
//   if (target in memo) return memo[target];
//   if (target === '') return [[]];

//   const result = [];

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       const suffixWays = allConstruct(suffix, wordBank, memo); // array of all the suffix ways to build the target
//       const targetWays = suffixWays.map(way => [ word, ...way] );
//       result.push(...targetWays);
//     }
//   }

//   memo[target] = result;
//   return result;
// }

// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])) // true
// //                          abcdef
// //          -ab     /         | -abc     \ -abcd
// //        [cdef]            [def]         [ef] => 0
// //   -cd /    \ -c            | -def        \ -ef
// //    [ef]     [def]        [''] => [[]]    [''] => [[]]
// // -ef /        \ -def         
// //  [''] => [[]] [''] => [[]]   
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// // {
//   //  [purp, le]
//   //  [p, ur, p, le]
//   // }
// console.log(allConstruct('hello', ['cat', 'dog', 'mouse'])) // [] - no words can make words = []
// console.log(allConstruct('', ['cat', 'dog', 'mouse'])) // [ [] ] - if it is possible to create the string, then we need to return an array - even if that's an empty string
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['eee', 'eeee', 'eeeee']))