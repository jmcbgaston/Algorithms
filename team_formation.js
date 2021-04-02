function countTeams(skills, minPlayers, minLevel, maxLevel) {
    let filtered = skills.filter(num => num >= minLevel && num <= maxLevel)    
    if (filtered.length > minPlayers) {
        return filtered.length + 1
    } else if (filtered.length < minPlayers) {
        return 0
    } else {
        return 1
    }
}