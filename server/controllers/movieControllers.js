import { prisma } from "../index.js";

export async function getShowTimeInfo(req, res) {
  const id = req.params.id;
  console.log(id);
  try {
    const response = await prisma.hall.findFirst({
      select: {
        name: true,
        totalSeats: true,
        seats: {
          select: {
            id: true,
            row: true,
            column: true,
            bookedSeats: {
              select: {
                id: true,
              },
              where: { id },
            },
          },
        },
      },
    });
    console.log(response);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
// export async function getShowTimeInfo(req, res) {
//   const id = req.params.id;
//   console.log(id);
//   try {
//     const response = await prisma.showTime.findUnique({
//       select: {
//         id: true,
//         hall: {
//           select: {
//             id: true,
//             name: true,
//             totalSeats: true,
//             seats: {
//               select: {
//                 id: true,
//                 row: true,
//                 column: true,
//                 bookedSeats: {
//                   select: {
//                     id: true,
//                     seat: true,
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//       where: { id },
//     });
//     console.log(response);
//     res.send(response);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

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
