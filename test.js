function scatterPalindrome(strToEvaluate) {
    
    let runningSum = 0

    strToEvaluate.forEach(str => {
        runningSum += countPalindromes(str)
    })

    return runningSum
}

function countPalindromes(str) {

    let subStrings = []
        for (let i = 0; i < str.length; i++) {
            subStrings.push(str[i])
            for (let j = 0; j < str.length; j++) {
                subStrings.push((str.slice(i, j + 1)))
            }
        }

    let filtered = []
        subStrings.forEach(sub => {
            if (!filtered.includes(sub)) {
                filtered.push(sub)
            }
        })

    let count = 0
        filtered.forEach(ele => {
            if (isPalindrome(ele)) {
                count += 1
            }
        })

    return count
}

function isPalindrome(str) {
    let reversed = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed === str
}

let str = ['hello', 'jazz']
// let str = 'hello'

console.log(scatterPalindrome(str))

