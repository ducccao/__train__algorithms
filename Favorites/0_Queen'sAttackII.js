function initBoard(n) {
  // function: init Board
  // input: n
  // output: board n x n, value board[i][j]=0
  const board = [];

  for (let i = 0; i < n; ++i) {
    const row = [];
    for (let i = 0; i < n; ++i) {
      row.push(0);
    }
    board.push(row);
  }

  return board;
}

function initQueenPos(board, rq, cq) {
  // function: init board with queen position
  // input: board, rq,cq
  // output: board n x n, value board[i][j]=0 and position of Queen is 'Q'
  board[board.length - rq][board.length - cq] = "Q";
  return board;
}

function initObstaclesPos(n, boardQueenPos, obstacles) {
  // function: init board with obstacle position
  // input: boardQueenPos, rq,cq
  // output: board n x n, value board[i][j]=0 and position of Queen is 'Q' and position of Obsatcles are 'X'
  for (let i = 0; i < obstacles.length; ++i) {
    boardQueenPos[n - obstacles[i][0]][n - obstacles[i][1]] = "X";
  }
  return boardQueenPos;
}

function attackLeft(n, boardObstaclesPos, rq, cq) {
  // function: Queen Attack From The Left Direction
  // input: n, boardObstaclesPos,rq,cq
  // output: count Square
  let ret = 0;
  for (let i = n - cq; i >= 0; i--) {
    if (boardObstaclesPos[n - rq][i] !== "X") {
      ret++;
    }
    if (boardObstaclesPos[n - rq][i] === "X") {
      break;
    }

    //  console.log(boardObstaclesPos[n - rq][i]);
  }
  return ret - 1;
}

function attackRight(n, boardObstaclesPos, rq, cq) {
  // function: Queen Attack From The Right Direction
  // input: n, boardObstaclesPos,rq,cq
  // output: count Square

  let ret = 0;
  for (let i = n - cq; i < n; i++) {
    ret++;
    if (boardObstaclesPos[n - rq][i] !== "X") {
      ret++;
    }
    if (boardObstaclesPos[n - rq][i] === "X") {
      break;
    }
  }

  return ret - 1;
}

function attackTop(n, boardObstaclesPos, rq, cq) {
  // function: Queen Attack From The Top Direction
  // input: n, boardObstaclesPos,rq,cq
  // output: count Square

  //43

  let ret = 0;
  for (let i = n - rq; i >= 0; i--) {
    if (boardObstaclesPos[i][n - cq] !== "X") {
      ret++;
    }
    if (boardObstaclesPos[i][n - cq] === "X") {
      break;
    }
  }

  return ret - 1;
}

function attackBottom(n, boardObstaclesPos, rq, cq) {
  // function: Queen Attack From The Bottom Direction
  // input: n, boardObstaclesPos,rq,cq
  // output: count Square

  //43

  let ret = 0;
  for (let i = n - rq; i < n; i++) {
    if (boardObstaclesPos[i][n - cq] !== "X") {
      ret++;
    }
    if (boardObstaclesPos[i][n - cq] === "X") break;
  }

  return ret - 1;
}

function attackDiagonalTopLeft(n, boardObstaclesPos, rq, cq) {
  let ret = 0;

  for (let i = n - rq; i >= 0; i--) {
    //console.log(boardObstaclesPos[i][i]);
    if (boardObstaclesPos[i][i] !== "X") {
      ret++;
    }
    if (boardObstaclesPos[i][i] === "X") break;
  }

  return ret - 1;
}

function attackDiagonalTopRight(n, boardObstaclesPos, rq, cq) {
  let ret = 0;

  for (let i = n - rq; i >= 0; i--) {
    //console.log(boardObstaclesPos[i][n - i - 1]);
    if (boardObstaclesPos[i][n - i - 1] !== "X") ret++;
    if (boardObstaclesPos[i][n - i - 1] === "X") break;
  }

  return ret - 1;
}

function attackDiagonalBottomRight(n, boardObstaclesPos, rq, cq) {
  let ret = 0;

  for (let i = n - rq; i < n; i++) {
    console.log(boardObstaclesPos[i][n - i - 1]);
  }

  return ret - 1;
}

// Complete the queensAttack function below.
function queensAttack(n, k, rq, cq, obstacles) {
  let board = initBoard(n);
  let boardQueenPos = initQueenPos(board, rq, cq);
  let boardObstaclesPos = initObstaclesPos(n, boardQueenPos, obstacles);
  console.log(boardObstaclesPos);
  let countLeft = attackLeft(n, boardObstaclesPos, rq, cq);
  let countRight = attackRight(n, boardObstaclesPos, rq, cq);
  let countTop = attackTop(n, boardObstaclesPos, rq, cq);
  let countBottom = attackBottom(n, boardObstaclesPos, rq, cq);
  let countDiagonalTopLeft = attackDiagonalTopLeft(
    n,
    boardObstaclesPos,
    rq,
    cq
  );
  let countDiagonalTopRight = attackDiagonalTopRight(
    n,
    boardObstaclesPos,
    rq,
    cq
  );

  let countDiagonalBottomRight = attackDiagonalBottomRight(
    n,
    boardObstaclesPos,
    rq,
    cq
  );
  return (
    countLeft +
    countRight +
    countTop +
    countBottom +
    countDiagonalTopLeft +
    countDiagonalTopRight +
    countDiagonalBottomRight
  );
}

const n = 5;
const k = 3;
const rq = 3;
const cq = 3;
const obstacles = [
  [5, 5],
  [4, 2],
  [2, 3],
];
queensAttack(n, k, rq, cq, obstacles);
