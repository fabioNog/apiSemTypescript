const express = require('express');

class App{
    constructor(){
        this.express = express();
        this.database();
        this.routes();
    }

    database(){

    }

    middlewares(){
        this.express.request(express.json());
    }

    routes(){
        require('./app/routes')(this.express);
    }
}

module.exports = new App().express;