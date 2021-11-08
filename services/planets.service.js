const axios = require('axios').default;

module.exports = {

    getPlanetFromApi: async (id) => {

        const res = await axios.get(`https://swapi.dev/api/planets/${id}`);

        return res.data
    }
}
