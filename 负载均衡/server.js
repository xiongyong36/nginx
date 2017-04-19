var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Nginx 负载均衡');
})
var server = app.listen(5789, function(){
    console.log('Listen 5789')
})