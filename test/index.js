const obtenerUsuario = require('./../index').obtenerDatosDeUsuario;

const expect = require('chai').expect;
var nock = require('nock');
const jonny1811 = require('./respuestas/jonny1811');

describe('Test de datos de diferentes usuarios de Github', () => {
    beforeEach(() => {
        nock('https://api.github.com')
            .get('/users/jonny1811')
            .reply(200, jonny1811);
    });
    it('Obtener datos del usuario "jonny1811"', () => {
        return obtenerUsuario('jonny1811').then(
            respuesta => {
                // Probar el tipo de variable que obtenemos de respuesta. Tiene que ser un objeto
                expect(typeof respuesta).to.equal('object');

                // Comprobar que el usuario de la API es jonny1811
                expect(respuesta.login).to.equal('jonny1811');
                // Comprobar que el ID del usuario es numerico
                expect(typeof respuesta.id).to.equal('number');
                // Seguidores y seguido sean numericos
                expect(typeof respuesta.followers).to.equal('number');
                expect(typeof respuesta.following).to.equal('number');
                // Location = Hernandarias, Paraguay
                expect(respuesta.location).to.equal('Hernandarias, Paraguay');
            }
        )
    });
});