// Importacion del modulo Express bajo el alias "express"
const express = require('express');
// Genera una nueva instancia de Express
const app = express();
// Se define en una constante el número del puerto sobre el que se va a ejecutar el servidor
const port = 3000;

// Se define el metodo de escucha de tipo get en la ruta raiz ('/') y la respuesta que se dara
// a esta peticion, en este caso, se devuelve un msj con el texto 'Hello World!'
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Se coloca a escuchar (ejecutar) el servidor web con el uso del metodo listen. El metodo listen 
// recibe dos parametros, el puerto en el que se va a escuchar el servidor y una funcion anonima
// con una ejecucion de codigo al montar el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})