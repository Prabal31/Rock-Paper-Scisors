const http=require('http');

const server=http.createServer((req,res)=>{
  res.end("Running");
});

server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
})