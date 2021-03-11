function twoNumberSum(array, targetSum) {
	
	for (let i = 0; i < array.length; i++) {
		for (let j = 1; j < array.length; j++) {
			if ( ((array[i] + array[j]) === targetSum) && i !== j ) {
				return [ array[i], array[j] ]
			}
		}
 	}
	
	return []
	
}

exports.twoNumberSum = twoNumberSum;

// NOTES:

// compare num1 and num2
// if pair === target, return in arr