describe("Timer", function(){
	it("Возвразает ли функция объект", function(){
		assert.typeOf(getTimeRemaining(), 'object')
	})
})