var calculate = function(s) {
    let stack = [];
    let sign = null;
    let num = '';
    
    for (let i = 0; i <= s.length; i++) {
        let curr = s[i];
        
        if (curr === ' ') continue;
        if (!isNaN(curr)) num += curr;
        if (isNaN(curr)) {
            num = Number(num);
            if (sign === '+' || sign === null) {
                stack.push(num);
            } else if (sign === '-') {
                stack.push(-num);
            } else if (sign === '*') {
                stack.push(stack.pop() * num);
            } else if (sign === '/') {
                stack.push(Math.trunc(stack.pop() / num));
            }
            sign = curr;
            num = '';
        }
    }
    
    return stack.reduce((a,b) => a+b);
};

console.log(calculate('2*(2*4)-3')) //  13
console.log(calculate('(2*2)*5)-10')) //  10