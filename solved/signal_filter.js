function countSignals(frequencies, filterRanges) {
    let minRange = filterRanges[0][0]
    let maxRange = filterRanges[0][1]
    
    let count = 0
    
    for (let i = 1; i < filterRanges.length; i++) {
        if (minRange < filterRanges[i][0]) {
            minRange = filterRanges[i][0]
        }
        
        if (maxRange > filterRanges[i][1]) {
            maxRange = filterRanges[i][1]
        }
    }
    
    frequencies.forEach(num => {
        if (num >= minRange && num <= maxRange) {
            count++   
        }
    })
    
    return count
}

let frequencies = [1, 12, 14, 27, 84, 32]
let filterRanges = [[10,15], [3, 20]]