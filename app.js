var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

    // create a route
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var playlist = [];

app.get('/', function(req, res){
	res.render("index");
});
app.get('/content', function(req, res){
	res.render("content", {list : playlist});
});

app.get('/add', function(req, res){
	res.render("add");
});

app.post('/add', function(req, res){
	playlist.push({name : "Bucie- Easy to love.mp3"});
	res.redirect("/content");
});

app.get('/users', function(req, res){
	res.render("users");
});



 var server = app.listen(4000, function () {
        var host = server.address().address;
        var port = server.address().port;
     	console.log('Example app listeng at http://%s:%s', host, port);

   });
