function maximumOccurringCharacter(text) {
    let hash = {}

    for (const char of text) {
        hash[char] ? hash[char] += 1 : hash[char] = 1
    }

    return Object.entries(hash).sort((a, b) => b[1] - a[1])[0][0]
}

let text = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
console.log(maximumOccurringCharacter(text))