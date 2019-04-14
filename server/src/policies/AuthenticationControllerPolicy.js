// const Joi = require('Joi')

module.exports = {
    register(req, res, next) {
        
        const password = req.body.password;
        const email = req.body.email;        

        /*eslint-disable */

        // eslint-disable-line no-useless-escape
        let strongPwRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})");
        let emailRegex = new RegExp(".+@.+");        

        /*eslint-enable */
        
        const isStrong =  typeof(password) === 'string' && strongPwRegex.test(password)
        const isEmail = typeof(email) === 'string' && emailRegex.test(email)

        let errorMessage = '';

        if(!isEmail){
            errorMessage += 'You must provide a valid email address. '        
        }
        if(!isStrong){
            errorMessage += 'The provided password did not match the requirements.'       
        }

        if(errorMessage !== ''){
            res.status(400).send({
                error: errorMessage
            })
        }
        else{
            next()
        }
        

        /*
        const schema = {
            email: Joi.string().email().required(), // email regex /.+@.+/
            password: Joi.string().regex(
                new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,32})')
            ).required() // .strict() strict can be used for confirm pw field
        }

        // simple ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]$
        // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})");
        // var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,32})");                    
        // var isStrong = strongRegex.test(testString)
        // var isMedium = mediumRegex.test(testString)

        const {error} = Joi.validate(req.body, schema)

        if(error) {
            let errorMessage = '';

            switch(error.details[0].context.key){
                case 'email': errorMessage = 'You must provide a valid email address'
                    break;
                case 'password': errorMessage = 'The provided password did not match the requirements'
                    break;
                default: errorMessage = 'Invalid Registration information'
            }

            res.status(400).send({
                error: errorMessage
            })
        }
        else{
            next()
        }
        */
    }
}