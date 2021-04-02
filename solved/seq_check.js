function isValidSubsequence(array, sequence) {
	
	let seqCheck = 0
	let j = 0
	
	for (let i = 0; i < array.length; i++) {
		if (array[i] === sequence[j]) {
			j++
			seqCheck += 1
		}
	}
	
	return seqCheck === sequence.length
}

let array = [1,2,3,4,5,6]
let sequence = [2,4]
console.log(isValidSubsequence(array, sequence))