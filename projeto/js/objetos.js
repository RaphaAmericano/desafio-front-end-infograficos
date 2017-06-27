function Banco(link, slide = false){

	var banco_de_dados;
	var ArrDatas = [];
	var ArrAlfabetica = [];
	this.link_banco = link;
	// this.banco_de_dados = [];
	this.slideStatus = slide;
	this.arraial = function(){
		console.log(this.slideStatus);
	};
	this.iniciarBanco = function(){
		console.log("Iniciou Banco");
		this.carregarJSON( function(response){
	 			banco_de_dados = JSON.parse(response);
	 	});
	};
	this.carregarJSON = function(callback){
		console.log("Iniciou Carregar JSON");
		var requisicaoNoticias = new XMLHttpRequest();

		requisicaoNoticias.overrideMimeType('application/json');
		requisicaoNoticias.open("GET", this.link_banco, false);//Aqui
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
			for(i = 0; banco_de_dados[0]['Editorias'].length; i++){console.log(banco_de_dados[0]['Editorias'][i]['Notícias'])};
		}
	};
	this.getBanco = function(){
		return banco_de_dados;
	};
	this.mostrarArrData = function(){
		return ArrDatas;
	};
	this.mostrarArrAlfabetica = function(){
		return ArrAlfabetica;
	};
	this.displayData = function(value = 1){
		if(value = 2){
			this.reverterArray(ArrDatas);
		}
		for(k = 0; k < ArrDatas; k++ ){
			for(i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
				for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){
					
					dat1 = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"];
					dat2 = ArrDatas[k];

					if(dat2 == dat1 ){
						novaDiv = document.createElement("div");
						novaDiv.classList.add("thumbnail");
						novoSpan = document.createElement("span");
						novoSpan.classList.add("data_publicacao");
						novoSpan.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"].getDate() +"/"+banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"].getMonth()+"/"+banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"].getFullYear();//
						//novoSpan.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"].getDate();//
						novoH5 = document.createElement("h5");
						novoB = document.createElement("b");
						novoB.innerText = banco_de_dados[0]['Editorias'][i]['Editoria'];
						novoH5.appendChild(novoB);
						novoImg = document.createElement("img");
						novoImg.classList.add("thumb_img");
						novoImg.src = '../Arquivos/Imagens/Notícias/'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]['Foto'];
						novoH4 = document.createElement("h4");
						novoH4.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Título"];
						novoP = document.createElement("p");
						novoP.classList.add("thumb_paragrafo");
						novoP.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Texto"];

						novoSaiba = document.createElement("span");//
						novoSaibaA = document.createElement("a");
						novoSaibaA.innerText = "Saiba Mais";
						novoSaibaA.href = "#id_"+i; 
						novoSaiba.classList.add("saiba_mais");
						novoSaiba.appendChild(novoSaibaA);//
						

						novaDiv.appendChild(novoSpan);
						novaDiv.appendChild(novoH5);
						novaDiv.appendChild(novoH5);
						novaDiv.appendChild(novoImg);
						novaDiv.appendChild(novoH4);
						novaDiv.appendChild(novoP);
						novaDiv.appendChild(novoSaiba);

						divEditoriais.appendChild(novaDiv);
					}// if 
				}//loop j
			}// loop i
			//ArrDatas[k] = 0;
		}//loop k
	};
	//
	this.displayAlfabetica = function(value = 1){
		if(value == 3){
			this.reverterArray(ArrAlfabetica);
		}

		for(i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
			for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){

				str1 = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Título"];
				str2 = ArrAlfabetica[j];
				if(str1 == str2 ){
					novaData = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"].split('-');
					novaDiv = document.createElement("div");
					novaDiv.classList.add("thumbnail");
					novoSpan = document.createElement("span");
					novoSpan.classList.add("data_publicacao");
					novoSpan.innerText = novaData[0]+"/"+novaData[1]+"/"+novaData[2];
					novoH5 = document.createElement("h5");
					novoB = document.createElement("b");
					novoB.innerText = banco_de_dados[0]['Editorias'][i]['Editoria'];
					novoH5.appendChild(novoB);
					novoImg = document.createElement("img");
					novoImg.classList.add("thumb_img");
					novoImg.src = '../Arquivos/Imagens/Notícias/'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]['Foto'];
					novoH4 = document.createElement("h4");
					novoH4.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Título"];
					novoP = document.createElement("p");
					novoP.classList.add("thumb_paragrafo");
					novoP.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Texto"];

					novoSaiba = document.createElement("span");//
					novoSaibaA = document.createElement("a");
					novoSaibaA.innerText = "Saiba Mais";
					novoSaibaA.href = "#id_"+i; 
					novoSaiba.classList.add("saiba_mais");
					novoSaiba.appendChild(novoSaibaA);//
					

					novaDiv.appendChild(novoSpan);
					novaDiv.appendChild(novoH5);
					novaDiv.appendChild(novoH5);
					novaDiv.appendChild(novoImg);
					novaDiv.appendChild(novoH4);
					novaDiv.appendChild(novoP);
					novaDiv.appendChild(novoSaiba);

					divEditoriais.appendChild(novaDiv);
					//ArrAlfabetica.splice(i, 1);
					
				}	
			}
		}
		//ArrAlfabetica.length = 0;
		
		//this.ordemAlfabetica();
	}

	this.displayMaterias = function(){

		if( this.slideStatus == false ){
			for(i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
				for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){
					novaData = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"].split('-');
					novaDiv = document.createElement("div");
					novaDiv.classList.add("thumbnail");
					novoSpan = document.createElement("span");
					novoSpan.classList.add("data_publicacao");
					novoSpan.innerText = novaData[0]+"/"+novaData[1]+"/"+novaData[2];
					novoH5 = document.createElement("h5");
					novoB = document.createElement("b");
					novoB.innerText = banco_de_dados[0]['Editorias'][i]['Editoria'];
					novoH5.appendChild(novoB);
					novoImg = document.createElement("img");
					novoImg.classList.add("thumb_img");
					novoImg.src = '../Arquivos/Imagens/Notícias/'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]['Foto'];
					novoH4 = document.createElement("h4");
					novoH4.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Título"];
					novoP = document.createElement("p");
					novoP.classList.add("thumb_paragrafo");
					novoP.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Texto"];

					novoSaiba = document.createElement("span");//
					novoSaibaA = document.createElement("a");
					novoSaibaA.innerText = "Saiba Mais";
					novoSaibaA.href = "#id_"+i; 
					novoSaiba.classList.add("saiba_mais");
					novoSaiba.appendChild(novoSaibaA);//
					

					novaDiv.appendChild(novoSpan);
					novaDiv.appendChild(novoH5);
					novaDiv.appendChild(novoH5);
					novaDiv.appendChild(novoImg);
					novaDiv.appendChild(novoH4);
					novaDiv.appendChild(novoP);
					novaDiv.appendChild(novoSaiba);

					divEditoriais.appendChild(novaDiv);

				} //loop for j
			}// loop for i

			//Condição para evitar inserir redundancias no combobox
			if(selectBoxEditoria.length = 1 ){
				for( i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
					novoOption = document.createElement("option");
					novoOption.value = (i + 1);
					novoOption.innerText = banco_de_dados[0]['Editorias'][i]['Editoria'];
					selectBoxEditoria.appendChild(novoOption);
				}	
			}
			//selectBoxEditoria.insertAdjacentHTML("beforeend", htmlComboBoxOrdenar);
		} //if slide false
		else if(this.slideStatus === true) {
				var listagem = false;

				novoControladorQuadrados = document.createElement("div");
				novoControladorQuadrados.classList.add("lista_quadrados");
				//novoForm.name = "controles";
				for(i = 0; i < banco_de_dados[0].imagens.length; i++){

					 if( i === 1){
					listagem = true;
					 }
					novoSlide = document.createElement('img');
					novoSlide.id = i; //
					novoSlide.classList.add("slide_img");
					novoSlide.src = '../Arquivos/Imagens/Slide/'+banco_de_dados[0].imagens[i];

					divSlides.appendChild(novoSlide);

					novoRadioInp = document.createElement("a");
					novoRadioInp.setAttribute("rel", i);
					novoRadioInp.classList.add("input_quadrado");
					novoRadioInp.innerText = i;
					// if(i == 0){
					// 	novoRadioInp.classList.add("active");
					//  }
					novoControladorQuadrados.appendChild(novoRadioInp);
					if(listagem == true){
						
						
						//--
						novaDiv = document.createElement("div");
						novaDiv.classList.add("setas");
						novoSpanEsq = document.createElement("span");
						novoSpanEsq.classList.add("seta_esquerda");
						novoSpanDir = document.createElement("span");
						novoSpanDir.classList.add("seta_direita");
						novoAdir = document.createElement("a");
						novoAesq = document.createElement("a");
						novoAdir.innerText = ">";
						novoAesq.innerText = "<";



						novoSpanEsq.appendChild(novoAesq);
						novoSpanDir.appendChild(novoAdir);

						novaDiv.appendChild(novoSpanEsq);
						novaDiv.appendChild(novoSpanDir);
						
						divControladores.appendChild(novoControladorQuadrados);					
						divControladores.appendChild(novaDiv);
						listagem = false;			
					}// if listagem == true
				}//loop for i
				//divSlides.insertAdjacentHTML("beforeend", htmlSlides);

				
			} // else slide true
			else {
				return;
			}	
	}//Fim display Materias

	this.ordemAlfabetica = function(){
		for(i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
			for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){
				a = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Título"];
				ArrAlfabetica.push(a);			
				}
			}

		ArrAlfabetica.sort(function(a, b){
			var nomeA = a.toLowerCase();
			var nomeB = b.toLowerCase();

			if(nomeA < nomeB){ return -1;}
			if(nomeA > nomeB ) { return 1;}
			return 0; 
		});	
	};
	
	this.displayEditorias = function(val){
		
		if( val == 0) { this.displayMaterias(); return;};
		for(j = 0; j < banco_de_dados[0]['Editorias'][val - 1]['Notícias'].length; j++){
			dataSplit = banco_de_dados[0]['Editorias'][val - 1]['Notícias'][j]["Data de publicação"];
			dataSplit = dataSplit.split('-');	

			novaDiv = document.createElement("div");
			novaDiv.classList.add("thumbnail");
			novoSpan = document.createElement("span");
			novoSpan.classList.add("data_publicacao");
			novoSpan.innerText =  dataSplit[0]+'/'+dataSplit[1]+'/'+dataSplit[2];
			novoH5 = document.createElement("h5");
			novoB = document.createElement("b");
			novoB.innerText = banco_de_dados[0]['Editorias'][val - 1]['Editoria'];
			novoH5.appendChild(novoB);
			novoImg = document.createElement("img");
			novoImg.classList.add("thumb_img");
			novoImg.src = '../Arquivos/Imagens/Notícias/'+banco_de_dados[0]['Editorias'][val - 1]['Notícias'][j]['Foto'];
			novoH4 = document.createElement("h4");
			novoH4.innerText = banco_de_dados[0]['Editorias'][val - 1]['Notícias'][j]["Título"];
			novoP = document.createElement("p");
			novoP.classList.add("thumb_paragrafo");
			novoP.innerText = banco_de_dados[0]['Editorias'][val - 1]['Notícias'][j]["Texto"];

			novaDiv.appendChild(novoSpan);
			novaDiv.appendChild(novoH5);
			novaDiv.appendChild(novoH5);
			novaDiv.appendChild(novoImg);
			novaDiv.appendChild(novoH4);
			novaDiv.appendChild(novoP);

			divEditoriais.appendChild(novaDiv);

		} //loop for j
	};
	this.mudarFormatoData = function (){
		for(i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
			for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){

			dataNova = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"];
			dataNova = dataNova.split('-');
			
			d = new Date(dataNova[2],dataNova[1], dataNova[0] );

			banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"] = d;
			}
		}
	};
	this.montarArrayDatas = function(){
		for(i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
			for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){
				ArrDatas.push( banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"]);			
				}
			}
			ArrDatas.sort(function(a, b){
				if(a < b){ return -1;}
				if(a > b ) { return 1;}
				return 0; 
		});
	};
	this.reverterArray = function(arr){
			arr.reverse();
	};
	this.organizarPorData = function(contrario = false){


	};
}

