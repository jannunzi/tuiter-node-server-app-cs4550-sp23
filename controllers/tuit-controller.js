import tuits from "./tuits.js";

const TuitController = (app) => {
  app.get("/api/tuits", (req, res) => {
    res.json(tuits);
  });
  app.get("/api/tuits/:id", (req, res) => {
    const tuit = tuits.find((tuit) => tuit.id === req.params.id);
    res.json(tuit);
  });
};

export default TuitController;
