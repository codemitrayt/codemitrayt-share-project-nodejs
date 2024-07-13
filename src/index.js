const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send(`<h1>Code Mitra YT</h1>`);
});

app.listen(5000, () => console.log("listening on port 5000"));

module.exports = app;
