const express = require('express');
const cors = require('cors');
const pathUser = '/whatsapp';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use ( cors() );
        // lectura de datos de un body
        this.app.use( express.json() );
        // directorio publico
        this.app.use( express.static('public') )
    }

    routes(){
        this.app.use(pathUser, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`REST server corriendo en `, this.port);
        })
    }


}

module.exports = Server;