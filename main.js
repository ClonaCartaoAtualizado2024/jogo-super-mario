const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const nuvem = document.querySelector(".nuvem");
const startButton = document.querySelector(".star");
const gameOverScreen = document.querySelector(".game-over");

let gameStarted = false;

const startsGame = () => {
    gameStarted = true;
    AudioStart.play();

    pipe.style.animation = "pipe-animation 1.5 infinite linear";
    starButton.style.display = "none";
    mario.style.opacity = "1";
    pipe.style.opacity = "1";
    clonds.style.opacity = "1";
}

const jump = () => {
    if(gameStarted)  {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove("jump");
    } 
    ,500);
}

const loop = setInterval (() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.left = `${marioPosition}px`;

        mario.src = "./img/game-over.png";
        mario.style.width = "75px";
        mario.style.marginleft = "50px";

        clearInterval(loop);
    }
},10);

document.addEventListener('keydown', jump);
