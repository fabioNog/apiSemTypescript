const MainRoutes = require("../routes/MainRoutes")

class MainController{
    main(req,res){
        return res.status(200).json({
            status:'ok',
            mensagem: 'tudo ok com a API'
        })
    }


    testeId(req,res){
        let id = req.params.id;
        return res.json({
            id: id
        });    
    }
}


module.exports = new MainController();