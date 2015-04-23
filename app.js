var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

    // create a route
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render("index");
});

 var server = app.listen(4000, function () {
        var host = server.address().address;
        var port = server.address().port;
     	console.log('Example app listeng at http://%s:%s', host, port);

   });
