function launchMap() {

    // to make the map appear zoomed on Le Panier:
    const mymap = L.map('mapid').setView([43.299291, 5.364654], 15);
    
    // to make a zone showing Le Panier:
    const polygon = L.polygon([
    [43.3051, 5.366947],
    [43.299478, 5.371319],
    [43.297792, 5.370719],
    [43.295512, 5.364804],
    [43.294981, 5.362232],
    [43.297573, 5.359532],
    [43.300134, 5.36309]
    ],
    {
        color: '#DF9210',
        fillColor: '#DDD',
        fillOpacity: 0.4,
        radius: 500
    }).addTo(mymap);
    
    // to creates markers showing different locations on the map:
    const mucem = L.marker([43.297245, 5.360994]).addTo(mymap);
    mucem.bindPopup("<b>Mucem</b>").openPopup();
    const major = L.marker([43.299213, 5.364632]).addTo(mymap);
    major.bindPopup("<b>Cathédrale La Major</b>").openPopup();
    const charite = L.marker([43.30038, 5.367852]).addTo(mymap);
    charite.bindPopup("<b>Centre de la Vieille Charité</b>").openPopup();
    const boule = L.marker([43.299527, 5.366523]).addTo(mymap);
    boule.bindPopup("<b>Musée de la Boule</b>").openPopup();
    const undartground = L.marker([43.298604, 5.366475]).addTo(mymap);
    undartground.bindPopup("<b>Undartground</b>").openPopup();
    const cigales = L.marker([43.300016, 5.368581]).addTo(mymap);
    cigales.bindPopup("<b>Le Clan des Cigales</b>").openPopup();
    const terrasse = L.marker([43.299512, 5.368075]).addTo(mymap);
    terrasse.bindPopup("<b>La Terrasse du Panier</b>").openPopup();
    const bar13Coins = L.marker([43.299362, 5.366544]).addTo(mymap);
    bar13Coins.bindPopup("<b>Le Bar des 13 Coins</b>").openPopup();
    const hotelDieuStairs = L.marker([43.298191, 5.369206]).addTo(mymap); //8 marches
    hotelDieuStairs.bindPopup("<b>Les Escaliers Hotel Dieu</b>").openPopup();
    const moulinStairs = L.marker([43.298487, 5.368275]).addTo(mymap); //25 marches
    moulinStairs.bindPopup("<b>Les Escaliers des Moulins</b>").openPopup();
    const antoineStairs = L.marker([43.299398, 5.370929]).addTo(mymap); //101 marches
    antoineStairs.bindPopup("<b>Les Escaliers Saint Antoine</b>").openPopup();
    const poirierStairs = L.marker([43.298771, 5.368733]).addTo(mymap); //72 marches
    poirierStairs.bindPopup("<b>Les Escaliers du Poirier</b>").openPopup();
    
    // to get the api... I think:
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);
    
    // to get the api to popup:
    const popup = L.popup();  
    
    // to set what will be going on when we click on the map:
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            // .setContent("You clicked the map at " + e.latlng.toString())
            // .openOn(mymap);
    }
    
    // to actually apply what we've previously set on a click:
    // hmmm... I do not see any difference, when it's relly here or when it's a comment ?__?
    mymap.on('click', onMapClick);
    
}

// const test = document.getElementById('mapid');
// const button = document.querySelector('h1')
// button.addEventListener('click', function() {
//     test.classList.toggle('toggleDisplay');
// })

$('#ParcoursModal').on('show.bs.modal', function () {
    // do something…
    setTimeout(function(){ launchMap(); }, 200);
  })
  