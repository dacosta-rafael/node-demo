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
var mat = Array();
mat[0] = Array(' ','A','B','C','D');
for(i=1; i<=4; i++) {
    mat[i] = Array();
    mat[i][0] = mat[0][i];
    for(j=1; j<=4; j++) {
        mat[i][j] = (mat[0][j] == mat[i][0] ? '=' : mat[0][j] < mat[i][0] ? '<' : '>');
    }
}
//console.log(mat);
mat[0].push("\n");
var x  = mat[0].toString();
response.write( x.replace(/,/g , "") );

mat[1].push("\n");
var x  = mat[1].toString();
response.write( x.replace(/,/g , "") );

mat[2].push("\n");
var x  = mat[2].toString();
response.write( x.replace(/,/g , "") );

mat[3].push("\n");
var x  = mat[3].toString();
response.write( x.replace(/,/g , "") );

mat[4].push("\n");
var x  = mat[4].toString();
response.write( x.replace(/,/g , "") );

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
}).listen(PORT) ;
console.log('start end');

