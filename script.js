const btn = document.getElementById('button');
const div = document.getElementById('div');

btn.onclick = function() {
    div.innerHTML = getRandNum();
}

//генерируем случайные числа с округлением до целого, включая мин и макс
function genRandNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//создаем массив и его границы
function getRandNum() {
    let arr = [],
    len = 10;  
    for(let idx = 0; idx < len; idx++) {
        arr.push(genRandNum(-10, 10));
    }
    return arr;
}

//console.log(getRandNum());