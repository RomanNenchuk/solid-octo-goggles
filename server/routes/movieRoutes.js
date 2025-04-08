import express from "express";
import { getMovies, getShowTimeInfo } from "../controllers/movieControllers.js";

const router = express.Router();

router.get("/", getMovies);

router.get("/showTimes/:id", getShowTimeInfo);

export default router;
