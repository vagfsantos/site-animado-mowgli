const CENAS = 9;

const INTERVALO = 5000;

var atual = 1;

var auto = false;

function automatico(){
	if(atual >= CENAS) return; 
	proxima();
	setInterval(automatico,INTERVALO);
}

function proxima(){
	atual++;
	atual = (atual > CENAS) ? CENAS : atual; 
	atualizar(); 
}

function anterior(){
	atual--;
	atual = (atual < 1) ? 1 : atual;
	atualizar();
}

function ir(cena){
	if(cena > CENAS || cena < 1) return;
	atual = cena; 
	atualizar();
}

function atualizar(){
	document.body.className = "cena"+atual;
}

atualizar();