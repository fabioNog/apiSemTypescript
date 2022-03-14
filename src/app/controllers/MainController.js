const MainRoutes = require("../routes/MainRoutes")

class MainController{
    main(req,res){
        return res.status(200).json({
            status:'ok',
            mensagem: 'tudo ok com a API'
        })
    }
}


module.exports = new MainController();