console.log('Loading Lambda HTML');
var fs = require('fs'),
	path = require('path'),    
	filePath = path.join(__dirname, '/test.html');

exports.handler = function(event, context) {

	fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
		if (!err) {
			console.log('received data: ' + data);
        	context.succeed(data);
    	} else {
        	console.log(err);
    	}
	});

    //var html = '<html><head><title>HTML from API Gateway/Lambda</title></head>' + '<body><h1>HTML from API Gateway/Lambda</h1></body></html>';
    
    //context.succeed(data);
};


