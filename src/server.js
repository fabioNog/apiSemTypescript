const express = require('express');

const app = express();

app.get('/', (req,res) => {
    return res.status(200).json({
        status: 'ok',
        messagem: 'requisição feita com o get'
    })
})


app.listen(3000,function(){
    console.log('Servidor funcionando');
})