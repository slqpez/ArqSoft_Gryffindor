var map;
var marker;
var imagen = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
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
        title:"tu posicion",
        icon:imagen

        
    });

    });
	 
}

function animar(){//funcion crea un nuevo marcador en el mapa

    const ubicacion = new Localizacion( ()=>{
        const pos = {
            lat: ubicacion.latitude,
            lng: ubicacion.longitude
        };
        var texto = '<h1> Nombre conductor </h1>' + '<h5>Placa camion</h5>'+'<h5>Empresa del camion</h5>'+'<h5>no recuerdo que mas poner</h5>';
        const position =[pos,texto];
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
        socket.emit('position',position);
    });
}

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

setInterval(function(){animar()}, 3000);//cada 3 segundos extraemos la ubicacion nuevamente
