class HomeController{
    landingPage(req, res){
        res.send("Hello World");
    }

    
}

module.exports = new HomeController();