const fs = require('fs');
// TODO: Require the http module
const http=require('http');

const server = http.createServer((req, res) => {
  res.end('Server is running!');
  const url=new URL(req.url,`http://${request.headers.host}`);
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  
});