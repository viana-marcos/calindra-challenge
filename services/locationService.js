const geoCodingClient = require("../client/geoCodingClient");


const getDistances = async (adresses) => {
    adresses = adresses.split(";");   
    let distances = [];
    
    let locations = await getLocations(adresses);    
    for (origin of locations) {
        for (destiny of locations){
            if(origin.location.lat !== destiny.location.lat && origin.location.lng !== destiny.location.lng){
                const distance = await getDistanceFromLatLonInKm(origin.location, destiny.location);
                distances.push({origin: origin.address, destiny: destiny.address, distance: distance}); 
            }
        }
        
    }

    distances.sort((a, b)=>{
        return a.distance - b.distance;
    });
    
    return distances;
};

const getLocations = async (adresses) =>{
    let locations = [];
    for (address of adresses) {
        if (address !== "") {
            const location = await geoCodingClient.getLatLong(address);           

            if (location != null) {
                locations.push({
                    address: address,
                    location: location
                });
            }
        }

    }
    return locations;
}

const getDistanceFromLatLonInKm = async (position1, position2) => {
    var deg2rad = function (deg) { return deg * (Math.PI / 180); },
        R = 6371,
        dLat = deg2rad(position2.lat - position1.lat),
        dLng = deg2rad(position2.lng - position1.lng),
        a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
            + Math.cos(deg2rad(position1.lat))
            * Math.cos(deg2rad(position1.lat))
            * Math.sin(dLng / 2) * Math.sin(dLng / 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return parseFloat(((R * c * 1000)/1000).toFixed(2));
}

module.exports = { getDistances };