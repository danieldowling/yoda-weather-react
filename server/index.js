const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/weather/:city',(req, response) => {
    request(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=bd38d3ab238661871c2dd892bb449c86`, (err, res, body) => {
        response.send(body)
        console.log(req.params);
    })
})


app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`)
});