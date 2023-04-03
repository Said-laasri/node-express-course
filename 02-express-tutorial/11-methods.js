const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("please provide Credentials");
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ sucess: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json({ sucess: true, person: name });
  } else {
    return res
      .status(400)
      .json({ sucess: false, msg: "please provide name value" });
  }
  res.status(200).json({ sucess: true, data: people });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).json({ sucess: true, data: [...people, name] });
  } else {
    return res
      .status(400)
      .json({
        sucess: false,
        msg: "please provide name value in postman body",
      });
  }
});


app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ sucess: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    } else {
      return person;
    }
  });
  res.status(200).json({ sucess: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ sucess: false, msg: `No person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ sucess: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is listening to port 5000 ....");
});
