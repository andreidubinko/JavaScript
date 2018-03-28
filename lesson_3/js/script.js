let money,
	name,
	time;

function start() {
	money = prompt("Ваш бюджет?");
	name = prompt("Название вашего магазина?");
	time = 21;
}

start();

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
alert(budgetPerDay);





// ***ОБЫЧНАЯ ФУНКЦИЯ***
/*
let calc =  function (a,b) { // function expression / функциональное выражение
	return a+b
}

console.log(calc(4,5));
console.log(calc(4,15)); */

// ***СТРЕЛОЧНАЯ ФУНЦИЯ***

/*
let calc = (a,b) => a+b

console.log(calc(4,5));
console.log(calc(4,15));
*/


// *** МЕТОДЫ И СВОЙСТВА У СТРОК И ЧИСЕЛ ***
// методы - вспомогательные функции
// свойства - вспомогательные значения

/*
let str = "testing";

console.log(str.length);  // получение длинны строки или других типов данных
*/
// ***САМЫЙ ЧАСТО ИСПОЛЬЗУЕМЫЙ МЕТОД СМЕНЫ РЕГИСТРА***

/*
console.log(str.toUpperCase()); // все буквы большые
console.log(str.toLowerCase()); // все буквы маленькие
*/

// ***ОКРУГЛЕНИЕ***
/*
let num = 12.7;
console.log(Math.round(num));  // округляет в большую или меньшую сторону
*/
// *** ПРЕОБРОЗОВАНИЕ СТРОКИ В ЧИСЛО ***
/*let str = "12.2px"; 

console.log(parseInt(str)); // преброзовал строку 12.2 в число 12 
console.log(parseFloat(str)); // преборозвал строку 12.2 в число с плавующей точкой 12.2
*/
