//const { User } = require('../models')

module.exports = {
    register (req, res){
        //const user = await

        var username = req.body.email.split('@')[0];
        res.send({        
            message: `Hello ${username}! Your user was registered! Have fun!`
        });
    }
}