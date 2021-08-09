function numberOfWaysToMakeChange(n, denoms) { // 6 [1 5]
	const table = Array(n+1).fill(0);	
	table[0] = 1;
	
	for (let denom of denoms) {
		for (let amt = 1; amt < n+1; amt++) {
			if (denom <= amt) {
				table[amt] += table[amt-denom];
			} 
		}
	}
	// denoms = [1 5]
	// n = 6
	//
	//   0 1 2 3 4 5 6
	// [ 1 1 1 1 1 2 2 ]
	
	console.log(table)
	return table[n]	
}

console.log(numberOfWaysToMakeChange(6, [1,5])) // 2