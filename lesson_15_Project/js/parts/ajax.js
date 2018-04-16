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