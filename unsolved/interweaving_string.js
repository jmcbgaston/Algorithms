// function interweavingStrings(one, two, three) {
// 	let pointer1 = 0;
// 	let pointer2 = 0;
	
// 	for (let i = 0; i < three.length; i++) {
// 		let current = three[i]; // a | abc123
// 		let currentEleAtPointer1 = one[pointer1] // b | 1
// 		let currentEleAtPointer2 = two[pointer2] // 1 | 0
		
// 		if (current === currentEleAtPointer1 || current === currentEleAtPointer2) {
// 			if (current === currentEleAtPointer1) {
//         pointer1++
// 			}
//       if (current === currentEleAtPointer2) {
// 				pointer2++
// 			}
// 		} else {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }

// m = one.length
// n = two.length
// time: O(2^(n+m))
// space: O(n+m)
function interweavingStrings(one, two, three) {
  if (three.length !== one.length + two.length) {
    return false;
  }

  return areInterwoven(one, two, three, 0, 0);
}
function areInterwoven(one, two, three, i, j) {
  const k = i+j; // refers to the current element in string 3
  if (k === three.length) return true; // if we've reached the end, bubble up true;

  // make sure we're in bounds of i and j
  if (i < one.length && one[i] === three[k]) { // && check whether the ele's are the same
    if (areInterwoven(one, two, three, i+1, j)) return true; // itterate through ONE
  }

  if (j < two.length && two[j] === three[k]) { // && check whether the ele's are the same
    return areInterwoven(one, two, three, i, j+1); // itterate through TWO
  }

  return false;
}

console.log(interweavingStrings('abc', '123', 'abc123')) // true
console.log(interweavingStrings('abc', '123', 'a1b2c3')) // true
console.log(interweavingStrings('abc', '123', 'ab12c3')) // true
console.log(interweavingStrings('abc', '123', 'acb123')) // false
console.log(interweavingStrings('abc', 'abc', 'aabbcc')) // true