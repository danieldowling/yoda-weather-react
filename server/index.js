const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const WEATHER_API = process.env.WEATHER_API;
const YODA_API = process.env.YODA_API;

console.log(WEATHER_API)

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/weather/:city',(req, response) => {
    request(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${WEATHER_API}`, (err, res, body) => {
        response.send(body)
        console.log(req.params);
    })
})



app.post('/yoda', (req, response) => {
    const options = {
        url: `https://yodish.p.mashape.com/yoda.json?text=${req.query.forcast}`,
        headers: {
            'X-Mashape-Key': YODA_API,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    
    request(options, (err, res, body) => {
        response.send(body)
        console.log(req.params);
    })
})


app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`)
});