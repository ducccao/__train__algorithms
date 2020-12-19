let log = console.log;
let table = console.table;

function createSquareWithQueenOriginPos(n, r_q, c_q) {
  // function: create square with Queen original position
  // inpit: n, rq, cq
  // output: matrix nxn contains Queen
  let a = [];
  for (let i = 0; i < n; i++) {
    let b = [];
    for (let j = 0; j < n; j++) {
      if (r_q === i && c_q === j) {
        b.push("Q");
      } else {
        b.push(Math.floor(Math.random() * 4));
      }
    }
    a.push(b);
  }
  return a;
}

function getLeftSquares(n, r_q, c_q) {
  // function: caculating the amount of squares that stay left from the Queen
  // input: n, r_q, c_q
  // output: squares

  // do not delete - debug - important!
  // let a = createSquareWithQueenOriginPos(n, r_q, c_q);
  // table(a);

  let count = 0;
  for (let i = 0; i < c_q; i++) {
    // log(a[r_q][i]);
    count++;
  }

  return count;
}

function getRightSquares(n, r_q, c_q) {
  // function: caculating the amount of squares that stay right from the Queen
  // input: n, r_q, c_q
  // output: squares

  // important - debug
  let a = createSquareWithQueenOriginPos(n, r_q, c_q);
  table(a);

  let count = 0;
  for (let i = c_q; i < n; i++) {
    log(a[r_q][i]);
    count++;
  }
  return count;
}

function getTopSquares(n, r_q, c_q) {
  // function: caculating the amount of squares that stay top from the Queen
  // input: n, r_q, c_q
  // output: squares

  // important - debug
  // let a = createSquareWithQueenOriginPos(n, r_q, c_q);
  // table(a);

  let count = 0;
  for (let i = r_q; i >= 0; i--) {
    // log(a[i][c_q]);
    count++;
  }
  return count - 1;
}

function getBottomSquares(n, r_q, c_q) {
  // function: caculating the amount of squares that stay bottom from the Queen
  // input: n, r_q, c_q
  // output: squares

  // important - debug
  //let a = createSquareWithQueenOriginPos(n, r_q, c_q);
  //table(a);

  let count = 0;
  for (let i = r_q; i < n; i++) {
    //log(a[i][c_q]);
    count++;
  }

  return count - 1;
}

function getTopLeftDiagonalSquares(n, r_q, c_q) {
  // function: caculating the amount of squares that stay top-left from the Queen
  // input: n, r_q, c_q
  // output: squares

  // important - debug
  // let a = createSquareWithQueenOriginPos(n, r_q, c_q);
  // table(a);

  let count = 0;
  for (let i = 0; i < r_q; i++) {
    //  log(a[i][i]);
    count++;
  }
  return count - 1;
}

function getBottomRightDiagonalSquares(n, r_q, c_q) {
  // function: caculating the amount of squares that stay bottom-right from the Queen
  // input: n, r_q, c_q
  // output: squares

  // important - debug
  let a = createSquareWithQueenOriginPos(n, r_q, c_q);
  // table(a);

  let count = 0;
  for (let i = r_q; i < n; i++) {
    // log(a[i][i]);
    count++;
  }
  return count - 1;
}

function getTopRightDiagonalSquares(n, r_q, c_q) {
  // function: caculating the amount of squares that stay top-right from the Queen
  // input: n, r_q, c_q
  // output: squares

  // important - debug
  // let a = createSquareWithQueenOriginPos(n, r_q, c_q);
  // table(a);

  let count = 0;

  // carry column
  let carry = 0;
  for (let i = r_q; i >= 0; i--) {
    //log(a[i][c_q + carry]);

    carry++;
    count++;
  }

  return count - 1;
}

function getBottomLeftDiagonalSquares(n, r_q, c_q) {
  // function: caculating the amount of squares that stay bottom-left from the Queen
  // input: n, r_q, c_q
  // output: squares

  // important - debug
  // let a = createSquareWithQueenOriginPos(n, r_q, c_q);
  //table(a);

  let count = 0;

  // carry column
  let carry = 0;
  for (let i = r_q; i < n; i++) {
    //log(a[i][c_q + carry]);
    carry--;
    count++;
  }

  return count - 1;
}

