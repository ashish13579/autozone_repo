var express = require("express");
var app = express();
app.use(express.static(__dirname+'/public'));

app.use(express.static(__dirname+'/public/assets/css'));
app.use(express.static(__dirname+'/public/assets/fonts'));
app.use(express.static(__dirname+'/public/assets/js'));
app.use(express.static(__dirname+'/public/assets/img'));

app.use(express.static(__dirname+'/public/assets/lib'));
app.use(express.static(__dirname+'/public/assets/lib/angular'));
app.use(express.static(__dirname+'/public/assets/lib/bootstrap'));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/new_home_2.html");
});

app.listen(3200);
console.log("Listening to 3100....");