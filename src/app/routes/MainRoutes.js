const MainRoutes = require('express').Router();

MainRoutes.get('/',(req,res) => {
    return res.status(200).json({
        status: 'ok',
        messagem: 'rota get ok'
    })
})

module.exports = MainRoutes;