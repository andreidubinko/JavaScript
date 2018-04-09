// получить кнопку Открыть магазин
let btn = document.getElementById('open-btn');
console.log(btn);

// получить все поля слева
let left = document.querySelectorAll("div.name, div.budget, div.goods, div.items, div.employers, div.discount, div.isopen");
console.log(left);


// получить категроии товаров
let right = document.getElementsByClassName('goods-item');
console.log(right);

// buttons 3

let buttons = document.getElementsByTagName('button');
console.log(buttons);

// поля ввода товаров

var stuff = document.querySelector(".choose-item");
console.log(stuff);

// поля сотрудников

let worker = document.querySelectorAll("div.hire-employers-item");
console.log('Работники' + worker);