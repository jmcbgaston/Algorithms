function tournamentWinner(competitions, results) {
    let scorecard = {}
    let i = 0
    
    competitions.forEach(pairing => {
        let winner = results[i]
        
        if (winner === 0) {
            if (scorecard[pairing[1]]) {
                scorecard[pairing[1]] += 3
            } else {
                scorecard[pairing[1]] = 3
            }
        } else {
            if (scorecard[pairing[0]]) {
                scorecard[pairing[0]] += 3
            } else {
                scorecard[pairing[0]] = 3
            }
        }
        
        i++
    })
    
    let sorted = Object.entries(scorecard).sort((a,b) => b[1] - a[1])
    return sorted[0][0]
}

let competitions = [
    ['html', 'c#'], 
    ['c#', 'python'], 
    ['python', 'html']
]

let results = [0, 0, 1]

console.log(tournamentWinner(competitions, results))