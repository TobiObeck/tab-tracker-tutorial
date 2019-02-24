const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {

    debugger 
    console.log(req);
    console.log( req.body);
    console.log( req.body.email);

    var username = req.body.email.split('@')[0];

    console.log(username)
    console.log(`Hello ${username}! Your user was registered! Have fun!`)

    res.send({        
        message: `Hello ${username}! Your user was registered! Have fun!`
    });
})

app.listen(process.env.PORT ||8081)

console.log('server running...')