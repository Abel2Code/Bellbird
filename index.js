var express  = require('express');
var app = express();

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var server = require('http').createServer(app);

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/HandshakeInterview', { useNewUrlParser: true, useCreateIndex: true });

app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'pug');

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

const alarmRoute = require('./routes/alarm');

app.use('', alarmRoute);


app.listen(port);
console.log("App listening on port " + port);
