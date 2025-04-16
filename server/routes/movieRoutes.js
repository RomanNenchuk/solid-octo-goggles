import express from "express";
import {
  getMovies,
  getMovieDescription,
} from "../controllers/movieControllers.js";

const router = express.Router();

router.get("/", getMovies);

router.get("/:id", getMovieDescription);

export default router;
