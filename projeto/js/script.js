

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
var utilidades;
//Menus

function app(){
	bancoDeMaterias = new Banco(linkJSONnoticias);
	bancoDeSlides = new Banco(linkJSONslides, true);
	bancoPorData = new Banco(linkJSONnoticias);	
	util = new Utilidades();

	bancoDeSlides.iniciarBanco();
	bancoDeSlides.displayMaterias();
	bancoDeMaterias.iniciarBanco();
	bancoDeMaterias.displayMaterias();
	
	//Especial
	bancoPorData.iniciarBanco();
	bancoPorData.mudarFormatoData();
	bancoPorData.montarArrayDatas();
	setaImagem();


	selectBoxOrdenar.addEventListener("change", function(){
		value = this.options[this.selectedIndex].value;
		//0 = data, 1 = recente, 2 = antiga, 3 = a z, 4 = z a
		// util.resetarEditoriais();
		if( value == 0 ){
			util.resetarEditoriais();
			bancoDeMaterias.displayMaterias();
		}
		if( value == 1  ||  value == 2){
			util.resetarEditoriais();
			bancoPorData.displayData(value);
		} 
		if( value == 3 || value == 4){
			util.resetarEditoriais();
			bancoDeMaterias.displayAlfabetica(value);
		}
		
	});
	//Editoria
	selectBoxEditoria.addEventListener("change", function(){
		value = this.options[this.selectedIndex].value;
		util.resetarEditoriais();
		bancoDeMaterias.displayEditorias(value);
		// bancoPorData.organizarPorData();
	});
}

document.addEventListener("DOMContentLoaded", app, false);

