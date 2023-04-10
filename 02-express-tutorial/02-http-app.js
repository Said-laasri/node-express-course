const http = require("http");
const { readFileSync } = require("fs");

// get all file
const homePage = readFileSync("./navbar-app/index.html");
const style = readFileSync("./navbar-app/styles.css");
const image = readFileSync("./navbar-app/logo.svg");
const logic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;
  console.log(req.url);

  //home page
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html " });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    //about page
    res.writeHead(200, { "Content-Type": "text/html " });
    res.write("<h1>Welcome to our about page</h1>");
    res.end();
  }
  //style page
  else if (url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css " });
    res.write(style);
    res.end();
  } 
  //image page
  else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml " });
    res.write(image);
    res.end();
  } 
  //logic page
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript " });
    res.write(logic);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html " });
    res.write("<h1>404 Page not found</h1>");
    res.end();
  }
});

server.listen(5000);
