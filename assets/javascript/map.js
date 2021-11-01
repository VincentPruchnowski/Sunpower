function init() {
    var map = L.map('mapid', {
        scrollWheelZoom: false
    }).setView([43.614, 3.87],12);
    const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYnJvd2t5IiwiYSI6ImNrdjZpaXlrNDB3MnIzM29rNDhwbnN1ZG8ifQ.e156XzEkbL-l4CQSLSfGeg'
    });
    mainLayer.addTo(map);
    var iconMarker = L.icon ({
        iconUrl: "assets/image/voiture.png",
        iconSize: [60, 60],
        iconAnchor: [0,0],
        popupAnchor: [28, 8],
    })
    var marker1 = L.marker([43.603749083841635, 3.878995598127631],{icon:iconMarker}).addTo(map);
    var marker2 = L.marker([43.649026990244145, 3.92001551165744],{icon:iconMarker}).addTo(map);
    var marker3 = L.marker([43.649765025610606, 3.841940400023628],{icon:iconMarker}).addTo(map);
    var marker4 = L.marker([43.594, 3.8503103327044963],{icon:iconMarker}).addTo(map);
    marker1.bindPopup("Gare Saint Roch").openPopup();
    marker2.bindPopup("Lycée Georges Pompidou").openPopup();
    marker3.bindPopup("Carrefour Trifontaine").openPopup();
    marker4.bindPopup("Stade de rugby GGL Stadium").openPopup();
}

