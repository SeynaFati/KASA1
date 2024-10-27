const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

const logements = require("./logements.json");

app.get("/logements", (req, res) => {
  console.log("Request received");
  res.json(logements);
});

app.get("/logements/:id", (req, res) => {
  const { id } = req.params;
  const logement = logements.find((l) => l.id === id);
  if (logement) {
    res.json(logement);
  } else {
    res.status(404).send("Logement not found");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
