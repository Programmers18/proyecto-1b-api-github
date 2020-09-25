const axios = require('axios');

module.exports = {
    /**
     * Introducir el usuario de github para obtener sus datos de la API
     * @example 
     * usuario = 'jonny1811'
     * @param {string} usuario Usuario del que queremos buscar datos en la API 
     */
    obtenerDatosDeUsuario: function (usuario) {
        const url = `https://api.github.com/users/${ usuario }`;
        return axios.get(url).then(
            data => data.data
        )
        .catch(error => console.log(error));
    }
}