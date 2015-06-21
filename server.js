var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views',  __dirname + '/server/views');


app.use('/static', express.static(__dirname + '/public/assets'));
app.use('/libs', express.static(__dirname + '/public/bower_components'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(8989, function(){
    console.log('Server Express Ready!');
});
