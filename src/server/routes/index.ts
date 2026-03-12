import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { cidadesController } from "./../controllers";

export const router = Router();

router.get("/", (req, res) => {
  return res.send("Ola mundo");
});

router.post("/cidades", cidadesController.create);
