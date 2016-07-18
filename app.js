var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

ip = '';


//Set view engine
app.set("view engine", "ejs");

//Routing
app.get("/", function(req, res){
  res.render("index", {ip:ip});
})

app.get('/:ip', function(req, res){
  ip = req.params.ip;
  res.send('success!');
})


//Launch application
app.listen(80, function(){
  console.log("Starting a server on localhost:80");
});
