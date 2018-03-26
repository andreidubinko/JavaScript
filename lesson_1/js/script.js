var budget = prompt("Ваш бюджет?");
var shopName = prompt("Название вашего магазина?");

var shopGoods = [];  // объявляем наш массив

for (var i = 0; i < 3; i++) {    // задаём вопрос три раза
  shopGoods.push(prompt('Какой тип товаров будем продовать? ' + (i+1))); // пушим значение в массив
}

var mainList = {
	budget, 
	shopName,
	shopGoods,
	employers:{},
	open: true
};

console.log(mainList);

var budgetPerDay = budget / 30;
alert("Ваш бюджет на один день из месяца равен " + budgetPerDay);
