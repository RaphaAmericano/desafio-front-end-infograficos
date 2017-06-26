function Banco(link, slide = false){

	var banco_de_dados;
	var ArrDatas = [];
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
			for(i = 0; banco_de_dados[0]['Editorias'].length; i++){console.log(banco_de_dados[0]['Editorias'][i])};
			return banco_de_dados[0]['Editorias'].length;
			// return banco_de_dados[0]['Editorias'][0]['Notícias'][0];
		}
	}
	this.mostrarArrData = function(){
		return ArrDatas;
	}

	//
	this.displayMaterias = function(){

		if( this.slideStatus == false ){
			for(i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
				for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){
					novaDiv = document.createElement("div");
					novaDiv.classList.add("thumbnail");
					novoSpan = document.createElement("span");
					novoSpan.classList.add("data_publicacao");
					novoSpan.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"];
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

					novaDiv.appendChild(novoSpan);
					novaDiv.appendChild(novoH5);
					novaDiv.appendChild(novoH5);
					novaDiv.appendChild(novoImg);
					novaDiv.appendChild(novoH4);
					novaDiv.appendChild(novoP);

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
				novoForm = document.createElement("form");
				novoForm.classList.add("lista_quadrados");
				for(i = 0; i < banco_de_dados[0].imagens.length; i++){
					novoSlide = document.createElement('img');
					novoSlide.id = i; //
					novoSlide.classList.add("slide_img");
					novoSlide.src = '../Arquivos/Imagens/Slide/'+banco_de_dados[0].imagens[i];
					// if(i == 0 ){
					// 	novoSlide.classList.add("active");
					// 	htmlSlides += '<img id="slide_'+(i + 1)+'" class="slide_img" src="../Arquivos/Imagens/Slide/'+banco_de_dados[0].imagens[i]+'">';				
					// }
					//htmlQuadrados += '<li class="quadrados"><a href="#slide_'+(i + 1)+'">_</a></li>';
					divSlides.appendChild(novoSlide);
					novoRadioInp = document.createElement("input");
					novoRadioInp.type = "radio";
					novoRadioInp.value = i;
					if(i=0){
						novoRadioInp.checked = true;
					}
					novoForm.appendChild(novoRadioInp);
					if( i === 1){
						listagem = true;
					}			
				}//loop for i
				//divSlides.insertAdjacentHTML("beforeend", htmlSlides);

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
					
					divControladores.appendChild(novoForm);					
					divControladores.appendChild(novaDiv);					
					// htmlQuadrados += '</ul>';		
					// divSlides.insertAdjacentHTML("beforeend", htmlQuadrados);
					// divSlides.insertAdjacentHTML("beforeend", htmlSetas);
				}// if listagem == true
			} // else slide true
			else {
				return;
			}	
	}//Fim display Materias
	this.resetarEditoriais = function(){
		// if(divEditoriais.childElementCount > 0 ){
		// 	for(i =0; i < divEditoriais.childElementCount; i++){
		// 		divEditoriais.removeChild(divEditoriais.childNodes[i]);
		// 	}	
		// }

		// while(divEditoriais.hasChildNodes()){
		// 	divEditoriais.removeChild(divEditoriais.firstChild);
		// }
		divEditoriais.innerHTML = '';
	}
	this.displayEditorias = function(val){
		this.resetarEditoriais();
		if( val == 0) { this.displayMaterias(); return;};
		for(j = 0; j < banco_de_dados[0]['Editorias'][val - 1]['Notícias'].length; j++){
			novaDiv = document.createElement("div");
			novaDiv.classList.add("thumbnail");
			novoSpan = document.createElement("span");
			novoSpan.classList.add("data_publicacao");
			novoSpan.innerText = banco_de_dados[0]['Editorias'][val - 1]['Notícias'][j]["Data de publicação"];
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
	}
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
	this.organizarPorData = function(reverso = false){
		if(reverso === true ){
			ArrDatas.reverse();
		}
		//var htmlNoticias = '';
		var htmlComboBoxOrdenar = '';
		var htmlComboBoxFiltrar = '';


		while(ArrDatas !==  undefined){
			for(i = 0; i < banco_de_dados[0]["Editorias"].length; i++){
				for(j = 0; j < banco_de_dados[0]['Editorias'][i]['Notícias'].length; j++){		
					for(k = 0; k < ArrDatas.length; k++){
						if(banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"] === ArrDatas[k]){
							alert(i + " "+j+" "+k );
							// alert(ArrDatas[k]);
							//ArrDatas.pop();
							novaDiv = document.createElement("div");
							novaDiv.classList.add("data_publicacao");
							novaSpan = document.createElement("span");
							novaSpan.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"];
							novoH5 = document.createElement("h5");
							novoB = document.createElement("b");
							novoB.innerText = banco_de_dados[0]['Editorias'][i]['Editoria'];
							novoH5.appendChild(novoB);
							novoImg = document.createElement("img");
							novoImg.classList.add("thumb_img");
							novoImg.src = "../Arquivos/Imagens/Notícias/"+banco_de_dados[0]['Editorias'][i]['Notícias'][j]['Foto'];
							novoH4 = document.createElement("h4");
							novoH4.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Título"];
							novoP = document.createElement("p");
							p.classList.add("thumb_paragrafo");
							p.innerText = banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Texto"];

							novaDiv.appendChild(novaSpan);
							novaDiv.appendChild(novoH5);
							novaDiv.appendChild(novoImg);
							novaDiv.appendChild(h4);
							novaDiv.appendChild(p);

							divEditoriais.appendChild(novaDiv);
							// htmlNoticias += '<div class="thumbnail">';
							// htmlNoticias += '<span class="data_publicacao">'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Data de publicação"]+'</span>';
							// htmlNoticias += "<h5><b>"+banco_de_dados[0]['Editorias'][i]['Editoria']+"</b></h5>";
							// htmlNoticias += '<img class="thumb_img" src="../Arquivos/Imagens/Notícias/'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]['Foto']+'">';
							// htmlNoticias += "<h4>"+banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Título"]+"</h4>";
							// htmlNoticias += '<p class="thumb_paragrafo">'+banco_de_dados[0]['Editorias'][i]['Notícias'][j]["Texto"]+'</p>';					
							// htmlNoticias += '</div>';	
							ArrDatas.splice(i, 1);
							break;
						}
					}
				}//for j
			}//for i
		 }
		 //divEditoriais.insertAdjacentHTML('beforeend', htmlNoticias);
		for( i = 0; i < banco_de_dados[0]['Editorias'].length; i++){
				htmlComboBoxOrdenar += '<option value='+i+'>'+banco_de_dados[0]['Editorias'][i]['Editoria']+'</option>';
		}
		selectBoxEditoria.insertAdjacentHTML("beforeend", htmlComboBoxOrdenar);
		htmlComboBoxOrdenar += '<option value='+i+'>'+banco_de_dados[0][1]+'</option>';
	}
	this.getBanco = function(){
		console.log(banco_de_dados);
		return banco_de_dados;
	}
}