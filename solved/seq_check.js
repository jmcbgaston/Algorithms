function isValidSubsequence(array, sequence) {
	
	let seqCheck = []
	let j = 0
	
	for (let i = 0; i < array.length; i++) {
		if (array[i] === sequence[j]) {
			j++
			seqCheck.push(array[i])
		}
	}
	
	return seqCheck.length === sequence.length
}

exports.isValidSubsequence = isValidSubsequence;
