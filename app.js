var express = require('express');
var jade = require('jade');
var bodyParser = require('body-parser');
var app = express();

var _tasks = [
];
var counter = 0;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/tasks', function(req,res) {
	res.render('tasks', {
		title: " TASK LIST",
		tasks: _tasks
	});
});


app.post('/tasks', function(req,res) {
	if ( !req.body || !req.body.name ) return res.render('error');
	var nameTask = req.body.name;
	var newTask = {
		id : ++counter,
		name: nameTask,
		completed: false
	};
	_tasks.push(newTask);
	res.redirect('/tasks');
});

app.listen(3000, function() {
	console.log("Listening on port 3000");
});