var express = require('express');
var path = require('path');

app = express();
app.use(express.static(__dirname + "/dist"));

var port = process.env.PORT || 9000;
app.listen(port);
console.log('server started '+ port);
