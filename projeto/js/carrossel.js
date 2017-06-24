// //Carrossel

// var btnPrev = document.getElementsByClassName("seta_esquerda");
// var btnNext = document.getElementsByClassName("seta_direita");
// btnPrev.addEventListener("click", proxSlide(-1));
// btnNext.addEventListener("click", proxSlide(1));


// var indexSlides = 1;
// mostrarSlides(indexSlides);

// function proxSlide(n){
// 	mostrarSlides(indexSlides = n);
// }
// function anteriorSlide(n) {
// 	mostrarSlides(indexSlides = n);
// }

// function mostrarSlides(n){
// 	var i;
// 	var slides = document.getElementsByClassName("slide_img");
// 	var quadrados = document.getElementsByClassName("quadrados");
// 	if(n > slides.length){
// 		indexSlides = 1;
// 	}
// 	if( n < 1) {
// 		indexSlides = slides.length;
// 	}
// 	for (i = 0; i < slides.length; i++){
// 		slides[i].style.display = 'none';
// 	}
// 	for( i = 0; i < quadrados.length; i++ ){
// 		quadrados[i].className = quadrados[i].className.replace(" active", "");
// 	}
// 	slides[indexSlides - 1].style.display = "block";
// 	quadrados[indexSlides - 1].className += " active";
// }



// var containerSlider = document.getElementById("slidesDiv");
// var numeroFotos = 3; //document.getElementsByClassName("slide_img").length;
// var velocidade = 7000;


// function carrosselEsconder(numero){
// 	indicadores[numero].setAttribute("data-state", "");
// 	slides[numero].setAttribute("data-state", "");

// 	slides[numero].style.opacity = 0;
// }
// function carrosselMostrar(numero){
// 	indicadores[numero].checked = true;
// 	indicadores[numero].setAttribute("data-state", "active");
// 	slides[numero].setAttribute("data-state", "active");
// 	slides[numero].style.opacity = 1;
// }

// function setSlide(slide){
// 	return function(){
// 		for( var i = 0; i < indicadores.length; i++){
// 			indicadores[i].setAttribute("data-state", "");
// 			slides[i].setAttribute("data-state", "");

// 			carrosselEsconder(i);
// 		}

// 		indicadores[slide].setAttribute("data-state", "active");
// 		slides[slide].setAttribute("data-state", "active");
// 		carrosselMostrar(slide);

// 		clearInterval(trocador);		
// 	};
// }

// function mudarSlide(){
// 	var proximoSlide = 0;

// 	for( var = 0; i < indicadores.length; i++){
// 		if((indicadores[i].getAttribute("data-state") == "active") && (i !== (indicadores.length -1))){
// 			proximoSlide = i + 1;
// 		}

// 		carrosselEsconder(i);
// 	}

// 	carrosselMostrar(proximoSlide);
// }
// if(containerSlider) {
// 	var slides = containerSlider.querySelectorAll(".slide_img");
// 	var indicadores = containerSlider.querySelectorAll(".indicadores");

// 	var trocador = setInterval(function(){
// 		mudarSlide();
// 	}, velocidade);

// 	for( var i = 0; i < indicadores.length; i++) {
// 		indicadores[i].addEventListener("click", setSlide(i));
// 	}
// }
///

// var carousel = document.getElementById('slidesDiv');
// var slides = 3;
// var speed = 7000; // 5 seconds

// function carouselHide(num) {
//     indicators[num].setAttribute('data-state', '');
//     slides[num].setAttribute('data-state', '');

//     slides[num].style.opacity=0;
// }

// function carouselShow(num) {
//     indicators[num].checked = true;
//     indicators[num].setAttribute('data-state', 'active');
//     slides[num].setAttribute('data-state', 'active');

//     slides[num].style.opacity=1;
// }

// function setSlide(slide) {
//     return function() {
//         // Reset all slides
//         for (var i = 0; i < indicators.length; i++) {
//             indicators[i].setAttribute('data-state', '');
//             slides[i].setAttribute('data-state', '');
            
//             carouselHide(i);
//         }

//         // Set defined slide as active
//         indicators[slide].setAttribute('data-state', 'active');
//         slides[slide].setAttribute('data-state', 'active');
//         carouselShow(slide);

//         // Stop the auto-switcher
//         clearInterval(switcher);
//     };
// }

// function switchSlide() {
//     var nextSlide = 0;

//     // Reset all slides
//     for (var i = 0; i < indicators.length; i++) {
//         // If current slide is active & NOT equal to last slide then increment nextSlide
//         if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length-1))) {
//             nextSlide = i + 1;
//         }

//         // Remove all active states & hide
//         carouselHide(i);
//     }

//     // Set next slide as active & show the next slide
//     carouselShow(nextSlide);
// }

// if (carousel) {
//     var slides = carousel.querySelectorAll('.slide');
//     var indicators = carousel.querySelectorAll('.indicator');

//     var switcher = setInterval(function() {
//         switchSlide();
//     }, speed);

//     for (var i = 0; i < indicators.length; i++) {
//         indicators[i].addEventListener("click", setSlide(i));
//     }
// }
if(document.readyState == "complete"){

        (function (){
            

        }());
    } 
}