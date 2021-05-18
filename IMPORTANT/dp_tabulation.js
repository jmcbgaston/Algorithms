// Dynamic Programming by Alvin
// - taking problems that have duplicated work and optimizing them

// TABULATION
// - visualize the problem as a table
// - size the table based on the inputs
// - initialize the table with default values
// - seed the trivial answer into the table
// - iterate through the table
// - fill further positions based on the current position

// time: O(n) 
// space: O(n)
nthFib = (n) => {
  const table = new Array(n+1).fill(0);
  table[1] = 1; // 0: 0, 1: 1 => gives us a base case

  for (let i = 0; i <= n; i++) {
    table[i+1] += table[i];
    table[i+2] += table[i];
  } 

  return table[n];
}
  
// console.log(nthFib(5))
// console.log(nthFib(6))
// console.log(nthFib(7))
// console.log(nthFib(8))
// 0: 0
// 1: 0 1
// 2: 0 1 1
// 3: 0 1 1 2
// 4: 0 1 1 2 3
// 5: 0 1 1 2 3 5
// 6: 0 1 1 2 3 5 8
// 7: 0 1 1 2 3 5 8 13
// 8: 0 1 1 2 3 5 8 13 21

// how many way can you travel from top left to bottom right of m x n grid
// time: O(m*n)
// space: O(m*n)
gridtaveler = (m,n) => {
  const table = Array(m+1)
    .fill()
    .map(() => Array(n+1).fill(0));

  if (m > 0 && n > 0) {
    table[1][1] = 1
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];

      // as long as we are in the bounds of our grid,
      if (j+1 <= n) table[i][j+1] += current; // add curr to right
      if (i+1 <= m) table[i+1][j] += current; // add curr to down
    }
  }

  return table[m][n];
}

// console.log(gridtaveler(0,0)); // 0 // use this as a base
// console.log(gridtaveler(1,1)); // 1 // use this as a base
// console.log(gridtaveler(2,2)); // 2
// console.log(gridtaveler(2,3)); // 3 
// console.log(gridtaveler(3,2)); // 3
// console.log(gridtaveler(3,3)); // 6
// console.log(gridtaveler(18,18)); // 2333606220
// 2x2
//      0   1   2   3
// 
// 0    0   0   0   0
// 1    0   1   0   0
// 2    0   0   0   0
// 3    0   0   0   0
//

//      0   1   2   3
//
// 0    0 r 0   0   0
//      d
// 1    0   1   0   0
// 2    0   0   0   0
// 3    0   0   0   0
//

//      0   1   2   3
//
// 0    0   0 r 0   0
//          d
// 1    0   1   0   0
// 2    0   0   0   0
// 3    0   0   0   0
//

//      0   1   2   3
//
// 0    0   0   0 r 0
//              d
// 1    0   1   0   0
// 2    0   0   0   0
// 3    0   0   0   0
//

//      0   1   2   3
//
// 0    0   0   0 r 0
//              d
// 1    0   1   0   0
// 2    0   0   0   0
// 3    0   0   0   0
//

//      0   1   2   3
//
// 0    0   0   0   0
//                  d
// 1    0   1   0   0
// 2    0   0   0   0
// 3    0   0   0   0
//

//      0   1   2   3
//
// 0    0   0   0   0
// 1    0 r 1   0   0
//      d
// 2    0   0   0   0
// 3    0   0   0   0
//

//      0   1   2   3
//
// 0    0   0   0   0
// 1    0   1 r 1   0
//          d
// 2    0   1   0   0
// 3    0   0   0   0
//

//      0   1   2   3
//
// 0    0   0   0   0
// 1    0   1   1 r 1
//              d
// 2    0   1   1   0
// 3    0   0   0   0
//

// etc.............

//      0   1   2   3
//
// 0    0   0   0   0
// 1    0   1   1   1     
// 2    0   1   2   3
// 3    0   1   3   6

