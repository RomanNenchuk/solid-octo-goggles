import { prisma } from "../index.js";

export async function getMovies(req, res) {
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
          where: {
            startTime: {
              gte: new Date(),
            },
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
}

export async function getMovieDescription(req, res) {
  const id = req.params.id;
  try {
    const movie = await prisma.movie.findUnique({
      where: { id },
      select: {
        id: true,
        cover: true,
        name: true,
        description: true,
        genre: true,
        showTimes: true,
      },
    });
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    res.send(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
