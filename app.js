import express from "express";
import MathController from "./controllers/math-controller.js";
import TuitController from "./controllers/tuit-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import AlbumsController from "./albums/albums-controller.js";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import { findAllTuits } from "./db/tuiter/tuits/tuits-dao.js";
mongoose.connect("mongodb://127.0.0.1:27017/tuiter");
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());
const port = 4000;

UsersController(app);
MathController(app);
TuitController(app);
AlbumsController(app);

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
