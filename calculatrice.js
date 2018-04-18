var app = {
	tab:[],
	init: function(){
		console.log('initialisation');
		//recuperation des boutons chiffrés
		app.buttons= document.querySelectorAll('.buttons');
		console.log(app.buttons);
		for(i=0;i<app.buttons.length;i++){
			//event sur chaque bouton
			app.buttons[i].addEventListener('click', app.getVal);
		}
		//recuperation de l'écran
		app.screen=document.getElementById('screen');

		//recuperation des boutons d'operations
		app.add=document.getElementById('add');
		app.add.addEventListener('click',app.getVal);

		app.substract=document.getElementById('substract');
		app.substract.addEventListener('click',app.getVal);

		app.multiply=document.getElementById('multiply');
		app.multiply.addEventListener('click',app.getVal);

		app.div=document.getElementById('div');
		app.div.addEventListener('click',app.getVal);


		//recuperation bouton egal
		app.equal=document.getElementById('equal');
		app.equal.addEventListener('click', app.total);
		//recuperation du bouton clear
		app.clear=document.getElementById('clear');
		app.clear.addEventListener('click',app.clearScreen);

	},

	getVal: function(evt){
		app.content= evt.target.textContent;
		console.log(app.content);

	 app.screen.textContent += app.content;

		//app.tab.push(app.content);
		//console.log(app.tab);

		app.determine();


	},

	determine:function(){
    console.log('det');
		if(app.screen.textContent.indexOf("+") !== -1){
      app.operation(app.screen.textContent, "+");
    }
    if(app.screen.textContent.indexOf("-") !== -1){
      app.operation(app.screen.textContent, "-");
    }
    if(app.screen.textContent.indexOf("/") !== -1){
      app.operation(app.screen.textContent, "/");
    }
    if(app.screen.textContent.indexOf("*") !== -1){
      app.operation(app.screen.textContent, "*");
    }

	},


	operation: function(value, symbol){
    console.log('op');
    var numbers= app.screen.textContent.split(symbol);
    console.log(numbers);
    if(symbol==="+"){
      app.result= parseFloat(numbers[0])+parseFloat(numbers[1]);
    }
    if(symbol==="-"){
      app.result= numbers[0]-numbers[1];
    }
    if(symbol==="*"){
      app.result= numbers[0]*numbers[1];
    }
    if(symbol==="/"){
      app.result= numbers[0]/numbers[1];
    }
  },
	total:function(){
		app.screen.textContent=app.result;
	},
	clearScreen:function(){
		app.screen.textContent='';

	}
}
document.addEventListener('DOMContentLoaded', app.init);
