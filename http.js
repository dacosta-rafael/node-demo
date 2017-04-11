console.log('start');
// Get the port:
const PORT = process.env.PORT || 8083;

var http = require('http');
var url = require('url');

http.createServer( function(request, response) {	
	var queryData = url.parse(request.url, true).query;
	console.log(queryData);	
	response.writeHead( 200, {'Content-Type':'application/json'} );
	var books = [
		{ id: 1, title: 'book1' },
		{ id: 2, title:'book2' },
		{ id: 3, title:'book3' }
	];
	
	//default book set
	var bookid = 1; 
	bookid = queryData.bookid;


	switch (queryData.q) {
		case 'Ping':
		response.write('OK');
		break;
		
		case 'getBookList':
			response.write( JSON.stringify(books) );
			break;
                case 'getBook':
                var filtered_books = books.filter( function(book){
                	if(bookid){
				return book.id ==  bookid;
			}
                } );
                        response.write( JSON.stringify(filtered_books)  );
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
	response.end();
}).listen( PORT, () => console.log('Listening on', PORT) ) ;
console.log('start end');