function Utilidades(){
	this.resetarEditoriais = function(){
		while(divEditoriais.firstElementChild){
			divEditoriais.removeChild(divEditoriais.firstElementChild);
		}
	};
	this.montarSetaControlador = function(){
		novaDiv = document.createElement("div");
		novaDiv.classList.add("setas");
		novoSpanEsq = document.createElement("span");
		novoSpanEsq.classList.add("seta_esquerda");
		novoSpanDir = document.createElement("span");
		novoSpanDir.classList.add("seta_direita");
		novoAdir = document.createElement("a");
		novoAesq = document.createElement("a");
		novoAdir.innerText = ">";
		novoAesq.innerText = "<";
		novoSpanEsq.appendChild(novoAesq);
		novoSpanDir.appendChild(novoAdir);
		novaDiv.appendChild(novoSpanEsq);
		novaDiv.appendChild(novoSpanDir);
		divControladores.appendChild(novaDiv);
	};
	this.montarQuadradosControladores = function(itinerador){
		novoControladorQuadrados = document.createElement("div");
		novoControladorQuadrados.classList.add("lista_quadrados");
		var listagem = false;
		for(i = 0; i < itinerador; i++){
			novoSlide = document.createElement('img');
			novoSlide.id = i; //
			novoSlide.classList.add("slide_img");
			novoSlide.src = '../Arquivos/Imagens/Slide/'+banco_de_dados[0].imagens[i];

			divSlides.appendChild(novoSlide);

			novoRadioInp = document.createElement("a");
			novoRadioInp.setAttribute("rel", i);
			novoRadioInp.classList.add("input_quadrado");
			novoRadioInp.innerText = i;
			if(i == 0){
				novoRadioInp.classList.add("active");
			}

			novoControladorQuadrados.appendChild(novoRadioInp);
			if(i === 1){
				listagem = true;
			}
		}
		if(listagem){
			divControladores.appendChild(novoControladorQuadrados);
			listagem = false;	
		}
	};
}