function myMap() {
  var latitud;
  var longitud;
  navigator.geolocation.getCurrentPosition(function(localizacion) {
    latitud = localizacion.coords.latitude;
    longitud = localizacion.coords.longitude;
    var mapProp = {
      center: new google.maps.LatLng(latitud, longitud),
      zoom: 14
    };
    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
  });
};
