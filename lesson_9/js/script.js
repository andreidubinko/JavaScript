
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
	})	

});