var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser  = require('body-parser');
var app = express();

// create a route
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

var playlist = [];

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', function(req, res){
	//res.render("index");
});

app.post('/test', function(req, res){
	console.log("----> " + JSON.stringify(req.body));
});

app.get('/content', function(req, res){
	res.render("content", {list : playlist});
});

app.get('/add', function(req, res){
	
		var list =[
		"Bucie:Easy to love.mp3", 
		"Dj Merlon: Kuze kuse.mp3", 
		"Naak musiq: Hamba kude.mp3", 
		"Naima Kay: Elilanga lelam.mp3", 
		"Mono T: Bayeza.mp3",
		"Uhuru: Chilolo.mp3", 
		"Dj Fisherman: No stress.mp3"];		
	
		res.render("add", {list : list});
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
