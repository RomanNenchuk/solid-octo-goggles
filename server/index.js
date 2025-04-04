import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const prisma = new PrismaClient();

const FRONTEND_URL_API = process.env.FRONTEND_URL_API;
const BACKEND_PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: FRONTEND_URL_API,
  })
);
app.use(express.json());

// Маршрут для API
app.get("/api/movies", async (req, res) => {
  try {
    const response = await prisma.movie.findMany({
      select: { id: true, name: true, cover: true },
    });
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const expressServer = app.listen(BACKEND_PORT, () => {
  console.log(`Server is running on http://localhost:${BACKEND_PORT}`);
});
