let users = require('../models/User.js');


class UserController{

    getAllPerson(req, res){
        res.status(200).json(users);
    }

    getPeopleById(req, res)
    {
        let peopleId = req.params.id;

        let foundUser = users.filter((user) => {
            return user.id == peopleId;
        });

        if(foundUser !== undefined && foundUser.length !== 0){
            res.status(200).json(foundUser);
        }
        else{
            res.status(404).json({msg : "No person is found"});
        }

        
    }
}

module.exports = new UserController();

