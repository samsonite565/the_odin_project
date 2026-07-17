/**
 *Factory function that initiates the player object
 @returns ([scoreValue, appendsScore]) adds the the remaining score, 
  gets the remaining score of the player object.
 */
function player() {
    let score = 0;
    let gamesPlayed = 0;
    const maxGames = 5;//Max games to be played is 5

    /**
     * gamesLeft.
     */
    function gamesLeft() {
        return maxGames - gamesPlayed;
    };
    /**
     * addScore.
     */
    function addScore() {
        score++;
    }
    /**
     * getScore.
     */
    function getScore() {
        return score;
    }

    // Main Return 
    return {
        addScore,
        getScore,
        gamesLeft,
    };
}


/**
 * Game factory function. that creates a game object. 
 *It hs an Inheritence from the player object where.
 Create the board, checks for wins and resets the board.
 * @returns {Function,Function,Function,Function} winCombos, playGame, checkWinner, resetBoard
 */
function game() {
    // Creating the board Array
    const board = ["", "", "", "", "", "", "", "", ""]; //Board
    const gamePlayer = Object.create(player); //Inheritence 
    /**
     * getBoard.
     */
    const getBoard = () => board;

    /**
     * winCombos.
     */
    function winCombos() {
        let combos = []; //Combinations for wins
        for (let i = 0; i < 3; i++) {
            combos.push([i * 3, i * 3 + 1, i * 3 + 2]); //Rows
            combos.push([i, i + 3, i + 6]); //Columns
        }
        combos.push([0, 4, 8]); //Diagonals
        combos.push([2, 4, 6]); //Diagonals
        return combos;
    }

    /**
     * playGame.
     */
    function playGame() {
    }
    // Check the winning combos against a list of player's selections and if the list is correct return winner
    /**
     * checkWinner.
     */
    function checkWinner() {
        return { winCombos, gamePlayer }
    }
    /**
     * resetBoard.
     */
    function resetBoard() {
        return board.fill("");
    }

    return {
        getBoard,
        checkWinner,
        playGame,
        resetBoard
    }
}
