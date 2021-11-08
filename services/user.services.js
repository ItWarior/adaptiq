const axios = require('axios').default;

module.exports = {

    getUserFromApi: async (id) => {

        const res = await axios.get(`https://swapi.dev/api/people/${id}`);

        return res.data
    },
    ewokCoding: (obj) => {

        for (const objKey in obj) {
            if (typeof obj[objKey] === 'string') {

                obj[objKey] = obj[objKey].replace(/[AEIOUY]/ig, 'i');
                obj[objKey] = obj[objKey].replace(/[CDFGHJKLMNPQRSTVWXZ]/ig, 'b');

            }
        }

        return obj;
    }
}
