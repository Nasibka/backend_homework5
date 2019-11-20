var express = require('express');
var path = require('path');
// var bodyParser = require("body-parser");

var app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.use(express.urlencoded())
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


app.get('/',(req,res)=>{
	res.render('index');
})
app.post('/kek',(req,res)=>{
	const username = req.body.name;
	const lastname = req.body.lastname;

	res.render('index2',{username:username,lastname:lastname});
	// console.log("My name is "+username);
})

app.listen(3000,function(){
	console.log('listening to 3000');
})