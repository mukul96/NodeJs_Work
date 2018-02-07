var http = require('http');
var fs = require('fs');

function onRequest(request,response) {
    //response.writeHead(200, {'Content-Type': 'text/html'});
   fs.readFile(__dirname+'./index.html','utf8',function(error, data) {
        if (error) {
          //  throw new TypeError("hello");
            console.log("hello");
            /*response.writeHead(404);
            console.log("error occuring")
            response.write('File not found!');*/
        }
        else {
            console.log(data)
            response.write(data);
        }

        //response.end();
    });
   //response.write("in the code");
   //response.end();
}

//onRequest();
http.createServer(onRequest).listen(8000);