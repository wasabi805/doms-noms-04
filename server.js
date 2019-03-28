require('dotenv').config();

var express = require('express');
var cors = require('cors');
const router = express.Router();
var proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');




//INIT
var app = express();


//ROUTES
const contact_us = require('./routes/api/contact-us/submit');



//BodyParser MiddleWare
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Hello World')
});

app.use('/api/contact-us/submit', contact_us);
// app.use(proxy('/api/',
//     { target: 'http://localhost:5000' , changeOrigin: true}));


let port = 5000;

app.listen(port, ()=>{
    console.log(`Welcome to the backend . Listening on port ${port}`)
});