function getNthFib(n, memo={}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1
    memo[n] = getNthFib(n-1) + getNthFib(n-2);
    return memo[n]
}

console.log(getNthFib(300))

