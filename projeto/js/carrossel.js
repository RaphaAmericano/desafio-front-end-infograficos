//Carrossel

var btnPrev = document.getElementsByClassName("seta_esquerda");
var btnNext = document.getElementsByClassName("seta_direita");
btnPrev.addEventListener("click", proxSlide(-1));
btnNext.addEventListener("click", proxSlide(1));


var indexSlides = 1;
mostrarSlides(indexSlides);

function proxSlide(n){
	mostrarSlides(indexSlides = n);
}
function anteriorSlide(n) {
	mostrarSlides(indexSlides = n);
}

function mostrarSlides(n){
	var i;
	var slides = document.getElementsByClassName("slide_img");
	var quadrados = document.getElementsByClassName("quadrados");
	if(n > slides.length){
		indexSlides = 1;
	}
	if( n < 1) {
		indexSlides = slides.length;
	}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}
	for( i = 0; i < quadrados.length; i++ ){
		quadrados[i].className = quadrados[i].className.replace(" active", "");
	}
	slides[indexSlides - 1].style.display = "block";
	quadrados[indexSlides - 1].className += " active";
}

