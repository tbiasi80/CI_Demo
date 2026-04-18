const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const msg = "Works on my machine.";
  console.log("Did we get here?");
  res.send(msg);
});

module.exports = app;
