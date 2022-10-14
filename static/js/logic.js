var path
var hurr_paths = []
var myMap
var hurricanes
var overlayMaps
var layerControl
var baseMaps
var leaflet_id

// d3.json(hurr_url).then(function(data) {
//     path = data;
//     console.log(data);
//     // createMap(data)
// });

function create_path (coords) {
    line = coords;
    options = {
        color: "black"
    }
    return L.polyline(line, options);
};

function createMap(hurricane) {

    // hurricanes.removeLayer(1);
    layerControl.removeLayer(hurricanes);
    myMap.removeLayer(hurricanes);
    // hurr_paths.forEach(function (item) {
    //     myMap.removeLayer(item)
    // });
    hurr_paths = [];

    

    coordinates = path[hurricane].coords;
    hurr_paths.push(create_path(coordinates));


    hurricanes = L.layerGroup(hurr_paths);

    layerControl.addOverlay(hurricanes, hurricane);


};

function createInitMap() {

    coordinates = path['Janet 1955'].coords;
    // console.log(coordinates);
    hurr_paths.push(create_path(coordinates));


    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var baseMaps = {
        "Street Map": street,
    };

    hurricanes = L.layerGroup(hurr_paths);

    overlayMaps = {
        "Hurricane": hurricanes
    };

    // create map with layers "on" when first loaded
    myMap = L.map("map", {
        editable: true,
        center: [
        28, -60
        ],
        zoom: 2.5,
        layers: [street, hurricanes]
    });

    layerControl = L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

    // myMap.eachLayer(function (layer) {
    //     console.log(layer)
    // });

    // leaflet_id = 
    // console.log(hurricanes._leaflet_id)
    
};