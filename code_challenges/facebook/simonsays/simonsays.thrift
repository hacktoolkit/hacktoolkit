# Thrift Simon Says
# Puzzle Master (1051962371@facebook.com)
#
# This file describes the game interface for your Simon Says client to
# interact with the Simon Says server. Compile this file using a Thrift
# compiler to generate skeleton code or stubs in the language(s) of your
# choice.
#
# The rules of Simon Says are simple:
#
# 1. Connecting to the Simon Says server automatically starts a game.
#
# 2. Your client should call startTurn() to begin a turn, receiving a list of
#    colors.
#
# 3. Your client must then call chooseColor() multiple times, once for each
#    color in the returned list. This must be done in order, with the correct
#    colors. If a false value is ever returned for chooseColor(), it means
#    you have chosen the wrong color, and your client has reset the game,
#    call startTurn() to continue again.
#
# 4. Once finished, call endTurn() and check the return value. False means the
#    game is not yet over, and your client should call startTurn() again to
#    get the next list of colors. If endTurn() ever returns true, it means
#    you are ready to win! Invoke winGame() to win the game!
#
# 5. Calling the wrong color, calling endTurn() prematurely, or calling excess
#    colors will all fail. The server will reset the color sequence back to
#    length 1 and your client is required to call startTurn() again to start
#    over.

enum Color {
  RED    = 1,
  YELLOW = 2,
  GREEN  = 3,
  BLUE   = 4
}

service SimonSays {
  list<Color> startTurn(); // Returns list of colors to call in order
  bool chooseColor(1:Color colorChosen); // Returns true if correct color used
  bool endTurn(); // Returns true when you are ready to win
  async void winGame(); // Call this to win the game, but only if you are ready
}
