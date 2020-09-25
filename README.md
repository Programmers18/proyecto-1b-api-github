# API Github
Obtener los datos de un usuario introducido por parámetro de la API de Github.

## Instrucciones de uso
Seguir las siguientes instrucciones

### Instalación

```
npm install 18b-api-github
```
### Uso

```
const api = require('18b-api-github');

api.obtenerDatosDeUsuario('jonny1811')
    .then(
        respuesta => console.log(respuesta)
    )
    .catch(error => console.log(error));
```