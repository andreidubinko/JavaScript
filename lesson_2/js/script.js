let money = prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");
let time = 19;

let mainList = {
	budget:money, 
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
};

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продовать?");

if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) { // если тип строки а равен строке, если он  не равен null, не равен пустоте и не превышает 50 символов то выведем верно
	console.log('Верно');
	mainList.shopGoods[i] = a;
} else {
	i = i - 1;
}
}
// Способ 1

/*var shopGoods = [];  // объявляем наш массив

for (var i = 0; i < 3; i++) {    // задаём вопрос три раза
  shopGoods.push(prompt('Какой тип товаров будем продовать? ' + (i+1))); // пушим значение в массив
}*/

// Способ 2

/*var shopGoods = [];
 while (shopGoods < 3) {
	console.log('Какой тип товаров будем продовать? ');
	shopGoods++;
} */

// Способ 3

/* var shopGoods = [];
do {  
	console.log('Какой тип товаров будем продовать? ');
	shopGoods++;
}
while (shopGoods < 3);*/


if (time < 0) {
	console.log('Impossible');
} else if(time > 8 &&  time < 20) {
	console.log('Time to work');
	} else if(time < 24) {
		console.log('Too late');
		}else {
			console.log('In day 24 Hours');
		}

console.log(mainList);

var budgetPerDay = money / 30;
alert("Ваш бюджет на один день из месяца равен " + budgetPerDay);

