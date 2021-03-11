function numberOfCharactersEscaped(expression) {
    
    const alph = "abcdefghijklmnopqrstuvwxyz"
    let count = 0 // 1
    let hashCheck = 0 // 1
    
    for (let i = 0; i < expression.length; i++) {        
        
        if (expression[i] === '#') {
            hashCheck++
        } else if (expression[i] === '!' 
            && hashCheck === 1 
            && alph.includes(expression[i+1])
            && expression.slice(i).includes('#') ) {
            count++
        }
        
        if (hashCheck === 2) {
            hashCheck = 0
        }
        
    }
    
    return count
}

let expression = '#abcnd#adn!dd#'
// itter
// if ele === #, hashCheck++
// if ele === ! && hashCheck === 1 && ele i + 1 === lowercase, count +1

// if ! before lowercase and is inbetween # -- #
// using O(1) space for # check

// hashCheck = 0; 1 beginning; 2 end; after back to 0

// if hashCheck = 1 and ele === ! with a lowercase letter i+1 