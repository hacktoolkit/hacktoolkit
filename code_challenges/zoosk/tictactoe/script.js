/**
 * author: akajontsai-devel@yahoo.com
 * file: script.js
 *
 * This is JS for the page and UI controls for the game
 */

YUI().use('node', function (Y) {
    var tttBoard = Y.one('#ttt_board');
    var scoreboard = Y.one('#scoreboard');
    var tttGame = new TTTGame();
    var wins = { 'x' : 0, 'o' : 0 };

    var STATE_MAP = { 1 : 'Continue', 2 : 'Last Move Won', 3 : 'Stalemate' };

    function updateScoreboard() {
	Y.one('#scoreboard_game_state').setContent(STATE_MAP[tttGame.currentState]);
	Y.one('#scoreboard_turn').setContent(tttGame.whoseMove.toUpperCase() + "'s turn");
	updateScoreboardWins();
    }

    function updateScoreboardPosition(x, y) {
	var message = "Row: " + x + ", Col: " + y;
	Y.one('#scoreboard_position').setContent(message);
    }

    function updateScoreboardWins() {
	var message = "X: " + wins[TTTGame.Player.X] + ", O: " + wins[TTTGame.Player.O];
	Y.one('#scoreboard_wins').setContent(message);
    }


    function getRowCol(cell) {
	var id = cell.get('id');
	var cellParts = id.split('_');
	var rowCol = { row: cellParts[1],
		       col: cellParts[2]
	};
	return rowCol;
    }

    function handleTTTCellMouseover(e) {
	var cell = e.target;
	var rowCol = getRowCol(cell);
	if (tttGame.isValidMove(rowCol.row, rowCol.col)) {
	    var player = tttGame.whoseMove;
	    cell.addClass('filled-' + player);
	}
	updateScoreboardPosition(rowCol.row, rowCol.col);
    }

    function handleTTTCellMouseout(e) {
	var cell = e.target;
	var player = tttGame.whoseMove;
	var rowCol = getRowCol(cell);
	if (tttGame.isValidMove(rowCol.row, rowCol.col)) {
	    cell.removeClass('filled-' + player);
	}
	updateScoreboardPosition('none', 'none');
    }

    function handleTTTCellClick(e) {
	var cell = e.target;
	var rowCol = getRowCol(cell);
	var player = tttGame.whoseMove;
	var result = tttGame.doMove(rowCol.row, rowCol.col);
	if (result) {
	    cell.addClass('filled-' + player);
	    if (tttGame.currentState == TTTGame.State.LAST_MOVE_WON) {
		wins[player] += 1;
	    }
	    updateScoreboard();
	}
    }

    function handleScoreboardControls(e) {
	var target = e.target;
	var id = target.get('id');
	if (id == 'new_game') {
	    newGame();
	}
    }

    function newGame() {
	tttGame.resetGame();
	var cells = Y.all('.ttt-cell');
	for (cell in cells) {
	    cells.removeClass('filled-o');
	    cells.removeClass('filled-x');
	}
	updateScoreboard();
    }

    tttBoard.delegate('click', handleTTTCellClick, '.ttt-cell');
    tttBoard.delegate('mouseover', handleTTTCellMouseover, '.ttt-cell');
    tttBoard.delegate('mouseout', handleTTTCellMouseout, '.ttt-cell');
    scoreboard.delegate('click', handleScoreboardControls, 'button');

    newGame();
});
