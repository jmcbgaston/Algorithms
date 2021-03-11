function getUniqueCharacter(s) {
    let tempStr
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        tempStr = s.slice(0, i) + s.slice(i+1, s.length)
        
        if (!tempStr.includes(char)) {
            return i+1
        }
    }
    
    return -1
}