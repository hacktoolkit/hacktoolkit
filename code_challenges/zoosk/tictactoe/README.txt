akajontsai-devel@yahoo.com
2012-01

Tic Tac Toe Coding Questions for Zoosk

List of Files:
* index.html        the main HTML page
* TTTGame.class.js  Tic Tac Toe game class
* script.js         Javascript for page UI
* style.css         stylesheet
* Javascript Library
  * Externally sourced YUI3
* Images
  * img/ttt_o.png
  * img/ttt_x.png
* CSS Templates
  * lib/yui/reset-fonts-grids.css
* README.txt        this file

1)

I used divs because they are way better than tables, and you can position everything with CSS.

I tried to use 3 divs for rows and 3 divs for columns (for 6 total elements), and use CSS to position them on top of each other, but I quickly discovered the problem of overlaid elements only receiving one click element for the top-most element.

Strategies/workarounds are discussed at:
http://stackoverflow.com/questions/1401658/html-overlay-which-allows-clicks-to-fall-through-to-elements-behind-it
http://www.vinylfox.com/forwarding-mouse-events-through-layers/

But for this exercise, that would be an overkill solution.

2)

See Code

3)

Changed a few things from the provided function stubs.
- I made a TTTGame class and moved most of the stuff like enum definitions inside the class as static variables, to prevent polluting the global namespace.
- Changed the function onMove() to doMove(), and also the signature to just take x/y arguments because the game should already be aware of the current player
- Made a fully function game with random player start, scoreboard, and new game button
- I did decide to splurge a little bit in one area of the code, to make the problem a bit more challenging, and the code more robust overall.
- Allowed for N*N board of any size, or for that matter, M*N. Just only need to change two variables and the Javascript all works without further modifications. HTML would need to be redone.
- The game knows when it's over, and the game board UI stops interacting until you start a new game
