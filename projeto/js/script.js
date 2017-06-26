

// Links Corretos
var linkJSONnoticias = '../Arquivos/JSON/noticias.json';
var linkJSONslides = '../Arquivos/JSON/slide.json';
//Elementos
var divSlides = document.getElementById("slidesDiv");
var divControladores = document.getElementById("controladores");
var divEditoriais = document.getElementById("editoriais");
var selectBoxOrdenar = document.getElementById("ordenarData");
var selectBoxEditoria = document.getElementById("filtrarEditoria");
var slides = document.querySelectorAll("img.slide_img");
var itensMenu = document.querySelectorAll("ul.submenu");
//Bancos
var bancoDeMaterias;
var bancoDeSlides;
var bancoPorData;

function app(){
	alert("In app :D");
	bancoDeMaterias = new Banco(linkJSONnoticias);
	bancoDeSlides = new Banco(linkJSONslides, true);
	bancoPorData = new Banco(linkJSONnoticias);	
	bancoDeSlides.iniciarBanco();
	bancoDeSlides.displayMaterias();
	bancoDeMaterias.iniciarBanco();
	bancoDeMaterias.displayMaterias();
	//Especial
	bancoPorData.iniciarBanco();
	bancoPorData.mudarFormatoData();
	bancoPorData.montarArrayDatas();
	setaImagem();

	//Ordem
	selectBoxOrdenar.addEventListener("change", function(){
		value = this.options[this.selectedIndex].value;
		//0 = data, 1 = recente, 2 = antiga, 3 = a z, 4 = z a
		switch(value){
			case 4:
			
			//
			break;
			case 3:
			
			//
			break;
			case 2: 
			
			bancoPorData.organizarPorData(true);
			break;
			case 1:
			
			bancoPorData.organizarPorData(false);
			break;
			case 0:
			default:
			
			return;
		}
		// bancoPorData.organizarPorData();
	});
	//Editoria
	selectBoxEditoria.addEventListener("change", function(){
		value = this.options[this.selectedIndex].value;
		bancoDeMaterias.displayEditorias(value);
		// bancoPorData.organizarPorData();
	});
}

document.addEventListener("DOMContentLoaded", app, false);

