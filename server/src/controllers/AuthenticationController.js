// desctructures the dynamically created user property from index.js
const { User } = require('../models')

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user.toJSON());
        } catch (error) {
            res.status(400).send({
                error: 'This email account is already in use.' + error
            })
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            });

            if (!user) {
                res.status(403).send({
                    error: 'The login information was incorrect.'
                })
            }

            const isPasswordValid = password === user.password;
            if (!isPasswordValid) {
                res.status(403).send({
                    error: 'The login information was incorrect.'
                })
            }

            const userJson = user.toJSON();
            res.send({
                user: userJson
            });
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured trying to login' + error
            })
        }
    }
}