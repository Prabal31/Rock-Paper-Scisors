const fs = require('fs');
// TODO: Require the http module
const http=require('http');

const server = http.createServer((req, res) => {
  res.end('Server is running!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});