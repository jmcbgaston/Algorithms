function maximumOccurringCharacter(text) {
    let hash = {}

    for (const char of text) {
        hash[char] ? hash[char] += 1 : hash[char] = 1
    }

    // return Object.entries(hash).sort((a, b) => b[1] - a[1])[0][0]

    let max = text[0]

    Object.keys(hash).forEach(key => {
        if (hash[key] > max) {
            max = key
        }
    })

    return max
}

let text = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
console.log(maximumOccurringCharacter(text))