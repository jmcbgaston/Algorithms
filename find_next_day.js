function solution(S, K) {
    let daysHash = {
        'Mon': 1, 
        'Tue': 2, 
        'Wed': 3, 
        'Thu': 4, 
        'Fri': 5, 
        'Sat': 6,
        'Sun': 7
    }

    let posHash = {
        1: 'Mon', 
        2: 'Tue', 
        3: 'Wed',
        4: 'Thu', 
        5: 'Fri', 
        6: 'Sat',
        7: 'Sun'
    }

    let negHash = {
        6: 'Mon', 
        5: 'Tue', 
        4: 'Wed',
        3: 'Thu', 
        2: 'Fri', 
        1: 'Sat',
        0: 'Sun'
    }

    let modulo = (daysHash[S] + K) % 7

    if (modulo > 0) {
        return posHash[modulo]
    } else {
        return negHash[Math.abs(modulo)]
    }
}

let S = 'Mon'
let K = -1

console.log(solution(S, K))
