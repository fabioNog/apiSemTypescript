const app = require('../../app');

const MainRoutes = require('../routes/MainRoutes');

module.exports = (app) => {
    app.use(MainRoutes);    
}