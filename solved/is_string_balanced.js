function braces(values) {
  const answer = Array(values.length).fill('NO');

  for (let i = 0; i < values.length; i++) {
    if (validValue(values[i])) answer[i] = 'YES'
  }

  return answer
}

function validValue(s) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{"
  }
  let arr = [];
  for(let i = 0; i < s.length; i ++){
      if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
          arr.push(s[i]);
      }
      else{
          if(arr[arr.length - 1] === map[s[i]]){
              arr.pop();
          }
          else return false;
      }
  }
  
  return arr.length === 0 ? true : false;
}

console.log(braces(['[{()}]', '[{(){]', '[](){}', '{}[()]'])) // [YES NO]
