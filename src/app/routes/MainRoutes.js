const MainController = require('../controllers/MainController');

const MainRoutes = require('express').Router();
const MainControllerRoute = require('../controllers/MainController');

MainRoutes.get('/' ,MainControllerRoute.main)

module.exports = MainRoutes;