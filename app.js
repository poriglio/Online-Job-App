var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var model = require("./models/model.js");

mongoose.connect("mongodb://localhost/jobapplication");

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.sendFile('index.html',{root:"./"});
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	model.Applicant.find({},function(error,data){
		if(error){console.log("Error! Error!")}
			else{
				res.send(data)
				console.log(data)
			}
	})
});

app.get("/viewapplicants",function(req,res){
	res.sendFile("/html/applicants.html",{root:"./public"})
})

// creates and applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	var applicant = new model.Applicant(req.body)
	applicant.save()
	console.log(req.body)
	res.sendFile("html/success.html",{root:"./public"});
});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
