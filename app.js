import express from "express";
import MathController from "./controllers/math-controller.js";
import TuitController from "./controllers/tuit-controller.js";
import cors from "cors";
const app = express();
app.use(cors());
const port = 4000;

MathController(app);
TuitController(app);

const welcome = (req, res) => {
  res.send("Welcome to Node.js!");
};
app.get("/", welcome);

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1><p>This is the about page</p>");
});

app.get("/contact", (req, res) => {
  res.json({
    name: "John Doe",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
