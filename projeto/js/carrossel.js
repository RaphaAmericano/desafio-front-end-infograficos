// //Carrossel
function setaImagem(){
	var settings = {
		primeiraImagem : function(){
			elemento = document.querySelector("#slidesDiv img:first-child");
			elemento.classList.add("active");
			//dots = document.querySelector(".lista_quadrados");
			quadrado = document.querySelector("div.lista_quadrados a.input_quadrado:first-child");
			quadrado.classList.add("active");
			//this.legenda(elemento);
		},
		// legenda: function(obj){
		// 	var legenda = obj.querySelector("img").getAttribute("alt");
		// 	document.querySelector("figcaption").innerHTML = legenda;
		// },
		dots: function(e){
			elemento = document.querySelector("img.active");
			quadrado = document.querySelector("a.input_quadrado.active");
			value = e.val;

			//fazer loop para encontrar a tag img com id igual ao do value da tag a clicada


		},
		slide: function(){
			elemento = document.querySelector(".active");
			quadrado = document.querySelector("a.input_quadrado.active")
			if(elemento.nextElementSibling){
				elemento.nextElementSibling.classList.add("active");
				//settings.legenda(elemento.nextElementSibling);
				elemento.classList.remove("active");

				quadrado.nextElementSibling.classList.add("active");
				quadrado.classList.remove("active");
			} else {
				elemento.classList.remove("active");
				quadrado.classList.remove("active");
				settings.primeiraImagem();
			}
		},
		proximo: function(){
			clearInterval(intervalo);
			elemento = document.querySelector("img.active");
			quadrado = document.querySelector("a.input_quadrado.active");
			if(elemento.nextElementSibling){
				elemento.nextElementSibling.classList.add("active");
				//settings.legenda(elemento.nextElementSibling);
				elemento.classList.remove("active");

				quadrado.nextElementSibling.classList.add("active");
				quadrado.classList.remove("active");

			}else {
				elemento.classList.remove("active");
				quadrado.classList.remove("active");
				settings.primeiraImagem();
			}
			intervalo = setInterval(settings.slide, 4000);
		},
		anterior: function(){
			clearInterval(intervalo);
			//seta = document.querySelector(".seta_direita a");
			elemento = document.querySelector("img.active");
			quadrado = document.querySelector("a.input_quadrado.active");
			if(elemento.previousElementSibling){
				elemento.previousElementSibling.classList.add("active");
				quadrado.previousElementSibling.classList.add("active");
				//settings.legenda(elemento.previousElementSibling);
				elemento.classList.remove("active");
				quadrado.classList.remove("active");
			} else {
				elemento.classList.remove("active");
				elemento = document.querySelector("#slidesDiv img:last-child");
				elemento.classList.add("active");
				quadrado.classList.remove("active");
				quadrado = document.querySelector("div.lista_quadrados a.input_quadrado:last-child");
				quadrado.classList.add("active");
				//this.legenda(elemento);
			}
			intervalo = setInterval(settings.slide, 4000);
		}
	}

	settings.primeiraImagem();
	//settings.legenda(elemento);
	var intervalo = setInterval(settings.slide, 4000);
	var checkboxs = document.getElementsByClassName("input_quadrado");

	document.querySelector(".seta_direita a").addEventListener("click", settings.proximo, false);
	document.querySelector(".seta_esquerda a").addEventListener("click", settings.anterior, false);

	//document.getElementsByClassName("input_quadrado").addEventListener("click", settings.dots, false);
}
// window.addEventListener("load", setaImagem, false);