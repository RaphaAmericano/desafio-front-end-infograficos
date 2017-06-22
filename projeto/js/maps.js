//Carregar o Maps
function initMap() {
	var uluru = {lat: -22.908565, lng:-43.194560 };
	var map = new google.maps.Map(document.getElementById('mapaGoogle'), {
		zoom: 16,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}