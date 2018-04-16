/*
function sayName(name){
	let message = "My name is " + name 
	return message
}

let arr = [5,-3,6,-5,0,-7,8,9];
let result = arr.reduce(function(sum,elem){
	return sum + elem;
})

let assert = require('chai').assert

describe("sayName", function(){
	it("getting new phrase", function(){
		assert.typeOf(sayName("Andrei"), 'string')
	})
});

describe("arr", function(){
	it("getting summ on array", function(){
		assert.equal(result, 13)
	})
});
*/

function sum(a, b) {
	return a + b > 10;
}
sum(2,2)

describe("sum", function(){
	it("Возвращает тип данных", function(){
		assert.typeOf(sum(2,2), 'boolean');
	})
});
