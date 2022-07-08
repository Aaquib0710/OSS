

var exp = require('express')
var mysql = require('mysql2');
var bp = require('body-parser');

var app = exp();

app.listen(9000, function (req, res) {
    console.log("Server is started at 9000");
});

var con = mysql.createConnection( {
	host: "localhost",
	user: "root",
	password: "ak@220343020001",
	database: "users"
});
con.connect(function (err) {
	if (!err)
		console.log("connected to mysql")
});

app.use(exp.static('files'));

app.use(bp.urlencoded({ extended: true }));


app.get('/form', function (req, res) {

	res.sendFile(__dirname + "/forms.html");
});

app.get('/getdetails', function (req, res) {

	var sql = "select username from user" + req.body.from;
	con.query(sql, function (err, result) {
		if (!err)
			res.send(JSON.stringify(result));

	});
});

app.all('*', function (req, res) {
	res.send("Invlaid URL !!!");
});