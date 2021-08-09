// time: O(n)
// space: O(n)

function maxSubsetSumNoAdjacent(array) {
	if (array.length === 0) return 0;
	if (array.length === 1) return array[0];
	
	let maxSums = array.slice();
	maxSums[1] = Math.max(array[0], array[1]);
	
	for (let i = 2; i < array.length; i++) {
		console.log(maxSums)
		maxSums[i] = Math.max(maxSums[i-1], maxSums[i-2]+array[i]);
	}
	
	return maxSums[maxSums.length - 1];
}

// time: O(n)
// space: O(1)

function maxSubsetSumNoAdjacent(array) {
	if (array.length === 0) return 0;
	if (array.length === 1) return array[0];
	
	let second = array[0];
	let first = Math.max(array[0], array[1]);
	
	for (let i = 2; i < array.length; i++) {
		const current = Math.max(first, second + array[i]);
		second = first;
		first = current;
		
		console.log(current)
		console.log(first)
		console.log(second)
		console.log('---')

	}
	
	return first;
}
