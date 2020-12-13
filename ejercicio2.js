const express = require('express')
const app = express()
const port = process.env.port || 8080

app.get('/', function (req, res) {
    res.send( { status: 200 } );
});

app.get('/hello', function(req,res){
  res.send({msg: "Hello World!"})
});

app.get('/date', function (req, res) {
    var d = new Date();
    res.send( { 'Date': d} );
});

app.listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');

module.exports = app
