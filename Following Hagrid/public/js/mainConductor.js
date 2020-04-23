var map;
var marker;
var imagen ={ url:'img/delivery-truck.png'}
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

            map = new google.maps.Map(document.getElementById('map'), options);
    
            const marcador = new google.maps.Marker({
                position:myLatLng,
                map:map,
                title:"tu posicion",
                icon:imagen
             });
         });
    }
}
 

function animarPosicion(){//funcion crea un nuevo marcador en el mapa
    if(navigator.geolocation) //si acepta la geolocalizacion
    {
          navigator.geolocation.getCurrentPosition(function(position) 
          {

        var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
   
        var texto = '<h1> Nombre conductor </h1>' + '<h5>Placa camion</h5>'+'<h5>Empresa del camion</h5>'+'<h5>no recuerdo que mas poner</h5>';
        const infoPosicion =[pos,texto];
        
        var marker = new google.maps.Marker({
			position: pos,
            map: map,
            title:"Tu posicion",
            animation: google.maps.Animation.DROP,
            icon:imagen
           
		  });		
		
	    var options = {//opciones de la nueva pocision
			map: map,
			position: pos,
			center:pos
          };

         //enviamos al socket la nueva pocision	  
        socket.emit('posicion',infoPosicion);
    });
}
}

function handleNoGeolocation(errorFlag) 
{
	  if (errorFlag) 
	  {
		var content = 'Error: La geolocalizacion fallo.';
	  } 
	  else 
	  {
		var content = 'Tu navegador no soporta geolocalizacion';
	  }

}

setInterval(function(){animarPosicion()}, 3000);//cada 3 segundos extraemos la ubicacion nuevamente
