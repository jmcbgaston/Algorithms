// function solution(S) {
//     let subStrings = []

//     for (let i = 0; i < S.length; i++) {
//         for (let j = 1; j < S.length; j++) {
//             subStrings.push(S.slice(i,j+1))
//         }

//     }

//     let lengths = []

//     subStrings.forEach(sub => {
//         if (validSubString(sub)) {
//             lengths.push(sub.length)
//         }
//     })

//     console.log(lengths)
//     let sorted = lengths.sort()
//     return sorted[0]
// }

// function validSubString(sub) {
//     let split = sub.split('')

//     console.log(split)
//     split.forEach(ele => {

//         let up = split.includes(ele.toUpperCase())
//         let low = split.includes(ele.toLowerCase())
        
//         if ((up&&low) === false) return false
//     })

//     return true
// }

// let S = 'abA'
// console.log(validSubString(S))
// console.log(solution(S))