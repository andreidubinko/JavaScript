(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
 window.addEventListener('DOMContentLoaded', function(){
	let tab = require('../parts/tab.js');
	let modal = require('../parts/modal.js');
	let ajax = require('../parts/ajax.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/calc.js');
	let timer = require('../parts/timer.js');

	tab();
	modal();
	ajax();
	slider();
	calc();
	timer(); 
});	
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function ajax() {
	let message = new Object(); // для опевещения пользователя о действиях
	message.loading = "Loading...";
	message.success = "Thanks, see you soon";
	message.failure = "Something goes wrong...";

	// получает форму из модального окна
	let form = document.getElementsByClassName('contact-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status'); // добавляем класс диву который создали выше

		// добавляем обработчики и настраиваем AJAX запрос

		form.addEventListener('submit', function(event){
			event.preventDefault(); // отменяем стандартное событие браузера
			form.appendChild(statusMessage);

			// AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php')

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // указываем кодировки данных

			// получаем инпуты те которые ввёл пользователь

			let formData = new FormData(form);

			// отправляем их на сервер
			request.send(formData);

			// отслеживаем статус нашего запроса
			// выводим сообщение либо loading либо success ....
			request.onreadystatechange = function() {
				if (request.readyState < 4){
					statusMessage.innerHTML = message.loading;
				} else if(request.readyState === 4){
					if(request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						// Добавляем контет на страницу	
					}
					else {  // если что-то пошло не так выведет ошибку из .failure
						statusMessage.innerHTML = message.failure;
					}
				}
			}  // когда отправили делаем все наши поля пустыми 
			for (let i = 0; i < input.length; i++) {
				input[i].value = ''; // заменяем на пустую строку

			}
		});	


		// Contact-Form
	let contact_message = new Object(); // для опевещения пользователя о действиях
	contact_message.loading = "Loading...";
	contact_message.success = "Thanks, see you soon";
	contact_message.failure = "Something goes wrong...";

	// получает форму из модального окна
	let contact_form = document.getElementsByClassName('main-form')[0],
		contact_input = contact_form.getElementsByTagName('input'),
		contact_statusMessage = document.createElement('div');
		contact_statusMessage.classList.add('contact_status'); // добавляем класс диву который создали выше

		// добавляем обработчики и настраиваем AJAX запрос

		form.addEventListener('submit', function(event){
			event.preventDefault(); // отменяем стандартное событие браузера
			form.appendChild(contact_statusMessage);

			// AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php')

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // указываем кодировки данных

			// получаем инпуты те которые ввёл пользователь

			let contact_formData = new FormData(form);

			// отправляем их на сервер
			request.send(contact_formData);

			// отслеживаем статус нашего запроса
			// выводим сообщение либо loading либо success ....
			request.onreadystatechange = function() {
				if (request.readyState < 4){
					contact_statusMessage.innerHTML = contact_message.loading;
				} else if(request.readyState === 4){
					if(request.contact_status == 200 && request.contact_status < 300) {
						contact_statusMessage.innerHTML = contact_message.success;
						// Добавляем контет на страницу	
					}
					else {  // если что-то пошло не так выведет ошибку из .failure
						contact_statusMessage.innerHTML = contact_message.failure;
					}
				}
			}  // когда отправили делаем все наши поля пустыми 
			for (let a = 0; a < input.length; a++) {
				input[a].value = ''; // заменяем на пустую строку

			}
		});
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
function modal() {

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
		// при нажатии на конпку появляется модальное окно
	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = "block"; // показать наше модальное окно при клике на кнопку
		// чтобы модальное окно не прокручивалось 
		document.body.style.overflow = 'hidden';
	});
		// при нажатии на крестик закрываем
	close.addEventListener('click', function(){
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		// возвращаем возможность прокрутки после закрытия модального окна
		document.body.style.overflow = '';
	});
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider() {
	let slideIndex = 1, // показываем самый первым слайд
			slides = document.getElementsByClassName('slider-item'), // получаем наши слайды со страницы
			prev = document.querySelector('.prev'), // получаем кнопку назад
			next = document.querySelector('.next'), // получаем кнопку вперед
			dotsWrap = document.querySelector('.slider-dots'), // получаем обёртку точек
			dots = document.getElementsByClassName('dot'); // получаем наши кнопки

		showSlides(slideIndex);
		
		function showSlides(n) {

			if (n > slides.length) { // если длинна больше чем кол-во слайдов то вернемся к первому слайду
				slideIndex = 1; 
			}
			if (n < 1) { // если кликаем с первой картинки назад то получаем последнюю
				slideIndex = slides.length;
			}

			// скрываем все и показываем только тот который нужен
			for (let i = 0; i <slides.length; i++) {
				slides[i].style.display = 'none';
			}
			// убираем все классы dot-active , чтобы потом их вручную установить

			for (let i = 0; i< dots.length; i++) {
				dots[i].classList.remove('dot-active');
			}
			// показать нужный слайд и добавить dot-active к нужному нам кружочку
			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active'); 
		}	

		// функция которая будет добавлять или отнимать кол-во слайдов
		function plusSlides (n) {  // в зависимоти от того что мы передодаим 1 или -1 будет листать слайды вперед или назад
			showSlides(slideIndex += n)
		}
		// находим на коком слайде мы находимся 
		function currentSlide(n){
			showSlides(slideIndex = n)
		}

		// добавляем события для кнопок prev / next
		prev.addEventListener('click', function(){
			plusSlides(-1); // если хотим слайд назад то передаем -1
		});
		next.addEventListener('click', function(){
			plusSlides(1); // если хотим слайд вперед то передаем 1
		});

		//переключение слайдов с помощью кружочков
		dotsWrap.addEventListener('click', function(event) {
			// получаем ту точку на которую кликнули
			for (let i = 0; i < dots.length +1; i++){
				if (event.target.classList.contains('dot') && event.target == dots[i-1]){
					currentSlide(i);
				}
			}
		});
}
module.exports = slider;
},{}],6:[function(require,module,exports){
function tab() {
	let tab	= document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0]; // берем первый элемент в нашем псевдомассиве

		// скрыть все табы
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	 // при загрузке чтобы первый таб всё же показывался 
	 hideTabContent(1); // идёт в параметр (а) и его тогда не трогает

	 // функция показов табов 

	 function showTabContent(b) {
	 	if (tabContent[b].classList.contains('hide')) {
	 		hideTabContent(0);
	 		tabContent[b].classList.remove('hide');
	 		tabContent[b].classList.add('show');
	 		
	 	}
	 }

	 info.addEventListener('click', function(){
	 	let target = event.target;
	 	if (target.className == 'info-header-tab') {
	 		for (let i = 0; i < tab.length; i++) {
	 			if(target == tab[i]) {
	 				showTabContent(i);
	 				break;
	 			}
	 		}
	 	}
	 });
}

module.exports = tab;
},{}],7:[function(require,module,exports){
function timer(){
	let deadline = '2018-03-20';
	 
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60 ),
		minutes = Math.floor( (t/1000/60) % 60),
		hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	};

	function setClock(id, endtime){

		let timer = document.getElementById('timer'),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');
			
			function updateClock() {
				let t = getTimeRemaining(endtime);
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;
			};
			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
