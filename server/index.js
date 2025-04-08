import express from "express";
import movieRoutes from "./routes/movieRoutes.js";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

export const prisma = new PrismaClient();
const app = express();

const FRONTEND_URL_API = process.env.FRONTEND_URL_API;
const BACKEND_PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: FRONTEND_URL_API,
  })
);
app.use(express.json());

app.use("/api/movies", movieRoutes);

const expressServer = app.listen(BACKEND_PORT, () => {
  console.log(`Server is running on http://localhost:${BACKEND_PORT}`);
});
