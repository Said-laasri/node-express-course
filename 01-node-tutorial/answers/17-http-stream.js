var http = require("http");

var fs = require("fs");

http
  .createServer((req, res) => {
    // const txt = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(txt);
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
