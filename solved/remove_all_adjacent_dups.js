var removeDuplicates = function(s, k) {
    let stack = [[s[0], 1]]
    let currChar = ""

    for (let i = 1; i < s.length; i++) {
        currChar = s[i]
        
        if (stack[stack.length - 1][0] === currChar) {
            stack[stack.length - 1][1] += 1
            
            if (stack[stack.length - 1][1] === k) {
                stack.pop()
            }
            
        } else {
            stack.push([currChar, 1]);
        }
    }

    let newString = ""
    
    stack.forEach(ele => {
        newString += ( ele[0].repeat(ele[1]) )
    })
                  
    return newString
};