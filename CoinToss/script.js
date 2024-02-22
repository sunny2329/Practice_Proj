const flipBtn = document.querySelector('.flip-coin');
const h = document.querySelector('.heads');
const t = document.querySelector('.tails');
const img = document.querySelector('img');
const reset = document.querySelector('.Reset');


let heads = Number(localStorage.getItem("heads"));
let tails = Number(localStorage.getItem("tails"));





function switchs() {
    let num = Math.floor(Math.random() * 2) + 1;
    if (num == 1) {
        img.setAttribute("src", "Images/headsr.png");
        heads++;
    } else {
        img.setAttribute("src", "Images/tailsr.png");
        tails++;
    }
    localStorage.setItem("heads", String(heads));
    localStorage.setItem("tails", String(tails));
    update();
}

function flips() {
    img.setAttribute("src", "Images/flips-unscreen.gif");
}

function update() {
    let he = localStorage.getItem("heads");
    let ta = localStorage.getItem("tails");
    h.innerHTML = `HEADS: ${he}`;
    t.innerHTML = `TAILS: ${ta}`;

}

flipBtn.addEventListener('click', function () {
    setTimeout(switchs, 1500);
    flips();
})

reset.addEventListener('click', function () {
    localStorage.setItem("heads", "0");
    localStorage.setItem("tails", "0");

    heads = Number(localStorage.getItem("heads"));
    tails = Number(localStorage.getItem("tails"));
    update();
})


window.addEventListener('load', function () {
    update();
})

