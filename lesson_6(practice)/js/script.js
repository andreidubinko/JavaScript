let open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],

	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');

let money,
	price;
// при нажатии кнопки открыть магазин - всплывает alert(prompt) вводим туда значеие и оно передаётся в левой столбец
open.addEventListener('click', () => {
	money = prompt("Ваш бюджет?", '');

	while (isNaN(money) || money == "" || money == null){
		money = prompt("Ваш бюджет?", '');		 
	}
	budget_value.textContent = money;

	price = prompt("Введите сумму товара, для получение скидки (если есть акция)", '');

	name_value.textContent = prompt("Название вашего магазина?", "").toUpperCase();

});
// добавляем товар по нажатию кнопки утвердить (добавляем в левое поле все что добавили в правом)
goods_btn.addEventListener('click', () => {

	for (let i = 0; i < goods_item.length; i++) {
		let a = goods_item[i].value;

			if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50) {
				console.log('Верно');
				mainList.shopGoods[i] = a;
				goods_value.textContent = mainList.shopGoods;
			} else {
				i = i - 1;
			}
		}

});
// добавляем элементы через запятую без кнопки , после того как фокус с поля уйдёт
choose_item.addEventListener('change', () => {
	let items = choose_item.value;

		if (isNaN(items) && items != '') {  
		mainList.shopItems =  items.split(",");
		mainList.shopItems.sort();

		items_value.textContent = mainList.shopItems;
		}	
});
// ** вводим число от 0 до 24 и меняется цвет окошка работы магазина
time_value.addEventListener('change', () =>{
	let time = time_value.value;

	if (time < 0) {
		console.log('Impossible');
		mainList.open = false;
	} else if(time > 8 &&  time < 20) {
		console.log('Time to work');
		mainList.open = true;
	}	else if(time < 24) {
			console.log('Too late');
			mainList.open = false;
		}	else {
				console.log('In day 24 Hours');
				mainList.open = false;
			};

	if (mainList.open == true) {
		isopen_value.style.backgroundColor = 'green'
	} else {
		isopen_value.style.backgroundColor = 'red'
	}

});
// нажимаем на открыть магазин , вводим ввести бюджет , после этого жмём кнопку расчитать и происходит деление бюджета на 30 и вывод его в строку рядом с кнопкой расчитать
budget_btn.addEventListener('click', () => {
	count_budget_value.value = money / 30;
});

employers_btn.addEventListener('click', () => {
	for  (let i = 0; i < hire_employers_item.length; i++) {
	let name = hire_employers_item[i].value; // каждый раз в перпменную name будет записываться то что записано в input 
	mainList.employers[i] = name;

	employers_value.textContent += mainList.employers[i] + ', ';
	}
});

const mainList = {
	budget:money, 
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems:[],

	makeDiscount:function makeDiscount(discount){
		if (discount === true) {
			alert("Сумма товара со скидной " + price * 0.8);
				} else {
					alert('Сейчас не действует никаких акций');
				}	
		}	
}

console.log(mainList);
