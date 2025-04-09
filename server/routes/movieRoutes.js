import express from "express";
import {
  getMovies,
  getShowTimeInfo,
  getMovieDescription,
} from "../controllers/movieControllers.js";

const router = express.Router();

router.get("/", getMovies);

router.get("/showTimes/:id", getShowTimeInfo);

router.get("/:id", getMovieDescription);

export default router;
