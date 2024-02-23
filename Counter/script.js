const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const res = document.querySelector('.res');
const h1 = document.querySelector('h1');

let count = 0;

let i = Number(localStorage.getItem("count"))


function increase(){
    i++;
    update();
}

function decrease(){
    i--;
    update();
}

function reset(){
    i = 0;
    localStorage.setItem("count","0");
    update();
}

function update(){
    h1.innerHTML = `Counter:${i}`
    localStorage.setItem("count",String(i));
}

inc.addEventListener('click',increase);
dec.addEventListener('click',decrease);
window.addEventListener('load',update);
res.addEventListener('click',reset);