class options {
  constructor(height, width, bg, fontSize, textAlign) {
    	this.height = height;
    	this.width = width;
    	this.bg = bg;
    	this.fontSize = fontSize;
    	this.textAlign = textAlign;
  }

  	newDiv(){	
  		window.onload=function(){
		var d = document.createElement('div');
		d.style.width='200px';
		d.style.height='100px';
		d.style.background='orange';
		document.body.appendChild(d);
		// text
		var t = document.getElementById('randomText');
		t.textContent = 'Hello';
		//cssText
		var color = document.getElementById('rColor').onclick = function() {changeColor()};

			function changeColor() {
    			document.querySelector("div").style.cssText = "background:orange;font-size:55px;border:6px solid black;";
    			document.getElementById("randomText").innerHTML = " Очень Туго Идёт Изучение...";
				}
		}	
	}


}
const div = new options();
console.log(div.newDiv());