function repeatedString(s, n) {
    
  let count = 0;
  let i = 1;
  
  while (i % (n+1) !== 0) {
      if (s[(i-1) % s.length] === "a") count++;
      
      console.log(i-1)
      console.log(s.length)
      console.log("--")
      console.log((i-1) % s.length)
      console.log("-----")
    }
      
      i++;
    
    
  console.log("Answer")
  return count;

}

console.log(repeatedString("aba", 10)) // => 10