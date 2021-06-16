class HomeController{
    landingPage(req, res){
        res.send("Hello World");
    }

    
}

export default new HomeController();