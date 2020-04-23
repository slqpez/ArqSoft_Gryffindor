var map;
var socket = io.connect('http://localhost:4000', {'forceNew':true});
function initMap(){
  if(navigator.geolocation) //si acepta la geolocalizacion 
  {
      navigator.geolocation.getCurrentPosition(function(position) {
          var myLatLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

    var options = {
        center:myLatLng ,
        zoom:15
    }
    var imagen ={ url:'img/pin.png'};   
    map = new google.maps.Map(document.getElementById('map'), options);
    
    
    const marcador = new google.maps.Marker({
        position:myLatLng,
        map:map,
        title:"Tu posicion como Empresario macho que sos",
        icon:imagen
    });

    });
    
  }
}

socket.on('nuevaPosicion',(infoPosicion)=>{
  console.log("conductor conectado");
  var imagen ={ url:'img/delivery-truck.png'}; 
  var texto = infoPosicion[1];
  var pos = infoPosicion[0];
  
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

}

