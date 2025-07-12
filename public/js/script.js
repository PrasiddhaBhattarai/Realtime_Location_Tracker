const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("sendLocation", { latitude, longitude });
        },
        (error) => {
            console.error();
            console.log(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0 // 0=> no caching
        }
    );
}

// below is provided by ......leaflet.min.js
// setView([latitude,longiture], zoom level)
const map = L.map("map").setView([0,0], 10);

// s, z, x, y are dynamic values put by osm. these value decide which tile of map to display
// L.tileLayer(url, attribution);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution : "OpenStreetMap"
}).addTo(map);

const markers = {};

socket.on("receiveLocation", (data) => {
    const {id, latitude, longitude} = data;
    map.setView([latitude, longitude], 15);
    if(markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    }
    else{
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
})

socket.on("userDisconnected", (id) => {
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})