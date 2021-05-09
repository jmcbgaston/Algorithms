
// return yes or no depending on num of steps to get to bottom right;
    
    // max = 5
    // . . # #
    // # . # #
    // # . . .
    
    // . 1 # #
    // # 2 # #
    // # 3 4 5
    // 5 >= max => Yes
    
    // max 2
    // . #
    // # .
    
    // . #
    // # .
    // can't move => No
    
    // max 24
    // . . # # # # #
    // # . # # # # #
    // # . . . . # #
    // # # # # . # #
    // . . . # . # #
    // . # . # . # #
    // . # . . . # #
    // . # # # # # #
    // . . . . . . .
    
    // .   1  #  #  #  #  #
    // #   2  #  #  #  #  #
    // #   3  4  5  6  #  #
    // #   #  #  #  7  #  #
    // 16 15 14  #  8  #  #
    // 17  # 13  #  9  #  #
    // 18  # 12 11 10  #  #
    // 19  #  #  #  #  #  #
    // 20 21 22 23 24 25 26
    
    // row = grid.length
    // col = row[0].length

function reachTheEnd(grid, maxTime) {

  let end = grid[grid.length-1][grid[0].length-1]

  while (end === ".") {   
    let currLocation = grid[0][0]

    if (!lookDown(currLocation, grid)) {
    // 1 - try to go down; 
    // if down === #, next
    // if down === ".", move
      if (!lookRight(currLocation, grid)) {
      // 2 - try to go right; 
      // if right === #, next 
      // if right === ".", move
        if (!lookLeft(currLocation, grid)) {
        // 3 - try to go left; 
        // if left === #, next 
        // if left === ".", move
          if (!lookUp(currLocation, grid)) {
          // 4 - try to go up; 
          // if up === ("#" || num), return No 
          // if up === ".", move
          }
        }
      }
    }

    // grid = newGrid
  }
  return end <= maxTime ? "Yes" : "No"
}

// lookX -> return false if direction === "#"
// if next location === "i", grid[location] = prevLocation + 1 
function lookDown(currLocation) {
  let down = [1, 0]
}
function lookRight(currLocation) {
  let right = [0, 1]
}
function lookLeft(currLocation) {
  let left = [0, -1]
}
function lookUp(currLocation) {
  let up = [-1, 0]
}