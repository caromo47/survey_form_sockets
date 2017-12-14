var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded());
//static content
app.use(express.static(path.join(__dirname, './static')));
// ejs & views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// listen at port
var server = app.listen(3000, function (){
	console.log('listening on port 3000');
});
// handle routing
var route = require('./routes/index.js')(app, server);
