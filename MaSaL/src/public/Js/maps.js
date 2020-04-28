const map = L.map("map").setView([6.25184, -75.56359], 6);

const socket = io();
var myIcon = L.icon({
  iconUrl: "/images/marker2.ico",
  iconSize: [38, 30],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

map.locate({ enableHighAccuracy: true });
map.on("locationfound", e => {
  const coords = [e.latlng.lat, e.latlng.lng];
  const marker = L.marker(coords, { icon: myIcon });
  marker.bindPopup("administrador marica");
  map.addLayer(marker);
  socket.emit("userCoordinates", e.latlng);
});

socket.on("newUserCoordinates", coords => {
  console.log("ahora sí");

  const marker = L.marker([coords.lat + 1, coords.lng + 1], { icon: myIcon });
  marker.bindPopup("Esta es tu ubicación");
  map.addLayer(marker);
});

/* const marker = L.marker([51.505, -0.09]);
marker.bindPopup("Esta es tu ubicación");
map.addLayer(marker); */
