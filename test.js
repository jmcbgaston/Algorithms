function escapeRoomKeypads(wordlist, keypads) {
    let charSet = {}
        wordlist.forEach(word => {
            let set = new Set(word)
            let array = Array.from(set)
            let string = array.join('')
            charSet[string] ? charSet[string] += 1 : charSet[string] = 1
        })
    
    let counts = []
        keypads.forEach(keypad => {
            let num = 0
            let kpSet = new Set(keypad)

            for (const [key, value] of Object.entries(charSet)) {
                if (key.includes(keypad[0])) {
                    if (key.split('').every(val => kpSet.has(val))) {
                        num += value
                    }
                }
            }
            counts.push(num)
        })

    return counts
}

let wordlist = ['APPLE', 'PLEAS', 'PLEASE']
let keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']
console.log(escapeRoomKeypads(wordlist, keypads))
