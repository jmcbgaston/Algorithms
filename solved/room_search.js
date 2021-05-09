function roomSearch(input) {
    
  let keys = new Array(input.length);
  keys.fill(false);
  keys[0] = 0;
  
  for (let i = 0; i <input.length; i++) {
    let subArr = input[i]
    subArr.forEach(key => keys[key] = key);
  }

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (!Number.isInteger(key)) return false;
  }

  return true;
}

let input = [
  [3, 2],
  [1, 2],
  [2 ,3 ,1],
  [0, 1, 2], 
  []
]

console.log(roomSearch(input))