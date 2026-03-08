import { Router } from "express";
import { StatusCodes } from "http-status-codes";

export const router = Router();

router.get("/", (req, res) => {
  return res.send("Ola mundo");
});

router.post("/teste", (req, res) => {
  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});
