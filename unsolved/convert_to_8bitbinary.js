function convert(binary) {

  // itterate from right to left
  // take num 0 | 1
  // if 0 then 0
  // if 1 then 2**num
  // sum += res

  // return res

}

let binary = "10100100"; // 
// 0 | 1 | 2**0 = 0
// 0 | 2 | 2**0 = 0
// 0 | 3 | 2**3 = 8
// 0 | 4 | 2**0 = 0
// 0 | 5 | 2**0 = 0
// 0 | 6 | 2**6 = 64
// 0 | 7 | 2**0 = 0
// 0 | 8 | 2**8 = 256
// 8+64+256 = 328;
console.log(convert(binary));