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