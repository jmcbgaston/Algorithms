function pthFactor(n, p) {
  let counter = 1;
  for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        console.log(i)
          if (counter === p) {
            return i
          }
          counter++;
      }
  }
  return 0
}

console.log(pthFactor(200000000, 1000))

// too slow ^