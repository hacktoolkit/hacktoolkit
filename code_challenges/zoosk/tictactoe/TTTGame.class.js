/**
 * author: akajontsai-devel@yahoo.com
 * file: TTTGame.class.js
 *
 */
function TTTGame() {
    /**
     * Potentially allow for variants of the TTT with any board size
     * To play a variable-size TTT:
     * - Change BOARD_ROWS and BOARD_COLS to desired dimensions
     * - Existing JS logic would be reusable
     * - Change HTML implementation to be empty container and use JS to draw boxes
     */
    var BOARD_ROWS = 3;
    var BOARD_COLS = 3;

    /**
     * An enum of the players
     */
    TTTGame.Player = { X: 'x', O: 'o' };

    /**
     * The possible game states after a move
     */
    TTTGame.State = {
	CONTINUE: 1,
	LAST_MOVE_WON: 2,
	STALEMATE: 3
    };

    /**
     * A two-dimensional array representing the board state.
     * Each coordinate will contain a Player or undefined.
     */
    this.board = null;
    this.whoseMove = null;
    this.currentState = null;

    /**
     * A function that is called after each move. This function updates
     * the Board and returns the new State.
     * @param x the x-axis of the move
     * @param y the y-axis of the move
     * @return the new State of the game or false for a non-valid move
     */
    this.doMove = function(x, y) {
	var result = false;
	var valid = this.isValidMove(x, y);
	if (valid) {
	    this.board[x][y] = this.whoseMove;
	    this.checkBoard();
	    result = this.currentState;
	    if (result == TTTGame.State.CONTINUE) {
		this.whoseMove = this.otherPlayer(this.whoseMove);
	    }
	}
	return result;
    }

    this.checkBoard = function() {
	if (this.playerHasWon()) {
	    this.currentState = TTTGame.State.LAST_MOVE_WON;
	} else if (!this.validMovesRemain()) {
	    this.currentState = TTTGame.State.STALEMATE;
	} else {
	    this.currentState = TTTGame.State.CONTINUE;
	}
    }

    this.playerHasWon = function() {
	var hasWon = false;
	var tests = [winByRow, winByCol, winByDiagonal];
	for (var i=0; i < tests.length && !hasWon; ++i) {
	    hasWon = tests[i](this.board);
	}
	return hasWon;
    }

    /**
     * @return the winning row, if any
     */
    function winByRow(board) {
	var winningRow = false;
	var player = null;
	for (var i=0; i < BOARD_ROWS; ++i) {
	    var broken = false;
	    var first = true;
	    for (var j=0; j < BOARD_COLS && !broken; ++j) {
		if (first) {
		    player = board[i][j];
		    first = false;
		} else if (!player || player != board[i][j]) {
		    broken = true;
		}
	    }
	    if (!broken) {
		winningRow = i+1;
		break;
	    }
	}

	return winningRow;
    }

    /**
     * @return the winning col, if any
     */
    function winByCol(board) {
	var winningCol = false;
	var player = null;
	for (var j=0; j < BOARD_COLS; ++j) {
	    var broken = false;
	    var first = true;
	    for (var i=0; i < BOARD_ROWS && !broken; ++i) {
		if (first) {
		    player = board[i][j];
		    first = false;
		} else if (!player || player != board[i][j]) {
		    broken = true;
		}
	    }
	    if (!broken) {
		winningCol = j+1;
		break;
	    }
	}

	return winningCol;
    }

    /**
     * @return the winning diagonal, if any
     */
    function winByDiagonal(board) {
	var winningDiagonal = false;
	var first, player, broken;
	var i, j;

	// check for \
	if (!winningDiagonal) {
	    first = true;
	    player = null;
	    broken = false;
	    for (i=0, j=0; i < BOARD_ROWS && j < BOARD_COLS; ++i, ++j) {
		if (first) {
		    player = board[i][j];
		    first = false;
		} else if (!player || player != board[i][j]) {
		    broken = true;
		    break;
		}
	    }
	    if (!broken) {
		winningDiagonal = '\\';
	    }
	}

	// check for /
	if (!winningDiagonal) {
	    first = true;
	    player = null;
	    broken = false;
	    for (i=0, j=BOARD_COLS - 1;
		 i < BOARD_ROWS && j >= 0;
		 ++i, --j) {
		if (first) {
		    player = board[i][j];
		    first = false;
		} else if (!player || player != board[i][j]) {
		    broken = true;
		    break;
		}
	    }
	    if (!broken) {
		winningDiagonal = '/';
	    }
	}

	return winningDiagonal;
    }

    this.validMovesRemain = function() {
	var movesRemain = false;
	for (var i=0; i < BOARD_ROWS; ++i) {
	    for (var j=0; j < BOARD_COLS; ++j) {
		if (this.isValidMove(i, j)) {
		    movesRemain = true;
		    break;
		}
	    }
	}
	return movesRemain;
    }

    this.isValidMove = function(x, y) {
	var valid = false;
	if (this.currentState == TTTGame.State.CONTINUE) {
	    valid = this.board[x][y] == undefined;
	}
	return valid;
    }

    this.randomPlayer = function() {
	var randPlayer = TTTGame.Player.X;
	if (Math.random() > .5) {
	    randPlayer = TTTGame.Player.O;
	}
	return randPlayer;
    }

    this.otherPlayer = function(player) {
	var other = (player == TTTGame.Player.X)? TTTGame.Player.O : TTTGame.Player.X;
	return other;
    }

    this.resetGame = function() {
	this.board = [[], [], []];
	this.currentState = TTTGame.State.CONTINUE;
	this.whoseMove = this.randomPlayer();
    };
}
