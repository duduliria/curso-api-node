import express from "express";

import './shared/services/translations'
import { router } from "./routes";
import 'dotenv/config'


export const server = express();

server.use(express.json());
server.use(router);
