// //Carrossel
function setaImagem(){
	var settings = {
		primeiraImagem : function(){
			elemento = document.querySelector("#slidesDiv img:first-child");
			elemento.classList.add("active");
			//dots = document.querySelector(".lista_quadrados");

			//this.legenda(elemento);
		},
		legenda: function(obj){
			var legenda = obj.querySelector("img").getAttribute("alt");
			document.querySelector("figcaption").innerHTML = legenda;
		},
		dots: function(){

			alert("Funcionou");
		},
		slide: function(){
			elemento = document.querySelector(".active");
			if(elemento.nextElementSibling){
				elemento.nextElementSibling.classList.add("active");
				//settings.legenda(elemento.nextElementSibling);
				elemento.classList.remove("active");
			} else {
				elemento.classList.remove("active");
				settings.primeiraImagem();
			}
		},
		proximo: function(){
			clearInterval(intervalo);
			elemento = document.querySelector("img.active");

			if(elemento.nextElementSibling){
				elemento.nextElementSibling.classList.add("active");
				//settings.legenda(elemento.nextElementSibling);
				elemento.classList.remove("active");
			}else {
				elemento.classList.remove("active");
				settings.primeiraImagem();
			}
			intervalo = setInterval(settings.slide, 4000);
		},
		anterior: function(){
			clearInterval(intervalo);
			//seta = document.querySelector(".seta_direita a");
			elemento = document.querySelector("img.active");

			if(elemento.previousElementSibling){
				elemento.previousElementSibling.classList.add("active");
				//settings.legenda(elemento.previousElementSibling);
				elemento.classList.remove("active");
			} else {
				elemento.classList.remove("active");
				elemento = document.querySelector("#slidesDiv img:last-child");
				elemento.classList.add("active");
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