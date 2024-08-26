const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const jump = () => {
    mario.classList.add('jump');
}
document.addEventListener('keydown', jump);


