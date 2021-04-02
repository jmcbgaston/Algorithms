// T => O(n logn n)
// S => O(1)

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b)
      let runSum = 0
      coins.forEach(coin => {
          if (coin > runSum + 1) return runSum + 1
          runSum += coin
      })
      return runSum + 1
  }


let coins = [5,7,1,1,2,3,22]
console.log(nonConstructibleChange(coins))