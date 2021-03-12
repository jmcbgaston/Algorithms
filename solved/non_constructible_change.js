function nonConstructibleChange(coins) {
    let sortedCoins = coins.sort((a,b) => a-b)
    let currChange = 0

    sortedCoins.forEach(coin => {
        if (coin > (currChange+1)) {
            return currChange + 1
        } else {
            currChange += coin
        }
    })

    return currChange + 1
} 


let coins = [5,7,1,1,2,3,22]
console.log(nonConstructibleChange(coins))