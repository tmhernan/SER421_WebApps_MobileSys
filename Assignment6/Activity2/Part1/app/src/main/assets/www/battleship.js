// set grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;
var guess = 0;
var username;

/* lazy way of tracking when the game is won: just increment hitCount on every hit
   in this version, and according to the official Hasbro rules (http://www.hasbro.com/common/instruct/BattleShip_(2002).PDF)
   there are 17 hits to be made in order to win the game (you can decide for random ones to create only 4 ships (2,3,4,5 hits or a 6t one with 6 hits):
      Carrier     - 5 hits
      Battleship  - 4 hits
      Destroyer   - 3 hits
      Submarine   - 3 hits
      Patrol Boat - 2 hits
*/
var hitCount = 0;
var gameBoard = [];

// very simple form
var message = 'restarted';

function welcomeUser() {
    username = document.getElementById('username').value;
    document.getElementById('form').innerHTML =
        'Welcome ' + username + ',<br>You are now ready to play battleship. <br> Click the board to fire at a ship. Try to sink every battleship!';

    setGame();
}

function setGame() {
    // set grid rows and columns and the size of each square
    guess = 0;
    message = 'restarted';

    /* lazy way of tracking when the game is won: just increment hitCount on every hit
	   in this version, and according to the official Hasbro rules (http://www.hasbro.com/common/instruct/BattleShip_(2002).PDF)
	   there are 17 hits to be made in order to win the game (if you want to you can create ships with 2,3,4,5 - makes the random algorithm easier, remember to change hitcount then:
	      Carrier     - 5 hits
	      Battleship  - 4 hits
	      Destroyer   - 3 hits
	      Submarine   - 3 hits
	      Patrol Boat - 2 hits
	*/
    hitCount = 0;

    /* create the 2d array that will contain the status of each square on the board
	   and place ships on the board (later, create function for random placement!)

	   0 = empty, 1 = part of a ship, 2 = a sunken part of a ship, 3 = a missed shot

	   10 x 10, a win is 17 hits
	*/

    // 1. Loop through ship length and randomly assign coordinates for the first ship length:
    // 2. Start with chosing a random row within boundaries w/ math random
    //		a. Check if ship is already there: value is equal to 1
    //			i.  If so: go back to choosing a random number: Step 2
    //			ii. If not: choose a random direction
    //				A. If verticalDown: loop through the ship length by adding
    //					to the col index and for every location:
    //							I. check if a ship is already there: val === 0
    //							II. if it's a boundary: if index + shipslenght > 9, go back to step ii
    //				B. If verticalUp: loop through the ship length by subtracting
    //					to the col index and for every location:
    //							I. check if a ship is already there: val === 0
    //							II. if it's a boundary: if index - shipslenght < 9, go back to step ii
    //				C. If horizontalRight: loop through the ship length by adding
    //					to the row index and for every location:
    //							I. check if a ship is already there: val === 0
    //							II. if it's a boundary: if index + shipslenght > 9, go back to step ii
    //				D. If horizontalLeft: loop through the ship length by subtracting
    //					to the row index and for every location:
    //							I. check if a ship is already there: val === 0
    //							II. if it's a boundary: if index - shipslenght < 0, go back to step ii
    // REPEAT UNTIL SHIPSLENGHT ARRAY IS DONE

    // 3. If any steps A-D pass, add a value of '1' to the coordinate
    // 4. Once shipsLength array is completed, fill the other parts of the board with zeros
    //		a. Two demensional loop through, check if value is a one
    //			i. If not add a zero, if so, keep looping
    //

    //fill array w/ zeros
    /*
    for (let a = 0; a < 10; a++) {
        gameBoard[a] = Array(10).fill(0);
	}
	*/

    gameBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    console.log('the gameboard should be zero');
    console.log(gameBoard);

    //5 ships
    //gameboard[row][col]
    shipsLength = [2, 3, 3, 4, 5];

    const directionOptions = {
        horizontalLeft: 0,
        horizontalRight: 1,
        verticalUp: 2,
        verticalDown: 3
    };

    //letters used: a, s, i, j, z, c

    for (var s = 0; s < shipsLength.length; s++) {
        //choose row/column coordinate randomly
        var randCol = Math.floor(Math.random() * 10);
        var randRow = Math.floor(Math.random() * 10);

        //console.log('in main loop and random row is ' + randRow + ' and random col is ' + randCol);

        //if the randomly chosen coordinate is 1, loop until the coordinate is 0
        while (gameBoard[randRow][randCol] === 1) {
            randCol = Math.floor(Math.random() * 10);
            randRow = Math.floor(Math.random() * 10);
        }
        console.log('The new random row is: ' + randRow + ' and random col is ' + randCol);

        //if needed to keep going until this ship.length is assigned
        fillingLoop: while (true) {
            var direction = Math.floor(Math.random() * 4);
            var collisions = 0;

            //console.log('The direction is: ' + direction);

            if (direction === directionOptions.verticalDown) {
                //check if it's in bounds:
                if (randRow + shipsLength[s] <= 9) {
                    //loop through ship length check for 1's/collisons going vertical down
                    for (var z = 0; z < shipsLength[s]; z++) {
                        if (gameBoard[randRow + z][randCol] === 1) {
                            collisions++;
                        }
                    }
                    if (collisions === 0) {
                        for (var c = 0; c < shipsLength[s]; c++) {
                            gameBoard[randRow + c][randCol] = 1;
                            console.log('VD: [' + randRow + '+' + c + ']' + ' [' + randCol + ']');
                        }
                        console.log('In vertical down. Ship length is ' + shipsLength[s] + ' Coordinate is: [' + randRow + ', ' + randCol + ']');
                        break fillingLoop;
                    }
                }
            }

            if (direction === directionOptions.verticalUp) {
                //check if it's in bounds:
                if (randRow - shipsLength[s] >= 0) {
                    //loop through ship length check for 1's/collisons going vertical down
                    for (var z = 0; z < shipsLength[s]; z++) {
                        if (gameBoard[randRow - z][randCol] === 1) {
                            collisions++;
                        }
                    }
                    if (collisions === 0) {
                        for (var c = 0; c < shipsLength[s]; c++) {
                            gameBoard[randRow - c][randCol] = 1;
                            console.log('VU: [' + randRow + '-' + c + ']' + ' [' + randCol + ']');
                        }
                        console.log('In vertical up. Ship length is ' + shipsLength[s] + ' Coordinate is: [' + randRow + ', ' + randCol + ']');
                        break fillingLoop;
                    }
                }
            }
            if (direction === directionOptions.horizontalRight) {
                //check if it's in bounds:
                if (randCol + shipsLength[s] <= 9) {
                    //loop through ship length check for 1's/collisons going vertical down
                    for (var z = 0; z < shipsLength[s]; z++) {
                        if (gameBoard[randRow][randCol + z] === 1) {
                            collisions++;
                        }
                    }
                    if (collisions === 0) {
                        for (var c = 0; c < shipsLength[s]; c++) {
                            gameBoard[randRow][randCol + c] = 1;
                            console.log('HR: [' + randRow + ']' + ' [' + randCol + '+' + c + ']');
                        }
                        console.log('In Horizontal Right. Ship length is ' + shipsLength[s] + ' Coordinate is: [' + randRow + ', ' + randCol + ']');
                        break fillingLoop;
                    }
                }
            }
            if (direction === directionOptions.horizontalLeft) {
                //check if it's in bounds:
                if (randCol - shipsLength[s] >= 0) {
                    //loop through ship length check for 1's/collisons going vertical down
                    for (var z = 0; z < shipsLength[s]; z++) {
                        if (gameBoard[randRow][randCol - z] === 1) {
                            collisions++;
                        }
                    }
                    if (collisions === 0) {
                        for (var c = 0; c < shipsLength[s]; c++) {
                            gameBoard[randRow][randCol - c] = 1;
                            console.log('HL: [' + randRow + ']' + ' [' + randCol + '-' + c + ']');
                        }
                        console.log('In Horizontal Left. Ship length is ' + shipsLength[s] + ' Coordinate is: [' + randRow + ', ' + randCol + ']');
                        break fillingLoop;
                    }
                }
            }

            //set collisons back to zero
            var collisions = 0;
        }
    }

    //fill the rest of the gameboard with zeros
    //letters used: a, s, i, j, z, c
    console.log('New game board: ');

    console.log(gameBoard);

    var gameBoardContainer = document.getElementById('gameboard');
    // gameBoardContainer.setAttribute("hidden", false);

    // make the grid columns and rows
    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            // create a new div HTML element for each grid square and make it the right size
            var square = document.createElement('div');
            gameBoardContainer.appendChild(square);

            // give each div element a unique id based on its row and column, like "s00"
            square.id = 's' + j + i;
            square.classList.add('gameGrid');

            // set each grid square's coordinates: multiples of the current row or column number
            var topPosition = j * squareSize;
            var leftPosition = i * squareSize;

            // use CSS absolute positioning to place each grid square on the page
            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';
        }
    }
    // set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
    gameBoardContainer.addEventListener('click', fireTorpedo, false);

    //enable the restart button
    document.getElementById('restartBtn').disabled = false;

    document.getElementById('btnContainer').style.top = '500px';
}

