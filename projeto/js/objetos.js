function Banco(link, slide = false){

	var banco_de_dados;
	this.link_banco = link;
	// this.banco_de_dados = [];
	this.slideStatus = slide;
	this.arraial = function(){
		alert(this.slideStatus);
	};
	this.iniciarBanco = function(){
		alert("Iniciou Banco")
		this.carregarJSON( function(response){
	 			banco_de_dados = JSON.parse(response);	
	 	});
	};
	this.carregarJSON = function(callback){
		alert("Iniciou Carregar JSON");
		var requisicaoNoticias = new XMLHttpRequest();

		requisicaoNoticias.overrideMimeType('application/json');
		requisicaoNoticias.open("GET", this.link_banco, true);
		requisicaoNoticias.onreadystatechange = function(){
			if(requisicaoNoticias.readyState == 4 && requisicaoNoticias.status == "200"){
				callback(requisicaoNoticias.responseText);
			}
		};
		requisicaoNoticias.send(null);	
	};
	this.mostrarBanco = function(){
		//alert(banco_de_dados);
		return banco_de_dados[0];
	}
	this.displayMaterias = function(){
		if( this.slideStatus === false){
			var htmlNoticias = '';
			var htmlComboBoxOrdenar = '';
			var htmlComboBoxFiltrar = '';
			var divEditoriais = document.getElementById("editoriais");
			var selectBoxEditoria = document.getElementById("filtrarEditoria");
		} else if( this.slideStatus === true){
			var divSlides = document.getElementById("slidesDiv");
			var htmlSlides = '';
			var htmlQuadrados = '<ul class="lista_quadrados">';
			var htmlSetas = '<div class="setas"><span class="seta_esquerda"><</span><span class="seta_direita">></span>';
			var listargem = false;
		} else {
			return;
		}
		if( this.slideStatus === false ){
			for(i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
				for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){
					htmlNoticias += '<div class="thumbnail">';
					htmlNoticias += '<span class="data_publicacao">'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"]+'</span>';
					htmlNoticias += "<h5><b>"+banco_de_dados[0]['Editorias'][i]['Editoria']+"</b></h5>";
					htmlNoticias += '<img class="thumb_img" src="../Arquivos/Imagens/Notícias/'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]['Foto']+'">';
					htmlNoticias += "<h4>"+banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Título"]+"</h4>";
					htmlNoticias += '<p class="thumb_paragrafo">'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Texto"]+'</p>';					
					htmlNoticias += '</div>';
				} //loop for j
			}// loop for i
			divEditoriais.insertAdjacentHTML('beforeend', htmlNoticias);
			for( i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
					htmlComboBoxOrdenar += '<option value='+i+'>'+banco_de_dados[0]['Editorias'][i]['Editoria']+'</option>';
			}
			selectBoxEditoria.insertAdjacentHTML("beforeend", htmlComboBoxOrdenar);
			htmlComboBoxOrdenar += '<option value='+i+'>'+banco_de_dados[0][1]+'</option>';
		} //if slide false
		else if(this.slideStatus === true) {
				for(i = 0; i < banco_de_dados[0].imagens.length; i++){
					if(i == 0 ){
						htmlSlides += '<img id="slide_'+(i + 1)+'" class="slide_img active" src="../Arquivos/Imagens/Slide/'+banco_de_dados[0].imagens[i]+'">';				
					}else {
						htmlSlides += '<img id="slide_'+(i + 1)+'" class="slide_img" src="../Arquivos/Imagens/Slide/'+banco_de_dados[0].imagens[i]+'">';
					}
					htmlQuadrados += '<li class="quadrados"><a href="#slide_'+(i + 1)+'">_</a></li>';
					if( i == 1){
						listagem = true;
					}			
				}//loop for i
				divSlides.insertAdjacentHTML("beforeend", htmlSlides);

				if(listagem == true){
					htmlQuadrados += '</ul>';		
					divSlides.insertAdjacentHTML("beforeend", htmlQuadrados);
					divSlides.insertAdjacentHTML("beforeend", htmlSetas);
				}// if listagem == true
			} // else slide true
			else {
				return;
			}	
	}//Fim display Materias

}
var linkJSONnoticias = '../Arquivos/JSON/noticias.json';
var teste = new Banco(linkJSONnoticias);
