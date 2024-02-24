const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const body = document.querySelector('body');

function randColor() {
    let str = "0123456789abcdef";

    let res = "#";
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 16);
        res += str.charAt(num);
    }

    update(res);

    
}

function update(res){
    body.style.backgroundColor = `${res}`
    h1.innerHTML = `BgColor:${res}`
}

btn.addEventListener('click',randColor);

