// //Carrossel
function setaImagem(){
	var settings = {
		primeiraImagem : function(){
			elemento = document.querySelector("#slidesDiv img:first-child");
			elemento.classList.add("active");
			//this.legenda(elemento);
		},
		// legenda: function(obj){
		// 	var legenda = obj.querySelector("img").getAttribute("alt");
		// 	document.querySelector("figcaption").innerHTML = legenda;
		// },
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
				elmemento.nextElementSibling.classList.add("active");
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
			seta = document.querySelector(".seta_direita a");
			elemento = document.querySelector("img.active");

			if(slideAtivo.previousElementSibling){
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

	document.querySelector(".seta_direita").addEventListener("click", settings.proximo, false);
	document.querySelector(".seta_esquerda").addEventListener("click", settings.anterior, false);
}
// window.addEventListener("load", setaImagem, false);