function positionOfObstatcle(n, r_q, c_q, r_o, c_o) {
  // function: find position of the ostacle
  // input: obstacle
  // output: position itself

  if (r_q === r_o && c_q === c_o) return "SafePosition";

  // important do not delete
  // let chessboard = createSquareWithQueenOriginPos(n);
  // table(chessboard);

  // Left
  for (let i = c_q - 1; i >= 0; i--) {
    // log(chessboard[r_q][i]);
    if (i === c_o && r_q === r_o) return "Left";
  }

  // Right
  for (let i = c_q + 1; i < n; i++) {
    // log(chessboard[r_q][i]);
    if (i === c_o && r_q === r_o) return "Right";
  }

  // Top
  for (let i = r_q - 1; i >= 0; i--) {
    // log(chessboard[i][c_q]);
    if (i === r_o && c_q === c_o) return "Top";
  }

  // Bottom
  for (let i = r_q + 1; i < n; i++) {
    //log(chessboard[i][c_q]);
    if (i === r_o && c_q === c_o) return "Bottom";
  }

  // top left diagonal
  for (let i = r_q - 1; i >= 0; i--) {
    //log(chessboard[i][i]);
    if (i === r_o && i === c_o) return "TopLeftDiagonal";
  }

  // bottom right diagonal
  for (let i = c_q + 1; i < n; i++) {
    //  log(chessboard[i][i]);
    if (i === c_o && i === r_o) return "BottomRightDiagonal";
  }

  // top right diagonal
  let tr = 0;
  for (let i = r_q; i >= 0; i--) {
    //   log(chessboard[i][c_q + t1]);
    if (i === r_o && c_q + tr === c_o) {
      return "TopRightDiagonal";
    }
    tr++;
  }

  // bottom left diagonal
  let btl = 0;
  for (let i = r_q; i < n; i++) {
    // log(chessboard[i][c_q + btl]);
    if (i === r_o && c_q + btl === c_o) {
      return "BottomLeftDiagonal";
    }
    btl--;
  }

  // if all case above it does not return then the SafePosition
  return "SafePosition";
}

function getSquaresThatQueenCannotAttack(n, r_q, c_q, positionOfObstatcle) {
  // function: get all squares that the Queen cannot attack
  // input: position of the obstacle
  // output: Amount of square

  // important do not delete
  // let chessboard = createSquareWithQueenOriginPos(n);
  // table(chessboard);

  positionOfObstatcle = "BottomLeftDiagonal";
  switch (positionOfObstatcle) {
    case "Left": {
      let square = 0;
      for (let i = c_q - 1; i >= 0; i--) {
        // log(chessboard[r_q][i]);
        square++;
      }
      return square;
    }
    case "Right": {
      let square = 0;
      for (let i = c_q + 1; i < n; i++) {
        // log(chessboard[r_q][i]);
        square++;
      }
      log(square);
      return square;
    }
    case "Top": {
      let squares = 0;

      for (let i = r_q - 1; i >= 0; i--) {
        // log(chessboard[i][c_q]);
        squares++;
      }

      return squares;
    }
    case "Bottom": {
      let squares = 0;

      for (let i = r_q + 1; i < n; i++) {
        //    log(chessboard[i][c_q]);
        squares++;
      }

      return squares;
    }
    case "TopLeftDiagonal": {
      let squares = 0;

      for (let i = r_q; i >= 0; i--) {
        // log(chessboard[i][i]);
        squares++;
      }

      return squares - 1;
    }
    case "BottomRightDiagonal": {
      let squares = 0;

      for (let i = c_q; i < n; i++) {
        // log(chessboard[i][i]);
        squares++;
      }

      return squares - 1;
    }
    case "TopRightDiagonal": {
      let squares = 0;

      for (let i = r_q; i >= 0; i--) {
        //log(chessboard[i][r_q + c_q - i]);
        // finded algorithm !!! rq+cq-i
        squares++;
      }

      return squares - 1;
    }
    case "BottomLeftDiagonal": {
      let squares = 0;

      for (let i = r_q; i < n; i++) {
        //log(chessboard[i][r_q + c_q - i]);
        // algorithm is rq+cq-i
        squares++;
      }

      return squares - 1;
    }
    default:
      return 0;
  }
}

// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
  // if the size of matrix is 1 then return 0
  if (n === 1) {
    return 0;
  } else {
    // if there are not obstacles in array then Case A begin
    let sw = "";
    if (obstacles.length === 0 || obstacles[0].length === 0) {
      sw = "NoObstacle";
    } else {
      // else Case B
      sw = "Obstacles";
    }

    switch (sw) {
      case "NoObstacle": {
        // get left squares
        let left_squares = getLeftSquares(n, r_q, c_q);

        // get right squares
        let right_squares = getRightSquares(n, r_q, c_q);
        log(right_squares);
        // get top squares
        let top_squares = getTopSquares(n, r_q, c_q);
        // get bottom squares
        let bottom_squares = getBottomSquares(n, r_q, c_q);

        // get top left diagonal squares
        let top_left_diagonal_squares = getTopLeftDiagonalSquares(n, r_q, c_q);

        // get bottom right diagonal squares
        let bottom_right_diagonal_squares = getBottomRightDiagonalSquares(
          n,
          r_q,
          c_q
        );
        // get top right diagonal squares
        let top_right_diagonal_squares = getTopRightDiagonalSquares(
          n,
          r_q,
          c_q
        );

        // get bottom left diagonal squares
        let bottom_left_diagonal_squares = getBottomLeftDiagonalSquares(
          n,
          r_q,
          c_q
        );
        // result
        let K =
          left_squares +
          right_squares +
          top_squares +
          bottom_squares +
          top_left_diagonal_squares +
          bottom_right_diagonal_squares +
          top_right_diagonal_squares +
          bottom_left_diagonal_squares;

        return K;
      }
      case "Obstacles": {
        // get left squares
        let left_squares = getLeftSquares(n, r_q, c_q);

        // get right squares
        let right_squares = getRightSquares(n, r_q, c_q);
        // get top squares
        let top_squares = getTopSquares(n, r_q, c_q);
        // get bottom squares
        let bottom_squares = getBottomSquares(n, r_q, c_q);

        // get top left diagonal squares
        let top_left_diagonal_squares = getTopLeftDiagonalSquares(n, r_q, c_q);

        // get bottom right diagonal squares
        let bottom_right_diagonal_squares = getBottomRightDiagonalSquares(
          n,
          r_q,
          c_q
        );
        // get top right diagonal squares
        let top_right_diagonal_squares = getTopRightDiagonalSquares(
          n,
          r_q,
          c_q
        );

        // get bottom left diagonal squares
        let bottom_left_diagonal_squares = getBottomLeftDiagonalSquares(
          n,
          r_q,
          c_q
        );

        let K =
          left_squares +
          right_squares +
          top_squares +
          bottom_squares +
          top_left_diagonal_squares +
          bottom_right_diagonal_squares +
          top_right_diagonal_squares +
          bottom_left_diagonal_squares;

        // Get specificly position of all those obstacles
        let position_obstacles = [];

        for (let i = 0; i < obstacles.length; i++) {
          position_obstacles.push(
            positionOfObstatcle(n, r_q, c_q, obstacles[i][0], obstacles[i][1])
          );
        }

        // log(position_obstacles);

        // debug
        // get position of the obstacle
        // let pos_obstacle = positionOfObstatcle(
        //   n,
        //   r_q,
        //   c_q,
        //   obstacles[0][0],
        //   obstacles[0][1]
        // );

        // get all squares from position array
        let squares_from_position_array = [];

        for (let i = 0; i < position_obstacles.length; i++) {
          squares_from_position_array.push(
            getSquaresThatQueenCannotAttack(n, r_q, c_q, position_obstacles[i])
          );
        }

        // debug
        // get squares that Queen cannot attack at this position
        // let squares_that_Queen_cannot_attack = getSquaresThatQueenCannotAttack(
        //   n,
        //   r_q,
        //   c_q,
        //   pos_obstacle
        // );

        // Get L - that variable contain the total squares that the Queen cannot attack
        let L = 0;

        for (let i = 0; i < squares_from_position_array.length; i++) {
          L += squares_from_position_array[i];
        }

        // result right there
        return K - L;
      }
    }
  }
}

let n = 4;
let k = 0;
let r_q = 3;
let c_q = 3;
let obstacles = [];

// big bang right there
log(queensAttack(n, k, r_q, c_q, obstacles));

// Solution thinking

// if the square's size is 1 then return 0 'cause the Queen cannot move and attacking any squares

// else

// Case A: - The Queen does not confronted by any obstacles
// + Get all squares at position that is left, right, top, bottom, and 4 diagonals
//      + getLeftSquares()
//      + getRightSquares()
//      + getTopSquares()
//      + getBottomSquares()

//      + getTopLeftDiagonalSquares()
//      + getBottomRightDiagonalSquares()
//      + getTopRightDiagonalSquares()
//      + getBottomLeftDiagonalSquares()
// + Return the amount of squares that have been calculated

// Case B: - The Queen confronted by array of Obstacles
//  + Get all squares calculated in Case A - temporarily call K
//  + Check out where the obstacles[i] was
//      + positionOfObstatcles( obstacles)
//          ****** All case of return: ********
//          + Left, + Right, + Top, + Bottom
//          + TopLeftDiagonal, BottomRightDiagonal
//          + TopRightDiagonal, BottomLeftDiagonal
//          + SafePosition - mean the queen cannot not attack at this postion 'cause the rule of Queen's move
//      + Calculating the square beyond the obstacle[i] - temporarily call L
//          + Case: Left
//          + getLeftSquaresBeyondObstacle(n,r_obs,c_obs)
//          + Case: Right
//          + getRightSquaresBeyondObstacle(n,r_obs,c_obs)
//          + Case: Top
//          + getTopSquaresBeyondObstacle(n,r_obs,c_obs)
//          + Case: Bottom
//          + getBottomSquaresBeyondObstacle(n,r_obs,c_obs)
//          + Case: TopLeftDiagonal
//          + getTopLeftDiagonalSquaresBeyondObstacle(n,r_obs,c_obs)
//          + Case: BottomRightDiagonal
//          + getBottomRightDiagonalSquaresBeyondObstacle(n,r_obs,c_obs)
//          + Case: TopRightDiagonal
//          + getTopRightDiagonalSquaresBeyondObstacle(n,r_obs,c_obs)
//          + Case: BottomLeftDiagonal
//          + getBottomLeftDiagonalSquaresBeyondObstacle(n,r_obs,c_obs)
//          + Case: SafePosition
//          + return 0
//  + Calculating the K subtract by L
//  + get the result
