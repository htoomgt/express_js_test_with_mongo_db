class HomeController{
    landingPage(req, res){
        res.send("Hello World");
    }

    getPeopleById(req, res)
    {
        let peopleId = req.params.id;

        res.status(200).json({
            id : peopleId,
            name : "Random name",
            age : 32,
        })
    }
}

export default new HomeController();