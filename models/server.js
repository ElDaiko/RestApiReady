const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


class Server {
    constructor() {
        this.app = express() // crear en el servidor la app express
        this.port = process.env.PORT
        this.usersPath = '/api/users' //Ver que rustes se tienen

        // Middlewares
        this.middlewares();

        // Rutas de la app  
        this.routes()
    }

    middlewares(){

        //Cors
        this.app.use(cors())

        //Parseo y lectura del body en este caso de postman
        this.app.use(bodyParser.json())

        // Aqui se implementa la carpeta public
        //Funciones que le van a añadir funcionalidades varias al webserver
        //Siempre se ejecuta cuando se levanta el server
        this.app.use(express.static('public'))  //use es la palabra clabe para mostrar que son middlewares
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/userRoutes') )
    }

    listen() {  //Listen al puerto
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port);
        })
    }
}

module.exports = Server