//callBack - это функция которая должны быть выполнена после того, как другая функция завершила своё выполнение
/*
function first(){
	setTimeout( function(){
		console.log(1);
	}, 500 );
}
function second(){
	console.log(2);
}
first();
second();*/

function learnJS(lang, callback) {
	console.log('I learn ' + lang);
	callback();
}

learnJS('JavaScript', done);

function done() {
	console.log('I finished third lesson')
}