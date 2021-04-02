// EFFICINT
// T: O(nlog(n))
// S: O(1)

function twoNumberSum(array, targetSum) {
	array.sort((a,b) => a-b) // O(nlog(n))
	let left = 0
	let right = array.length - 1
	while (left < right) {
		let currSum = array[left] + array[right]
		if (currSum === targetSum) {
			return [array[left], array[right]]
		} else if (currSum < targetSum) {
			left++
		} else if (currSum > targetSum) {
			right--
		}
	}
	return[];
}

let array = [1, 2, 3, 5, -7, 10]
let targetSum = 13
console.log(twoNumberSum(array, targetSum))