function showHistory() {
    if (document.getElementById('guessHistoryDetails').hasAttribute('hidden')) {
        document.getElementById('historyBtn').innerHTML = 'Hide History';
        document.getElementById('guessHistoryDetails').removeAttribute('hidden');
    } else {
        document.getElementById('guessHistoryDetails').setAttribute('hidden', true);
        document.getElementById('historyBtn').innerHTML = 'Show History';
    }
}

function showRecord() {
    if (document.getElementById('recordDetails').hasAttribute('hidden')) {
        document.getElementById('recordBtn').innerHTML = 'Hide Record';
        document.getElementById('recordDetails').removeAttribute('hidden');
    } else {
        document.getElementById('recordDetails').setAttribute('hidden', true);
        document.getElementById('recordBtn').innerHTML = 'Show Record';
    }
}

function restartGame() {

    // clear guess history
    document.getElementById('guessHistoryDetails').innerHTML = '';
    document.getElementById('recordDetails').innerHTML += username + ' ' + message + ' game. <br>';
    setGame();
}

// initial code via http://www.kirupa.com/html5/handling_events_for_many_elements.htm:
function fireTorpedo(e) {
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
    if (e.target !== e.currentTarget) {
        // extract row and column # from the HTML element's id
        var row = e.target.id.substring(1, 2);
        var col = e.target.id.substring(2, 3);

        guess = guess + 1;
        if (guess > 60) {
            message = 'lost';
            alert('Too many tries you lost: ' + guess + ' tries.');
            Android.done('lost', username);
            return;
        }

        // if player clicks a square with no ship, change the color and change square's value
        if (gameBoard[row][col] == 0) {
            //if player clicks a square w/ no ship and that click is 60th click or greater
            if (guess >= 60) {
                message = 'lost';
                alert('Too many tries you lost: ' + guess + ' tries. ');
            }
            //a miss. the square is colored grey, the history details are updated
            else {
                e.target.style.background = '#bbb';
                // set this square's value to 3 to indicate that they fired and missed
                gameBoard[row][col] = 3;
                document.getElementById('guessHistoryDetails').innerHTML += 'guess nr: ' + guess + ': miss <br>';
            }

            // if player clicks a square with a ship, change the color and change square's value
        } else if (gameBoard[row][col] == 1) {
            e.target.style.background = 'red';
            // set this square's value to 2 to indicate the ship has been hit
            gameBoard[row][col] = 2;
            document.getElementById('guessHistoryDetails').innerHTML += 'guess nr: ' + guess + ': hit <br>';

            // increment hitCount each time a ship is hit
            hitCount++;
            // this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
            if (hitCount == 17) {
                message = 'won';
                alert('All enemy battleships have been defeated! You win! It took you ' + guess + ' tries. ');
                Android.done('won', username);
            }

            // if player clicks a square that's been previously hit, let them know
        } else if (gameBoard[row][col] > 1) {
            alert('Stop wasting your torpedos! You already fired at this location.');
            document.getElementById('guessHistoryDetails').innerHTML += 'guess nr: ' + guess + ': wasted <br>';
        }
    }
    e.stopPropagation();
}
