// João Victor Santos Ruas

function initMap() {
    var coordenadas = { lat: -23.55052, lng: -46.633308 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: coordenadas,
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map,
    });
  }