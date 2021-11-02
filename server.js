const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`<h1>Hello HTTP Module!</h1>`);
  response.end();
});

server.listen(7000);
console.log("Listening! (port 7000)");
