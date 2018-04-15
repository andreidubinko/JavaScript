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