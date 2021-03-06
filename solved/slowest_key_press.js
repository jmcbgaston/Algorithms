function slowestKey(keyTimes) {    
    let keys = {
        0:  'a', 1:  'b', 2:  'c', 
        3:  'd', 4:  'e', 5:  'f', 
        6:  'g', 7:  'h', 8:  'i', 
        9:  'j', 10: 'k', 11: 'l', 
        12: 'm', 13: 'n', 14: 'o', 
        15: 'p', 16: 'q', 17: 'r', 
        18: 's', 19: 't', 20: 'u', 
        21: 'v', 22: 'w', 23: 'x', 
        24: 'y', 25: 'z'
    }
    
    let largestDiff = keyTimes[0][1]
    let answer = keyTimes[0][0]
    
    for (let i = 0; i < keyTimes.length - 1; i++) {
        let currDiff = keyTimes[i+1][1] - keyTimes[i][1]
        if (currDiff >= largestDiff) {
            largestDiff = currDiff
            answer = keyTimes[i+1][0]
        }
    }
    
    return keys[answer]
}

// leetcode hackerrank