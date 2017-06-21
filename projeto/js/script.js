
var linkJSONnoticias = '../Arquivos/JSON/noticias.json';
var linkJSONslides = '../Arquivos/JSON/slide.json';
var divSlides = document.getElementById("slidesDiv");
var divEditoriais = document.getElementById("editoriais");
var selectBoxOrdenar = document.getElementById("ordenarData");
var selectBoxEditoria = document.getElementById("filtrarEditoria");


// botao.addEventListener("click", function(){
// 	alert("Funcinando");

// 	theSlider.insertAdjacentHTML('beforeend', '<h1>FUNCIOANDO</h1>');
// });


// Links Corretos


function carregarJSON(callback){
	var requisicaoNoticias = new XMLHttpRequest();

	requisicaoNoticias.overrideMimeType('application/json');
	requisicaoNoticias.open("GET", linkJSONnoticias, true);
	requisicaoNoticias.onreadystatechange = function(){
		if(requisicaoNoticias.readyState == 4 && requisicaoNoticias.status == "200"){
			callback(requisicaoNoticias.responseText);
		}
	};
	requisicaoNoticias.send(null);	
}

function init(){
	carregarJSON( function(response){
		var JSON_atual = JSON.parse(response);

		var htmlNoticias = '';
		var htmlComboBoxOrdenar = '';
		var htmlComboBoxFiltrar = '';
		var numeroMaterias = 0;
		
		// Carrega as Notícias
	
			
			for(i = 0; i < JSON_atual[0]['Editorias'].length; i++){
				for(j = 0; j < JSON_atual[0]['Editorias'][i]['Notícias'].length; j++){
					htmlNoticias += '<div class="thumbnail">';
					htmlNoticias += "<h4>"+JSON_atual[0]['Editorias'][i]['Notícias'][j]["Título"]+"</h4>";					
					htmlNoticias += "<h5><b>"+JSON_atual[0]['Editorias'][i]['Editoria']+"</b></h5>";					
					htmlNoticias += '<img class="thumb_img" src="../Arquivos/Imagens/Notícias/'+JSON_atual[0]['Editorias'][i]['Notícias'][j]['Foto']+'">';					
					htmlNoticias += '<span class="data_publicacao">'+JSON_atual[0]['Editorias'][i]['Notícias'][j]["Data de publicação"]+'</span>';					
					htmlNoticias += '<p class="thumb_paragrafo">'+JSON_atual[0]['Editorias'][i]['Notícias'][j]["Texto"]+'</p>';					
					htmlNoticias += '</div>';
					numeroMaterias++;
				
				}
			}
		
		divEditoriais.insertAdjacentHTML('beforeend', htmlNoticias);

		//alert("Numero de matérias é: "+numeroMaterias);
		//alert(JSON_atual[0]['Editorias'].length);
		// Carrega Combo box Editorias
		for( i = 0; i < JSON_atual[0]['Editorias'].length; i++){
			htmlComboBoxOrdenar += '<option value='+i+'>'+JSON_atual[0]['Editorias'][i]['Editoria']+'</option>';
		}

		selectBoxEditoria.insertAdjacentHTML("beforeend", htmlComboBoxOrdenar);
	
		htmlComboBoxOrdenar += '<option value='+i+'>'+JSON_atual[0][1]+'</option>';

	});
}
init();


// Carregar JSON do Slide


function carregarJSONslides(callback){
	var requisicaoSlides = new XMLHttpRequest();

	requisicaoSlides.overrideMimeType('application/json');
	requisicaoSlides.open("GET", linkJSONslides, true);
	requisicaoSlides.onreadystatechange = function(){
		if(requisicaoSlides.readyState == 4 && requisicaoSlides.status == "200"){
			callback(requisicaoSlides.responseText);
		}
	};
	requisicaoSlides.send(null);	
}

function initSlides(){
	var htmlSlides = '';

	var htmlQuadrados = '<ul class="lista_quadrados">';
	var htmlSetas = '<div class="setas"><span class="seta_esquerda"><</span><span class="seta_direita">></span>';
	var listargem = false;
	carregarJSONslides( function(response){
		var JSON_atual = JSON.parse(response);
		//alert("Numero de Slides"+JSON_atual[0].imagens.length);
		for(i = 0; i < JSON_atual[0].imagens.length; i++){
			if(i == 0 ){
				htmlSlides += '<img id="slide_'+(i + 1)+'" class="slide_img active" src="../Arquivos/Imagens/Slide/'+JSON_atual[0].imagens[i]+'">';				
			}else {
				htmlSlides += '<img id="slide_'+(i + 1)+'" class="slide_img" src="../Arquivos/Imagens/Slide/'+JSON_atual[0].imagens[i]+'">';
			}

			htmlQuadrados += '<li class="quadrados"><a href="#slide_'+(i + 1)+'">_</a></li>';
			//alert(htmlSlides);
			if( i == 1){
				listagem = true;
			}			
		}
		
		divSlides.insertAdjacentHTML("beforeend", htmlSlides);

		if(listagem == true){
			htmlQuadrados += '</ul>';		
			divSlides.insertAdjacentHTML("beforeend", htmlQuadrados);
			divSlides.insertAdjacentHTML("beforeend", htmlSetas);
		}
	});
	
}
initSlides();