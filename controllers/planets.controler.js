const {userServices, planetServices} = require('../services');

module.exports = {

    getPlanetById: async (req, res, next) => {
        try {
            const {id} = req.params;
            const {encoding} = req.query;

            let foundPlanet = await planetServices.getPlanetFromApi(id);

            if (encoding && encoding === 'ewok') {
                foundPlanet = userServices.ewokCoding(foundPlanet);
            }

            res.json(foundPlanet);

        } catch (e) {
            next(e);
        }
    }
}
