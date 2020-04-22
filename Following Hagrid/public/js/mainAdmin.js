var map;
var socket = io.connect('http://localhost:4000', {'forceNew':true});
function initMap(){
    const ubicacion = new Localizacion( ()=>{
        const myLatLng = {
            lat: ubicacion.latitude,
            lng: ubicacion.longitude
        };

    var options = {
        center:myLatLng ,
        zoom:15
    }

    map = new google.maps.Map(document.getElementById('map'), options);
    
    
    const marcador = new google.maps.Marker({
        position:myLatLng,
        map:map,
        title:"Tu posicion como Empresario macho que sos",
    });

    });
    
}

socket.on('newPosition',(position)=>{
  console.log("conductor conectado");
  var imagen = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';  
  var texto = position[1];
  var pos = position[0];
  
  var marcador = new google.maps.Marker({
    position: pos,
    map: map,
    title:"conductor",
    icon:imagen
   });

   var options = {//opciones de la nueva pocision
    map: map,
    position: pos,
    center: pos
   };
   var informacion= new google.maps.InfoWindow({
    content:texto
  });

  marcador.addListener('click',function(){
    informacion.open(map,marcador);
  });  
});


function handleNoGeolocation(errorFlag) 
{
	  if (errorFlag) 
	  {
		var content = 'Error: The Geolocation service failed.';
	  } 
	  else 
	  {
		var content = 'Error: Your browser doesn\'t support geolocation.';
	  }
	
	  var infowindow = new google.maps.InfoWindow(options);
	  map.setCenter(options.position);
}

