$(document).ready(function() {  // то что пишем унтри будет исполняться только после загрузки страницы
	// открытие модалки
	$('.main_btna').on('click', function() {
		event.preventDefault();
		$('.overlay').fadeIn(400, function(){
			$('.modal').css('display', 'block').animate({opacity:1, top:'20%'},200);
		})
	});
	// закрытие модалки
	$('.close, .overlay').on('click', function() {
		$('.modal').animate({opacity:0, top: '40%'},200, function(){
			$(this).css('display', 'none');
			$('.overlay').fadeOut(400);
		})
	});
});