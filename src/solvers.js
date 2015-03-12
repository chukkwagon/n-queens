/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});

  // var rows = solution.rows();
  // for(var row = 0; row < rows.length; row++){
  //   for(var item = 0; item < rows[row].length; item++){
  //     solution.togglePiece(row,item);
  //     if(solution.hasAnyRooksConflicts()){
  //       solution.togglePiece(row,item);
  //     }
  //   }
  // }

  var innerFind = function(startRow){

    if(startRow === n) {
      console.log(board);
      return board;
    } else {
      for (var col = 0; col < n; col++){
        board.togglePiece(startRow, col);

        if(!board.hasAnyRooksConflicts()){
          innerFind(startRow+1);
        }
        board.togglePiece(startRow,col);
      }
    }
  };

  innerFind(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  console.log(board.rows());
  return board.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var results = 0;
  var board = new Board({n:n});

  var innerCount = function(startRow){

    if(startRow === n) {
      results++;
    } else {
      for(var col = 0; col < n; col++){
        board.togglePiece(startRow, col);

        if(!board.hasAnyRooksConflicts()){
          innerCount(startRow+1);
        }
        board.togglePiece(startRow,col);
      }
    }
  };

  innerCount(0);
  console.log('Number of solutions for ' + n + ' rooks:', results);
  return results;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n});

  var innerFind = function(startRow){

    if(startRow === n) {
      return;
    } else {
      for (var col = 0; col < n; col++){
        solution.togglePiece(startRow, col);

        if(!board.hasAnyQueensConflicts()){
          innerFind(startRow+1);
        }
        board.togglePiece(startRow,col);
      }
    }
  };

  innerFind(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var results = 0;
  var board = new Board({n:n});

  var innerCount = function(startRow){

    if(startRow === n) {
      results++;

    } else {
      for(var col = 0; col < n; col++){
        board.togglePiece(startRow, col);

        if(!board.hasAnyQueensConflicts()){
          innerCount(startRow+1);
        }
        board.togglePiece(startRow,col);
      }
    }
  };

  innerCount(0);

  console.log('Number of solutions for ' + n + ' queens:', results);
  return results;
};
