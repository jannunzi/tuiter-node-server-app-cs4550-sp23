// import tuits from "./tuits.js";
// import tuitsModel from "../db/tuiter/tuits/tuits-model.js";
import * as dao from "../db/tuiter/tuits/tuits-dao.js";

const TuitController = (app) => {
  const findAllTuits = async (req, res) => {
    const tuits = await dao.findAllTuits();
    res.json(tuits);
  };

  const findTuitById = async (req, res) => {
    // const tuit = tuits.find((tuit) => tuit.id === req.params.id);
    const tuit = await dao.findTuitById(req.params.id);
    res.json(tuit);
  };

  const createTuit = async (req, res) => {
    // tuits.push(tuit);
    const newTuit = await dao.createTuit(req.body);
    res.json(newTuit);
  };

  const updateTuit = async (req, res) => {
    // const tuit = req.body;
    // const index = tuits.findIndex((tuit) => tuit.id === req.params.id);
    // tuits[index] = tuit;
    const status = await dao.updateTuit(req.params.id, req.body);
    res.send(status);
  };

  const deleteTuit = async (req, res) => {
    // const index = tuits.findIndex((tuit) => tuit.id === req.params.id);
    // tuits.splice(index, 1);
    const status = await dao.deleteTuit(req.params.id);
    res.send(status);
  };

  app.get("/api/tuits", findAllTuits);
  app.get("/api/tuits/:id", findTuitById);
  app.post("/api/tuits", createTuit);
  app.put("/api/tuits/:id", updateTuit);
  app.delete("/api/tuits/:id", deleteTuit);
};

export default TuitController;
