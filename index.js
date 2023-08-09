const http = require('http');

const handleAllRequests = (requestObject, responseObject) =>{
    console.log('<h1>Hi, I just received a request</h1>');
    const url = requestObject.url;
    if(url === '/'){
        responseObject.write("<h1>Welcome to the home page</h1>");
    }

    else if (url === '/login'){
        responseObject.write("<h1>This is my page</h1>");
    }
    else if (url === '/signup'){
        responseObject.write("<h1>This is my slack account</h1>")
    }
    else {
        responseObject.write("<h1>Page not found</h1>")
    }
    responseObject.end();
}

const server = http.createServer(handleAllRequests);

server.listen(3000, '127.0.0.1', ()=> console.log('Server is ready'));