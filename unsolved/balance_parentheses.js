
function minimumSwaps(brackets) {
  // )()(())(
  // |
  // [ ) ]
  // is stack valid: false
  // check right side
  // right = ( => swap
  // (()(()))
  //       |
  // [  ]
  // return
  
  let stack = [];
  let endI = brackets.length - 1;
  for (let i = 0; i < end; i++) {
      let curr = brackets[i];
      
      if (curr === '(') { // case: (
          stack.push('(')
      } else { // case: )
          if (stack[stack.length-1] === '(') { // case: last ele in stack is (
              stack[stack.length-1].pop(); // collapse = [ () ] = []
          } else { // case: last ele in stack is )
              
          }
      }
  }
}
