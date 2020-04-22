/*let lugarInfo = []
const conseguirLugares = () =>{
    fetch('https://www.datos.gov.co/resource/g373-n3yy.json')
    .then(Response => Response.json())
    .then(lugares =>{
        console.log(lugares)
        lugares.array.forEach(lugar => {
            let lugarInfo = {
                posicion:{ lat:lugar.punto.coordinates[1],lng:lugar.punto.coordinates[0]},
                nombre:lugar.nombre_sede
            }
            lugarInfo.push(lugarInfo)
        });
        if( navigator.geolocation){
            navigator.geolocation.getCurrentPosition(usuarioUbicacion =>{
                let ubicacion = {
                    lat:usuarioUbicacion.coords.latitude,
                    lng:usuarioUbicacion.coords.longitude
                }
                dibujaMapa(ubicacion)
            })
        }
    })

}
const dibujaMapa = (obj) => {
    let mapa = new gooogle.maps.Map(document.getElementById('map'),{
        center:obj,
        zoom:4
    })
    let marcadorUsuario = new gooogle.maps.Marker({
        position:obj,
        title:'ubicacion'
    })
    marcadorUsuario.setMap(mapa)
    let marcadores = lugarInfo.map(lugar =>{
        return new gooogle.maps.Marker({
            position:lugar.posicion,
            title:lugar.nombre,
            map:mapa
        })
    })
}
conseguirLugares()
*/