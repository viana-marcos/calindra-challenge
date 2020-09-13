const axios = require('axios');
const KEY = "&key=AIzaSyAPdWbRIR20i_YLiPUqKab1uvtiblIKr7E";
const URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

const getLatLong = async (address) => {
    const url = URL + address + KEY;
    const result = await axios.get(encodeURI(url));     
    if (result.data.results.length > 0)
        return result.data.results[0].geometry.location
    return null
};

module.exports = { getLatLong };