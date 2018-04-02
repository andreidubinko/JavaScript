/*
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
 
*/

//  *** СОБЫТИЯ ***

// проще говоря - это сигнал от браузера что что-то произошло (клик,двойной клик, прокрутка колёсика, отправка данных в форме, нажатие клавиши)

// обработчик события - это функция которая срабатывает когда событие произошло

/*
 первый способ это в самом HTML документе (например button onclick="alert('Привет')")
 <button onclick="alert('Ты нажал кнопку!')">Push me</button>

*/

let btn = document.getElementsByTagName('button');
let overlay = document.querySelector('.overlay');
let link = document.getElementsByTagName('a');

link[0].addEventListener('click', function(event){
	event.preventDefault();
	console.log('Event is happened: ' + event.type + ' on element ' + event.target);
});

// **** выведет только самую последнюю функцию , первую не выведет на onclick
/*
btn[0].onclick = function() {
	alert('You clicked the button through script.js!');
};

btn[0].onclick = function() {
	alert('You clicked the button through script.js second time!');
};
*/

// *** выведет по очереди все алерты и так далее что мы указали

btn[0].addEventListener('click', function(){
	alert('You clicked the button through script.js!');
	alert('You clicked the button through script.js second time!');
});

// *** СОБЫТИЕ mouseenter ****
// если пользователь навёл мышку на элемент
/*
btn[1].addEventListener('mouseenter', function(){
	console.log('You entered button number 2');
});
*/

// **** СОБЫТИЕ mouseleave *****
// если пользователь убрал мышку с элемента
/*
btn[1].addEventListener('mouseleave', function(){
	console.log('You leaved the button number 2');
});
*/
 //**** параметр event
// позволяет остледить какое событие произошло и на каком элементе

/*
btn[0].addEventListener('click', function(event){
	console.log('Event is happened: ' + event.type + ' on element ' + event.target);
});

btn[1].addEventListener('mouseenter', function(event){
	console.log('Event is happened: ' + event.type + ' on element ' + event.target);
});
*/

// **** ВСПЛЫТИЕ СОБЫТИЙ *****

overlay.addEventListener('mouseenter', function(event){
	console.log('Event is happened: ' + event.type + ' on element ' + event.target);
});