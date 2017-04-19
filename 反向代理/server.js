var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Nginx 反向代理');
})
var server = app.listen(4789, function(){
    console.log('Listen 4789')
})