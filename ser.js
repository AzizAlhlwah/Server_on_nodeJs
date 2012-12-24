
	var http  = require('http');

	var usercount = 0;

	http.createServer(function(req, res){

		// when come new visetor on brwser will print masseg on console ...
		console.log('new visetor..');
		// count for visetor
		usercount++;

		res.writeHead(200,{'content-type': 'text/plain'});
		res.write('Hello node-JS ... !! \n');
		res.write('we have ' + usercount + '  ' + 'visted ');
		res.end();

	}).listen(8080);

	console.log('Server Sterted..');
	console.log('yoy can nev  http://localhost:8080');