const {userServices} = require('../services');

module.exports = {

    getUserById: async (req, res, next) => {
        try {
            const {id} = req.params;
            const {encoding} = req.query;

            let foundUser = await userServices.getUserFromApi(id);

            if (encoding && encoding === 'ewok') {
                foundUser = userServices.ewokCoding(foundUser);
            }

            res.json(foundUser);

        } catch (e) {
            next(e);
        }
    }
}
