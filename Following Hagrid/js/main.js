function initMap(){
    const ubicacion = new Localizacion( ()=>{
        const myLatLng = {
            lat: ubicacion.latitude,
            lng: ubicacion.longitude
        };
        var texto = '<h1> Nombre conductor </h1>' + '<h5>Placa camion</h5>'+'<h5>Empresa del camion</h5>'+'<h5>no recuerdo que mas poner</h5>'
        const options = {
            center:myLatLng ,
            zoom:15
        }

        var map = document.getElementById('map');

        const mapa = new google.maps.Map(map, options);

        const marcador = new google.maps.Marker({
            position:myLatLng,
            map:mapa,
            title:"Nombre empresa",
            icon:'img\icon monster.ico',
            animation: google.maps.Animation.DROP
        });
    });
  
}
/*
function drop() {
    for (var i =0; i < markerArray.length; i++) {
      setTimeout(function() {
        addMarkerMethod();
      }, i * 200);
    }
  }*/