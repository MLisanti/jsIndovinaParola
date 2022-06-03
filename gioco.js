var parolaSegreta = "parola";
var bitMask = "000000"
var erroriFatti = 0;

function resetGioco() {
	bitMask = "000000";
  	errori = 0;
  	document.getElementById("risultato").innerText = 
		mostraParolaConMaschera(parolaSegreta, bitMask);
    
  	document.getElementById("errori").innerText = erroriFatti;
}

function chiedi() {
	var lettera = prompt("Cosa stai pensando?");

	lettera.toLocaleLowerCase();
	if(parolaSegreta.indexOf(lettera) < 0) {
		erroriFatti++;
	} else {
		bitMask = mascheraRivelaLettera(parolaSegreta, bitMask, lettera);
	}

	document.getElementById("risultato").innerText = 
		mostraParolaConMaschera(parolaSegreta, bitMask);

	document.getElementById("errori").innerText = erroriFatti;
}

function mascheraRivelaLettera(parola, maschera, lettera) {
	var nuovaMaschera = "";
	//nuovaMaschera = "111111";

	for(var i=0; i<parola.length; i++) {
		if(parola.substring(i, i+1) == lettera) {
			nuovaMaschera += "1";
		}
		else
			nuovaMaschera += maschera.substring(i, i+1);
	}
	//console.log("La maschera è: " + nuovaMaschera);

	return nuovaMaschera;
}

function mostraParolaConMaschera(parola, maschera) {
	var risultato = "";
	//console.log("La maschera è: " + maschera);
  
	for(var i=0; i<parola.length; i++) {
		//console.log(maschera.substring(i, i+1));

		if(maschera.substring(i, i+1) == "1") {
			risultato += parola.substring(i, i+1);
		}
		else
			risultato += "_";
	}

	return risultato;
}
