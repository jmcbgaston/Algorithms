function classPhotos(redShirtHeights, blueShirtHeights) {

    redShirtHeights.sort((a,b) => a-b)
    blueShirtHeights.sort((a,b) => a-b)
    
    let isRedTaller = redShirtHeights[0] > blueShirtHeights[0]
    let i = 0
    let j = 0

    while (i < redShirtHeights.length) {
        let red = redShirtHeights[i]
        let blue = blueShirtHeights[j]
        if (red <= blue && isRedTaller) return false
        if (blue <= red && !isRedTaller) return false
        i++
        j++
    }

    return true;
}

let blueShirtHeights = [6,9,2,4,5]
let redShirtHeights = [5,8,1,3,4]
console.log(classPhotos(redShirtHeights, blueShirtHeights))