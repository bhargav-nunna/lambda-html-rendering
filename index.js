console.log('Loading Lambda HTML');
const express  = require("express");
const ejs = require('ejs');
const fs = require('fs');

//const app = express();

//app.set ("view engine", "ejs");
//app.use(express.static(__dirname + '/views'));

var fs = require('fs'),
	path = require('path'), 
	ejs = require('ejs');   
	filePath = path.join(__dirname, '/index.ejs');

exports.handler = function(event, context) {


	fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
		if (!err) {
			console.log('received data: ' + data);
			html = ejs.render(data.toString());
        	context.succeed(html);
    	} else {
        	console.log(err);
    	}
	});

    //var html = '<html><head><title>HTML from API Gateway/Lambda</title></head>' + '<body><h1>HTML from API Gateway/Lambda</h1></body></html>';
    
    //context.succeed(data);
};