// console.log(gridtaveler(0,0)); // 0 // use this as a base
// console.log(gridtaveler(0,1)); // 0
// console.log(gridtaveler(1,0)); // 0
// console.log(gridtaveler(1,2)); // 1
// console.log(gridtaveler(1,1)); // 1 // use this as a base
// console.log(gridtaveler(2,1)); // 1
// console.log(gridtaveler(2,2)); // 2
// console.log(gridtaveler(2,3)); // 3
// console.log(gridtaveler(3,2)); // 3
// console.log(gridtaveler(3,3)); // 6
// console.log(gridtaveler(18,18)); // 6

// DECISION PROBLEM

// m = target sum
// n = numbers array
// time: O(m*n)
// space: O(mm)
canSum = (targetSum, numbers) => {
  const table = Array(targetSum+1).fill(false);
  table[0] = true; // base case

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];
}

// console.log(canSum(0, [2,3])); // true
// console.log(canSum(7, [2,3])); // true
// console.log(canSum(7, [5,3,4,7])); // true
// [T] [F] [F] [F] [F] [F] [F] [F] => 0
// [T] [F] [F] [F] [F] [T] [F] [F] => 5
// [T] [F] [F] [T] [F] [T] [F] [F] => 3
// [T] [F] [F] [T] [T] [T] [F] [F] => 4

// [T] [F] [F] [T] [T] [T] [F] [F]
//  |           |   |   |
// [T] [F] [F] [T] [T] [T] [F] [F]
//      |           |   |   |
// [T] [F] [F] [T] [T] [T] [F] [F]
//          |           |   |   |
// [T] [F] [F] [T] [T] [T] [T] [T]
//              |           |   |   |x
// [T] [F] [F] [T] [T] [T] [T] [T]
//                  |           |   |x   |x
// [T] [F] [F] [T] [T] [T] [T] [T]
//                      |           |x   |x   |x
// [T] [F] [F] [T] [T] [T] [T] [T]
//                          |           |x   |x   |x
// [T] [F] [F] [T] [T] [T] [T] [T]
//                              |           |x   |x   |x
// console.log(canSum(7, [2,4])); // false
// console.log(canSum(8, [2,3,5])); // true
// console.log(canSum(300, [7,14])); // false

// COMBINATORIC PROBLEM
// how will you do it?

// time: O(m^2*n)
// space: O(m*n) 
howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);  
  table[0] = []

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i+num] = [ ...table[i], num ]
      }
    }
  }

  // console.log(table)
  return table[targetSum]
}

// console.log(howSum(7, [2,3])) // null 
// console.log(howSum(0, [1,2,3])) // []
// console.log(howSum(7, [2,4])) // null 
// console.log(howSum(7, [5,3,4,7])) // [4,3]
// [ [] ] [null] [null] [null] [null] [null] [null] [null] => 0
// [ [] ] [null] [null] [null] [null] [ [5] ] [null] [null] => 5
// [ [] ] [null] [null] [ [3] ] [null] [ [5] ] [null] [null] => 3
// [ [] ] [null] [null] [ [3] ] [ [4] ] [ [5] ] [null] [null] => 4

// [ [] ] [null] [null] [ [3] ] [ [4] ] [ [5] ] [null] [null]
//   |                     |       |       |
// [ [] ] [null] [null] [ [3] ] [ [4] ] [ [5] ] [null] [null]
//          |                      |       |      |
// [ [] ] [null] [null] [ [3] ] [ [4] ] [ [5] ] [null] [null]
//                 |                       |      |      |
// [ [] ] [null] [null] [ [3] ] [ [4] ] [ [5] ] [ [3,3] ] [ [3,4] ]
//                         |3                       |3        |4      |5     spaces ahead
// [ [] ] [null] [null] [ [3] ] [ [4] ] [ [5] ] [ [3,3] ] [ [4,3] ]
//                                 |4                        |3        |4      |5      spaces ahead
// console.log(howSum(8, [2,3,5])) // [2,2,2,2]
// console.log(howSum(300, [7,14])) // null

// OPTIMIZATION PROBLEM
// What is the best way to do it?

