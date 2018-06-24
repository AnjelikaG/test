class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv () {
       let newDiv = document.createElement('div');
       newDiv.innerHTML = prompt("Введите текст","");
      	 document.body.appendChild(newDiv);
      	 newDiv.style.cssText = `height: ${this.height}; background-color: ${this.bg}; fontSize: ${this.fontSize}; text-align: ${this.textAlign};
	}

}

 	let options = new Options ('150px','200px','red','25px','left');
 	
 	options.createDiv();
 	
 	console.log("Create!");