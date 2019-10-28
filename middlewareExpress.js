var express = require('express');
var app = express();
//each request will pass through it
app.use(function(req, res, next){
 req.user = 'testuser'; //Creates var user in req. and gives it the value of 'testuser'
 next(); // it will pass the control to next matching route
});
app.get('/', function(req, res){
 var user = req.user;
 console.log(user); // testuser
 return res.send(user); 
 //Logs and sends username as response and to terminal terminal.
});
app.listen(3000);