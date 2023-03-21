const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page");
  }

  if (req.url === "/about") {
    res.write("About Page");
  }

  res.end("error Page");
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
