// function solution(S, K) {
//     let daysHash = {
//         'Mon': 1, 
//         'Tue': 2, 
//         'Wed': 3, 
//         'Thu': 4, 
//         'Fri': 5, 
//         'Sat': 6,
//         'Sun': 7
//     }

//     let posHash = {
//         1: 'Mon', 
//         2: 'Tue', 
//         3: 'Wed',
//         4: 'Thu', 
//         5: 'Fri', 
//         6: 'Sat',
//         7: 'Sun'
//     }

//     let negHash = {
//         6: 'Mon', 
//         5: 'Tue', 
//         4: 'Wed',
//         3: 'Thu', 
//         2: 'Fri', 
//         1: 'Sat',
//         0: 'Sun'
//     }

//     let modulo = (daysHash[S] + K) % 7

//     if (modulo > 0) {
//         return posHash[modulo]
//     } else {
//         return negHash[Math.abs(modulo)]
//     }
// }

// let S = 'Mon'
// let K = -1

// console.log(solution(S, K))






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



// function biggestWithFive(num){             //1000 // 785 
// 	let stringNum = JSON.stringify(num);  // “5 1000”
// 	let splitNum = stringNum.split('');   //[1,0,0,0]
// 	let answer = [];

// 	splitNum.forEach((num, idx) => { // 10, //71
// 		let number = []; // [7]

// 		if (num > 5){ //7100
// 			number.push(num) 

// 			for (let i = 1; i < splitNum.length; i++){
//                 if (splitNum[i] < 5) {
//                     return parseInt(splitNum.join('').slice(0, i) + '5' + splitNum.slice(i,  splitNum.length - 1));
//                 } 
//             }	
	
//         }  else {
//             return parseInt(splitNum.unshift(5).join(''));
//         }
//     })  
// 	// JSON.stringify(num)
// }

let num = -9
console.log(solution(num))







