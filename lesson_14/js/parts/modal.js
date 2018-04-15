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