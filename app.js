const fs = require('fs');
const http = require('http');

const server = http.createServer((request, res) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  switch(url.pathname) {  // Corrected from url.path to url.pathname
    case '/':
      if (request.method === 'GET') {
        const name = url.searchParams.get('name');
        console.log(`Received name: ${name}`);

        res.writeHead(200, {'Content-Type': 'text/html'});
        const readStream = fs.createReadStream('index.html');
        readStream.pipe(res);
      } else if (request.method === 'POST') {
        handlePostResponse(request, res);
      } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('Page not found.');
      }
      
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/html'}); 
      fs.createReadStream('404.html').pipe(res);
      break;
  }
});

server.listen(4001, () => {
  console.log(`Server is listening on port ${server.address().port}`);
});

function handlePostResponse(request, response) {
  request.setEncoding('utf8');
  
  let body = '';
  request.on('data', function (chunk) {
    body += chunk;
  });
  
  request.on('end', function () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    const choice = body.trim();

    let message;
    if (choice === randomChoice) {
      message = `Aww, we tied! I also chose ${randomChoice}.`;
    } else if (
      (choice === 'rock' && randomChoice === 'paper') ||
      (choice === 'paper' && randomChoice === 'scissors') ||
      (choice === 'scissors' && randomChoice === 'rock')
    ) {
      message = `Ha! You lost. I chose ${randomChoice}.`;
    } else {
      message = `Dang it, you won! I chose ${randomChoice}.`;
    }

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`You selected ${choice}. ${message}`);
  });
}
