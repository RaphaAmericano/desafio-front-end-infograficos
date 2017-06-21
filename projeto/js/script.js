
var linkJSONnoticias = '../Arquivos/JSON/noticias.json';
var linkJSONslides = '../Arquivos/JSON/slide.json';
var botao = document.getElementById("btn");
var divEditoriais = document.getElementById("editoriais");


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
	carregarJSON(function(response){
		var JSON_atual = JSON.parse(response);

		var htmlNoticias = '';

		var numeroMaterias = 0;

		alert(JSON_atual[0]['Editorias'][0]['Editoria']);
		alert(JSON_atual[0]['Editorias'][0]['Notícias'][0]["Título"]);

		// htmlNoticias = "<h1>" + JSON_atual[0]['Editorias'][0]['Notícias'][0]["Título"] + "</h1>";
		divEditoriais.insertAdjacentHTML('beforeend', htmlNoticias);
		
		for(i = 0; i < JSON_atual[0]['Editorias'].length; i++){
			for(j = 0; j < JSON_atual[0]['Editorias'][i]['Notícias'].length; j++){
				var htmlNoticias += "<div><h1>"+JSON_atual[0]['Editorias'][i]['Notícias'][j]["Título"]+"</h1></div>";					
			}

			alert(htmlNoticias);
			//divEditoriais.insertAdjacentHTML('beforeend', htmlNoticias);	
		}

	});
}
init();

