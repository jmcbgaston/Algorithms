var evalRPN = function(tokens) {
  let stack = []

  for (let i = 0; i < tokens.length; i++) {
      let ele = tokens[i];
      
      if (Number.isInteger(parseInt(ele))) {
          stack.push(parseInt(ele))
      } else {
          let firstNum = stack.pop();
          let secondNum = stack.pop();
          
          if (ele === "+") {
              stack.push(firstNum + secondNum);
          } else if (ele === "-") {
              stack.push(secondNum - firstNum);
          } else if (ele === "*") {
              stack.push(firstNum * secondNum);
          } else {
              let res = secondNum / firstNum;
              let newRes;
              res >= 0 ? newRes = Math.floor(res) : newRes = Math.ceil(res);
              stack.push(newRes);  
          }
      }
  }
  
  return stack[0];
};

let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(tokens))