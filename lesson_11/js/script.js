
// DOMContentLoaded начинает использоваться только тогда когда наша HTML структура уже построена
window.addEventListener('DOMContentLoaded', function(){

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
// Timer 

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

	// modal

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

	// Form
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
});