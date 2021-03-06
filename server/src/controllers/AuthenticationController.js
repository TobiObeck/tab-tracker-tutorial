// desctructures the dynamically created user property from index.js
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;

    return jwt.sign(user, config.authentication.jwtSectret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            const userJson = user.toJSON();
            delete userJson.password;
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });
        } catch (error) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
            return;
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
                return;
            }

            console.log('user', user.email);

            const isPasswordValid = await user.isPasswordEqualAsync(password);
            console.log('isPasswordValid', isPasswordValid);
            if (!isPasswordValid) {
                res.status(403).send({
                    error: 'The login information was incorrect.'
                })
                return;
            }

            const userJson = user.toJSON();
            delete userJson.password;

            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured trying to login' + error
            });
            return;
        }
    }
}