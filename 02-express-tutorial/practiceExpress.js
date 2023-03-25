const express = require("express");

const app = express();

app.use(express.static("./new-public"))

app.get('/sample', (req, res) => {
    res.send('<h2>This is working.</h2>')
})

app.all("*", (req, res) => {
    res.status(404).send("Resource not found");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});
