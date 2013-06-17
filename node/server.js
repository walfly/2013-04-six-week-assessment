var url = require('url'),
    http = require('http'),
    fs = require('fs');

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;
  switch(request.method) {
    case 'POST':
      if(path === '/hifive'){
        response.writeHead(200,{'Content-Type':'image/jpg'})
        response.end(fs.readFileSync(__dirname+'/assets/hifive.jpg'));
      } else if(path === '/lowfive'){
        response.writeHead(200,{'Content-Type':'image/jpg'})
        response.end(fs.readFileSync(__dirname+'/assets/lowfive.jpg'));
      }
      break;
    case 'GET':
      if(path === '/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(fs.readFileSync(__dirname+'/index.html'));
      }
      break;
    default:
      response.end(404);
  }
}).listen(8080, '127.0.0.1');

console.log('Listening...');
