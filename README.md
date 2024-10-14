# Examen tecnico

Examen tecnico realizado con NodeJs y Express como tecnologias principales y utilizando MongoDb como base de datos.

## Tabla de contenido

- [Examen tecnico](#examen-tecnico)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Instalacion](#instalacion)
  - [Condiguracion](#condiguracion)
  - [Ejecucion](#ejecucion)
  - [Docker](#docker)
  - [Tests](#tests)
  - [Endpoints](#endpoints)
  - [Tecnologias](#tecnologias)

## Instalacion

1. Clonar este repositorio:
   ```bash

   git clone https://github.com/PinettaH/examen-pierce-comerce.git

   cd examen-pierce-comerce
   
   npm install
## Condiguracion

1. Crear un archivo `.env`. En el archivo `.env.example` comparto las variables de entorno que utilizo:
   ```bash

   PORT=3000
   
   DB_CNN=mongodb+srv://usuario:contraseña@cluster.jklwutw.mongodb.net/nombre-bd
## Ejecucion
El comando para ejecutar el servidor en modo de desarrollo es ` npm run dev `
## Docker 
Inclui un Dockerfile para poder crear una imagen de docker para correr el archivo como se requiera.

`docker build -t "nombre-image" . `
## Tests
El comando para ejecutar los Test es: `npm run test`
## Endpoints
`POST           /api/validate`:  Recibe un objeto con los patrones, valida que exista el atributo adn dentro del objeto y que sea un array, actualiza el conteo de cantidad_positivos y cantidad_negativos en la base de datos. En caso de ser el primer elemento crea el modelo dentro de MongoDB.
En caso de no existir adn devuelve un Status code 400 (Bad request)
En caso de no encontrar un patron valido devuelve un Status code 403(Forbiden)
En caso de realizar todo correctamente devuelve un Status code 200 (Success)

`GET            /api/stats`: Consulta a la base de datos para para obtener el objeto que lleva el conteo de cantidad_positivos y cantidad_negativos para mostrarselos al usuario.
## Tecnologias
Las principales tecnologias utilizadas en este proyecto fueron:
- **Backend**: Node.js, Express.
- **Base de datos**: MongoDB.
- **Test**: Jest.


