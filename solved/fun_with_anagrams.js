function funWithAnagrams(text) {

    for (let i = 0; i < text.length - 1; i++) {
        for (let j = i + 1; j < text.length; j++) {
            let base = text[i]
            let word = text[j]

            if (word !== '') {
                if (isAnagram(base, word)) {
                    text[j] = ''
                }
            }
        }
    }

    return text.filter(ele => ele !== '').sort()
}

function isAnagram(base, word) {
    let hash = {}

    for (let i = 0; i < base.length; i++) {
        let char = base[i]
        hash[char] ? hash[char] += 1 : hash[char] = 1
    }

    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        hash[char] ? hash[char] -= 1 : hash[char] = 1
    }

    let sorted = Object.values(hash).sort((a, b) => b - a)
    return sorted[0] <= 0
}

let base = 'aaagmnrs'
let word = 'anagrams'
// console.log(isAnagram(base, word))

let text = ['code', 'aaagmnrs', 'anagrams', 'doce']
console.log(funWithAnagrams(text))