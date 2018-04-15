function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0], // получаем кол-во людей
			restDays = document.getElementsByClassName('counter-block-input')[1], // получаем кол-во дней
			place = document.getElementById('select'), // получаем наш инпут
			totalValue = document.getElementById('total'),
			// то что вводит пользователь
			personsSum = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;

			//отслеживаем изменения инпутов
			persons.addEventListener('change', function(){
				personsSum = +this.value;
				total = (daysSum + personsSum)*4000;
				// показывать сумму только тогда когда поля заполнены
				if (restDays.value == '') { // если ничего не записано то запишется 0 
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});
			restDays.addEventListener('change', function(){
				daysSum = +this.value;
				total = (daysSum + personsSum)*4000;
				// показывать сумму только тогда когда поля заполнены
				if (persons.value == '') { // если ничего не записано то запишется 0
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			// увеличваем totalValue в зависитисти от того куда едет человек
			place.addEventListener('change', function(){
				if (restDays.value == '' || persons.value == ''){ // если поля не заполенены то записываем 0
					totalValue.innerHTML = 0;
				} else {
					// передаем total в нашу переменную а для того чтобы при изменение места несколько раз. сумма безкончено не увеличивалась
					// в нашу переменную передаём значние total и потом уже переменну  а умножаем на то , куда выбрал пользователь ехать  
					let a = total; 
					// записываем нашу общую сумму в totalValue	
					totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
			});
} 

module.exports = calc;