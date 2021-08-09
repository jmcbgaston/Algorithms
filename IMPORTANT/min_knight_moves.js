class Cell {
  constructor(x, y, dis) {
      this.x = x;
      this.y = y;
      this.dis = dis;
  }
}

function isValidPos(x, y, n) {
  return x >= 0 && x < n && y >= 0 && y < n;
}

function minMoves(n, startRow, startCol, endRow, endCol) {
  //
  let posX = [ -2, -1, 1, 2, -2, -1, 1, 2 ];
  let posY = [ -1, -2, -2, -1, 1, 2, 2, 1 ];

  //
  let queue = [];
  queue.push(new Cell(startRow, startCol, 0));

  // Build the board filling each space with F
  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(n);
    for (let j = 0; j <= n; j++) {
      visited[i][j] = false;
    }
  }
  visited[startRow][startCol] = true;
  
  // 
  let temp, newX, newY;
  while (queue.length !== 0) {
      temp = queue.shift();
          
      // case where we find the solution
      if (temp.x == endRow && temp.y == endCol)
          return temp.dis;

      // go through posX and posY
      // 8 = posX and posY length
      for (let i = 0; i < 8; i++) {
          newX = temp.x + posX[i];
          newY = temp.y + posY[i];

          // if position is valid and we have not visited this space
          if (isValidPos(newX, newY, n) && !visited[newX][newY]) {
              // mark that we've been here
              visited[newX][newY] = true;
              // push new cell to queue 
              queue.push(new Cell(newX, newY, temp.dis + 1));
          }
      }
  }

  // I don't know why this is here
  return Number.MAX_VALUE;
}