const express = require("express");
const router = require("./router");

const app = express();

app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  return res.send(`<h1>Hello From Code Mitra YT</h1>`);
});

app.listen(5000, () => console.log("listening on port 5000"));

module.exports = app;
