// does not pass all tests
function widestGap(n, start, finish) {
    // lay down the track
    let carTrack = new Array(n)
    carTrack.fill(false)

    // place cars into carTrack
    start.forEach(car => {
        carTrack[car-1] = true
    })

    // create car positions based on false values
    let i = 0
    carTrack.forEach((emptySlot, j) => {
        let prevPos = carTrack[j-1]
        let finishPosition = finish[i]
        if (emptySlot && !prevPos) {
            carTrack.fill(true, j, finishPosition)
            i++
        }
    })
    
    let tempCounter = 0
    let counter = 0
    carTrack.forEach((position, idx) => {
        let prevPos = carTrack[idx-1]
        if (!position && (prevPos === null || prevPos === true)) {
            tempCounter = 1
        } else if (!position && !prevPos) {
            tempCounter += 1
        } else if (position === true && prevPos === false) {
            if (tempCounter > counter) {
                counter = tempCounter
                tempCounter = 0
            }
        } else {

        }
    })

    return counter
}

console.log(widestGap(10, [1,2,5,8], [2,2,6,10]))
