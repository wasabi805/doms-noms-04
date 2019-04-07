require('dotenv').config();

var express = require('express');
var cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');

//INIT
var app = express();

//ROUTES
const contact_us = require('./routes/api/contact-us/submit');

//MiddleWare
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Serves static assets if in prod
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

// USE ROUTES
app.use('/api/contact-us/submit', contact_us);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Welcome to the backend . Listening on port ${port}`)
});