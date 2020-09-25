# API Github
Obtener los datos de un usuario introducido por parámetro de la API de Github.

## Instrucciones de uso
Seguir las siguientes instrucciones

### Instalación

```
npm install proyecto-1b-api-github-18
```
### Uso

```
const api = require('proyecto-1b-api-github-18');

api.obtenerDatosDeUsuario('jonny1811')
    .then(
        respuesta => console.log(respuesta)
    )
    .catch(error => console.log(error));
```