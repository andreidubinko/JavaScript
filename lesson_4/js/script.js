let money,
	name,
	time,
	price;

function start() {
	money = prompt("Ваш бюджет?", '');

	//Проверяем, введено ли именно числовое значение и нет пустой строки, и не нажал ли отмена.Метод isNaN - если не параметр не является чилом то он выдаёт true
	while (isNaN(money) || money == "" || money == null){
		money = prompt("Ваш бюджет?", '');		 
	}
	// пока не введено число, или введена пустая строчка , или нажата кнопка отмена . Будет задоваться вопрос Ваш бюджет?
	price = prompt("Введите сумму товара, для получение скидки (если есть акция)", '');

	name = prompt("Название вашего магазина?, ''").toUpperCase();
	time = 21;
	
}

// start();

let mainList = {
	budget:money, 
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems:[],
	chooseGoods:function chooseGoods(){

	for (let i = 0; i < 1; i++) {
	let a = prompt("Какой тип товаров будем продовать?", '');

			if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) { // если тип строки а равен строке, если он  не равен null, не равен пустоте и не превышает 50 символов то выведем верно
				console.log('Верно');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
			}
		}
	}, 
	workTime:function workTime(time){
			if (time < 0) {
				console.log('Impossible');
			} else if(time > 8 &&  time < 20) {
				console.log('Time to work');
				mainList.open = true;
			}	else if(time < 24) {
					console.log('Too late');
				}	else {
						console.log('In day 24 Hours');
				}
	},
	daylyBudget: function dailyBudget(){
		alert(" Ежедневный бюджет равен " + mainList.budget / 30);
	},
	makeDiscount:function makeDiscount(discount){
		if (discount === true) {
			alert("Сумма товара со скидной " + price * 0.8);
				} else {
					alert('Сейчас не действует никаких акций');
				}	
		},
		hireEmployers: function hireEmployers(){
			for (let i = 0; i < 4; i++) {
				let a = prompt("Имя вашего сотрудника");

				if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50) {
					mainList.employers[i] = a;
				} else {
					i = i - 1;
				}
			}
		},
		chooseShopItems: function chooseShopItems(){
			let items = prompt(" Перечислите через запятую ваши товары", "");
			mainList.shopItems =  items.split(",");
			mainList.shopItems.push(prompt(" Может еще" , ""));
			mainList.shopItems.sort();
			mainList.shopItems.forEach(function(item,i){
				i++;
				alert("У нас вы можете купить: " + i + ": " + item);
			});
			for (let key in mainList.shopItems){
				 console.log("Наш магазин включает в себя: " + key + mainList.shopItems[key]);
			}
		}
};



console.log(mainList); 
 


// 					***ОБЪЕКТЫ***
/*
let options = {
	name: "test",
	width: 1024,
	height: 1024
}

options.bool = false;
options.colors = {
	border: "black",
	backgorund: 'red'
}
delete options.bool
// *** ПЕРЕБРАТЬ ВСЕ СВОЙСТВА В ОБЪЕКТЕ ***
for( let key in options) {
	console.log('Option ' + key + ' is ' + options[key])	
} 

// *** УЗНАТЬ КОЛ-ВО СВОЙСТВ В ОБЪЕКТЕ ***

console.log(Object.keys(options).length);
/* 
1. Выводим в консоль 
2. Object - пишем что тип данных будет объект
3. keys - указываем что хотим достучаться до его свойств(keys)
4. (options) - указываем имя нашего объекта 
5. length - свойтсво длинны
*/


//					***МАССИВЫ***

//let arr = [1,2,3,4,5];

//arr[99] = 99;

// *** методы работы с концом массива ***

//arr.pop();  //  удаляет из конца массива наш последний элемент
// console.log(arr.pop());  // удаляет 5 из массива и выводит его вне массива

//arr.push(6); // Новый элемент 6 появится в конце нашего массива 

// *** работа с началом массива ***

// arr.shift();  // удаляет первый элемент из массива
// arr.unshift(0);   // добавляет элемент в начало нашего массива

// *** перебрать элементы массива ***
// выведем через alert все элементы массива 
/*
for(let i = 0; i <arr.length; i++){   
	alert(arr[i]);
}
*/

/*let first = [1,"second",3,4,5];

first[99] = 99;

first.forEach(function(item,i,arr){
	console.log(i + ": " + item + "(массив " + arr + ")")
}) */

// *** метод SPLIT ***
// при поиощи метода сплит мы будем трансформировать нашу строку и передовать в массив

/*
let first = [];
let i = prompt("", "")
first = i.split(",") // указываем через какой знак будут переданы элементы

console.log(first);
*/

// *** метод JOIN ****
// получаем строку с элементами зи массива через запятую

/*
let first = ["aaa", "bbbb", "dsa", "q"];
let i = first.join(",");

console.log(i);
*/


// *** СОРТИРОВКА НАШЕГО МАССИВА SORT ***
// сортирует по алфавиту содержимое массива 
// если будут числа то будут ошибки
/*
let first = ["aaa", "bbbb", "dsa", "q"];
let i = first.sort();

console.log(i);
*/
//  *** ФУНКЦИЯ СОРТИРОВКИ ЧИСЕЛ ***
/*
let first = [1, 40, 4, 3];

function sortNumber(a,b) {
	return a- b;
}

let i = first.sort(sortNumber)

console.log(i);
*/


//  *** ПСЕВДОМАССИВ***
// это объект со структурой как у массива 


// 						*** ООП ***
// главное это объект , родитель . Все берут у него свойства 

// два объекта и один наследуется от другого 
/*
let soldier = {
	health: 400,
	armor : 100
}

let john = {
	health : 100
}
*/
// хотим чтобы john стал наследником soldier (soldier выступает как прототип)
/*
john.__proto__ = soldier;

console.log(john);
console.log(john.armor); // выводим у джона то свойство которого у него нету
*/
// изначально мы получили health 100 , а второй строчки значение 100 , хотя его нету у джона
// всё это прототипное наследование