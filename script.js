document.getElementById("numPlayers").defaultValue = "2";
document.getElementById("numRounds").defaultValue = "3";

document.addEventListener("DOMContentLoaded", function () {
    const startGameButton = document.getElementById("startGame");
    const gameResults = document.getElementById("gameResults");

    startGameButton.addEventListener("click", function () {
        const numPlayers = parseInt(document.getElementById("numPlayers").value, 10);
        const numRounds = parseInt(document.getElementById("numRounds").value, 10);

        if (isNaN(numPlayers) || isNaN(numRounds)) {
            alert("Please enter valid numbers for players and rounds.");
            return;
        }

        gameResults.innerHTML = `Starting a game with ${numPlayers} players and ${numRounds} rounds.`;

        const playerPoints = new Array(numPlayers).fill(0);
        const roundPoints = [];

        // Implement your game logic here

        for (let roundNumber = 1; roundNumber <= numRounds; roundNumber++) {
            gameResults.innerHTML += `<p>Round ${roundNumber}!</p>`;

            for (let player = 1; player <= numPlayers; player++) {
                const points = parseInt(prompt(`Enter points for Player ${player} in Round ${roundNumber}:`), 10);
                if (!isNaN(points)) {
                    playerPoints[player - 1] += points;
                }
            }

            roundPoints.push([...playerPoints]);
        }

        gameResults.innerHTML += "Game Over!<br>";

        // Display points per round and total points
        for (let roundNumber = 1; roundNumber <= numRounds; roundNumber++) {
            gameResults.innerHTML += `<p>Round ${roundNumber}:</p>`;
            for (let player = 1; player <= numPlayers; player++) {
                gameResults.innerHTML += `Player ${player}: ${roundPoints[roundNumber - 1][player - 1]} points<br>`;
            }
        }

        gameResults.innerHTML += "<p>Total Points:</p>";
        for (let player = 1; player <= numPlayers; player++) {
            gameResults.innerHTML += `Player ${player}: ${playerPoints[player - 1]} points<br>`;
        }
    });
});

document.getElementById("startGame").onclick = function () {
    location.href = "round.html"
};