// m = target sum
// n = numbers length
// time: O(m^2*n)
// space: O(m^2)
bestSum = (targetSum, numbers) => {
  const table = Array(targetSum+1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {

    if (table[i] !== null) {
      for (let num of numbers) {
        const tempCombo = [ ...table[i], num ];

        if (!table[i+num] || table[i+num].length > tempCombo.length){
          table[i+num] = tempCombo;
        }
      }
    }
  }

  return table[targetSum]
  
}

// console.log(bestSum(4, [3,7])) // null
// console.log(bestSum(0, [5,3,4,7])) // []
// console.log(bestSum(7, [5,3,4,7])) // [7]
// console.log(bestSum(8, [2,3,5])) // [3,5]
// console.log(bestSum(8, [1,4,5])) // [4,4]
// console.log(bestSum(100, [1,2,5,25])) // [25,25,25,25]

// Can I create the target string with the given wordbank?

// m = target length
// n = wordbank length
// time: O(m^2 * n) 
// space: O(m)
canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] !== false) {
      for (let word of wordBank) {
        if (target.slice(i, i+word.length) === word) {
          table[i+word.length] = true;
        }
      }
    }
  }

  return table[target.length];
}

// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
//  0  1  2  3  4  5  6
// [] [] [] [] [] [] []
// a  b  c  d  e  f

// ['ab', 'abc', 'cd', 'def', 'abcd']
//   | -> only strings that start with 'a' because curr ele is 'a'
//  0   1   2   3   4   5   6
// [T] [F] [T] [F] [F] [F] [F]
//  a   b   c   d   e   f
//  |       | -> based on ab.length = 2

// ['ab', 'abc', 'cd', 'def', 'abcd']
//          |
//  0   1   2   3   4   5   6
// [T] [F] [T] [T] [F] [F] [F]
//  a   b   c   d   e   f
//  |           |

// ['ab', 'abc', 'cd', 'def', 'abcd']
//                |x     |x -> doesn't start with 'a'

// ['ab', 'abc', 'cd', 'def', 'abcd']
//                              |
//  0   1   2   3   4   5   6
// [T] [F] [T] [T] [T] [F] [F]
//  a   b   c   d   e   f
//  |               |

// ['ab', 'abc', 'cd', 'def', 'abcd']
//    x     x      x     x      x    
//  0   1   2   3   4   5   6
// [T] [F] [T] [T] [T] [F] [F]
//  a   b   c   d   e   f
//      |

// ['ab', 'abc', 'cd', 'def', 'abcd']
//                |    
//  0   1   2   3   4   5   6
// [T] [F] [T] [T] [T] [F] [F]
//  a   b   c   d   e   f
//          |       |

// ['ab', 'abc', 'cd', 'def', 'abcd']
//                       |    
//  0   1   2   3   4   5   6
// [T] [F] [T] [T] [T] [F] [T]
//  a   b   c   d   e   f
//              |           |
// console.log(canConstruct('', ['cat', 'dog'])) // true
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['eee', 'eeee', 'eeeee'])) // false

// m = target length
// n = wordbank length
// time: O(m^2 * n)
// space: O(m)
countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0)
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i+word.length) === word) {
        table[i+word.length] += table[i];
      }
    }
  }

  return table[target.length];
}

// console.log(countConstruct('', ['cat', 'dog'])) // 1
// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
// //  0  1  2  3  4  5  6
// // [] [] [] [] [] [] []
// // p  u  r  p  l  e

// // ['purp', 'p', 'ur', 'le', 'purpl']
// //  0   1   2   3   4   5   6
// // [1] [0] [0] [0] [0] [0] [0]
// //  p   u   r   p   l   e
// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
// console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0

// m = target length
// n = wordbank length
// time: O(n^m)
// space: O(n^m)
allConstruct = (target, wordBank) => {

  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [ [] ];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i+word.length) === word) {
        const newCombos = table[i].map(subArr => [ ...subArr, word] );
        table[i+word.length].push(...newCombos);
      }
    }
  }

  return table[target.length];
}

console.log(allConstruct('hello', ['cat', 'dog', 'mouse'])) // []
console.log(allConstruct('', ['cat', 'dog', 'mouse'])) // [ [] ]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])) 
// [ 
//   ['ab', 'cd', 'ef'], 
//   ['ab', 'c', 'def'], 
//   ['abc', 'def'], 
//   ['abcd', 'ef'] 
// ]
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // [ ['purp', 'le'], ['p', 'ur', 'p', 'le'] ]
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['eee', 'eeee', 'eeeee'])) // []