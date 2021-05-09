
function maxDifference(px) {    
  // let diffs = []
  let maxDiff = -1;
  let low = px[0];
  let high;
  
  for (let i = 1; i < px.length; i++) { 
      let currNum = px[i];
      
      if (currNum > low) {
          high = currNum;
          // diffs.push(high-low);
          if ((high-low) > maxDiff) maxDiff = (high-low);
      } else if (currNum < low) {
          low = currNum;
      }

      // console.log(diffs);
  }
  
  // return diffs.length > 0 ? Math.max(...diffs) : -1;
  return maxDiff;
}

let px = [8,9,10,5,6,7,1,4];
console.log(maxDifference(px));