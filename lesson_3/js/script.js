 let money,
	name,
	time,
	price;

function start() {
	money = prompt("Ваш бюджет?");

	//Проверяем, введено ли именно числовое значение и нет пустой строки, и не нажал ли отмена.Метод isNaN - если не параметр не является чилом то он выдаёт true
	while (isNaN(money) || money == "" || money == null){
		money = prompt("Ваш бюджет?");		 
	}
	// пока не введено число, или введена пустая строчка , или нажата кнопка отмена . Будет задоваться вопрос Ваш бюджет?
	price = prompt("Введите сумму товара, для получение скидки (если есть акция)");

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 21;
	
}

start();

let mainList = {
	budget:money, 
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false

};
function chooseGoods(){

		for (let i = 0; i < 1; i++) {
			let a = prompt("Какой тип товаров будем продовать?");

		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) { // если тип строки а равен строке, если он  не равен null, не равен пустоте и не превышает 50 символов то выведем верно
			console.log('Верно');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	}
};

chooseGoods();


function workTime(time){
	if (time < 0) {
		console.log('Impossible');
	} else if(time > 8 &&  time < 20) {
		console.log('Time to work');
		}	else if(time < 24) {
			console.log('Too late');
			}	else {
				console.log('In day 24 Hours');
				}
}

workTime(18);
console.log(mainList);




function dailyBudget(){
	var budgetPerDay = money / 30;
	alert("Ващ суточный бюджет " + budgetPerDay);
}
dailyBudget();

// ***ФУНЦКИЯ ДИСКОНТОЙ СИСТЕМЫ***
function discountSystem(discount){
	if (discount === true) {
		alert("Сумма товара со скидной " + price * 0.8);
	} else {
		alert('Сейчас не действует никаких акций');
	}
};

discountSystem(true);

// ***ФУНКЦИЯ НАЙМА СОТРУДНИКОВ***
function employers(){

	for (let i = 0; i < 4; i++) {
			let a = prompt("Имя вашего сотрудника");

		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
			mainList.employers[i] = a;
		} else {
			i = i - 1;
		}
	}
}

employers();


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
