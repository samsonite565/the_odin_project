function player(marker) {
    let score = 0;
    let gamesPlayed = 0;
    const maxGames = 5;// Max games to be played is 5

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
        marker,
        addScore,
        getScore,
        gamesLeft,
    };
}

function game() {
    // Creating the board Array
    const board = ["", "", "", "", "", "", "", "", ""]; //Board
    const player1 = player("marko");
    const player2 = player("markx");
    let activePlayer = player1
    const getBoard = () => board;

    function switchTurns() {
        activePlayer = activePlayer === player1 ? player2 : player1;
    }

    const getActivePlayer = () => activePlayer;

    // All the winning Combinations for the tic tac toe game
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

    function checkWinner() {
        const combos = winCombos()
        for (const combo of combos) {
            const [a, b, c] = combo;
            if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    function resetBoard() {
        return board.fill("");
    }

    return {
        getBoard,
        getActivePlayer,
        switchTurns,
        checkWinner,
        winCombos,
        resetBoard
    }
}

const cells = document.querySelectorAll(".cell")
const ticTacToe = game()


function clearGameBoard() {
    cells.forEach(cell => {
        cell.classList.remove("markx", "marko");
    });
};


//The Actual Game 
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        const board = ticTacToe.getBoard();
        if (board[index] !== "") return;

        const currentPlayer = ticTacToe.getActivePlayer();
        board[index] = currentPlayer.marker;
        cell.classList.add(currentPlayer.marker);

        const winner = ticTacToe.checkWinner();
        if (winner) {
            ticTacToe.resetBoard();
            alert(`${currentPlayer.marker} has won`)
            clearGameBoard();
            return;
        }
        ticTacToe.switchTurns();
    })
})


