import { Router } from "express";

import Usuario from "./model/Usuario";

const routes = new Router();

routes.get("/", async (req, res) => {
  try {
    const users = await Usuario.findAll();
    return res.json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
});

export default routes;
