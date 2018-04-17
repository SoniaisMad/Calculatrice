var app = {
	tab:[],
	tab2:[],
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
		//console.log(content);

		app.screen.textContent += app.content;




		app.tab.push(app.content);
		console.log(app.tab);

		app.determine();


	},

	determine:function(){

		for(i=0;i<app.tab.length;i++){
			if(app.tab[i]==='+'){
			app.position= i;
			console.log(app.position);
			app.addition();
		}
		if(app.tab[i]==='-'){
			app.position= i;
			app.substraction();

		}
		if(app.tab[i]==='*'){
			app.position= i;
			app.multiplication();
		}
		if(app.tab[i]==='/'){
			app.position= i;
			app.division();

		}
		}
		/*if(app.tab[1]==='+'){
			app.addition();
		}
		if(app.tab[1]==='-'){
			app.substraction();
		}
		if(app.tab[1]==='*'){
			app.multiplication();
		}
		if(app.tab[1]==='/'){
			app.division();
		}*/


	},
	numbersToCalculate: function(){
		if(app.position===1){
			app.nb1 = Number(app.tab[0]);

			app.nb2= Number(app.tab[app.position+1]);
			if(app.tab.length===4){
				app.nb2= Number(app.tab[app.position+1]+app.tab[app.position+2]);
			}
			if(app.tab.length===5){
				app.nb2= Number(app.tab[app.position+1]+app.tab[app.position+2]+app.tab[app.position+3]);
			}
			if(app.tab.length===6){
				app.nb2= Number(app.tab[app.position+1]+app.tab[app.position+2]+app.tab[app.position+3]);
			}


		}
		if(app.position===2){
			app.nb1 = Number(app.tab[0]+app.tab[1]);
			console.log(app.nb1);
			app.nb2= Number(app.tab[app.position +1]);
			if(app.tab.length===4){
				app.nb2= Number(app.tab[app.position+1]);

			}
			if(app.tab.length===5){
				app.nb2= Number(app.tab[app.position+1]+app.tab[app.position+2]);
			}
			if(app.tab.length===6){
				app.nb2= Number(app.tab[app.position+1]+app.tab[app.position+2]+app.tab[app.position+3]);
			}


		}
		if(app.position===3){
			app.nb1 = Number(app.tab[0]+app.tab[1]+app.tab[2]);
			console.log(app.nb1);
			app.nb2= Number(app.tab[app.position +1]);
			if(app.tab.length===5){
				app.nb2= Number(app.tab[app.position+1]);

			}
			if(app.tab.length===6){
				app.nb2= Number(app.tab[app.position+1]+app.tab[app.position+2]);
			}
			if(app.tab.length===7){
				app.nb2= Number(app.tab[app.position+1]+app.tab[app.position+2]+app.tab[app.position+3]);
			}

			}

		if(app.position===4){
			app.nb1 = Number(app.tab[0]+app.tab[1]+app.tab[2]+app.tab[3]);
			console.log(app.nb1);
			app.nb2= Number(app.tab[app.position +1]);
			if(app.tab.length===7){
				app.nb2= Number(app.tab[app.position+1]);

			}
			if(app.tab.length===8){
				app.nb2= Number(app.tab[app.position+1]+app.tab[app.position+2]);
			}
			if(app.tab.length===9){
				app.nb2= Number(app.tab[app.position+1]+app.tab[app.position+2]+app.tab[app.position+3]+app.tab[app.position+4]);
			}

			}



	},

	addition: function(){

		app.numbersToCalculate();
		app.result= app.nb1 + app.nb2;
		//app.tab=[];



	},

	substraction:function(){
		app.numbersToCalculate();
		app.result= app.nb1 - app.nb2;
	},

	multiplication: function(){
		app.numbersToCalculate();
		app.result= app.nb1 * app.nb2;

	},

	division: function(){
		app.numbersToCalculate();
		app.result= app.nb1 / app.nb2;


	},
	total:function(){
		app.screen.textContent=app.result;
	},
	clearScreen:function(){
		app.screen.textContent='';
		app.tab= [];
	}
}
document.addEventListener('DOMContentLoaded', app.init);
