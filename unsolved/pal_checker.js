function palindromeChecker(s, startIndex, endIndex, subs) {

    let baseHash = hash(s)
    let outputString = ''
    let i = 0
    let j = 0
    let k = 0

    while (i < subs.length) {
        let p1 = startIndex[i]
        let p2 = endIndex[j] + 1
        let availableSubs = subs[k]
        let sliced = s.slice(p1, p2)
        let hashed = hash(sliced)

        let bool = isPalindromeAfterSubs(hashed, availableSubs)
        bool ? outputString += '1' : outputString += '0'

        i++
        j++
        k++
    }

    return outputString

}

function isPalindromeAfterSubs(hashed, availableSubs) {

    console.log(hashed)
    console.log(availableSubs)
    console.log('----')

    // {2, 1}
    // if even num collapse
    // {1}
    // if we're left with lenght < 2 then true

    // ie {1 , 1} = false
    // {2, 2, 1} = {1} = true
    // {2, 1, 1} 1 sub = {2, 2} = {} = true
    // {4, 3, 2, 1} 2 subs = {4, 4, 2} = {} = true

    // s[0, 0] = 'c' {c1} 0 = t
    // s[0, 1] = 'cd' 0 {c1, d1} 1 => {c2} = t
    // s[0, 2] = 'cde' 0 {c1 d1 e1} 1 => {c2 d1} = t
    // s[0, 3] = 'cdec' 0 {c2, d1, e1} 0 = f

}

function hash(string) {
    let hash = {}
    for (let i = 0; i < string.length; i++) {
        let letter = string[i]
        if (hash[letter]) {
            hash[letter] += 1
        } else {
            hash[letter] = 1
        }
    }
    return hash
}
// console.log(hash('pieep'))

let s = 'cdecd'
let startIndex = [0,0,0,0]
let endIndex = [0,1,2,3]
let subs = [0,1,1,0]
console.log(palindromeChecker(s, startIndex, endIndex, subs))


// xxdnssuqevu
// [x2, d1, n1, s2, u2, q1, e1, v1]
// [x2, s2, u2, e2, v2, q1] // xsuevqveusx
// [x2, d2, n2, s2, u2, v1] // xdnsuvusndx yes
// xxdnssudnvu
// 
// xsudnvndusx