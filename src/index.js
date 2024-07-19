import express from "express";
import router from "./router";
import initDb from "./config/db";
import { APP_PORT } from "./config/credentials";
import errorHandler from "./middlewares/error-handler";

const app = express();

initDb();

app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  return res.send(`<h1>Hello From Code Mitra YT</h1>`);
});

app.use(errorHandler);
app.listen(APP_PORT, () => console.log(`listening on port ${APP_PORT}`));

export default app;
