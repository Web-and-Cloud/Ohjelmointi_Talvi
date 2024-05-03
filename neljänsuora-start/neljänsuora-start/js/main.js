const squares = document.querySelectorAll(".grid div");
const result = document.querySelector("#result");
const player = document.querySelector('#current-player');

let currentPlayer = "player-one";

squares.forEach((square) => {
    square.addEventListener('click', () => {
        square.classList.add("taken");
        square.classList.add(currentPlayer);
    });
});