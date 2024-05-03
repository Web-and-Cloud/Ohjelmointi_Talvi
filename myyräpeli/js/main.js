const timeLeft = document.querySelector("#time-left");
const squares = document.querySelectorAll(".square");
const score = document.querySelector("#score");



let currentTime = 60;
let countDownTimer = null;
let moveMole = null;
let randomNumber;
let result = 0;

function countDown(){
    timeLeft.innerHTML = --currentTime;

    if(currentTime === 0){
    clearInterval(countDownTimer)
    clearInterval(moveMole);
    alert("GAME OVER!");
   }
}

function randomSquare() {
    if(randomNumber >= 0){
    squares[randomNumber].classList.remove("mole");
    }

    let oldRandomNumber = randomNumber;

    do {
    randomNumber = Math.floor(Math.random() * 9);
} while( oldRandomNumber == randomNumber);

    console.log(randomNumber);

    squares[randomNumber].classList.add("mole");

}

squares.forEach((square) => {
   square.addEventListener ('mousedown', () => {
    //console.log("id: " + square.id)
    if(randomNumber == square.id ){
        
        score.innerHTML = ++result;
    }
   })
});

countDownTimer = setInterval(countDown, 1000);
moveMole = setInterval(randomSquare, 500)
