
const locationService = require("../services/locationService");

const getDistances = async (req, res) => {
    try {
        const result = await locationService.getDistances(req.query.adresses);
        res.send(result);
    } catch (err) {
        console.log(err)
        res.send(err);
    }

};
module.exports = { getDistances };