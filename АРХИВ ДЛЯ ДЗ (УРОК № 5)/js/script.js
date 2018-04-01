document.body.style.backgroundImage = 'url(img/apple_true.jpg)';


var newLi = document.createElement('li')
  newLi.classList.add("menu-item")
  newLi.innerHTML = 'Пятый пункт';

  menu.insertBefore(newLi, menu.children[5]);


let title = document.getElementById('title');
	title.innerHTML = 'Мы продаем только подлинную технику Apple';
console.log(title);

let question = document.getElementById('prompt');
	question.innerHTML = prompt("Ваше отношение к технике Apple");


let col = document.getElementsByClassName('column');
let adv = document.querySelector('.adv');
	adv.parentNode.removeChild(adv);

