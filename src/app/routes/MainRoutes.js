const MainController = require('../controllers/MainController');

const MainRoutes = require('express').Router();
const MainControllerRoute = require('../controllers/MainController');

MainRoutes.get('/' ,MainControllerRoute.main)

MainRoutes.get('/test/:id', MainControllerRoute.testeId)

module.exports = MainRoutes;