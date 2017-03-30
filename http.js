console.log('start');
var http = require('http');
var url = require('url');

http.createServer( function(request, response) {	
	var queryData = url.parse(request.url, true).query;
	console.log(queryData);	
	response.writeHead( 200, {'Content-Type':'text/plain'} );
	switch (queryData.q) {
		case 'Ping':
			response.write('OK');
			break;
                case 'Puzzle':
			//var patt = /\n ABCD\nA--->\nB-=--\nC-<--\nD->--\n/ ;
                        response.write('');
                        break;
                case 'Status':
                        response.write('Yes');
                        break;
                case 'Resume':
                        response.write('https://www.linkedin.com/in/rafael-da-costa-680b695/');
                        break;
                case 'Name':
                        response.write('Rafael da Costa');
                        break;
                case 'Phone':
                        response.write('+1.516.668.9418');
                        break;
                case 'Position':
                        response.write('Web Development');
                        break;
                case 'Degree':
                        response.write('Some college, Technical school(internet technologies major)');
                        break;
                case 'Source':
                        response.write('https://github.com/dacosta-rafael?tab=repositories');
                        break;
                case 'Years':
                        response.write('10 years');
                        break;
                case 'Referrer':
                        response.write('JP Skowron from Cybercoders');
                        break;
                case 'Email Address':
                        response.write('dacosta_rafael@hotmail.com');
                        break;

		default:
			response.write('Not applicable');
	}
	/*
	if(queryData.q == 'Ping'){
		response.write('OK');
	}
	if(queryData.q == 'Puzzle'){
		response.write('\n ABCD\nA=---\nB<---\nC>---\nD-->-\n ');
	}
	*/

	response.end();
}).listen(8083) ;
console.log('start end');

