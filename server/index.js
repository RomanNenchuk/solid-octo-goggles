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

app.get("/api/movies", async (req, res) => {
  const { query, page = 1, limit = 10 } = req.query;
  const pageNumber = parseInt(page);
  const itemsPerPage = parseInt(limit);

  const whereCondition = query
    ? {
        name: {
          contains: query,
          mode: "insensitive",
        },
      }
    : {};

  try {
    const response = await prisma.movie.findMany({
      select: {
        id: true,
        name: true,
        cover: true,
        showTimes: {
          select: {
            id: true,
            startTime: true,
            hall: { select: { id: true, name: true, totalSeats: true } },
          },
        },
      },
      where: whereCondition,
      skip: (pageNumber - 1) * itemsPerPage,
      take: itemsPerPage,
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
