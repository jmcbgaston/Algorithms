function solution(N) {

    let abs = Math.abs(N)
    let strNum = JSON.stringify(abs)
    let newNum = ''

    if (N < 0) {
        return parseInt('-' + '5' + strNum)
    }

    for (let i = 0; i < strNum.length; i++) {
        let currNum = parseInt(strNum[i])

        if (currNum <= 5) {
            return parseInt(strNum.slice(0, i) + '5' + strNum.slice(i, strNum.length))
            
        } else {
            return parseInt(strNum + '5')

        }
    }

    return parseInt(newNum)
}