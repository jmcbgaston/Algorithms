function hasSingleCycle(array) {
  const table = Array(array.length).fill(false);

  let tableIdx = 0;
  let arrayIdx = array[tableIdx];
  let locationToFlip = nextLocationToFlip(tableIdx, arrayIdx, array.length)

  let countdown = array.length;
  
  while (countdown > 0) {
    table[locationToFlip] = true;
    // [ 10  11  -6  -23  -2  3  88  908  -26 ]
    //    F   T   F    T   F  F   F    T    F
    //                                 |

    tableIdx = locationToFlip; // 
    arrayIdx = array[tableIdx]; // 
    locationToFlip = nextLocationToFlip(tableIdx, arrayIdx, array.length) // 8

    // console.log(table)
    // console.log('---')
    countdown--;
  };

  return (table.some(ele => ele === false)) ? false : true
};

function nextLocationToFlip(tableIdx, arrayIdx, n) {
  if (tableIdx + arrayIdx < 0) {
    let temp = Math.abs(tableIdx + arrayIdx + n) % n
    return temp === n ? n-1 : temp
  } else if (tableIdx + arrayIdx >= n) {
    return (tableIdx + arrayIdx + n) % n 
  } else {
    return tableIdx + arrayIdx
  }
}



// console.log(hasSingleCycle([-1,2,2])); // true
// console.log(hasSingleCycle([2,2,-1])); // true
// console.log(hasSingleCycle([1,2,3,4,-2,3,7,8,-26])); // true
console.log(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 908, -26])); // true
console.log(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 909, -26])); // false
// console.log(hasSingleCycle([2,3,1,-4,-4,2])); // true
// [ 2  3  1 -4 -4  2] locationToFlip = i+a[i] = 0+2 = 2
//   |
// [ f  f  t  f  f  f]
//         |
// i = locationToFlip = 2

// [ 2  3  1 -4 -4  2] locationToFlip = i+a[i] = 2+1 = 3
//         |
// [ f  f  t  t  f  f]
//            |
// i = locationToFlip = 3

// [ 2  3  1 -4 -4  2] locationToFlip = i+a[i] = 3+-4 = -1
//            |
// [ f  f  t  t  f  t]
//                  |
// i = locationToFlip = -1

// [ 2  3  1 -4 -4  2] locationToFlip = i+a[i] = -1+2 = 1
//                  |
// [ f  t  t  t  f  t]
//      |
// i = locationToFlip = 1

// [ 2  3  1 -4 -4  2] locationToFlip = i+a[i] = 1+3 = 4
//      |
// [ f  t  t  t  t  t]
//               |
// i = locationToFlip = 4

// [ 2  3  1 -4 -4  2] locationToFlip = i+a[i] = 4+-4 = 0
//               |
// [ t  t  t  t  t  t]
//   |
// i = locationToFlip = 0
// console.log(hasSingleCycle([1,2,3,4])); // false
// console.log(hasSingleCycle([0,1,1,1,1])); // false