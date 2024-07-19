const express = require("express");

const router = require("./router");
const initDb = require("./config/db");
const credentials = require("./config/credentials");
const errorHandler = require("./middlewares/error-handler");

const app = express();

initDb();

app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  return res.send(`<h1>Hello From Code Mitra YT</h1>`);
});

app.use(errorHandler);
app.listen(credentials.APP_PORT, () =>
  console.log(`listening on port ${credentials.APP_PORT}`)
);

module.exports = app;
