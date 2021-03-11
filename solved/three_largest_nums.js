function findThreeLargestNumbers(array) {
  let small = -Infinity
	let medium = array[0] > array[1] ? array[1] : array[0]
	let large = array[0] > array[1] ? array[0] : array[1]	
	
	for (let i = 2; i < array.length; i++) {
		let ele = array[i]
		
		if (ele > small && ele <= medium) {
			small = ele
		} else if (ele > medium && ele <= large) {
			small = medium
			medium = ele
		} else if (ele > large) {
			small = medium
			medium = large
			large = ele
		} else {

		}
	}
	
	return [small, medium, large]
}

// time o(n)
// space o(1)