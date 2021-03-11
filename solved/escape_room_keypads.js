// function escapeRoomKeypads(wordlist, keypads) { // T: O(n) | S: O(1)
//     let charSets = createCharSet(wordlist) // O(n) | O(1)
//     let counts = [] // O(1)

//     // O(n)
//     keypads.forEach(keypad => {
//         let num = countMatchingCharsets(charSets, keypad)
//         counts.push(num)
//     })

//     return counts
// }

// function createCharSet(wordlist) { // T: O(n) | S: O(1)
//     let charSet = [] // O(1)

//     wordlist.forEach(word => {
//         let set = new Set(word) // O(n)
//         let array = Array.from(set) // O(n)
//         let string = array.join('') // O(n)
//         charSet.push(string)
//     })

//     return charSet
// }

// function countMatchingCharsets(charSets, keypad) { // T: O(n) | S: O(1)
//     let runningSum = 0 // O(1)

//     // O(n)
//     charSets.forEach(charSet => {
//         if (charSet.includes(keypad[0])) {
//             if (hasAllChars(charSet, keypad)) {
//                 runningSum += 1
//             }
//         }

//     })

//     return runningSum
// }

// function hasAllChars(charSet, keypad) { // T: O(n) | S: O(1)
//     for (let i = 0; i < charSet.length; i++) {
//         if (!keypad.includes(charSet[i])) {
//             return false
//         }
//     }

//     return true
// }

// let wordlist = ['APPLE', 'PLEAS', 'PLEASE']
// let keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']
// console.log(escapeRoomKeypads(wordlist, keypads))


// Condensed
// function escapeRoomKeypads(wordlist, keypads) {

//     let charSets = []
//         wordlist.forEach(word => {
//             let set = new Set(word)
//             let array = Array.from(set)
//             let string = array.join('')
//             charSets.push(string)
//         })

//     let counts = []

//     keypads.forEach(keypad => {
//         let num = 0

//         charSets.forEach(charSet => {
//             if (charSet.includes(keypad[0])) {
//                 if (hasAllChars(charSet, keypad)) {
//                     num += 1
//                 }
//             }
//         })

//         counts.push(num)
//     })

//     return counts
// }

// function hasAllChars(charSet, keypad) { // T: O(n) | S: O(1)
//     for (let i = 0; i < charSet.length; i++) {
//         if (!keypad.includes(charSet[i])) {
//             return false
//         }
//     }

//     return true
// }

// let wordlist = ['APPLE', 'PLEAS', 'PLEASE']
// let keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']
// console.log(escapeRoomKeypads(wordlist, keypads))

// function numKeypadSolutions(wordlist, keypads) {
//     let charSet = {};
//         wordlist.forEach(word => {
//             let string = Array.from(new Set(word)).join('');
//             charSet[string] ? charSet[string] += 1 : charSet[string] = 1;
//         })

//     let counts = [];
//         keypads.forEach(keypad => {
//             let keypadNums = 0;

//             for (let i = 0; i < keypad.length; i++) {
//                 if (word.includes(keypad[i])) {
//                     keypadNums += 1
//                 }
//             }

//             // for (const [key, value] of Object.entries(charSet)) {
//             //     if (key.includes(keypad[0])) {
//             //         if (key.split('').every(val => keypad.includes(val))) {
//             //             num += value
//             //         }
//             //     }
//             // }
            
//             counts.push(num)
//         })

//     return counts
// }

// function numKeypadSolutions(wordlist, keypads) {    
//     keypads.forEach((keypad, idx) => {
//         let num = 0;        
//         for (const word of wordlist) {
//             if (word.includes(keypad[0])) {
//                 if (word.split('').every(val => keypad.includes(val))) {
//                     num += 1
//                 }
//             }
//         }
//         keypads[idx] = num
//     })
//     return keypads
// }



let wordlist = ['APPLE', 'PLEAS', 'PLEASE']
let keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']
console.log(numKeypadSolutions(wordlist, keypads))