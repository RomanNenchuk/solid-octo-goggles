import express from "express";
import {
  getShowTimeInfo,
  makeBooking,
} from "../controllers/showTimeControllers.js";

const router = express.Router();

router.get("/:id", getShowTimeInfo);

router.post("/:id/bookings", makeBooking);

export default router;
