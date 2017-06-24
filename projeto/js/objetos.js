function Banco(link, slide = false){

	var banco_de_dados;
	var ArrDatas = [];
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
	//Função de auxilio para desenvolvimento - inutil par pratica
	this.mostrarBanco = function(){
		if(this.slideStatus === true){
			return banco_de_dados[0];
		}else {
			return banco_de_dados[0]['Editorias'][0]['Notícias'][0];
		}
	}
	this.mostrarArrData = function(){
		return ArrDatas;
	}

	//
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
	this.mudarFormatoData = function (){
		var dataNova;
		for(i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
			for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){

			dataNova = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"];
			dataNova = dataNova.split('-');
			
			d = new Date(dataNova[2],dataNova[1], dataNova[0] );

			banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"] = d;
			}
		}
	}
	this.montarArrayDatas = function(){
		for(i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
			for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){
				ArrDatas.push( banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"]);			
				}
			}
			ArrDatas.sort(function(a, b){
				return a - b; 
		});
	}
	this.organizarPorData = function(){
		var htmlNoticias = '';
		var htmlComboBoxOrdenar = '';
		var htmlComboBoxFiltrar = '';
		var divEditoriais = document.getElementById("editoriais");
		var selectBoxEditoria = document.getElementById("filtrarEditoria");

		while(ArrDatas.pop() !==  undefined){
			for(i = 0; i < banco_de_dados[0]["Editorias"].length; i++){
				for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){		
					for(k = 0; k < ArrDatas.length; k++){
						if(banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"] === ArrDatas[k]){
							alert(i + " "+j+" "+k );
							// alert(ArrDatas[k]);
							//ArrDatas.pop();
							htmlNoticias += '<div class="thumbnail">';
							htmlNoticias += '<span class="data_publicacao">'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"]+'</span>';
							htmlNoticias += "<h5><b>"+banco_de_dados[0]['Editorias'][i]['Editoria']+"</b></h5>";
							htmlNoticias += '<img class="thumb_img" src="../Arquivos/Imagens/Notícias/'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]['Foto']+'">';
							htmlNoticias += "<h4>"+banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Título"]+"</h4>";
							htmlNoticias += '<p class="thumb_paragrafo">'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Texto"]+'</p>';					
							htmlNoticias += '</div>';	
							break;
						}
					}
				}//for j
			}//for i
		 }
		 divEditoriais.insertAdjacentHTML('beforeend', htmlNoticias);
		for( i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
				htmlComboBoxOrdenar += '<option value='+i+'>'+banco_de_dados[0]['Editorias'][i]['Editoria']+'</option>';
		}
		selectBoxEditoria.insertAdjacentHTML("beforeend", htmlComboBoxOrdenar);
		htmlComboBoxOrdenar += '<option value='+i+'>'+banco_de_dados[0][1]+'</option>';
	}
}


//Objeto[0].Editorias[0].Notícias[0]["Data de publicação"]
var linkJSONnoticias = '../Arquivos/JSON/noticias.json';
var linkJSONslides = '../Arquivos/JSON/slide.json';
var teste = new Banco(linkJSONnoticias);
var testeSlides = new Banco(linkJSONslides, true);
var testeData = new Banco(linkJSONnoticias);
testeData.iniciarBanco();
testeData.mudarFormatoData();
testeData.montarArrayDatas();
testeData.displayMaterias();
testeData.mostrarBanco();


// var ArrTest = [
//   {
//     "Nome": "Notícias",
//     "Editorias": [
//     	{
//         "Editoria": "Esporte",
//         "Id": "574c58853ecb94fd25aeb8a8",
//         "Notícias": [
//           {
//             "Foto": "3.jpg",
//             "Título": "Consumo de chocolate e depressão estão associados.",
//             "Texto": "Sint dolor consequat occaecat non aliqua non adipisicing id. Lorem Lorem anim quis incididunt laboris consequat sunt id. Ad laborum magna ad non do dolor. Tempor sunt et eiusmod consequat. Cupidatat labore incididunt commodo nisi elit id eu commodo culpa Lorem Lorem veniam. Id esse mollit qui culpa aliquip aliqua esse adipisicing anim ex magna. Et ipsum sint ad nisi esse sunt labore laboris voluptate dolor ut.\r\n",
//             "Data de publicação": "06-01-2015"}]}]}];