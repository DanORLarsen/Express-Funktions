//Error handling in Express

var express = require('express');
var app = express();
//GET /names/john
app.get('/names/:name', function(req, res, next){
 if (req.params.name == 'john'){
 return res.send('Valid Name');
 } else{
 next(new Error('Not valid name')); //pass to error handler
 }
});
//error handler
app.use(function(err, req, res, next){
 console.log(err.stack); // e.g., Not valid name
 return res.status(500).send('Internal Server Occurred');
});
app.listen(3000);
