function getNthFib(n) {
    
	// n = 1
	// [0]
	// return 0
    if (n===1) return 0
	// n = 2
	// [0,1]
	// return 1
    if (n===2) return 1
    
    // n = 3
    // [0,1,1]
    // return 1
    // n = 4
    // [0,1,1,2]
    // return 2
    // n = 5
    // [0,1,1,2,3]
    // return 3
    // n = 6
    // [0,1,1,2,3,5]
    // return 5
    return getNthFib(n-1) + getNthFib(n-2)
}

console.log(getNthFib(6))

