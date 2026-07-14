
/**
 * Init of the player. Defines the chararstics of the player
 *
 * @pairam {human_player} playerName
 * @returns{}
 */
function player() {
    let score = 0;
    let gamesPlayed = 0;
    const maxGames = 5;//Max games to be played is 5

    function gamesLeft() {
        return maxGames - gamesPlayed;
    };
    function addScore() {
        score++;
    }
    function getScore() {
        return score;
    }


    // Main Return 
    return {
        addScore,
        getScore,
        gamesPlayed,
        gamesLeft,
    };
}


/**
 * createBoard factory function.
 * Desc: Creates the inital board for the game 
 * @returns {[drawBoard,board]|{function,Array}} an array of 3 rows and 3 columns
 */
function game() {
    // Creating the board array
    const board = [];
    const gamePlayer = Object.create(player);

    function drawBoard() {
        let rows = 0;
        // Drawing the Board
        while (rows < 3) {
            let columns = 0;
            const currentRow = [];

            while (columns < 3) {
                currentRow.push("");
                columns++;
            }
            board.push(currentRow);
            rows++;
        }
    };

    function winCombos() {
        for (let i = 0; i < 3; i++) {
            return [i * 3, i * 3 + 1, i * 3 + 2]
        }
    }

    function playGame() {
    }


    function checkWinner(gamePlayer) {

    }

    return {
        drawBoard,
        board,
        winCombos,
        playGame,
    }

};
const gameboard = game();
