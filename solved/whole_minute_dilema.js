function playlist(songs) {
    let count = 0

    for (let i = 0; i < (songs.length - 1); i++) {
        for (let j = (i + 1); j < songs.length; j++) {

            if (i === j) continue
            // if (i !== j) {
                let pairSum = songs[i] + songs[j]
                // console.log(songs[i], songs[j])
                // console.log(pairSum)
    
                if ( (pairSum % 60) === 0 ) {
                    // console.log('hit')
                    count += 1
                }
            // }

        }
    }

    return count
}
            //      i  j
let songs = [30, 20, 150, 100, 40]
// return num of pairs that return multiples of 60
// only pairs
// output 3 because 20+40 = 60%60=0



console.log(playlist(songs))